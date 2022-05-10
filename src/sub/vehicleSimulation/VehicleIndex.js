import { useBox } from "@react-three/cannon";
import { Vehicle } from "./cars/hyundaiCar/Hyundai";

export const VehicleIndex = () => {
  const catseyeArr = new Array(17).fill("catseye");
  const [roadRef, roadApi] = useBox(() => ({
    type: "Static",
    mass: 1,
    rotation: [0, 0, 0], //z 0.1
    position: [0, 0, 0],
    args: [1250, 10, 625],
    material: "ground",
  }));
  const [centerRef, centerApi] = useBox(() => ({
    type: "Dynamic",
    mass: 1,
    rotation: [0, 0, 0],
    position: [-50, 50, 200],
    args: [100, 25, 10],
  }));
  return (
    <group>
      <group name="Road">
        <mesh ref={roadRef} rotation={[0, 0, 0]}>
          <boxGeometry args={[1250, 10, 625]} />
          <meshBasicMaterial color={"gray"} />
          <group>
            {catseyeArr.map((e, i) => (
              <mesh key={e + i} position={[75 * i + -610, 4, 0]}>
                <sphereGeometry args={[2]} />
                <meshBasicMaterial color={"red"} />
              </mesh>
            ))}
          </group>
        </mesh>
        <mesh ref={centerRef}>
          <boxGeometry args={[100, 25, 10]} />
          <meshNormalMaterial />
        </mesh>
      </group>
      {/* <Bongo rotation={[0, -Math.PI / 2, 0]} position={[0, 100, 0]} /> */}
      <Vehicle rotation={[0, 3, 0]} />
    </group>
  );
};
