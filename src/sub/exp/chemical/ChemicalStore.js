import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const ChemicalStore = create(
  subscribeWithSelector((set, get) => ({
    hydrogenArray: [],
    carbonArray: [],
    nitrogenArray: [],
    oxygenArray: [],

    pointerSelect: false,
  }))
);
