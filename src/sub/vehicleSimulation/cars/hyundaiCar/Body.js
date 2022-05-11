import React, { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox, useCylinder } from "@react-three/cannon";
import { Wheel } from "./Wheel";

export const Body = forwardRef(({ setVisible, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/cars/hyundaiCar/hyundai/scene.gltf");
  // console.log(ref);
  const [, api] = useBox(
    () => ({
      //type: "Dynamic",
      mass: 300,
      position: [0, 10, 0],
      args: [8, 6, 20],
      allowSleep: false,
      ...props,
    }),
    ref
  );

  return (
    <mesh ref={ref} api={api} scale={5}>
      <group rotation={[Math.PI / 2, -Math.PI / 1, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Matte__FFFFFFFF__prim_env_1_spec}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.hyundai__spec}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Matte__FF000000__env_1_spec}
        />
      </group>
    </mesh>
  );
});

useGLTF.preload("/cars/hyundaiCar/hyundai/scene.gltf");
