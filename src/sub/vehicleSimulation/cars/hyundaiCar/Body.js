import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

export const Body = forwardRef(
  ({ args = [15, 8, 40], mass = 500, setVisible, ...props }, ref) => {
    const { nodes, materials } = useGLTF("/cars/hyundaiCar/hyundai/scene.gltf");
    const [, api] = useBox(
      () => ({
        mass,
        args,
        allowSleep: false,
        position: [0, 10, 0],
        ...props,
      }),
      ref
    );
    return (
      <group
        ref={ref}
        api={api}
        userData={{ id: "drifter" }}
        {...props}
        scale={12}>
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
      </group>
    );
  }
);

useGLTF.preload("/cars/hyundaiCar/hyundai/scene.gltf");
