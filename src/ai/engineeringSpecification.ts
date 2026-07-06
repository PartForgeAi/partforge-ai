/**
 * PartForge AI
 * Engineering Specification v1
 *
 * This object represents everything the AI knows
 * about the part being designed.
 *
 * The Conversation Engine fills this in.
 * The CAD Engine will later read it.
 */

export type Source =
  | "user"
  | "ai"
  | "engineering-rules"
  | "unknown";

export interface SpecificationField<T> {
  value: T | null;
  source: Source;
}

export interface EngineeringSpecification {
  // Identification
  partType: SpecificationField<string>;
  purpose: SpecificationField<string>;
  description: SpecificationField<string>;

  // Function
  function: SpecificationField<string>;

  // Loads
  loadKg: SpecificationField<number>;

  // Mounting
  mountingSurface: SpecificationField<string>;
  mountingMethod: SpecificationField<string>;

  // Environment
  environment: SpecificationField<string>;

  // Material
  material: SpecificationField<string>;

  // Fasteners
  fastenerType: SpecificationField<string>;

  // Geometry
  width: SpecificationField<number>;
  height: SpecificationField<number>;
  depth: SpecificationField<number>;
  thickness: SpecificationField<number>;

  // Manufacturing
  printerMaterial: SpecificationField<string>;
  layerHeight: SpecificationField<number>;

  // Status
  confidence: number;
}

export function createEmptySpecification(): EngineeringSpecification {
  return {
    partType: { value: null, source: "unknown" },
    purpose: { value: null, source: "unknown" },
    description: { value: null, source: "unknown" },

    function: { value: null, source: "unknown" },

    loadKg: { value: null, source: "unknown" },

    mountingSurface: { value: null, source: "unknown" },
    mountingMethod: { value: null, source: "unknown" },

    environment: { value: null, source: "unknown" },

    material: { value: null, source: "unknown" },

    fastenerType: { value: null, source: "unknown" },

    width: { value: null, source: "unknown" },
    height: { value: null, source: "unknown" },
    depth: { value: null, source: "unknown" },
    thickness: { value: null, source: "unknown" },

    printerMaterial: { value: null, source: "unknown" },
    layerHeight: { value: null, source: "unknown" },

    confidence: 0,
  };
}