import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const MainStore = create(
  subscribeWithSelector((set, get) => ({
    start: false,
    spaceHide: false,

    camera: {
      pos: [500, 3000, 3200],
      lookAt: [0, 0, 0],
    },
  }))
);
