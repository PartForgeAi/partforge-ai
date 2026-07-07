import { EngineeringSpecification } from "../ai/engineeringSpecification";
import { Recommendation } from "../ai/recommendationEngine";

export interface Question {
  id: string;
  title: string;
  options: string[];
}

export interface ProjectState {
  userRequest: string;

  specification: EngineeringSpecification;

  recommendations: Recommendation[];

  questions: Question[];

  conversationHistory: string[];

  status:
    | "idle"
    | "understanding"
    | "asking"
    | "blueprint"
    | "generating"
    | "finished";
}