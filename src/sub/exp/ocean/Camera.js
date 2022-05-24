import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { OceanStore } from "./OceanStore";

export const Camera = () => {
  const { camera } = useThree();
  const cameraTarget = OceanStore((state) => state.oceanCameraTarget);

  if (!cameraTarget) {
    camera.position.set(800, 1600, 1600);
    camera.lookAt(0, 0, 0);
  }

  return <OrbitControls enablePan={false} />;
};
