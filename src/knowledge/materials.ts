export type Material = {
  name: string;

  properties: {
    tensileStrengthMPa: number;
    flexibility: "Low" | "Medium" | "High";
    impactResistance: "Low" | "Medium" | "High";
    uvResistance: "Low" | "Medium" | "High";
    temperatureResistanceC: number;
  };

  printability: {
    difficulty: "Easy" | "Medium" | "Hard";
    supportsRecommended: boolean;
  };

  engineeringUse: string[];

  avoidFor: string[];

  recommendation: {
    confidence: number;
    reason: string;
  };
};

export const Materials: Material[] = [
  {
    name: "PLA",

    properties: {
      tensileStrengthMPa: 60,
      flexibility: "Low",
      impactResistance: "Low",
      uvResistance: "Low",
      temperatureResistanceC: 55,
    },

    printability: {
      difficulty: "Easy",
      supportsRecommended: false,
    },

    engineeringUse: [
      "Prototypes",
      "Display models",
      "Light-duty brackets",
    ],

    avoidFor: [
      "Outdoor use",
      "High temperatures",
      "Heavy load parts",
    ],

    recommendation: {
      confidence: 70,
      reason:
        "Excellent for prototypes but not recommended for demanding functional parts.",
    },
  },

  {
    name: "PETG",

    properties: {
      tensileStrengthMPa: 50,
      flexibility: "Medium",
      impactResistance: "High",
      uvResistance: "Medium",
      temperatureResistanceC: 80,
    },

    printability: {
      difficulty: "Easy",
      supportsRecommended: false,
    },

    engineeringUse: [
      "Wall brackets",
      "Tool holders",
      "Machine accessories",
      "Outdoor functional parts",
    ],

    avoidFor: ["Very high temperature environments"],

    recommendation: {
      confidence: 95,
      reason:
        "Excellent balance of strength, durability and printability. Our default recommendation for most functional parts.",
    },
  },
];