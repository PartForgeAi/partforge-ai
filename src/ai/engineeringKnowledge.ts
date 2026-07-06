import { EngineeringSpecification } from "./engineeringSpecification";

export function applyEngineeringDefaults(
  specification: EngineeringSpecification
): EngineeringSpecification {
  const updated = { ...specification };

  if (updated.partType.value === "Shelf bracket") {
    updated.function = { value: "Support", source: "engineering-rules" };
    updated.material = { value: "PETG", source: "engineering-rules" };
    updated.printerMaterial = { value: "PETG", source: "engineering-rules" };
    updated.layerHeight = { value: 0.2, source: "engineering-rules" };
    updated.thickness = { value: 5, source: "engineering-rules" };
    updated.fastenerType = { value: "M6 screws", source: "engineering-rules" };
  }

  if (updated.partType.value === "Vacuum wall mount") {
    updated.function = { value: "Hold", source: "engineering-rules" };
    updated.material = { value: "PETG", source: "engineering-rules" };
    updated.printerMaterial = { value: "PETG", source: "engineering-rules" };
    updated.layerHeight = { value: 0.2, source: "engineering-rules" };
    updated.thickness = { value: 4, source: "engineering-rules" };
    updated.fastenerType = { value: "M5 screws", source: "engineering-rules" };
  }

  if (updated.partType.value === "Phone holder") {
    updated.function = { value: "Hold", source: "engineering-rules" };
    updated.material = { value: "PLA or PETG", source: "engineering-rules" };
    updated.printerMaterial = { value: "PETG", source: "engineering-rules" };
    updated.layerHeight = { value: 0.2, source: "engineering-rules" };
    updated.thickness = { value: 3, source: "engineering-rules" };
  }

  return updated;
}