import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";

export const Light = () => {
  const pointLight = useRef();
  useHelper(pointLight, PointLightHelper, 20.5, "lightblue");

  return (
    <>
      <pointLight
        ref={pointLight}
        position={[0, 2000, 0]}
        color={"white"}
        intensity={0.7}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={10000}
        shadow-camera-near={0.1}
        shadow-camera-left={-5000}
        shadow-camera-right={5000}
        shadow-camera-top={-5000}
        shadow-camera-bottom={5000}
        shadow-radius={1}
        //shadow-bias={0.5}
      />
      <ambientLight intensity={0.1} />
    </>
  );
};
