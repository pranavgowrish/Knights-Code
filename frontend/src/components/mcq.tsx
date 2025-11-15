"use client";
import React, { useState } from "react";

interface MCQProps {
  passage: string;
  q1: { q: string; c1: string; c2: string; c3: string; a: string };
  q2: { q: string; c1: string; c2: string; c3: string; a: string };
  q3: { q: string; c1: string; c2: string; c3: string; a: string };
}

const MCQ = (props: MCQProps) => {
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [result, setResult] = useState<null | string>(null);

  const handleSelect = (question: "q1" | "q2" | "q3", choice: string) => {
    setAnswers({ ...answers, [question]: choice });
  };

  const handleSubmit = () => {
    const correct =
      (answers.q1 === props.q1.a ? 1 : 0) +
      (answers.q2 === props.q2.a ? 1 : 0) +
      (answers.q3 === props.q3.a ? 1 : 0);

    setResult(`You scored ${correct}/3`);
  };

  return (
    <div className="flex h-screen items-center justify-start">
      <div className="mx-auto w-full max-w-md">
        <div className="h-96 h-[90vh] w-[50vw] overflow-y-auto rounded-lg border-2 border-yellow-700 bg-yellow-100 p-4 shadow">
          {/* Passage */}
          <h2 className="mb-2 text-center text-lg font-bold text-yellow-900">
            📜 Passage
          </h2>
          <p className="mb-4 text-sm text-yellow-900">{props.passage}</p>

          {/* Questions */}
          {["q1", "q2", "q3"].map((qKey, i) => {
            const qObj = props[qKey as keyof MCQProps] as any;
            return (
              <div key={qKey} className="mb-4">
                <h3 className="mb-2 text-base font-semibold text-yellow-900">
                  {i + 1}. {qObj.q}
                </h3>

                <div className="space-y-1">
                  {[qObj.c1, qObj.c2, qObj.c3].map((c: string) => (
                    <button
                      key={c}
                      onClick={() => handleSelect(qKey as any, c)}
                      className={`w-full rounded border px-3 py-1 text-left text-sm ${
                        answers[qKey as keyof typeof answers] === c
                          ? "border-yellow-800 bg-yellow-600 text-white"
                          : "border-yellow-600 bg-yellow-200 text-yellow-900 hover:bg-yellow-300"
                      } `}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Submit */}
          <div className="mt-3 mb-4 text-center">
            <button
              onClick={handleSubmit}
              className="rounded border-2 border-red-900 bg-red-800 px-4 py-2 text-sm text-white hover:scale-105"
            >
              Submit
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className="mb-4 rounded bg-yellow-700 p-2 text-center text-sm text-white">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQ;
