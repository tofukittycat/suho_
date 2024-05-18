"use client";

// import Image from "next/image";
import dynamic from "next/dynamic";

import React, { FC, ForwardedRef, forwardRef, useRef, useState } from "react";

import SHLabel from "@/components/base/SHLabel";
import { Stage as StageType } from "konva/lib/Stage";
import { v4 as uuidv4 } from "uuid";
import downloadILmage from "../_utils/downloadImage";
import { CharmStickers } from "./CharmStickers";

const Canvas = dynamic(() => import("./Canvas"), {
  ssr: false,
});

interface CanvasProps {
  dragUrl: string | null;
  images: { src: string; id: any; x: number; y: number }[];
  onDropHandler: Function;
  setDragUrl: Function;
  setImages: Function;
  ref: ForwardedRef<any>;
}

const ForwardRefCanvas: FC<CanvasProps> = forwardRef(function ForwardRefCanvas(props, ref) {
  return <Canvas {...props} forwardedRef={ref} />;
});

ForwardRefCanvas.displayName = "ForwardRefCanvas";

export default function CharmImageAdditon({ form, charmImageURL, supplementTypes }) {
  const downloadImageRef = useRef<HTMLDivElement>(null);

  const handleCapture = async () => {
    await downloadILmage(downloadImageRef);
  };


  const stageRef = useRef<StageType>(null);
  const [dragUrl, setDragUrl] = useState(null);
  const [images, setImages] = useState([
    {
      src: charmImageURL,
      id: uuidv4(),
      x: 1,
      y: 1,
    },
  ]);

  const setImagesHandler = (src, position = { x: 100, y: 100 }) => {
    const newImage = {
      src,
      id: uuidv4(),
      ...position,
      showControls: true,
    };
    setImages(images.concat([newImage]));
  };

  return (
    <>
      <div className="inset-0 -z-10 h-full min-h-[1000px] w-full bg-[url('/imgs/im_universe.png')] bg-[35%_top] bg-no-repeat sm:bg-[38%_top] md:bg-[40%_top] lg:bg-[44%_top] xl:bg-top forced-colors:hidden">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto flex w-[350px] flex-col">
            <div className="flex flex-col gap-1 text-center">
              <SHLabel className="text-base font-bold text-white">
                행운이 담긴 스티커를 붙여주세요.
              </SHLabel>
              <SHLabel className="text-[13px] font-medium text-white">
                백엔드에서 들어올 설명들
              </SHLabel>
            </div>
            <div className="flex flex-col">
              <figure className="relative" ref={downloadImageRef}>
                <ForwardRefCanvas
                  dragUrl={dragUrl}
                  images={images}
                  onDropHandler={setImagesHandler}
                  setDragUrl={setDragUrl}
                  setImages={setImages}
                  ref={stageRef}
                />

                <div className="absolute left-[20%] right-[20%] top-[10%] bg-black">냐냐냥</div>
                <div className="absolute left-[15%] right-[15%] top-2/3 max-w-36 border-none bg-transparent text-center text-sm font-semibold">
                  문구문구
                </div>
              </figure>

              <button onClick={handleCapture}>Download</button>
            </div>
          </div>
        </div>
        <div className="h-full w-full overflow-y-auto rounded-t-lg bg-white px-6 pt-6">
          <CharmStickers
            onImageDragStart={setDragUrl}
            onAddButtonClick={setImagesHandler}
            datas={supplementTypes}
          />
        </div>
      </div>
    </>
  );
}
