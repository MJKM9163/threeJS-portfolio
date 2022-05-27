import { ChemicalStore } from "../ChemicalStore";

export const OxygenField = () => {
  const oxygen = ChemicalStore((state) => state.oxygenArray);
  return (
    <group>
      <mesh></mesh>
    </group>
  );
};
