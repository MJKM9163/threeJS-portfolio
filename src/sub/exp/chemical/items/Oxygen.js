import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import "../drag.css";

let x = 0;
export const Oxygen = forwardRef((_, ref) => {
  //   const ref = useRef();
  //   useFrame(() => {
  //     if (ref.current) ref.current.position.set((x += 0.1), 0, 0);
  //   });
  return (
    <group ref={ref}>
      <Html distanceFactor={2000}>
        <div style={{ transform: "translate(-50%,-50%)", color: "white" }}>
          O
        </div>
      </Html>
      <mesh>
        <sphereGeometry args={[50]} />
        <meshBasicMaterial color={"#ff3333"} />
      </mesh>
    </group>
  );
});
