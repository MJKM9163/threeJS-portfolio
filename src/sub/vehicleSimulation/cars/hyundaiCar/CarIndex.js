import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { SubStore } from "../../../../stores/SubStore";
import { useControls } from "../../useControls";
import { Body } from "./Body";
import { Wheel } from "./Wheel";
let a = 0;

export const CarIndex = ({ position, ...props }) => {
  const body = useRef();
  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const wheel4 = useRef();
  const controls = useControls();
  const data = SubStore((state) => state.carCustom);
  const check = SubStore((state) => state.valueChenge);

  const { common, option } = data;
  // console.log(check);

  let wheelInfos = [];
  for (let i = 0; i < 4; i++) {
    if (i < 2) {
      wheelInfos.push({
        ...option,
        radius: common.radius,
        isFrontWheel: true,
        chassisConnectionPointLocal: [
          i === 1 ? -common.width / 1.5 : common.width / 1.5,
          common.height,
          common.front,
        ],
      });
    } else {
      wheelInfos.push({
        ...option,
        radius: common.radius,
        isFrontWheel: false,
        chassisConnectionPointLocal: [
          i === 3 ? -common.width / 1.5 : common.width / 1.5,
          common.height,
          common.back,
        ],
      });
    }
  }

  const [ref, api] = useRaycastVehicle(() => ({
    chassisBody: body,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [...wheelInfos],
    indexForwardAxis: 2,
    indexRightAxis: 0,
    indexUpAxis: 1,
  }));

  useFrame(() => {
    const { forward, backward, left, right, brake, reset, test } =
      controls.current;

    const forceMultiplier = forward && !backward ? -1 : 1;
    forward || backward
      ? api.applyEngineForce(common.force * forceMultiplier, 0)
      : api.applyEngineForce(0, 0);

    for (let s = 0; s < 2; s++) {
      const steerMultiplier = left && !right ? 1 : -1;

      left || right
        ? api.setSteeringValue(common.steer * steerMultiplier, s)
        : api.setSteeringValue(0, s);
    }

    for (let b = 2; b < 4; b++) {
      const brakeMultipler = brake ? common.maxBrake : 0;
      api.setBrake(brakeMultipler, b);
    }
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <Body ref={body} />
      <Wheel ref={wheel1} left />
      <Wheel ref={wheel2} />
      <Wheel ref={wheel3} left />
      <Wheel ref={wheel4} />
      {/* <mesh>
        <boxGeometry args={[front, 30, 30]} />
        <meshNormalMaterial />
      </mesh> */}
    </group>
  );
};
