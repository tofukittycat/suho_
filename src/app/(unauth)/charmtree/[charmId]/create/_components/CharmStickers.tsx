/* eslint-disable @next/next/no-img-element */
"use client";

export function CharmStickers({ onImageDragStart, onAddButtonClick, datas }) {
  const objectID = "yoda";
  let cutoutPath = `https://konvajs.org/assets/yoda.jpg`;

  // const mappedData = datas.map(item => {
  //   const { description, images } = item;
  //   // const imageURLs = images.map(img => img.url);
  //   console.log("?", imageURLs);

  //   return { description, images };
  // });

  // console.log("불러와지는지", mappedData);

  return (
    <div className="">
      {datas.map(item => {
        const { description, images } = item;
        console.log(images);
        return (
          <div key={description}>
            {images.map((imageUrl, index) => (
              <>
                <button
                  className="m-[2px] h-[80px] w-[80px] items-center bg-gray-300"
                  key={index}
                  onClick={() => onAddButtonClick(imageUrl.url)}
                >
                  <img
                    id={objectID}
                    src={imageUrl.url}
                    className="h-full w-full cursor-grab group-hover:opacity-75"
                    draggable="true"
                    onDragStart={() => onImageDragStart(imageUrl.url, objectID)}
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
