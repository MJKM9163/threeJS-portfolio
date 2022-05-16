import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./Camera";
import { UIIndex } from "./interface/UIIndex";
import { Light } from "./Light";
import { VehicleIndex } from "./VehicleIndex";

export const VehicleCanvas = () => {
  return (
    <>
      <UIIndex />
      <Canvas
        camera={{
          fov: 60,
          far: 50000,
          near: 3,
        }}>
        <color attach="background" args={["#585858"]} />
        <ambientLight intensity={0} />
        <Physics
          gravity={[0, -20, 0]}
          iterations={1}
          broadphase="SAP"
          contactEquationRelaxation={4}
          friction={1e-3}
          allowSleep>
          <Debug color={"white"} scale={1.01}>
            <VehicleIndex />
          </Debug>
        </Physics>
        <Camera />
        <Light />
        <OrbitControls target={[30, 0, 0]} />
      </Canvas>
    </>
  );
};
