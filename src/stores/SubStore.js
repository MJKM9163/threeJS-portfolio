import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const SubStore = create(
  subscribeWithSelector((set, get) => ({
    buildingPos: [],
  }))
);
