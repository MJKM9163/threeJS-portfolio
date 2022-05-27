/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BlueMesh (https://sketchfab.com/VapTor)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bream-fish-dorade-royale-a3d0e1a597794a9bb74739a13cfc8b77
title: Bream Fish ( Dorade Royale)
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import { OceanStore } from "../OceanStore";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function Bream({ ...props }) {
  let r = 1.2;
  let cameraTarget = useRef(OceanStore.getState().oceanCameraTarget);

  const rRef = useRef();
  const [pRef, pApi] = useSphere(() => ({
    type: "Kinematic",
    mass: 1,
    args: [1],
    ...props,
  }));
  const { nodes, materials, animations } = useGLTF("/oceans/bream/scene.gltf");
  const { actions } = useAnimations(animations, pRef);

  useEffect(() => {
    actions.ArmatureAction.play();
  });

  useEffect(() => {
    OceanStore.subscribe(
      (state) => (cameraTarget.current = state.oceanCameraTarget),
      (state) => state
    );
  });

  useFrame(({ camera }) => {
    if (rRef.current) {
      const [tX, tY, tZ] = rRef.current.getWorldPosition(new Vector3());
      const [bX, bY, bZ] = pRef.current.getWorldPosition(new Vector3());
      pRef.current.lookAt(tX, tY, tZ);

      if (cameraTarget.current === "도미") {
        camera.position.set(bX + 150, bY + 75, bZ + 75);
        camera.lookAt(bX, bY, bZ);
      }

      pApi.rotation.set(0, (r -= 0.001), 0);
      pApi.velocity.set((tZ - bZ) / 15, (tY - bY) / 15, -(tX - bX) / 15);
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
          oceanCameraTarget: oceanCameraTarget !== "도미" ? "도미" : false,
        });
        e.stopPropagation();
      }}>
      <mesh ref={rRef} name="rotation_pos" position={[-50, 0, 0]} />
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Hemi" position={[0.04, -0.53, 6.47]}>
              <group name="Hemi_1" />
            </group>
            <group name="Armature" position={[0, -2.84, -0.17]}>
              <primitive castShadow object={nodes.Armature_rootJoint} />
              <group
                name="Circle"
                position={[0, 1.02, 0.24]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.54, 1.34, 1.34]}
              />
              <group
                name="Circle001"
                position={[0.3, -0.69, 0.44]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.2}
              />
              <group
                name="Plane"
                position={[0.65, 1.77, -0.22]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <group
                name="Plane001"
                position={[0.65, 1.77, -0.22]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <skinnedMesh
                castShadow
                name="Circle_0"
                geometry={nodes.Circle_0.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.Circle_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle001_0"
                geometry={nodes.Circle001_0.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.Circle001_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Plane_0"
                geometry={nodes.Plane_0.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.Plane_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Plane001_0"
                geometry={nodes.Plane001_0.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.Plane001_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oceans/bream/scene.gltf");