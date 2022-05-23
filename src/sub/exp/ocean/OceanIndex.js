import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import BlueWhale from "./models/BlueWhale";
import Guppy from "./models/Guppy";
import Manta from "./models/Manta";
import Ocean from "./models/Ocean";
import { OceanFloor } from "./models/OceanFloor";
import Pocillopora from "./models/Pocillopora";
import Shell from "./models/Shell";
import Squid from "./models/Squid";

export const OceanIndex = () => {
  return (
    <group>
      {/* <BlueWhale position={[100, 200, 0]} scale={0.7} /> */}
      {/* <Ocean position={[0, 1500, 0]} scale-x={150} scale-y={50} scale-z={150} />
      <Guppy position={[0, -100, 0]} scale={2} />
      <Squid position={[300, -150, -400]} scale={5} />
      <Pocillopora position={[400, -220, 400]} scale={1} />
      <Shell position={[-420, -270, -300]} scale={0.1} /> */}
      <OceanFloor position={[0, -500, 0]} scale={50} />
      <Manta position={[800, 200, 0]} scale={50} />
      {/* <mesh position={[100, 200, 0]} castShadow>
        <boxGeometry args={[30, 30, 30]} />
        <meshNormalMaterial />
      </mesh> */}
    </group>
  );
};
