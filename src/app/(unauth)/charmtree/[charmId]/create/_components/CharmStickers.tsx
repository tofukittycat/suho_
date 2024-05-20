/* eslint-disable @next/next/no-img-element */
"use client";

export function CharmStickers({ onImageDragStart, onAddButtonClick, datas }) {
  const objectID = "yoda";

  return (
    <div className="">
      {datas.map(item => {
        const { description, images } = item;
        const allImages = datas.flatMap(item => item.images.map(image => image.url));
        console.log(images);
        return (
          <div key={description}>
            {allImages.map((imageUrl, index) => (
              <>
                <button
                  className="m-[2px] h-[80px] w-[80px] items-center bg-gray-300"
                  key={index}
                  onClick={() => onAddButtonClick(imageUrl)}
                >
                  <img
                    id={objectID}
                    src={imageUrl}
                    className="h-full w-full cursor-grab group-hover:opacity-75"
                    draggable="true"
                    onDragStart={() => onImageDragStart(imageUrl, objectID)}
                  />
                </button>
              </>
            ))}
          </div>
        );
      })}
    </div>
  );
}
