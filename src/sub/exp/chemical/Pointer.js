import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { ChemicalStore } from "./ChemicalStore";
import { Carbon } from "./items/Carbon";
import { Hydrogen } from "./items/Hydrogen";
import { Nitrogen } from "./items/Nitrogen";
import { Oxygen } from "./items/Oxygen";

export const Pointer = () => {
  const select = ChemicalStore((state) => state.pointerSelect);
  const ref = useRef();
  const atom = useRef();
  const { viewport } = useThree();
  useFrame(({ raycaster, mouse }, e) => {
    if (atom.current) {
      let [x, y, z] = raycaster.ray.direction;
      let [x2, y2] = mouse;
      atom.current.position.set(
        (mouse.x * viewport.width) / 1.5,
        (mouse.y * viewport.height) / 1.5,
        0
      );
      //  atom.current.position.set(x, y, z);
      //console.log(atom.current.getWorldPosition(new Vector3()));
      console.log(x, y, z);
    }
    //console.log(raycaster.ray.origin);
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
