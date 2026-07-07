import { EngineeringSpecification } from "./engineeringSpecification";

export interface ValidationIssue {
  severity: "info" | "warning" | "error";

  title: string;

  message: string;

  recommendation?: string;
}

export function validateSpecification(
  specification: EngineeringSpecification
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // -------------------------
  // Missing information
  // -------------------------

  if (!specification.mountingSurface.value) {
    issues.push({
      severity: "warning",
      title: "Mounting surface missing",
      message:
        "The mounting surface has not yet been specified.",
    });
  }

  if (!specification.loadKg.value) {
    issues.push({
      severity: "warning",
      title: "Load unknown",
      message:
        "The expected load is required before engineering decisions can be made.",
    });
  }

  // -------------------------
  // Material checks
  // -------------------------

  if (
    specification.material.value === "PLA" &&
    (specification.loadKg.value ?? 0) > 10
  ) {
    issues.push({
      severity: "error",
      title: "Material unsuitable",
      message:
        "PLA is not recommended for sustained loads above approximately 10 kg.",
      recommendation:
        "Consider PETG, ABS or Nylon.",
    });
  }

  // -------------------------
  // Heavy loads
  // -------------------------

  if ((specification.loadKg.value ?? 0) > 25) {
    issues.push({
      severity: "warning",
      title: "High structural load",
      message:
        "This design may require reinforcement or thicker sections.",
      recommendation:
        "Increase wall thickness and evaluate bending stresses.",
    });
  }

  // -------------------------
  // Large thickness
  // -------------------------

  if ((specification.thickness.value ?? 0) > 12) {
    issues.push({
      severity: "info",
      title: "Large wall thickness",
      message:
        "Large solid sections increase print time and material usage.",
    });
  }

  return issues;
}