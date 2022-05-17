import { useBox } from "@react-three/cannon";

export const Glass = ({ position }) => {
  const [ref, api] = useBox(() => ({
    mass: 10,
    type: "Dynamic",
    position,
    args: [5, 5, 1],
    collisionFilterMask: 1,
    //onCollide
    onCollide: (e) => {
      //console.log(e);
      if (e.body.name === "collider") {
        //console.log(e);
      } else {
        api.velocity.set(0, 0, 0);
        api.angularVelocity.set(0, 0, 0);
      }
    },
  }));
  //console.log(api);

  return (
    <mesh ref={ref} name="glass">
      <boxGeometry args={[5, 5, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
};
