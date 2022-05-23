import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Camera = () => {
  const { camera } = useThree();

  camera.position.set(800, 1600, 1600);

  return <OrbitControls enablePan={false} />;
};
