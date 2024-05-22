// "use client";

// // import Image from "next/image";
// import dynamic from "next/dynamic";

// import React, { FC, ForwardedRef, forwardRef, useRef, useState } from "react";
// import { useFormContext } from "react-hook-form";

// import NavFooter from "@/components/NavFooter";
// import SHLabel from "@/components/base/SHLabel";
// import HStack from "@/components/base/stack/HStack";
// import VStack from "@/components/base/stack/VStack";
// import { Stage as StageType } from "konva/lib/Stage";
// import { v4 as uuidv4 } from "uuid";

// import { CharmCreateSchemaType } from "../_utils/CharmCreateSchema";
// import downloadILmage from "../_utils/downloadImage";
// import { CharmStickers } from "./CharmStickers";

// const Canvas = dynamic(() => import("../_components/Canvas"), {
//   ssr: false,
// });

// interface CanvasProps {
//   dragUrl: string | null;
//   images: { src: string; id: any; x: number; y: number }[];
//   onDropHandler: Function;
//   setDragUrl: Function;
//   setImages: Function;
//   ref: ForwardedRef<any>;
// }

// interface Image {
//   url: string;
// }

// interface Supplement {
//   description: string;
//   images: Image[];
// }

// interface CharmImageAdditionProps {
//   supplementTypes: Supplement[];
//   charmImageURL: string;
//   goBack: VoidFunction;
//   onNext: VoidFunction;
// }

// const ForwardRefCanvas: FC<CanvasProps> = forwardRef(function ForwardRefCanvas(props, ref) {
//   return <Canvas {...props} forwardedRef={ref} />;
// });

// ForwardRefCanvas.displayName = "ForwardRefCanvas";

// export default function CharmImageAddition({
//   goBack,
//   onNext,
//   charmImageURL,
//   supplementTypes,
// }: CharmImageAdditionProps) {
//   const {
//     getValues,
//     formState: { errors },
//   } = useFormContext<CharmCreateSchemaType>();

//   const senderName = getValues("sender");
//   const cheerPhrases = getValues("cheers");

//   const downloadImageRef = useRef<HTMLDivElement>(null);

//   const handleCapture = async () => {
//     await downloadILmage(downloadImageRef);
//   };

//   const stageRef = useRef<StageType>(null);
//   const [dragUrl, setDragUrl] = useState(null);
//   const [images, setImages] = useState([
//     {
//       src: charmImageURL,
//       id: uuidv4(),
//       x: 1,
//       y: 1,
//       width: 200,
//       height: 312,
//     },
//   ]);

//   const setImagesHandler = (src, position = { x: 100, y: 100 }) => {
//     const newImage = {
//       src,
//       id: uuidv4(),
//       ...position,
//       showControls: true,
//     };
//     setImages(images.concat([newImage]));
//   };

//   return (
//     <>
//       <VStack className="min-h-screen mx-[20px] flex flex-col items-center justify-center text-center ">
//         {/* Header */}
//         <HStack className="mt-24 h-[60px] items-end justify-between">
//           <VStack>
//             <SHLabel className="text-base font-bold text-white">
//               행운이 담긴 스티커를 붙여주세요.
//             </SHLabel>
//             <SHLabel className="text-[13px] font-medium text-white">
//               백엔드에서 들어올 설명들
//             </SHLabel>
//           </VStack>
//         </HStack>
//         <div className="flex flex-col">
//           <figure className="relative" ref={downloadImageRef}>
//             <ForwardRefCanvas
//               dragUrl={dragUrl}
//               images={images}
//               onDropHandler={setImagesHandler}
//               setDragUrl={setDragUrl}
//               setImages={setImages}
//               ref={stageRef}
//             />
//             <div className="absolute left-[20%] right-[20%] top-[8%] z-20 text-black">
//               {senderName}
//             </div>
//             <div className="absolute left-[15%] right-[15%] top-2/3 max-w-36 border-none bg-transparent text-center text-sm font-semibold">
//               {cheerPhrases}
//             </div>
//           </figure>

//           <button onClick={handleCapture}>Download</button>
//         </div>
//       </VStack>
//       <VStack className="w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
//         <VStack className="mx-[20px] mb-3 mt-8">
//           <NavFooter
//             ratio="1:3"
//             left={{
//               title: "이전",
//               onClick: goBack,
//             }}
//             right={{
//               title: "다음",
//               onClick: onNext,
//             }}
//           />
//         </VStack>
//       </VStack>
//       <VStack className="h-full w-full overflow-y-auto rounded-t-lg bg-white px-6 pt-6">
//         <CharmStickers
//           onImageDragStart={setDragUrl}
//           onAddButtonClick={setImagesHandler}
//           datas={supplementTypes}
//         />
//       </VStack>
//     </>
//   );
// }
