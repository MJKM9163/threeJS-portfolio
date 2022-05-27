import { ChemicalStore } from "../ChemicalStore";

export const NitrogenField = () => {
  const nitrogen = ChemicalStore((state) => state.nitrogenArray);
  return (
    <group>
      <mesh></mesh>
    </group>
  );
};
