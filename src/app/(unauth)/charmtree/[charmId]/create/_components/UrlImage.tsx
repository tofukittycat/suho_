// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Image as KonvaImage, Transformer } from "react-konva";

// import { Image as ImageType } from "konva/lib/shapes/Image";
// import { Transformer as TransformerType } from "konva/lib/shapes/Transformer";

// function UrlImage({ shapeProps, showControls, onSelect, onChange, interactable }) {
//   const image = shapeProps;
//   const [img, setImg] = useState(null);

//   console.log("image ", image);

//   useEffect(() => {
//     let newImgsrc = new Image();
//     newImgsrc.crossOrigin = "anonymous";
//     newImgsrc.src = image.src + "?v=" + new Date().getTime();
//     newImgsrc.onload = () => setImg(newImgsrc);
//   }, [image.src]);

//   const shapeRef = useRef<ImageType>(null);
//   const transformerRef = useRef<TransformerType>(null);

//   useEffect(() => {
//     if (showControls && interactable && shapeRef.current && transformerRef.current) {
//       transformerRef.current.nodes([shapeRef.current]);
//       const layer = transformerRef.current.getLayer();
//       if (layer) {
//         layer.batchDraw();
//       }
//     }
//   }, [interactable, showControls, status]); // status 의존성 추가

//   useEffect(() => {
//     if (transformerRef.current) {
//       transformerRef.current.forceUpdate();
//     }
//   });

//   return (
//     <>
//       <KonvaImage
//         ref={shapeRef}
//         {...shapeProps}
//         draggable={interactable}
//         image={img}
//         onMouseEnter={e => {
//           if (interactable) {
//             const stage = e.target.getStage();
//             if (stage) {
//               stage.container().style.cursor = "move";
//             }
//           }
//         }}
//         onMouseLeave={e => {
//           const stage = e.target.getStage();
//           if (stage) {
//             stage.container().style.cursor = "default";
//           }
//         }}
//         x={image.x || 10}
//         y={image.y || 10}
//         onClick={onSelect}
//         onTap={onSelect}
//         onDragMove={onSelect}
//         onDragEnd={e => {
//           onChange({
//             ...shapeProps,
//             x: e.target.x() || 0,
//             y: e.target.y() || 0,
//           });
//         }}
//         onTransformEnd={e => {
//           if (!shapeRef.current) {
//             return;
//           }
//           const node = shapeRef.current;
//           const scaleX = node.scaleX();
//           const scaleY = node.scaleY();
//           node.scaleX(1);
//           node.scaleY(1);
//           onChange({
//             ...shapeProps,
//             x: node.x(),
//             y: node.y(),
//             width: Math.max(5, node.width() * scaleX) || 1,
//             height: Math.max(node.height() * scaleY) || 1,
//           });
//         }}
//       />
//       {showControls && (
//         <Transformer
//           ref={transformerRef}
//           boundBoxFunc={(oldBox, newBox) => {
//             // limit resize
//             if (newBox.width < 5 || newBox.height < 5) {
//               return oldBox;
//             }
//             return newBox;
//           }}
//           // x={image.x}
//           // y={image.y}
//           anchorSize={5}
//           borderStroke="purple"
//           keepRatio={true}
//           flipEnabled={false}
//           enabledAnchors={["top-left", "top-right", "bottom-left", "bottom-right"]}
//         />
//       )}
//     </>
//   );
// }

// export default React.memo(UrlImage);
