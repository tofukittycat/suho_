import React, { useRef, useState } from "react";
import { Layer, Stage } from "react-konva";

import UrlImage from "./UrlImage";

const CANVAS_VIRTUAL_WIDTH = 210;
const CANVAS_VIRTUAL_HEIGHT = 310;

function Canvas({ images, setImages, forwardedRef }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [size, setSize] = useState({
    width: CANVAS_VIRTUAL_WIDTH,
    height: CANVAS_VIRTUAL_HEIGHT,
  });

  const [selectedId, setSelectedId] = useState(null);
  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  const toggleControls = visible => {
    const newImages = images.map(image => {
      return {
        ...image,
        showControls: visible,
        width: image.width,
        height: image.height,
      };
    });
    setImages(newImages);
  };

  return (
    <div ref={divRef} className=" h-full w-full">
      <Stage
        className="flex justify-center"
        ref={forwardedRef}
        width={size.width}
        height={size.height}
        scaleX={scale}
        scaleY={scale}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        onMouseEnter={() => toggleControls(true)}
        onMouseLeave={() => toggleControls(false)}
      >
        <Layer>
          {images.map((image, index) => (
            <UrlImage
              key={index}
              interactable={index > 0}
              shapeProps={image}
              showControls={image.showControls}
              onSelect={() => {
                setSelectedId(image.id);
              }}
              onChange={newAttrs => {
                const newimages = images.slice();
                newimages[index] = newAttrs;
                setImages(newimages);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default React.memo(Canvas);
