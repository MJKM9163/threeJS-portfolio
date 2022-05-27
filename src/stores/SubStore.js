import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const SubStore = create(
  subscribeWithSelector((set, get) => ({
    screenList: {
      exp: [["바다 생물"]],
      simulation: [["차량 브레이크 고장 시뮬레이션"]],
      etc: [["미니 빌딩 세우기"], ["화학식"]],
    },

    buildingDefault: false,
    buildingPos: [],

    valueChenge: false,
    carCustom: {
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
      hyuneai2: {
        common: {
          radius: 20,
          width: 50.2,
          height: -10.3,
          front: 60.7,
          back: -60.2,
          steer: 5,
          force: 50000,
          maxBrake: 1e6,
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
      hyuneai3: {
        common: {
          radius: 200,
          width: 500.2,
          height: -100.3,
          front: 600.7,
          back: -600.2,
          steer: 50,
          force: 100,
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
