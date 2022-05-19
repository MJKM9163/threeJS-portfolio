import { Color, Vector3 } from "three";
import { SubStore } from "../../../stores/SubStore";
import { Construction } from "./Construction";
import { usePlane } from "@react-three/cannon";

export const BuildingIndex = () => {
  const [planeRef, planeApi] = usePlane(() => ({
    mass: 1,
    type: "Static",
    position: [0, -0.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const planeArray = new Array(30).fill(0);
  return (
    <group dispose={null}>
      <group position={[-580, 0.1, -580]}>
        {planeArray.map((item, index_x) => (
          <group key={"planeX" + index_x}>
            {planeArray.map((item, index_z) => (
              <mesh
                key={"planeZ" + index_z}
                onPointerOver={(e) => {
                  e.object.material.color = new Color(47, 79, 79);
                  e.object.material.opacity = 1;
                }}
                onPointerOut={(e) => {
                  e.object.material.color = new Color(1, 1, 1);
                  e.object.material.opacity = 0.5;
                }}
                onClick={(e) => {
                  const pos = SubStore.getState().buildingPos;
                  pos.some(
                    (i) =>
                      i.toString() ===
                      [...e.object.getWorldPosition(new Vector3())].toString()
                  )
                    ? console.log("이미 설치한 자리입니다.")
                    : SubStore.setState({
                        buildingPos: [
                          ...pos,
                          [
                            ...Object.values(
                              e.object.getWorldPosition(new Vector3())
                            ),
                          ],
                        ],
                      });
                }}
                position={[index_x * 40, 0, index_z * 40]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[30, 30]} />
                <meshBasicMaterial opacity={0.5} transparent />
              </mesh>
            ))}
          </group>
        ))}
      </group>
      <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1200, 1200]} />
        <meshBasicMaterial color={"DarkSlateGray"} />
      </mesh>
      <Construction />
    </group>
  );
};
