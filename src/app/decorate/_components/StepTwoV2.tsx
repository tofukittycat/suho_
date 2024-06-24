import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { isMobileSafari } from "react-device-detect";
import { EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { IoIosArrowBack as ArrowBackIcon, IoIosCloseCircle as CloseIcon } from "react-icons/io";
import { Rnd } from "react-rnd";

import SwipeableBottomSheet from "@/components/SwipeableBottomSheet";
import SHImage from "@/components/base/SHImage";
import { SHSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import useToggle from "@/components/hooks/useToggle";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import apiClient from "@/services/apiClient";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, CircularProgress } from "@mui/material";
import { toBlob } from "html-to-image";

import useQueryFetchTodayHoroscopeTreeStickers from "../_hooks/queries/useQueryFetchTodayHoroscopeTreeStickers";
import { UseDecorateType } from "../_hooks/useDecorate";

const CharmDownloadSheetNoSSR = dynamic(() => import("./CharmDownloadSheet"), { ssr: false });

type StepTwoProps = {
  useDecorateControls: UseDecorateType;
  onClickSubmit: () => void;
  onClickBack: () => void;
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
const PLACEHOLDER = "행운을 담은 응원을 적어보세요.";

export default function StepTwoV2({
  useDecorateControls,
  onClickBack,
  onClickSubmit,
}: StepTwoProps) {
  const { infoData, updateFields } = useDecorateControls;

  const {
    decorateInfoStore: [decorateInfo, setDecorateInfo],
  } = useAppRepository();

  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(true);
  const [description, setDescription] = useState("24자내로 작성할 수 있어요.");

  const { data: stickersData, isPending: isPendingStickers } =
    useQueryFetchTodayHoroscopeTreeStickers({ imageURL: decorateInfo.imageURL });

  const { isOpen: isOpenDetails, open: openDetails, close: closeDetails } = useToggle();

  const [tempStickers, setTempStickers] = useState<StickerType[]>([]);
  const [selectedSticker, setSelectedSticker] = useState<StickerType>();
  const [descMessage, setDescMessage] = useState(PLACEHOLDER);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stickerImageURLs =
    stickersData?.supplementTypes.flatMap(sticker => sticker.images.map(image => image.url)) ?? [];

  const descriptionForURL = (url: string) => {
    return stickersData?.supplementTypes.find(sticker =>
      sticker.images.some(image => image.url === url),
    )?.description;
  };

  const captureScreenshot = async () => {
    setIsLoading(true);

    initStickers(async () => {
      const element = document.getElementById(SUHO_CAPTURE_IMAGE);

      if (!element) {
        return;
      }

      if (decorateInfo.onlyDownload) {
        let blob: Blob | null = null;
        const i = 0;
        const maxAttempts = 100;

        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });

        while ((blob?.size ?? 0) < 1000 && i < maxAttempts) {
          blob = await toBlob(element, { cacheBust: true });
        }

        if (blob) {
          const response = await apiClient.post(
            "/charms",
            { image: blob },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            },
          );

          setIsLoading(false);
          setDecorateInfo(prev => ({ ...prev, blobURL: response.data }));
          openDetails();
        }
      } else {
        let blob: Blob | null = null;
        const i = 0;
        const maxAttempts = 100;

        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });
        await toBlob(element, { cacheBust: true });

        while ((blob?.size ?? 0) < 1000 && i < maxAttempts) {
          blob = await toBlob(element, { cacheBust: true });
        }

        if (blob) {
          setIsLoading(false);
          updateFields({ image: blob });
        }
      }
    });
  };

  const openBottomSheet = () => setIsOpenBottomSheet(true);
  const closeBottomSheet = () => setIsOpenBottomSheet(false);

  const initStickers = (callback?: () => void) => {
    setDescMessage(prev => (prev === PLACEHOLDER ? "" : prev));
    setIsEditMode(false);

    setTempStickers(prevStickers =>
      prevStickers.map(sticker => ({ ...sticker, isSelected: false })),
    );

    callback?.();
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
      <VStack className="h-full w-full justify-start overflow-y-auto">
        <VStack sx={{ width: "100%", gap: "10px" }}>
          <VStack className="mt-[45px] w-full items-center justify-center">
            <HStack className="w-full items-center justify-between px-[20px]">
              <ArrowBackIcon
                className="mr-[14px] h-[24px] w-[24px] cursor-pointer text-white"
                onClick={onClickBack}
              />
              <Label className="flex-grow-1 mx-[20px] w-full text-center text-[16px] font-[700] text-white">
                행운의 메세지와 스티커로 꾸미기
              </Label>
              <LoadingButton
                loading={isLoading}
                loadingIndicator={<CircularProgress size={"20px"} />}
                onClick={captureScreenshot}
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#A48AFF",
                  padding: 0,
                  marginRight: "-10px",
                  width: "46px",
                  minWidth: "46px",
                }}
                color="inherit"
              >
                완료
              </LoadingButton>
            </HStack>
            <Label className="text-[13px] font-[500] text-white">{description}</Label>
          </VStack>
          <VCStack
            className="shrink-0 items-center justify-center"
            onClick={() => {
              setTempStickers(prevStickers =>
                prevStickers.map(sticker => ({ ...sticker, isSelected: false })),
              );
            }}
          >
            <SHImage
              id={SUHO_CAPTURE_IMAGE}
              src={stickersData?.charmImageURL ?? ""}
              className="relative z-0 h-[385px] w-[260px]"
            >
              <Label className="absolute left-[60px] right-[60px] top-[28px] z-10 mx-auto text-center text-[13px] font-[700] text-white">
                {infoData.sender}
              </Label>
              {}
              {/* 설명 */}
              <EditTextarea
                rows={2}
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: 0,
                  right: 0,
                  width: "230px",
                  margin: "0 auto",
                  fontSize: "13px",
                  backgroundColor: isEditMode ? "#030303d9" : "",
                  color: "white",
                  textAlign: "center",
                  padding: "12px",
                  scrollbarColor: "blue",
                  scrollbarWidth: "none",
                }}
                value={descMessage}
                onChange={e => setDescMessage(e.target.value)}
                onEditMode={() => {
                  if (descMessage === PLACEHOLDER) {
                    setDescMessage("");
                  }

                  setIsEditMode(true);
                }}
                onBlur={() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window.document.body.style as any).zoom = 1;
                  setIsEditMode(false);
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
        </VStack>
      </VStack>
      {/* 받아오는 스티커 이미지들 */}
      <SwipeableBottomSheet
        isOpen={isOpenBottomSheet}
        onOpen={openBottomSheet}
        onClose={closeBottomSheet}
        snapPoints={[400, 180, 0]}
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
                      {isMobileSafari ? (
                        <object
                          type="image/svg+xml"
                          data={url}
                          className="pointer-events-none h-full w-full"
                        />
                      ) : (
                        <img src={url} alt="sticker" className="h-full w-full" />
                      )}
                    </Button>
                  ))}
                </>
              )
            );
          })()}
        </HStack>
      </SwipeableBottomSheet>
      {/* Details */}
      <CharmDownloadSheetNoSSR isOpen={isOpenDetails} close={closeDetails} />
    </>
  );
}
