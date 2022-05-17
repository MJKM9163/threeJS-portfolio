import { useThree } from "@react-three/fiber";

export const Camera = () => {
  const { camera } = useThree();
  camera.position.set(50, 150, 300);
  camera.lookAt(0, 0, 0);
};
