/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: AlmondFeather (https://sketchfab.com/almondfeather)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/manta-ray-bubble-c77139bed1b149c2ac8863909490193f
title: Manta ray bubble
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Vector3 } from "three";

let y = 0;
let z = [0, 0];
let r = [-1, 0];
let check = false;
export default function Manta({ ...props }) {
  const rRef = useRef();
  const [pRef, pApi] = useSphere(() => ({
    type: "Kinematic",
    mass: 1,
    args: [1],
    ...props,
  }));
  const { nodes, materials, animations } = useGLTF("/oceans/manta/scene.gltf");
  const { actions } = useAnimations(animations, pRef);

  useEffect(() => {
    actions.Swimming.play();
  });
  useFrame(() => {
    if (rRef.current) {
      const [tX, tY, tZ] = rRef.current.getWorldPosition(new Vector3());
      const [bX, bY, bZ] = pRef.current.getWorldPosition(new Vector3());
      pRef.current.lookAt(tX, tY, tZ);

      if (!check) {
        check = true;
        const num = Math.floor(Math.random() * 2);
        setTimeout(() => {
          check = false;
        }, 3000);
        if (num === 1) {
          r[1] = 0.001;
          z[1] = 0.01;
        } else {
          r[1] = -0.001;
          z[1] = -0.01;
        }
        //console.log(z[1], num);
      }
      pApi.rotation.set(y, (r[0] += r[1]), (z[0] += z[1]));
      if (z[0] > 0.5 || z[0] < -0.5) {
        z[1] = 0;
        z[0] = z[0] > 0.5 ? 0.49 : -0.49;
      }
      //pApi.velocity.set((tX - bX) / 20, (tY - bY) / 20, (tZ - bZ) / 20);
    }
  });
  return (
    <group ref={pRef} {...props} dispose={null}>
      <mesh ref={rRef} name="rotation_pos" position={[0, 0, 50]}></mesh>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.41}>
          <group name="Root">
            <group name="Rausku_armature">
              <primitive object={nodes.Rausku_armature_rootJoint} />
              <group name="Rausku_mesh" />
              <skinnedMesh
                castShadow
                name="Rausku_mesh_0"
                geometry={nodes.Rausku_mesh_0.geometry}
                material={materials.Rausku_texture}
                skeleton={nodes.Rausku_mesh_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Rausku_mesh_1"
                geometry={nodes.Rausku_mesh_1.geometry}
                material={materials.Rausku_outline}
                skeleton={nodes.Rausku_mesh_1.skeleton}
              />
            </group>
            <group name="Fish_Armature">
              <primitive object={nodes.Fish_Armature_rootJoint} />
              <group name="Fish_mesh" />
              <skinnedMesh
                castShadow
                name="Fish_mesh_0"
                geometry={nodes.Fish_mesh_0.geometry}
                material={materials.Rausku_outline}
                skeleton={nodes.Fish_mesh_0.skeleton}
              />
            </group>
            <group name="Fish_Armature001">
              <primitive object={nodes.Fish_Armature001_rootJoint} />
              <group name="Fish_mesh001" />
              <skinnedMesh
                castShadow
                name="Fish_mesh001_0"
                geometry={nodes.Fish_mesh001_0.geometry}
                material={materials.Rausku_outline}
                skeleton={nodes.Fish_mesh001_0.skeleton}
              />
            </group>
            <group name="Fish_Armature002">
              <primitive object={nodes.Fish_Armature002_rootJoint} />
              <group name="Fish_mesh002" />
              <skinnedMesh
                castShadow
                name="Fish_mesh002_0"
                geometry={nodes.Fish_mesh002_0.geometry}
                material={materials.Rausku_outline}
                skeleton={nodes.Fish_mesh002_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oceans/manta/scene.gltf");
