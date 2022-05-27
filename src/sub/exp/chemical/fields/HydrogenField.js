import { ChemicalStore } from "../ChemicalStore";

export const HydrogenField = () => {
  const hydro = ChemicalStore((state) => state.hydrogenArray);
  return (
    <group>
      <mesh></mesh>
    </group>
  );
};
