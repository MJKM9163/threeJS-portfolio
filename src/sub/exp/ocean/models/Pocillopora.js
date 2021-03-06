/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: thehydrous (https://sketchfab.com/thehydro.us)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/pocillopora-eydouxi-adf2d17b6355497cbadf6f7929bdd53f
title: Pocillopora eydouxi
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { OceanStore } from "../OceanStore";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function Pocillopora({ ...props }) {
  let cameraTarget = useRef(OceanStore.getState().oceanCameraTarget);

  const pRef = useRef();
  const { nodes, materials } = useGLTF("/oceans/pocillopora/scene.gltf");

  useEffect(() => {
    OceanStore.subscribe(
      (state) => (cameraTarget.current = state.oceanCameraTarget),
      (state) => state
    );
  });

  useFrame(({ camera }) => {
    if (pRef.current) {
      const [bX, bY, bZ] = pRef.current.getWorldPosition(new Vector3());

      if (cameraTarget.current === "산호") {
        camera.position.set(bX + 50, bY + 100, bZ + 30);
        camera.lookAt(bX, bY, bZ);
      }
    }
  });

  return (
    <group
      ref={pRef}
      {...props}
      dispose={null}
      onClick={(e) => {
        const { oceanCameraTarget } = OceanStore.getState();
        OceanStore.setState({
          oceanCameraTarget: oceanCameraTarget !== "산호" ? "산호" : false,
        });
        e.stopPropagation();
      }}>
      <group rotation={[-Math.PI, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Material_0}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Material_0}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material_1}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Material_1}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Material_2}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Material_2}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Material_3}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Material_3}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.Material_4}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.Material_5}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/oceans/pocillopora/scene.gltf");
