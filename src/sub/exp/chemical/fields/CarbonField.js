import { ChemicalStore } from "../ChemicalStore";
import { Carbon } from "../items/Carbon";

export const CarbonField = () => {
  const carbon = ChemicalStore((state) => state.carbonArray);
  console.log(carbon);
  return (
    <group>
      {carbon.map((i) => (
        <Carbon />
      ))}
    </group>
  );
};
