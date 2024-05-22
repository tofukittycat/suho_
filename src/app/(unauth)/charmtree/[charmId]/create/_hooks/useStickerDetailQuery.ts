// import { useSuspenseQuery } from "@tanstack/react-query";

// import { getStickers } from "../_utils/getStickers";

// export default function useStickerDetailQuery(id: number) {
//   const { data: charmStickers } = useSuspenseQuery({
//     queryKey: ["stickers", id],
//     queryFn: () => getStickers(id),
//     select: data => ({ ...data }),
//   });

//   return charmStickers;
// }
