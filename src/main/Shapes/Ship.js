import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";
import { useMemo, useRef, useState } from "react";
import { inSphere, inBox } from "maath/random";
import { MainStore } from "../../stores/MainStore";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Water } from "three-stdlib";

extend({ Water });

const Ocean = () => {
  const ref = useRef();
  //const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, "water/waternormal.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(2500, 2500), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: "#ffffff",
      waterColor: "#00aeff",
      distortionScale: 3.7,
      fog: false,
      //format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
};

const array = new Array(6).fill(0);
export const Ship = () => {
  const [active, setActive] = useState(0);
  const { control } = useSpring({
    control: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.00001 },
  });

  useFrame((e) => {
    //console.log(e);
    // if (clock.elapsedTime > 5) {
    //   setActive(Number(!active));
    // }
  });
  return (
    <group>
      <mesh
        onClick={() => {
          setActive(Number(!active));
        }}
        position={[0, 50, 1000]}
        rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial color={"white"} />
      </mesh>

      <group name="ship">
        <mesh
          name="plane"
          position={[0, 50, 0]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1500, 1000]} />
          <meshBasicMaterial color={"gray"} />
        </mesh>
        <group name="sticks" position={[-700, 0, -470]}>
          {array.map((item, index) => (
            <mesh
              position={[index * 270, 200, 0]}
              rotation={[-Math.PI / 2, 0, 0]}>
              <boxGeometry args={[10, 10, 300]} />
              <meshBasicMaterial color={"white"} />
              <mesh position={[130, 0, 130]} rotation={[-Math.PI / 2, 0, 0]}>
                <boxGeometry args={[290, 5, 5]} />
                <meshBasicMaterial olor={"green"} />
              </mesh>
              <mesh position={[130, 0, 30]} rotation={[-Math.PI / 2, 0, 0]}>
                <boxGeometry args={[290, 5, 5]} />
                <meshBasicMaterial olor={"green"} />
              </mesh>
              <mesh position={[130, 0, -70]} rotation={[-Math.PI / 2, 0, 0]}>
                <boxGeometry args={[290, 5, 5]} />
                <meshBasicMaterial olor={"green"} />
              </mesh>
            </mesh>
          ))}
        </group>
        <mesh name="wall" position={[0, 50, 0]} rotation={[0, Math.PI / 1, 0]}>
          <planeGeometry args={[1500, 1000]} />
          <meshBasicMaterial color={"yellow"} side={THREE.DoubleSide} />
          <group name="door">
            <mesh position={[-400, 350, 0]}>
              <torusGeometry args={[100, 5, 15, 100, Math.PI]} />
              <meshBasicMaterial color={"red"} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[-300, 250, 0]}>
              <cylinderGeometry args={[5, 5, 200, 30, 1]} />
              <meshBasicMaterial color={"red"} />
            </mesh>
            <mesh position={[-500, 250, 0]}>
              <cylinderGeometry args={[5, 5, 200, 30, 1]} />
              <meshBasicMaterial color={"red"} />
            </mesh>
            <mesh position={[-400, 150, 0]} rotation={[0, 0, Math.PI / 1]}>
              <torusGeometry args={[100, 5, 15, 100, Math.PI]} />
              <meshBasicMaterial color={"red"} side={THREE.DoubleSide} />
            </mesh>
          </group>
        </mesh>
      </group>
      <a.group scale={control.to([0, 1], [0, 3.5])} position={[0, 0, 0]}>
        <Ocean />
      </a.group>
    </group>
  );
};
