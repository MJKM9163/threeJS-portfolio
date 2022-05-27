import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export const Camera = () => {
  // const { camera } = useThree();
  // camera.position.set(300, 500, 500);
  // camera.lookAt(0, 0, 0);

  // useFrame(() => {
  //   if (!check) {
  //     camera.lookAt(0, 0, 0);
  //     camera.lookAt(0, 0, 10);
  //     check = true;
  //   }
  // });

  return (
    <OrbitControls enableZoom={true} enablePan={true} enableRotate={false} />
  );
};
