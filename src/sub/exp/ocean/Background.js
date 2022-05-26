import { useBox } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export const Background = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "/oceans/back/water3.jpg",
    "/oceans/back/water3.jpg",
    "/oceans/back/water.jpg",
    "/oceans/back/water.jpg",
    "/oceans/back/water3.jpg",
    "/oceans/back/water3.jpg",
  ]);
  scene.background = texture;
  return null;
};
