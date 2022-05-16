import { useThree } from "@react-three/fiber";

export const Camera = () => {
  const { camera } = useThree();
  camera.position.set(20, 30, 30);
  camera.lookAt(0, 0, 0);
};
