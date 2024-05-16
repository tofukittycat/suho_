import { useEffect, useState } from "react";

export const useServerImage = (src: string) => {
  const [img, setImg] = useState<string | null>();
  const getImage = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        if (typeof base64data === "string") {
          setImg(base64data);
        }
      };
    } catch (error) {
      setImg(null);
    }
  };
  useEffect(() => {
    getImage();
  }, [src]);
  return img;
};
