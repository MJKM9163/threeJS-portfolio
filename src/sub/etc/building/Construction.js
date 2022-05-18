import { SubStore } from "../../stores/SubStore";

let posArray = [];

const createFun = (endPos, keyNum) => {
  const xArray = [];
  const yArray = [];
  const zArray = [];
  for (let y = 0; y < 4; y++) {
    const xNum = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const yNum = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
    const zNum = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    const xPos =
      xNum - 10 > 0
        ? 10 - (xNum - 10) * 0.5
        : xNum === 10
        ? 10
        : 10 + (10 - xNum) * 0.5;
    const yPos = yNum / 2;
    const zPos =
      zNum - 10 > 0
        ? 10 - (zNum - 10) * 0.5
        : zNum === 10
        ? 10
        : 10 + (10 - zNum) * 0.5;
    xArray.push([xPos, xNum]);
    yArray.push([yPos, yNum]);
    zArray.push([zPos, zNum]);
  }
  posArray.push(
    <group dispose={null} key={keyNum} position={endPos}>
      <mesh position={[xArray[0][0], yArray[0][0] / 2, zArray[0][0]]}>
        <boxGeometry args={[xArray[0][1], yArray[0][1], zArray[0][1]]} />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[xArray[1][0], yArray[1][0] / 2, -zArray[1][0]]}>
        <boxGeometry args={[xArray[1][1], yArray[1][1], zArray[1][1]]} />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[-xArray[2][0], yArray[2][0] / 2, zArray[2][0]]}>
        <boxGeometry args={[xArray[2][1], yArray[2][1], zArray[2][1]]} />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[-xArray[3][0], yArray[3][0] / 2, -zArray[3][0]]}>
        <boxGeometry args={[xArray[3][1], yArray[3][1], zArray[3][1]]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export const Construction = () => {
  const check = SubStore((state) => state.buildingPos);
  const reload = SubStore.getState().buildingDefault;
  if (check.length > 0) {
    createFun(check[check.length - 1], check.length - 1);
  }
  if (reload) {
    posArray = [];
    SubStore.setState({ buildingDefault: false });
    SubStore.setState({ buildingPos: [] });
  }

  return <group dispose={null}>{posArray}</group>;
};
