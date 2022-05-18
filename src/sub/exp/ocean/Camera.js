import { useThree } from "@react-three/fiber";

export const Camera = () => {
  const { camera } = useThree();
  camera.position.set(200, 600, 800);
  camera.lookAt(0, 0, 0);
};
