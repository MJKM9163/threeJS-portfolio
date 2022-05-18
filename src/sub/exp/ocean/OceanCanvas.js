import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Light } from "./Light";
import { Camera } from "./Camera";
import { OceanIndex } from "./OceanIndex";

export const OceanCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 60,
        far: 50000,
        near: 3,
      }}>
      <color attach="background" args={["#585858"]} />
      <ambientLight intensity={0} />
      {/* <Physics gravity={[0, -20, 0]} iterations={1}> */}
      <OceanIndex />
      {/* </Physics> */}
      <Camera />
      <Light />
      <OrbitControls />
    </Canvas>
  );
};
