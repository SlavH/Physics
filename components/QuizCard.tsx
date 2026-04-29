'use client';
import React, { useState } from 'react';
import { Visualizer } from './Visualizer';

export const QuizCard = ({ question, onNext }: any) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <Visualizer hint={question.visual_hint} />
      {question.formula && (
        <div className="bg-gray-100 p-2 rounded text-center mb-4 font-mono">
          {question.formula}
        </div>
      )}
      <div className="grid gap-3">
        {question.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            className={`p-4 rounded-lg border text-left transition ${selected === idx ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50 border-gray-300'}`}
            onClick={() => setSelected(idx)}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-bold disabled:bg-gray-300"
        disabled={selected === null}
        onClick={() => {
            onNext(selected === question.correct_answer);
            setSelected(null);
        }}
      >
        Հաստատել
      </button>
    </div>
  );
};
