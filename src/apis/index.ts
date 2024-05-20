import { http } from "./http";

interface Image {
  url: string;
}

interface Supplement {
  description: string;
  images: Image[];
}

interface CharmStickerResponse {
  luckySpirit: string;
  supplementTypes: Supplement[];
}
