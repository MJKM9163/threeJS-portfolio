import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BuildingIndex } from "./BuildingIndex";
import { Camera } from "./Camera";

export const BuildingCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 60,
        far: 50000,
        near: 3,
      }}>
      <color attach="background" args={["#585858"]} />
      <ambientLight intensity={0} />
      <Physics gravity={[0, -100, 0]} iterations={1}>
        <BuildingIndex />
      </Physics>
      <Camera />
      <OrbitControls />
    </Canvas>
  );
};
