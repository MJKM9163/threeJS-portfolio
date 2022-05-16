import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/winds/windmill/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={0.01}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 785.85, 0]}>
            <group position={[8.65, -29.09, -95.29]}>
              <group
                position={[-0.25, 0.35, 57.75]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  geometry={nodes.Cylinder_5_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group
                position={[-0.25, 0.35, -54.48]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  geometry={nodes.Cylinder_4_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group
                position={[0.49, -0.7, -3.27]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  geometry={nodes.Capsule_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
            </group>
            <group position={[9.35, -30.1, -1.01]} rotation={[0, 0, -0.29]}>
              <group
                position={[-0.21, 0.31, 3.48]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  geometry={nodes.Capsule_1_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group position={[0.21, -0.31, -3.48]}>
                <group position={[-5.35, 0, 0]}>
                  <mesh
                    geometry={nodes.Blade_2_Mat1_0.geometry}
                    material={materials["Mat.1"]}
                  />
                </group>
                <group position={[5.35, 0, 0]} rotation={[0, 0, Math.PI]}>
                  <mesh
                    geometry={nodes.Blade_4_Mat1_0.geometry}
                    material={materials["Mat.1"]}
                  />
                </group>
                <group position={[0, 5.35, 0]} rotation={[0, 0, -Math.PI / 2]}>
                  <mesh
                    geometry={nodes.Blade_6_Mat1_0.geometry}
                    material={materials["Mat.1"]}
                  />
                </group>
                <group position={[0, -5.35, 0]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh
                    geometry={nodes.Blade_8_Mat1_0.geometry}
                    material={materials["Mat.1"]}
                  />
                </group>
              </group>
            </group>
            <group position={[8.4, -591.95, -76.82]}>
              <group position={[0, 523.15, 0]}>
                <mesh
                  geometry={nodes.Cylinder_3_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group position={[0, -338.67, 0]}>
                <mesh
                  geometry={nodes.Cylinder_2_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group position={[0, -292.32, 0]}>
                <mesh
                  geometry={nodes.Cylinder_1_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group position={[0, 107.84, 0]}>
                <mesh
                  geometry={nodes.Cylinder_Mat1_0.geometry}
                  material={materials["Mat.1"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/winds/windmill/scene.gltf");
