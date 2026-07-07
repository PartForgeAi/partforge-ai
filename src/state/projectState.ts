import { EngineeringSpecification } from "../ai/engineeringSpecification";
import { Recommendation } from "../ai/recommendationEngine";
import { ValidationIssue } from "../ai/validationEngine";

export interface Question {
  id: string;
  title: string;
  options: string[];
}

export interface ProjectState {
  userRequest: string;
  specification: EngineeringSpecification;
  recommendations: Recommendation[];
  validationIssues: ValidationIssue[];
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