import { ChemicalStore } from "../ChemicalStore";
import { Carbon } from "../items/Carbon";

export const CarbonField = () => {
  const carbon = ChemicalStore((state) => state.carbonArray);

  return (
    <group>
      {carbon.map((i) => (
        <Carbon />
      ))}
    </group>
  );
};
