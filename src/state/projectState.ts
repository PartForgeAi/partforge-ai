import { EngineeringSpecification } from "../ai/engineeringSpecification";
import { Recommendation } from "../ai/recommendationEngine";

export interface ProjectState {
  userRequest: string;

  specification: EngineeringSpecification;

  recommendations: Recommendation[];

  missingInformation: string[];

  conversationHistory: string[];

  status:
    | "idle"
    | "understanding"
    | "asking"
    | "blueprint"
    | "generating"
    | "finished";
}