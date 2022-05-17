import { useBox, usePlane } from "@react-three/cannon";
import { Glass } from "./Glass";

let glassArr = new Array(20).fill(0);

export const GlassIndex = () => {
  return (
    <group>
      {glassArr.map((x, indexX) => (
        <group key={"galssX" + indexX}>
          {glassArr.map((y, indexY) => (
            <Glass
              key={"galssY" + indexY}
              position={[indexX * 5.1 - 50, indexY * 5.1 - 50, 0.1]}
            />
          ))}
        </group>
      ))}
    </group>
  );
};
