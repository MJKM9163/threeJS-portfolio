import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const SubStore = create(
  subscribeWithSelector((set, get) => ({
    screenList: {
      exp: [["동산"]],
      simulation: [["차량 브레이크 고장 시뮬레이션"]],
      etc: [["미니 빌딩 세우기"]],
    },

    buildingDefault: false,
    buildingPos: [],
  }))
);
