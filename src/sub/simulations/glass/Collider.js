import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export const Collider = ({ ...props }) => {
  const [ref, api] = useSphere(() => ({
    mass: 10,
    type: "Dynamic",
    ...props,
    onCollide: (e) => {
      console.log(e);
    },
  }));
  console.log(ref.current);
  useFrame(() => {
    //  if (ref.current) {
    //    console.log(ref.current.getWorldPosition(new Vector3()));
    //  }
    //api.velocity.set(0, 0, -10);
    //console.log("a");
    //api.applyImpulse([0, 0, -50], [0, 0, 0]);
  });

  return (
    <mesh ref={ref} name="collider">
      <sphereGeometry {...props} />
      <meshNormalMaterial />
    </mesh>
  );
};
