import { useParams } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle as CloseIcon } from "react-icons/io";
import { Rnd } from "react-rnd";

import SHImage from "@/components/base/SHImage";
import { SHSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@mui/material";
import { useClickAway } from "@uidotdev/usehooks";
import * as htmlToImage from "html-to-image";
import { toBlob, toJpeg, toPixelData, toPng, toSvg } from "html-to-image";
import { useOnClickOutside } from "usehooks-ts";

import useQueryFetchTreeStickers from "../_hooks/queries/useQueryFetchTreeStickers";

type StepTwoProps = {
  onClickSubmit: () => void;
};

type StickerType = {
  id: string;
  imageURL: string;
  isSelected: boolean;
};

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

const SUHO_CAPTURE_IMAGE = "to-capture-suho-image";

export default function StepTwo({ onClickSubmit }: StepTwoProps) {
  const params = useParams();

  const outsideRef = useClickAway<HTMLDivElement>(() => {
    console.log("clicked outside");
  });

  const treeId = params.treeId as string;

  const { data: stickersData, isPending: isPendingStickers } = useQueryFetchTreeStickers({
    treeId: Number(treeId),
  });

  const [tempStickers, setTempStickers] = useState<StickerType[]>([]);
  const [selectedSticker, setSelectedSticker] = useState<StickerType>();

  const stickerImageURLs =
    stickersData?.supplementTypes.flatMap(sticker => sticker.images.map(image => image.url)) ?? [];

  function captureScreenshot() {
    const element = document.getElementById(SUHO_CAPTURE_IMAGE);

    if (!element) {
      return;
    }

    toPng(element, { cacheBust: true })
      .then(function (dataUrl) {
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("이미지화 에러 (decorate)", error);
      });

    // toBlob(element).then(function (blob) {
    //   if (window.saveAs) {
    //     window.saveAs(blob, "my-node.png");
    //   } else {
    //     FileSaver.saveAs(blob, "my-node.png");
    //   }
    // });
  }

  const handleClickOutSide = () => {
    console.log("clicked outside");

    setTempStickers(prevStickers =>
      prevStickers.map(sticker => ({ ...sticker, isSelected: false })),
    );
  };

  // useOnClickOutside(outsideRef, handleClickOutSide);

  useEffect(() => {
    setSelectedSticker(tempStickers.find(sticker => sticker.isSelected === true));
  }, [tempStickers]);

  return (
    <VStack className="h-full w-full justify-start">
      <VStack
        sx={{
          bgcolor: "lightcoral",
          width: "100%",
        }}
      >
        <VStack className="mt-[45px] w-full items-center justify-center">
          <Label className="text-[16px] font-[700] text-white">
            행운을 담은 마음을 적어주세요.
          </Label>
          <Label className="text-[13px] font-[500] text-white">24자내로 작성할 수 있어요.</Label>
          <Button onClick={captureScreenshot}>어떻게 할래</Button>
        </VStack>

        <VCStack className="shrink-0 items-center justify-center">
          <SHImage
            id={SUHO_CAPTURE_IMAGE}
            src={"/test_suho.svg"}
            className="z-0 h-[360px] w-[70%] bg-yellow-300 object-cover sm:h-[460px]"
          >
            {/* <div ref={outsideRef}> */}
            {tempStickers.map(item => (
              <Rnd
                key={item.id}
                style={style}
                lockAspectRatio
                default={{ x: 125, y: 175, width: "50px", height: "50px" }}
                resizeHandleComponent={{
                  topRight: (
                    <CloseIcon
                      style={{
                        backgroundColor: "white",
                        borderStyle: "hidden",
                        borderRadius: "100px",
                        fill: "#7B57FC",
                      }}
                      onClick={() => {
                        setTempStickers(prevStickers =>
                          prevStickers.filter(sticker => sticker.id !== item.id),
                        );
                      }}
                    />
                  ),
                }}
                resizeHandleStyles={{
                  topRight: {
                    paddingLeft: "3px",
                    paddingTop: "1px",
                    fontSize: "16px",
                    cursor: "pointer",
                  },
                }}
                enableUserSelectHack={false}
              >
                <div
                  key={item.id}
                  // className="h-full w-full border border-main-purple-suho"
                  className={cn(
                    "h-full w-full ",
                    selectedSticker?.id === item.id ? "border border-main-purple-suho" : "",
                  )}
                  onMouseDown={e => {
                    setTempStickers(prevStickers =>
                      prevStickers.map(sticker =>
                        item.id === sticker.id ? { ...sticker, isSelected: true } : sticker,
                      ),
                    );
                  }}
                >
                  <img src={item.imageURL} alt="sticker" className="h-full w-full" />
                </div>
              </Rnd>
            ))}
            {/* </div> */}
          </SHImage>
        </VCStack>
      </VStack>
      {/* 받아오는 스티커 이미지들 */}
      <HStack className="h-[280px] w-full flex-wrap justify-center gap-[4px] overflow-auto bg-white p-[20px] sm:h-[460px]">
        {(() => {
          if (isPendingStickers) {
            return (
              <VStack className="h-full w-full pt-[50px]">
                <SHSpinner />
              </VStack>
            );
          }

          return (
            stickersData && (
              <>
                {stickerImageURLs.map((url, index) => (
                  <Button
                    key={index}
                    sx={{ width: "80px", height: "80px", bgcolor: "#8957d90d" }}
                    onClick={() => {
                      const sticker: StickerType = {
                        id: `sticker-${tempStickers.length + 1}`,
                        imageURL: url,
                        isSelected: false,
                      };
                      setTempStickers(prev => [...prev, sticker]);
                    }}
                  >
                    <img src={url} alt="sticker" className="h-full w-full" />
                  </Button>
                ))}
              </>
            )
          );
        })()}
      </HStack>
    </VStack>
  );
}
