import { useBox } from "@react-three/cannon";

export const Wall = ({ args = [3000, 1500, 0], ...props }) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    type: "Static",
    args,
    ...props,
    onCollide: (e) => {
      console.log(e.body);
    },
  }));
  return (
    <group>
      <mesh ref={ref}>
        <boxGeometry args={args} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};
