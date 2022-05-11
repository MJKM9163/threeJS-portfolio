import { useCylinder, useRaycastVehicle } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { SubStore } from "../../../../stores/SubStore";
import { useControls } from "../../useControls";
import { Body } from "./Body";
import { Wheel } from "./Wheel";
let a = 0;
export const CarIndex = ({ position, ...props }) => {
  const main = useRef();
  const body = useRef();
  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const wheel4 = useRef();
  const controls = useControls();
  const select = SubStore((state) => state.carSelect);
  const data = SubStore.getState().carList;
  const { common, option } = data[select];

  const wheelInfo1 = {
    ...option,
    radius: common.radius,
    isFrontWheel: true,
    chassisConnectionPointLocal: [
      -common.width / 1.5,
      common.height,
      common.front,
    ],
  };
  const wheelInfo2 = {
    ...option,
    radius: common.radius,
    isFrontWheel: true,
    chassisConnectionPointLocal: [
      common.width / 1.5,
      common.height,
      common.front,
    ],
  };
  const wheelInfo3 = {
    ...option,
    radius: common.radius,
    isFrontWheel: true,
    chassisConnectionPointLocal: [
      -common.width / 1.5,
      common.height,
      common.back,
    ],
  };
  const wheelInfo4 = {
    ...option,
    radius: common.radius,
    isFrontWheel: true,
    chassisConnectionPointLocal: [
      common.width / 1.5,
      common.height,
      common.back,
    ],
  };

  const [ref, api] = useRaycastVehicle(() => ({
    chassisBody: body,
    wheels: [wheel1, wheel2, wheel3, wheel4],
    wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
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

    // S is referring to the front wheels
    for (let s = 0; s < 2; s++) {
      const steerMultiplier = left && !right ? 1 : -1;

      left || right
        ? api.setSteeringValue(common.steer * steerMultiplier, s)
        : api.setSteeringValue(0, s);
    }

    // B is referring to the back wheels
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
    </group>
  );
};
