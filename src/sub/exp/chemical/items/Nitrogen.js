import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import "../drag.css";

let x = 0;
export const Nitrogen = forwardRef((_, ref) => {
  useFrame(() => {
    console.log(ref.current.position);
  });
  return (
    <group ref={ref}>
      <Html distanceFactor={2000}>
        <div style={{ transform: "translate(-50%,-50%)", color: "white" }}>
          N
        </div>
      </Html>
      <mesh>
        <sphereGeometry args={[50]} />
        <meshBasicMaterial color={"#002fff"} />
      </mesh>
    </group>
  );
});
