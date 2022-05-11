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

    carSelect: "hyuneai",
    carList: {
      hyuneai: {
        common: {
          radius: 2,
          width: 5.2,
          height: -1.3,
          front: 6.7,
          back: -6.2,
          steer: 0.5,
          force: 5000,
          maxBrake: 1e5,
        },
        option: {
          directionLocal: [0, -1, 0],
          suspensionStiffness: 10,
          suspensionRestLength: 0.8,
          maxSuspensionForce: 1e4,
          maxSuspensionTravel: 0.8,
          dampingRelaxation: 10,
          dampingCompression: 4.4,
          axleLocal: [-1, 0, 0],
          useCustomSlidingRotationalSpeed: true,
          customSlidingRotationalSpeed: 30,
          frictionSlip: 5,
        },
      },
    },
  }))
);
