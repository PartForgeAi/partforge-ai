"use client";

import { createContext, useContext, useState } from "react";
import { ProjectState } from "./projectState";
import {
  createDesignSession,
  updateDesignSessionWithAnswer,
} from "./sessionManager";

type ProjectContextType = {
  project: ProjectState | null;
  startProject: (request: string) => void;
  answerQuestion: (questionId: string, answer: string) => void;
};

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<ProjectState | null>(null);

  function startProject(request: string) {
    const newProject = createDesignSession(request);
    setProject(newProject);
  }

  function answerQuestion(questionId: string, answer: string) {
    if (!project) return;

    const updatedProject = updateDesignSessionWithAnswer(
      project,
      questionId,
      answer
    );

    setProject(updatedProject);
  }

  return (
    <ProjectContext.Provider
      value={{
        project,
        startProject,
        answerQuestion,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProject must be used inside ProjectProvider");
  }

  return context;
}