import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox, useCylinder, useSphere } from "@react-three/cannon";

export default function Bongo({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/cars/bongo/scene.gltf");
  const [bodyRef, bodyApi] = useBox(() => ({
    type: "Static",
    mass: 500,
    args: [50, 50, 50],
    ...props,
  }));
  const [tyreRef, tyreApi] = useCylinder(() => ({
    type: "Static",
    mass: 500,
    args: [17, 17, 13, 42, 42],
    rotation: [Math.PI / 2, 0, 0],
    position: [-95, 85, 50],
  }));
  return (
    <group ref={bodyRef} {...props} dispose={null} scale={0.05}>
      <group rotation={[0, 0, 0]}>
        <group rotation={[0, 0, 0]}>
          <group
            position={[107.15, -15.04, -1003.66]}
            rotation={[Math.PI / 2, 0, -Math.PI]}>
            <mesh
              name="tyre"
              geometry={nodes["������2_Material_#27_0"].geometry}
              material={materials.Material_27}
            />
            <mesh
              geometry={nodes["������2_Material_#29_0"].geometry}
              material={materials.Material_29}
            />
            <mesh
              geometry={nodes["������2_Material_#215_0"].geometry}
              material={materials.Material_215}
            />
            <mesh
              geometry={nodes["������2_Material_#156_0"].geometry}
              material={materials.Material_156}
            />
            <mesh
              geometry={nodes["������2_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              geometry={nodes["������2_Material_#228_0"].geometry}
              material={materials.Material_228}
            />
            <mesh
              geometry={nodes["������2_Material_#240_0"].geometry}
              material={materials.Material_240}
            />

            {/*휠 */}
            {/* <mesh
              geometry={nodes["������2_Material_#241_0"].geometry}
              material={materials.Material_241}
            />
            <mesh
              geometry={nodes["������2_Material_#26_0"].geometry}
              material={materials.Material_26}
            /> */}

            <mesh
              geometry={nodes["������2_Material_#87_0"].geometry}
              material={materials.Material_87}
            />
            <mesh
              geometry={nodes["������2_Material_#168_0"].geometry}
              material={materials.Material_168}
            />
            <mesh
              geometry={nodes["������2_Material_#227_0"].geometry}
              material={materials.Material_227}
            />
            <mesh
              geometry={nodes["������2_Material_#552_0"].geometry}
              material={materials.Material_552}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cars/bongo/scene.gltf");
