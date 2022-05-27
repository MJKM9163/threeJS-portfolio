import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OceanStore } from "./OceanStore";
let cameraPos = [0, 1800, 0];
let check = false;
export const Camera = () => {
  const { camera } = useThree();
  const cameraTarget = OceanStore((state) => state.oceanCameraTarget);

  if (!cameraTarget) {
    //camera.position.set(0, 1800, 0);
    camera.position.set(600, 1000, 1000);
    camera.lookAt(0, 0, 0);
  }

  useFrame(() => {
    if (!check) {
      camera.position.set(
        (cameraPos[0] += Math.floor((600 - cameraPos[0]) / 50)),
        (cameraPos[1] -= Math.floor((cameraPos[1] - 1300) / 50)),
        (cameraPos[2] += Math.floor((1300 - cameraPos[2]) / 50))
      );
      if (camera.position.y <= 1350) {
        check = true;
      }
    }
  });

  return <OrbitControls enableZoom={false} enablePan={false} />;
};
