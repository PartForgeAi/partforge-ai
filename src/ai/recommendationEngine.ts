import { EngineeringSpecification } from "./engineeringSpecification";

export type Recommendation = {
  category: string;
  value: string;
  confidence: number;
  reason: string;
};

export function generateRecommendations(
  specification: EngineeringSpecification
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  if (specification.partType.value === "Shelf bracket") {
    recommendations.push({
      category: "Material",
      value: "PETG",
      confidence: 95,
      reason:
        "PETG provides excellent strength, toughness and long-term durability for functional brackets.",
    });

    recommendations.push({
      category: "Fasteners",
      value: "M6 screws",
      confidence: 90,
      reason:
        "Suitable for typical wall-mounted shelf brackets and common wall plugs.",
    });

    recommendations.push({
      category: "Layer Height",
      value: "0.20 mm",
      confidence: 90,
      reason:
        "Good balance between print quality and production time.",
    });
  }

  if (specification.partType.value === "Vacuum wall mount") {
    recommendations.push({
      category: "Material",
      value: "PETG",
      confidence: 96,
      reason:
        "Better impact resistance than PLA and suitable for repeated daily use.",
    });

    recommendations.push({
      category: "Wall Thickness",
      value: "4 mm",
      confidence: 88,
      reason:
        "Provides a strong balance between stiffness and print time.",
    });
  }

  if (specification.partType.value === "Phone holder") {
    recommendations.push({
      category: "Material",
      value: "PETG",
      confidence: 90,
      reason:
        "Better heat resistance than PLA, making it more suitable for cars and sunny environments.",
    });
  }

  return recommendations;
}