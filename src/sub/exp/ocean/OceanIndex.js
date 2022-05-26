import Barracuda from "./models/Barracuda";
import BlueWhale from "./models/BlueWhale";
import Bream from "./models/Bream";
import Guppy from "./models/Guppy";
import HammerheadShark from "./models/HammerheadShark";
import Manta from "./models/Manta";
import Ocean from "./models/Ocean";
import { OceanFloor } from "./models/OceanFloor";
import Pocillopora from "./models/Pocillopora";
import Shell from "./models/Shell";
import Squid from "./models/Squid";

export const OceanIndex = () => {
  return (
    <group>
      <OceanFloor position={[0, -500, 0]} scale={50} />
      <BlueWhale position={[100, 400, 0]} scale={0.7} />
      <Ocean position={[0, 1500, 0]} scale-x={150} scale-y={50} scale-z={150} />
      <Guppy position={[0, -100, 0]} scale={2} />
      <Squid position={[300, -150, -400]} scale={5} />
      <Pocillopora position={[400, -220, 400]} scale={1} />
      <Shell position={[-420, -270, -300]} scale={0.1} />
      <Manta position={[800, 200, 0]} scale={50} />
      <Barracuda position={[-200, 200, 800]} scale={10} />
      <Bream position={[100, 100, -500]} scale={10} />
      <HammerheadShark position={[300, 850, 0]} scale={120} />
    </group>
  );
};
