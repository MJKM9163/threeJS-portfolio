import { PointMaterial, Points } from "@react-three/drei";
import { useRef } from "react";
import { inSphere, inBox } from "maath/random";
import * as misc from "maath/misc";
import * as buffer from "maath/buffer";
import { MainStore } from "../../stores/MainStore";

export const Space = () => {
  const pointRef = useRef(null);
  const spaceHide = MainStore((state) => state.spaceHide);
  console.log(spaceHide);
  return (
    <group>
      <Points
        ref={pointRef}
        scale={[15, 10, 15]}
        positions={inBox(new Float32Array(5000), {
          sides: 500,
        })}
        stride={3}
        frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ffbf"
          size={0.5}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
