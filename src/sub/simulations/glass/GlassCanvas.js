import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./Camera";
import { Collider } from "./Collider";
import { GlassIndex } from "./GlassIndex";
import { Light } from "./Light";

export const GlassCanvas = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 60,
          far: 50000,
          near: 3,
        }}>
        <color attach="background" args={["#585858"]} />
        <ambientLight intensity={0} />
        <Physics gravity={[0, 0, 0]}>
          <Debug color={"white"} scale={1.01}>
            <GlassIndex />
            <Collider position={[0, 0, 150]} args={[10]} />
          </Debug>
        </Physics>
        <Camera />
        <Light />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
    </>
  );
};
