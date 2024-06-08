import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { IoIosCloseCircle as CloseIcon } from "react-icons/io";
import { Rnd } from "react-rnd";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SwipeableBottomSheet from "@/components/SwipeableBottomSheet";
import SHImage from "@/components/base/SHImage";
import { SHSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@mui/material";
import { toBlob } from "html-to-image";

import useQueryFetchTreeStickers from "../_hooks/queries/useQueryFetchTreeStickers";
import { UseDecorateType } from "../_hooks/useDecorate";

type StepTwoProps = {
  useDecorateControls: UseDecorateType;
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

export default function StepTwo({ useDecorateControls, onClickSubmit }: StepTwoProps) {
  const { treeId, router, updateFields } = useDecorateControls;

  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(true);

  const { data: stickersData, isPending: isPendingStickers } = useQueryFetchTreeStickers({
    treeId,
  });

  const [tempStickers, setTempStickers] = useState<StickerType[]>([]);
  const [selectedSticker, setSelectedSticker] = useState<StickerType>();

  const stickerImageURLs =
    stickersData?.supplementTypes.flatMap(sticker => sticker.images.map(image => image.url)) ?? [];

  async function captureScreenshot() {
    initStickers();

    const element = document.getElementById(SUHO_CAPTURE_IMAGE);

    if (!element) {
      return;
    }

    const blob = await toBlob(element, { includeQueryParams: true }).catch(function (error) {
      console.error("이미지화 에러 (decorate)", error);
    });

    if (blob) {
      updateFields({ image: blob });
    }

    onClickSubmit();
  }

  const openBottomSheet = () => setIsOpenBottomSheet(true);
  const closeBottomSheet = () => setIsOpenBottomSheet(false);

  const initStickers = () => {
    setTempStickers(prevStickers =>
      prevStickers.map(sticker => ({ ...sticker, isSelected: false })),
    );
  };

  useEffect(() => {
    setSelectedSticker(tempStickers.find(sticker => sticker.isSelected === true));
  }, [tempStickers]);

  return (
    <>
      <VStack className="h-full w-full justify-start">
        <VStack sx={{ width: "100%" }}>
          <VStack className="mt-[45px] w-full items-center justify-center">
            <Label className="text-[16px] font-[700] text-white">
              행운을 담은 마음을 적어주세요.
            </Label>
            <Label className="text-[13px] font-[500] text-white">24자내로 작성할 수 있어요.</Label>
          </VStack>

          <VCStack className="shrink-0 items-center justify-center" onClick={initStickers}>
            <SHImage
              id={SUHO_CAPTURE_IMAGE}
              src={stickersData?.charmImageURL ?? ""}
              className="z-0 h-[360px] w-[70%] object-contain sm:h-[460px] sm:w-[70%]"
            >
              {tempStickers.map(item => (
                <Rnd
                  key={item.id}
                  style={style}
                  lockAspectRatio
                  default={{ x: 125, y: 175, width: "50px", height: "50px" }}
                  allowAnyClick
                  resizeHandleComponent={{
                    topRight:
                      item.id === selectedSticker?.id ? (
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
                      ) : (
                        <></>
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
                  onMouseDown={e => {
                    setTempStickers(prevStickers =>
                      prevStickers.map(sticker =>
                        item.id === sticker.id
                          ? { ...sticker, isSelected: true }
                          : { ...sticker, isSelected: false },
                      ),
                    );
                  }}
                >
                  <div
                    key={item.id}
                    // className="h-full w-full border border-main-purple-suho"
                    className={cn(
                      "h-full w-full ",
                      selectedSticker?.id === item.id ? "border border-main-purple-suho" : "",
                    )}
                  >
                    <img src={item.imageURL} alt="sticker" className="h-full w-full" />
                  </div>
                </Rnd>
              ))}
            </SHImage>
          </VCStack>
          <CTAContainer className="mt-[30px]">
            <NavFooter
              ratio="1:3"
              left={{ onClick: router.back }}
              right={{
                children: "보내기",
                onClick: captureScreenshot,
              }}
            />
          </CTAContainer>
        </VStack>
      </VStack>
      {/* 받아오는 스티커 이미지들 */}
      <SwipeableBottomSheet
        isOpen={isOpenBottomSheet}
        onOpen={openBottomSheet}
        onClose={closeBottomSheet}
        // ref={sheetRef}
        snapPoints={[400, 100, 0]}
        initialSnap={1}
      >
        <HStack className="w-full flex-wrap justify-center gap-[4px] overflow-auto bg-white p-[20px] sm:h-[460px]">
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
                          isSelected: true,
                        };
                        setTempStickers(prevStickers => [
                          ...prevStickers.map(sticker => ({ ...sticker, isSelected: false })),
                          sticker,
                        ]);

                        closeBottomSheet();
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
      </SwipeableBottomSheet>
    </>
  );
}
