import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./Camera";
import { WindIndex } from "./WindIndex";
import { Light } from "./Light";

export const WindCanvas = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 60,
          far: 50000,
          near: 3,
        }}>
        <ambientLight intensity={0} />
        <color attach="background" args={["#585858"]} />
        <Physics gravity={[0, -50, 0]}>
          <Debug color={"blue"} scale={1.01}>
            <WindIndex />
          </Debug>
        </Physics>
        <Camera />
        <Light />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
    </>
  );
};
