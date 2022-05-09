import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./Camera";
import { Light } from "./Light";
import { VehicleIndex } from "./VehicleIndex";

export const VehicleCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 60,
        far: 50000,
        near: 3,
      }}>
      <color attach="background" args={["#585858"]} />
      <ambientLight intensity={1} />
      <Physics gravity={[0, -100, 0]} iterations={1}>
        <Debug color={"white"} scale={1.01}>
          <VehicleIndex />
        </Debug>
      </Physics>
      <Camera />
      <Light />
      <OrbitControls />
    </Canvas>
  );
};
