import { Debug, Physics } from "@react-three/cannon";
import { softShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Light } from "./Light";
import { Camera } from "./Camera";
import { OceanIndex } from "./OceanIndex";
import { Background } from "./Background";
import { UIIndex } from "./interface/UIIndex";
import { Suspense } from "react";

softShadows();
export const OceanCanvas = () => {
  return (
    <>
      <UIIndex />
      <Canvas
        shadows
        camera={{
          fov: 60,
          far: 10000,
          near: 0.5,
        }}>
        <Light />
        <color attach="background" args={["#585858"]} />

        <Physics gravity={[0, 0, 0]} iterations={1}>
          <Suspense fallback={null}>
            {/* <Debug scale={1.01} color="black"> */}
            <OceanIndex />
            {/* </Debug> */}
            <Camera />
            <Background />
          </Suspense>
          <axesHelper args={[2000, 2000, 2000]} />
        </Physics>
      </Canvas>
    </>
  );
};
