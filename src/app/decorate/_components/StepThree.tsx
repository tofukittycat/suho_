import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
// import "react-edit-text/dist/index.css";
import { IoIosCloseCircle as CloseIcon } from "react-icons/io";
import { Rnd } from "react-rnd";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SwipeableBottomSheet from "@/components/SwipeableBottomSheet";
import SHImage from "@/components/base/SHImage";
import SHInputField from "@/components/base/SHInputField";
import { SHSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button, TextField } from "@mui/material";
import { toBlob } from "html-to-image";

import useQueryFetchTreeStickers from "../_hooks/queries/useQueryFetchTreeStickers";
import { UseDecorateType } from "../_hooks/useDecorate";

type StepThreeProps = {
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

export default function StepThree({ useDecorateControls, onClickSubmit }: StepThreeProps) {
  const { treeId, router, infoData, updateFields } = useDecorateControls;

  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(true);
  const [description, setDescription] = useState("24자내로 작성할 수 있어요.");

  const { data: stickersData, isPending: isPendingStickers } = useQueryFetchTreeStickers({
    treeId,
  });

  const [tempStickers, setTempStickers] = useState<StickerType[]>([]);
  const [selectedSticker, setSelectedSticker] = useState<StickerType>();

  const stickerImageURLs =
    stickersData?.supplementTypes.flatMap(sticker => sticker.images.map(image => image.url)) ?? [];

  const descriptionForURL = (url: string) => {
    return stickersData?.supplementTypes.find(sticker =>
      sticker.images.some(image => image.url === url),
    )?.description;
  };

  const captureScreenshot = async () => {
    initStickers();

    const element = document.getElementById(SUHO_CAPTURE_IMAGE);

    if (!element) {
      return;
    }

    const blob = await toBlob(element, { includeQueryParams: true }) //
      .catch(error => {
        console.error("이미지화 에러 (decorate)", error);
      });

    if (blob) {
      updateFields({ image: blob });
    }
  };

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

  useEffect(() => {
    if (infoData.image) {
      onClickSubmit();
    }
  }, [infoData]);

  return (
    <>
      <VStack className="h-full w-full justify-start">
        <VStack sx={{ width: "100%", gap: "10px" }}>
          <VStack className="mt-[45px] w-full items-center justify-center">
            <Label className="text-[16px] font-[700] text-white">
              행운을 담은 마음을 적어주세요.
            </Label>
            <Label className="text-[13px] font-[500] text-white">{description}</Label>
          </VStack>
          <VCStack className="shrink-0 items-center justify-center" onClick={initStickers}>
            <SHImage
              id={SUHO_CAPTURE_IMAGE}
              src={stickersData?.charmImageURL ?? ""}
              className="relative z-0 h-[485px] w-[319px]"
            >
              <Label className="absolute left-[60px] right-[60px] top-[38px] z-10 mx-auto  text-center text-[16px] font-[700] text-white">
                {infoData.sender}
              </Label>
              {/* 123 */}
              <EditTextarea
                placeholder="행운을 담은 응원을 적어보세요."
                rows={2}
                style={{
                  position: "absolute",
                  bottom: "90px",
                  left: 0,
                  right: 0,
                  width: "260px",
                  margin: "0 auto",
                  fontSize: "16px",
                  backgroundColor: "#ffffff0",
                  color: "white",
                  textAlign: "center",
                  padding: "10px",
                }}
              />
              {tempStickers.map(item => (
                <Rnd
                  key={item.id}
                  style={style}
                  lockAspectRatio
                  default={{ x: 125, y: 175, width: 50, height: 50 }}
                  bounds={"parent"}
                  cancel=""
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
                    className={cn(
                      "relative h-full w-full",
                      selectedSticker?.id === item.id ? "border border-main-purple-suho" : "",
                    )}
                  >
                    <img src={item.imageURL} alt="sticker" className="h-full w-full" />
                    <CloseIcon
                      style={{
                        backgroundColor: "white",
                        borderStyle: "hidden",
                        borderRadius: "100px",
                        fill: "#7B57FC",
                        fontSize: "16px",
                        position: "absolute",
                        right: -15,
                        top: -15,
                        marginLeft: -10,
                        display: selectedSticker?.id === item.id ? "" : "none",
                      }}
                      onClick={e => {
                        setTempStickers(prevStickers =>
                          prevStickers.filter(sticker => sticker.id !== item.id),
                        );
                      }}
                    />
                  </div>
                </Rnd>
              ))}
            </SHImage>
          </VCStack>

          <CTAContainer className="mt-[0px]">
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
        snapPoints={[400, 30, 0]}
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

                        const desc = descriptionForURL(url);
                        if (desc) {
                          setDescription(desc);
                        }

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
