import { Debug, Physics } from "@react-three/cannon";
import { softShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Light } from "./Light";
import { Camera } from "./Camera";
import { OceanIndex } from "./OceanIndex";
import { Wall } from "./Wall";
import { UIIndex } from "./interface/UIIndex";

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
          {/* <Debug scale={1.01} color="black"> */}
          <OceanIndex />
          {/* <Wall rotation={[0, 0, 0]} position={[0, 0, 1500]} />
          <Wall rotation={[0, 0, 0]} position={[0, 0, -1500]} />
          <Wall rotation={[0, Math.PI / 2, 0]} position={[1500, 0, 0]} />
          <Wall rotation={[0, Math.PI / 2, 0]} position={[-1500, 0, 0]} /> */}
          {/* </Debug> */}
          <axesHelper args={[2000, 2000, 2000]} />
        </Physics>
        <Camera />
      </Canvas>
    </>
  );
};
