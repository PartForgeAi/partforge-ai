"use client";

import { useProject } from "../state/ProjectContext";
import EngineeringBlueprint from "./EngineeringBlueprint";

export default function DesignChat() {
  const { project, answerQuestion } = useProject();

  if (!project) {
    return null;
  }

  const currentQuestion = project.questions[0];

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-6 pt-12 lg:grid-cols-[1fr_420px]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <div className="mb-6">
          <div className="mb-2 text-sm text-gray-400">Your request</div>
          <div className="rounded-2xl bg-[#111827] p-4 text-white">
            {project.userRequest}
          </div>
        </div>

        <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
          <div className="mb-2 text-sm text-blue-200">
            PartForge AI Mechanical Design Engineer
          </div>

          <p className="text-lg text-white">
            I understand this as:{" "}
            <span className="font-semibold">
              {project.specification.partType.value}
            </span>
          </p>

          <p className="mt-3 text-gray-300">
            I’ll ask only the key details needed to complete the engineering
            blueprint.
          </p>

          {currentQuestion ? (
            <div className="mt-6 rounded-2xl bg-[#0B1120] p-5">
              <h3 className="font-semibold text-white">Next question</h3>

              <p className="mt-2 text-gray-300">{currentQuestion.title}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => answerQuestion(currentQuestion.id, option)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white hover:bg-white/10"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
              <h3 className="font-semibold text-green-200">
                Blueprint complete
              </h3>

              <p className="mt-2 text-gray-300">
                The engineering blueprint has enough information for the next
                stage.
              </p>

              <button className="mt-5 rounded-xl bg-green-600 px-7 py-3 font-medium text-white hover:bg-green-500">
                Generate 3D design
              </button>
            </div>
          )}
        </div>
      </div>

      <EngineeringBlueprint />
    </section>
  );
}