"use client";

import { useState } from "react";
import { detectIntent } from "./intentEngine";

type DesignChatProps = {
  request: string;
};

export default function DesignChat({ request }: DesignChatProps) {
  const intent = detectIntent(request);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function selectAnswer(questionId: string, answer: string) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: answer,
    }));
  }

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = intent.questions.length;
  const isComplete = answeredCount === totalQuestions;

  return (
    <section className="mx-auto flex max-w-4xl flex-col px-6 pt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <div className="mb-6">
          <div className="mb-2 text-sm text-gray-400">Your request</div>
          <div className="rounded-2xl bg-[#111827] p-4 text-white">
            {request}
          </div>
        </div>

        <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
          <div className="mb-2 text-sm text-blue-200">
            PartForge AI Mechanical Design Engineer
          </div>

          <p className="text-lg text-white">
            I understand this as:{" "}
            <span className="font-semibold">{intent.partType}</span>
          </p>

          <p className="mt-3 text-gray-300">
            Confidence: {intent.confidence}% — I’ll ask only the key details
            needed to prepare the first engineering specification.
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${intent.confidence}%` }}
            />
          </div>

          <div className="mt-6 space-y-4">
            {intent.questions.map((question, index) => {
              const selectedAnswer = answers[question.id];

              return (
                <div key={question.id} className="rounded-2xl bg-[#0B1120] p-5">
                  <h3 className="font-semibold text-white">
                    Question {index + 1}
                  </h3>

                  <p className="mt-2 text-gray-300">{question.title}</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectAnswer(question.id, option)}
                        className={`rounded-xl border px-4 py-3 text-white ${
                          selectedAnswer === option
                            ? "border-blue-400 bg-blue-600"
                            : "border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {isComplete && (
            <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
              <h3 className="font-semibold text-green-200">
                Ready for engineering specification
              </h3>

              <p className="mt-2 text-gray-300">
                I now have enough information to prepare the first design
                specification.
              </p>

              <div className="mt-4 rounded-xl bg-[#0B1120] p-4 text-sm text-gray-300">
                <div>Part type: {intent.partType}</div>
                <div>Original request: {request}</div>

                <div className="mt-3 font-semibold text-white">Answers:</div>

                {intent.questions.map((question) => (
                  <div key={question.id}>
                    {question.title}: {answers[question.id]}
                  </div>
                ))}
              </div>

              <button className="mt-5 rounded-xl bg-green-600 px-7 py-3 font-medium text-white hover:bg-green-500">
                Create specification
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}