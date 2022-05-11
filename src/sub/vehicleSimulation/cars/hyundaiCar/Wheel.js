import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
import { forwardRef } from "react";

useGLTF.preload("/cars/hyundaiCar/wheel/scene.gltf");

export const Wheel = forwardRef(({ left, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/cars/hyundaiCar/wheel/scene.gltf");

  // kinematic bodies move based on their velocity and need to be manually moved.
  const [, api] = useCylinder(
    () => ({
      mass: 1,
      type: "Kinematic",
      collisionFilterGroup: 0,
      rotation: [0, 0, 0],
      args: [2, 2, 1, 16],
    }),
    ref
  );
  return (
    <mesh ref={ref} scale={0.3} dispose={null}>
      <group
        position={[0, 0, -5.75]}
        rotation={[0, 0, ((left ? -1 : 1) * Math.PI) / 2]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Studded_Tyre}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Studded_Tyre}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Studded_Tyre}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Studded_Tyre}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Studded_Tyre}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Studded_Tyre}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Studded_Tyre}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Studded_Tyre}
        />
      </group>
    </mesh>
  );
});
