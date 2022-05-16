import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

export const Wind = ({ pos }) => {
  const [windRef, windApi] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [pos[0], Math.abs(pos[1]), pos[2]],
    args: [1],
  }));
  //   console.log(windApi);
  //   useFrame(() => {
  //     windApi.applyForce([0, 0, -10], [0, 0, 0]);
  //   });

  return (
    <group dispose={null}>
      <mesh ref={windRef}>
        <sphereGeometry args={[1]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};
