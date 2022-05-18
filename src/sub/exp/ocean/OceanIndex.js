import Guppy from "./models/Guppy";
import Ocean from "./models/Ocean";
import { OceanFloor } from "./models/OceanFloor";

export const OceanIndex = () => {
  return (
    <group>
      {/* <Ocean position={[0, 500, 0]} scale-x={150} scale-y={50} scale-z={150} /> */}
      <Guppy position={[0, 200, 0]} scale={10} />
      <OceanFloor position={[0, -0, 0]} scale={10} />
    </group>
  );
};
