import React, { useEffect, useRef } from "react";
import { Image as KonvaImage, Transformer } from "react-konva";

import { Image as ImageType } from "konva/lib/shapes/Image";
import { Transformer as TransformerType } from "konva/lib/shapes/Transformer";
import useImage from "use-image";

function UrlImage({ shapeProps, showControls, onSelect, onChange, interactable }) {
  const image = shapeProps;
  const [img] = useImage(image.src);

  const shapeRef = useRef<ImageType>(null);
  const transformerRef = useRef<TransformerType>(null);

  useEffect(() => {
    if (!transformerRef.current) {
      return;
    }

    if (showControls && interactable) {
      if (shapeRef.current) {
        transformerRef.current.nodes([shapeRef.current]);
        const layer = transformerRef.current.getLayer();
        const wd = shapeRef.current.width() || 50;
        console.log(wd, "wd");
        if (layer) {
          layer.batchDraw();
        }
      }
    }
  }, [interactable, showControls]);

  useEffect(() => {
    if (!transformerRef.current) {
      return;
    }
    transformerRef.current.forceUpdate();
  });

  return (
    <>
      <KonvaImage
        ref={shapeRef}
        {...shapeProps}
        draggable={interactable}
        image={img}
        onMouseEnter={e => {
          if (interactable) {
            const stage = e.target.getStage();
            if (stage) {
              stage.container().style.cursor = "move";
            }
          }
        }}
        onMouseLeave={e => {
          const stage = e.target.getStage();
          if (stage) {
            stage.container().style.cursor = "default";
          }
        }}
        x={image.x || 0}
        y={image.y || 0}
        onClick={onSelect}
        onTap={onSelect}
        onDragMove={onSelect}
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={e => {
          if (!shapeRef.current) {
            return;
          }
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX) || 1,
            height: Math.max(node.height() * scaleY) || 1,
          });
        }}
      />
      {showControls && (
        <Transformer
          ref={transformerRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
          x={image.x}
          y={image.y}
          anchorSize={5}
          borderStroke="purple"
          keepRatio={true}
          flipEnabled={false}
          enabledAnchors={["top-left", "top-right", "bottom-left", "bottom-right"]}
        />
      )}
    </>
  );
}

export default React.memo(UrlImage);
