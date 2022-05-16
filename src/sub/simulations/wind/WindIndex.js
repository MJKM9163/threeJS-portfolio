import { useBox, usePlane } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Wind } from "./Wind";
import Model from "./windGenerator/Model";

const max = [10, 75, 100];
const min = [10, 75, 100];
let windArr = new Array(500)
  .fill(0)
  .map((e) => [
    Math.floor(Math.random() * (max[0] + min[0]) - min[0]),
    Math.floor(Math.random() * (max[1] + min[1]) - min[1]),
    Math.floor(Math.random() * (max[2] + min[2]) - min[2]),
  ]);

const Wall = ({ ...props }) => {
  const [boxRef, boxApi] = useBox(() => ({
    mass: 1,
    type: "Static",
    ...props,
  }));
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={props.args} />
      <meshNormalMaterial />
    </mesh>
  );
};

export const WindIndex = () => {
  usePlane(() => ({
    mass: 1,
    type: "Static",
    position: [0, -1, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <group>
      <Wall position={[50, 25, 0]} args={[1, 50, 200]} />
      <Wall position={[-50, 25, 0]} args={[1, 50, 200]} />
      <Wall position={[0, 25, -100]} args={[100, 50, 1]} />
      <Wall position={[0, 25, 100]} args={[100, 50, 1]} />
      <Model />
      {windArr.map((i, index) => (
        <Wind pos={i} key={index} />
      ))}
    </group>
  );
};
