import { CarbonField } from "./fields/CarbonField";
import { HydrogenField } from "./fields/HydrogenField";
import { NitrogenField } from "./fields/NitrogenField";
import { OxygenField } from "./fields/OxygenField";
import { Pointer } from "./Pointer";

export const ChemicalIndex = () => {
  return (
    <group>
      <Pointer />
      <CarbonField />
      <HydrogenField />
      <NitrogenField />
      <OxygenField />
    </group>
  );
};
