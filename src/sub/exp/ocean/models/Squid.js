/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: misaooo (https://sketchfab.com/misaooo)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/firefly-squid-0289c6a70ed447f099bd892e18608306
title: Firefly squid
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useSphere } from "@react-three/cannon";
import { OceanStore } from "../OceanStore";

export default function Squid({ ...props }) {
  let r = 0;
  let cameraTarget = useRef(OceanStore.getState().oceanCameraTarget);

  const rRef = useRef();
  const [pRef, pApi] = useSphere(() => ({
    type: "Kinematic",
    mass: 1,
    args: [1],
    ...props,
  }));
  const { nodes, materials, animations } = useGLTF("/oceans/squid/scene.gltf");
  const { actions } = useAnimations(animations, pRef);

  useEffect(() => {
    actions["Take 001"].play();
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

      if (cameraTarget.current === "오징어") {
        camera.position.set(bX + 150, bY + 325, bZ + 300);
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
          oceanCameraTarget: oceanCameraTarget !== "오징어" ? "오징어" : false,
        });
        e.stopPropagation();
      }}>
      <mesh ref={rRef} name="rotation_pos" position={[0, 0, 50]}></mesh>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-3.32, 0, -3.52]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <group
            name="e3a4e183904e47d78d6cd4899e31f20afbx"
            rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group
                    name="nurbsCircle1"
                    position={[-0.11, -7.11, -0.63]}
                    scale={[0.04, 0.15, 0.09]}>
                    <group
                      name="nurbsCircle2"
                      position={[0.11, 0, -0.45]}
                      scale={[1, 1, 1.63]}>
                      <group name="cluster19Handle" />
                    </group>
                    <group
                      name="nurbsCircle4"
                      position={[0.11, 0, -0.45]}
                      scale={[1, 1, 1.63]}>
                      <group name="cluster17Handle" />
                    </group>
                    <group
                      name="nurbsCircle8"
                      position={[0.11, 0, -0.45]}
                      scale={[1, 1, 1.63]}>
                      <group name="cluster13Handle" />
                    </group>
                    <group
                      name="nurbsCircle10"
                      position={[0.11, 0, -0.45]}
                      scale={[1, 1, 1.63]}>
                      <group name="cluster11Handle" />
                    </group>
                    <group
                      name="nurbsCircle13"
                      position={[0.02, 0, -0.45]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-1, -1, -1.63]}>
                      <group
                        name="cluster22Handle"
                        position={[-0.1, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle15"
                      position={[0.03, 0, -0.45]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-1, -1, -1.63]}>
                      <group
                        name="cluster3Handle"
                        position={[-0.08, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle19"
                      position={[0.21, 0, -0.45]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-1, -1, -1.63]}>
                      <group
                        name="cluster7Handle"
                        position={[0.1, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle21"
                      position={[0.11, 0, -0.45]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-1, -1, -1.63]}>
                      <group
                        name="cluster9Handle"
                        position={[-0.01, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle6"
                      position={[18.94, 0, -0.45]}
                      scale={[1, 1, 1.63]}>
                      <group name="cluster15Handle" />
                    </group>
                    <group
                      name="nurbsCircle17"
                      position={[-15.79, -0.38, -0.45]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-1, -1, -1.63]}>
                      <group
                        name="cluster5Handle"
                        position={[-0.19, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                  </group>
                  <group name="nurbsCircle12" position={[-0.04, 11.58, -0.4]}>
                    <group
                      name="cluster21Handle"
                      position={[0.04, -13.42, 0.2]}
                    />
                  </group>
                  <group
                    name="nurbsCircle23"
                    position={[-0.12, -0.6, 0.15]}
                    scale={[0.24, 0.24, 0.23]}>
                    <group
                      name="nurbsCircle3"
                      position={[0.11, -2.74, 0.1]}
                      scale={[0.92, 0.92, 1]}>
                      <group name="cluster20Handle" />
                    </group>
                    <group
                      name="nurbsCircle5"
                      position={[0.11, -2.74, 0.1]}
                      scale={[0.92, 0.92, 1]}>
                      <group name="cluster18Handle" />
                    </group>
                    <group
                      name="nurbsCircle9"
                      position={[0.11, -2.74, 0.1]}
                      scale={[0.92, 0.92, 1]}>
                      <group name="cluster14Handle" />
                    </group>
                    <group
                      name="nurbsCircle11"
                      position={[0.11, -2.74, 0.1]}
                      scale={[0.92, 0.92, 1]}>
                      <group name="cluster12Handle" />
                    </group>
                    <group
                      name="nurbsCircle14"
                      position={[-0.01, -2.74, 0.1]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-0.92, -0.92, -1]}>
                      <group
                        name="cluster23Handle"
                        position={[-0.13, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle16"
                      position={[-0.22, -2.74, 0.1]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-0.92, -0.92, -1]}>
                      <group
                        name="cluster4Handle"
                        position={[-0.36, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle20"
                      position={[0.16, -2.74, 0.1]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-0.92, -0.92, -1]}>
                      <group
                        name="cluster8Handle"
                        position={[0.05, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle22"
                      position={[0.03, -2.74, 0.1]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-0.92, -0.92, -1]}>
                      <group
                        name="cluster10Handle"
                        position={[-0.09, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                    <group
                      name="nurbsCircle7"
                      position={[1.68, -2.74, 0.1]}
                      scale={[0.92, 0.92, 1]}>
                      <group name="cluster16Handle" />
                    </group>
                    <group
                      name="nurbsCircle18"
                      position={[-1.6, -2.74, 0.1]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[-0.92, -0.92, -1]}>
                      <group
                        name="cluster6Handle"
                        position={[0.09, 0, 0]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}
                      />
                    </group>
                  </group>
                  <primitive castShadow object={nodes._rootJoint} />
                  <group name="Object_6" position={[0, -3.13, -4.64]} />
                  <group name="pSphere3" position={[0, -3.13, -4.64]} />
                  <group
                    name="bottom"
                    position={[-0.86, -100.1, -1.01]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                    <group name="Object_140" />
                  </group>
                  <group
                    name="ikHandle1"
                    position={[-0.21, 3.38, 7.3]}
                    rotation={[1.74, -0.08, 1.44]}
                  />
                  <group
                    name="ikHandle2"
                    position={[-0.52, 4.07, 4.42]}
                    rotation={[1.65, -0.46, 1.56]}
                  />
                  <group
                    name="ikHandle3"
                    position={[-0.28, 4.33, 4.6]}
                    rotation={[1.67, -1.2, 1.56]}
                  />
                  <group
                    name="ikHandle5"
                    position={[-0.49, 3.46, 4.54]}
                    rotation={[1.67, 0.5, 1.57]}
                  />
                  <group
                    name="ikHandle6"
                    position={[-0.22, 3.4, 4.32]}
                    rotation={[1.65, 1.29, 1.55]}
                  />
                  <group
                    name="ikHandle7"
                    position={[0.07, 3.4, 4.32]}
                    rotation={[-1.44, 1.3, 1.49]}
                  />
                  <group
                    name="ikHandle8"
                    position={[0.35, 3.46, 4.53]}
                    rotation={[-1.47, 0.5, 1.56]}
                  />
                  <group
                    name="ikHandle9"
                    position={[0.08, 3.38, 7.29]}
                    rotation={[-1.4, -0.08, 1.47]}
                  />
                  <group
                    name="ikHandle10"
                    position={[0.37, 4.07, 4.41]}
                    rotation={[-1.5, -0.47, 1.55]}
                  />
                  <group
                    name="ikHandle11"
                    position={[-0.08, 4.49, -11.64]}
                    rotation={[1.63, 0, -1.6]}
                  />
                  <group
                    name="ikHandle12"
                    position={[0.13, 4.33, 4.59]}
                    rotation={[-1.51, -1.22, 1.52]}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.initialShadingGroup2}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oceans/squid/scene.gltf");
