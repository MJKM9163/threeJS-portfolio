import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { Carbon } from "./items/Carbon";
import { Hydrogen } from "./items/Hydrogen";
import { Nitrogen } from "./items/Nitrogen";
import { Oxygen } from "./items/Oxygen";

export const ChemicalStore = create(
  subscribeWithSelector((set, get) => ({
    hydrogenArray: [],
    carbonArray: [],
    nitrogenArray: [],
    oxygenArray: [],

    pointerSelect: false,
  }))
);
