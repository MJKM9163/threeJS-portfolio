/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: urrmet (https://sketchfab.com/urrmet)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ocean-56112ae2e55e45a4951362b323540349
title: ocean
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Ocean({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/oceans/ocean/scene.gltf");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.KeyAction.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.2}>
          <group name="Root">
            <group name="Cube000" scale={[1, 1, 5]}>
              <mesh
                name="Cube000_0"
                geometry={nodes.Cube000_0.geometry}
                material={materials["Scene_-_Root"]}
                morphTargetDictionary={nodes.Cube000_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Cube000_0.morphTargetInfluences}
                material-color={"Cyan"}
                material-opacity={0.5}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oceans/ocean/scene.gltf");
