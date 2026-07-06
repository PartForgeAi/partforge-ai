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
    missingInformation: conversation.questions.map((question) => question.title),
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
      questions: [],
      isReadyForSpecification: false,
    },
    questionId,
    answer
  );

  const recommendations = generateRecommendations(conversation.specification);

  return {
    ...currentState,
    specification: conversation.specification,
    recommendations,
    missingInformation: conversation.questions.map((question) => question.title),
    conversationHistory: [
      ...currentState.conversationHistory,
      `Answered: ${answer}`,
    ],
    status: conversation.isReadyForSpecification ? "blueprint" : "asking",
  };
}