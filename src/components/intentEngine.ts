export type Question = {
  id: string;
  title: string;
  options: string[];
};

export type IntentResult = {
  partType: string;
  confidence: number;
  questions: Question[];
};

export function detectIntent(request: string): IntentResult {
  const text = request.toLowerCase();

  if (text.includes("shelf")) {
    return {
      partType: "Shelf bracket",
      confidence: 85,
      questions: [
        {
          id: "load",
          title: "What weight should the shelf support?",
          options: ["Up to 5 kg", "5–15 kg", "15–30 kg", "30 kg+"],
        },
        {
          id: "depth",
          title: "How deep is the shelf?",
          options: ["Under 150 mm", "150–250 mm", "250–400 mm", "Over 400 mm"],
        },
      ],
    };
  }

  if (text.includes("dyson") || text.includes("vacuum")) {
    return {
      partType: "Vacuum wall mount",
      confidence: 90,
      questions: [
        {
          id: "surface",
          title: "What type of wall will it mount to?",
          options: ["Brick", "Plasterboard", "Wood"],
        },
        {
          id: "charger",
          title: "Does the charger also need to be mounted?",
          options: ["Yes", "No"],
        },
      ],
    };
  }

  if (text.includes("phone")) {
    return {
      partType: "Phone holder",
      confidence: 80,
      questions: [
        {
          id: "phoneModel",
          title: "What phone model is it for?",
          options: ["iPhone", "Samsung", "Google Pixel", "Other"],
        },
        {
          id: "mountLocation",
          title: "Where will the holder mount?",
          options: ["Car vent", "Desk", "Wall", "Bike"],
        },
      ],
    };
  }

  if (text.includes("cable")) {
    return {
      partType: "Cable clip",
      confidence: 80,
      questions: [
        {
          id: "diameter",
          title: "What cable diameter should it hold?",
          options: ["Under 5 mm", "5–8 mm", "8–12 mm", "Over 12 mm"],
        },
        {
          id: "mounting",
          title: "How should it attach?",
          options: ["Screw", "Adhesive", "Clip-on"],
        },
      ],
    };
  }

  if (text.includes("hook")) {
    return {
      partType: "Hook",
      confidence: 75,
      questions: [
        {
          id: "load",
          title: "What load should the hook hold?",
          options: ["Under 2 kg", "2–5 kg", "5–10 kg", "10 kg+"],
        },
        {
          id: "mounting",
          title: "How should it mount?",
          options: ["Wall screws", "Pegboard", "Adhesive", "Over-door"],
        },
      ],
    };
  }

  return {
    partType: "Custom functional part",
    confidence: 45,
    questions: [
      {
        id: "purpose",
        title: "What is the main purpose of this part?",
        options: ["Hold", "Mount", "Protect", "Connect"],
      },
      {
        id: "load",
        title: "Will it carry any weight?",
        options: ["No load", "Light load", "Medium load", "Heavy load"],
      },
    ],
  };
}