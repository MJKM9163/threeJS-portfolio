import { useThree } from "@react-three/fiber";
import { MainStore } from "../stores/MainStore";

export const Camera = () => {
  const { camera } = useThree();
  const pos = MainStore((state) => state.camera.pos);
  console.log(pos);
  camera.position.set(-1500, 1500, -2550);
  //camera.lookAt(2500, 0, 2500);
};
