import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Camera } from "./Camera";
import { ChemicalIndex } from "./ChemicalIndex";
import { UIIndex } from "./interface/UIIndex";
import { Pointer } from "./Pointer";

export const ChemicalCanvas = () => {
  return (
    <>
      <UIIndex />
      <Canvas
        shadows
        camera={{
          position: [0, 0, 500],
          fov: 60,
          far: 10000,
          near: 0.5,
        }}>
        <color attach="background" args={["#eeeeee"]} />
        <Physics gravity={[0, 0, 0]} iterations={1}>
          <Suspense fallback={null}>
            {/* <Debug scale={1.01} color="black"> */}
            <ChemicalIndex />
            {/* </Debug> */}
            {/* <Pointer /> */}
            <axesHelper args={[1000, 1000, 1000]} />
          </Suspense>
        </Physics>
        <Camera />
      </Canvas>
    </>
  );
};
