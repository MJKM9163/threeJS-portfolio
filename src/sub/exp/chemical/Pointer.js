import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { ChemicalStore } from "./ChemicalStore";
import { Carbon } from "./items/Carbon";
import { Hydrogen } from "./items/Hydrogen";
import { Nitrogen } from "./items/Nitrogen";
import { Oxygen } from "./items/Oxygen";
let t = [100, 100];
export const Pointer = () => {
  const select = ChemicalStore((state) => state.pointerSelect);
  const ref = useRef();
  const atom = useRef();

  // const aa = (e) => {
  //   t = [e.screenX, e.screenY];
  //   console.log(e);
  // };
  // useEffect(() => {
  //   window.addEventListener("mousemove", aa);
  // });

  useFrame(({ mouse, viewport, camera }) => {
    if (atom.current) {
      let [x, y, z] = camera.position;
      let { width, height } = viewport.getCurrentViewport();
      //atom.current.position.set((width - t[0]) * -1, height - t[1], 0);
      atom.current.position.set(
        (mouse.x * width) / 2 + x + 25,
        (mouse.y * height) / 2 + y + 25,
        0
      );
      //console.log(width, height);
    }
    if (camera.position.z >= 1500) {
      camera.position.z = 1499;
    } else if (camera.position.z <= 499) {
      camera.position.z = 500;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial color={"gray"} />
      </mesh>
      {select === "hydrogen" ? <Hydrogen ref={atom} /> : null}
      {select === "carbon" ? <Carbon ref={atom} /> : null}
      {select === "nitrogen" ? <Nitrogen ref={atom} /> : null}
      {select === "oxygen" ? <Oxygen ref={atom} /> : null}
    </group>
  );
};
