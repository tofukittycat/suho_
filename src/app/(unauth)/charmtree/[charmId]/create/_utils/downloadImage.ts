// import * as htmlToImage from "html-to-image";
// import { toPng } from "html-to-image";
// const downloadILmage = async (element: React.RefObject<HTMLDivElement>) => {
//   if (!element.current) {
//     console.error("찾을수 없습니다.");
//     return;
//   }
//   try {
//     const imageUrl = await toPng(element.current, { includeQueryParams: true, cacheBust: false });
//     const imageLink = document.createElement("a");
//     imageLink.href = imageUrl;
//     console.log("이미지", imageUrl);
//     imageLink.download = "cap.png";
//     imageLink.click();
//   } catch (error) {
//     console.error("이미지 캡쳐에 실패했습니다.");
//   }
// };
// export default downloadILmage;
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";

const downloadILmage = async (element: React.RefObject<HTMLDivElement>) => {
  if (!element.current) {
    console.error("찾을수 없습니다.");
    return;
  }
  try {
    const imageUrl = await toPng(element.current, { includeQueryParams: true, cacheBust: false });
    const imageLink = document.createElement("a");
    imageLink.href = imageUrl;
    console.log("이미지", imageUrl);
    imageLink.download = "cap.png";
    imageLink.click();
  } catch (error) {
    const imageUrl = await toPng(element.current, { includeQueryParams: true, cacheBust: false });
    console.log("음..", imageUrl);
    console.error("이미지 캡쳐에 실패했습니다.");
  }
};
export default downloadILmage;

// /** */
// import { toPng } from "html-to-image";

// const sendImageToBackend = async (element: React.RefObject<HTMLDivElement>) => {
//   if (!element.current) {
//     console.error("찾을수 없습니다.");
//     return;
//   }

//     try {
//   const imageUrl = await toPng(element.current, { includeQueryParams: true });
//   const base64ImageData = imageUrl.replace(/^data:image\/png;base64,/, "");

//   const response = await fetch("/api/upload-image", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       imageData: base64ImageData,
//     }),
//   });

//   console.log("base64ImageData", base64ImageData);

//       if (response.ok) {
//         console.log("이미지가 백엔드로 성공적으로 전송되었습니다.");
//       } else {
//         console.error("이미지 전송 실패:", response.statusText);
//       }
//     } catch (error) {
//       console.error("이미지 캡쳐 또는 백엔드 전송 실패:", error);
//     }
// };

// export default sendImageToBackend;
