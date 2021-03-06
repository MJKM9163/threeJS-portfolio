/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BlueMesh (https://sketchfab.com/VapTor)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/barracuda-fish-d67b17fefee840a7a120058e1181bcab
title: Barracuda Fish
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import { OceanStore } from "../OceanStore";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function Barracuda({ ...props }) {
  let r = 1.5;
  let cameraTarget = useRef(OceanStore.getState().oceanCameraTarget);

  const rRef = useRef();
  const [pRef, pApi] = useSphere(() => ({
    type: "Kinematic",
    mass: 1,
    args: [1],
    ...props,
  }));
  const { nodes, materials, animations } = useGLTF(
    "/oceans/barracuda/scene.gltf"
  );
  const { actions } = useAnimations(animations, pRef);

  useEffect(() => {
    actions.ArmatureAction.play();
  }, []);

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

      if (cameraTarget.current === "꼬치고기") {
        camera.position.set(bX + 150, bY + 75, bZ + 75);
        camera.lookAt(bX, bY, bZ);
      }

      pApi.rotation.set(0, (r += 0.003), 0);
      pApi.velocity.set((tZ - bZ) / 12, (tY - bY) / 12, -(tX - bX) / 12);
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
          oceanCameraTarget:
            oceanCameraTarget !== "꼬치고기" ? "꼬치고기" : false,
        });
        e.stopPropagation();
      }}>
      <mesh ref={rRef} name="rotation_pos" position={[-50, 0, 0]} />
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group
              name="Lamp"
              position={[4.08, 1.01, 5.9]}
              rotation={[-0.27, 0.6, 1.93]}>
              <group name="Lamp_1" />
            </group>
            <group name="Armature" position={[0, -0.56, 0.03]}>
              <primitive castShadow object={nodes.Armature_rootJoint} />
              <group
                name="LOW"
                position={[0, 1.08, -0.02]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <group
                name="Circle014"
                position={[0.15, -3.25, -0.05]}
                rotation={[2.86, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle013"
                position={[0.14, -3.29, -0.03]}
                rotation={[2.86, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle012"
                position={[0.14, -3.33, -0.02]}
                rotation={[2.86, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle011"
                position={[0.13, -3.38, -0.01]}
                rotation={[2.86, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle010"
                position={[0.13, -3.43, 0.01]}
                rotation={[2.86, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle009"
                position={[0.12, -3.49, 0.01]}
                rotation={[2.86, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle008"
                position={[0.11, -3.55, 0.02]}
                rotation={[2.83, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle007"
                position={[0.1, -3.61, 0.03]}
                rotation={[2.92, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle006"
                position={[0.08, -3.69, 0.02]}
                rotation={[2.87, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle005"
                position={[0.07, -3.75, 0.02]}
                rotation={[2.78, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle004"
                position={[0.04, -3.83, 0.04]}
                rotation={[2.56, 0.05, 3.08]}
                scale={[0.01, 0.01, 0.02]}
              />
              <group
                name="Circle003"
                position={[0.13, -3.34, 0.16]}
                rotation={[0.17, 0, 0]}
                scale={[0.02, 0.02, 0.03]}
              />
              <group
                name="Circle002"
                position={[0.12, -3.41, 0.17]}
                rotation={[-0.13, 0, 0]}
                scale={[0.02, 0.02, 0.03]}
              />
              <group
                name="Circle001"
                position={[0.08, -3.56, 0.21]}
                rotation={[-0.21, -0.15, -0.03]}
                scale={[0.02, 0.02, 0.04]}
              />
              <group
                name="Circle"
                position={[0.05, -3.72, 0.21]}
                rotation={[-0.21, 0, 0]}
                scale={0.02}
              />
              <group name="Sphere" position={[0.15, -2.7, 0.28]} scale={0.13} />
              <skinnedMesh
                castShadow
                name="LOW_0"
                geometry={nodes.LOW_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.LOW_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle014_0"
                geometry={nodes.Circle014_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle014_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle013_0"
                geometry={nodes.Circle013_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle013_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle012_0"
                geometry={nodes.Circle012_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle012_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle011_0"
                geometry={nodes.Circle011_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle011_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle010_0"
                geometry={nodes.Circle010_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle010_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle009_0"
                geometry={nodes.Circle009_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle009_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle008_0"
                geometry={nodes.Circle008_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle008_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle007_0"
                geometry={nodes.Circle007_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle007_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle006_0"
                geometry={nodes.Circle006_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle006_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle005_0"
                geometry={nodes.Circle005_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle005_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle004_0"
                geometry={nodes.Circle004_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle004_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle003_0"
                geometry={nodes.Circle003_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle003_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle002_0"
                geometry={nodes.Circle002_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle002_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle001_0"
                geometry={nodes.Circle001_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle001_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Circle_0"
                geometry={nodes.Circle_0.geometry}
                material={materials.BARRAD}
                skeleton={nodes.Circle_0.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Sphere_0"
                geometry={nodes.Sphere_0.geometry}
                material={materials.Root}
                skeleton={nodes.Sphere_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oceans/barracuda/scene.gltf");
