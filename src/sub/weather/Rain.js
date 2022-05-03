import { useBox } from "@react-three/cannon";

export const Rain = () => {
  const [boxRef, boxApi] = useBox(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 50, 0],
    args: [10, 10, 10],
  }));

  return (
    <group>
      {/* <mesh ref={boxRef}>
        <boxGeometry args={[10, 10, 10]} />
        <meshNormalMaterial />
      </mesh> */}
      <mesh>
        <boxGeometry args={[20, 20, 20]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};
