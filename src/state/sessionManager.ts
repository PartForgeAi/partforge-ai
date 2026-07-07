import { startConversation, answerQuestion } from "../ai/conversationEngine";
import { generateRecommendations } from "../ai/recommendationEngine";
import { ProjectState } from "./projectState";

export function createDesignSession(userRequest: string): ProjectState {
  const conversation = startConversation(userRequest);
  const recommendations = generateRecommendations(conversation.specification);

  return {
    userRequest,
    specification: conversation.specification,
    recommendations,
    questions: conversation.questions,
    conversationHistory: [
      `User request: ${userRequest}`,
      `Detected part type: ${
        conversation.specification.partType.value ?? "Unknown"
      }`,
    ],
    status: conversation.isReadyForSpecification ? "blueprint" : "asking",
  };
}

export function updateDesignSessionWithAnswer(
  currentState: ProjectState,
  questionId: string,
  answer: string
): ProjectState {
  const conversation = answerQuestion(
    {
      specification: currentState.specification,
      questions: currentState.questions,
      isReadyForSpecification: currentState.questions.length === 0,
    },
    questionId,
    answer
  );

  const recommendations = generateRecommendations(conversation.specification);

  return {
    ...currentState,
    specification: conversation.specification,
    recommendations,
    questions: conversation.questions,
    conversationHistory: [
      ...currentState.conversationHistory,
      `Answered: ${answer}`,
    ],
    status: conversation.isReadyForSpecification ? "blueprint" : "asking",
  };
}