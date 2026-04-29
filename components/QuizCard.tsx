'use client';
import React, { useState } from 'react';
import { MathText } from './MathText';
import type { Question } from '@/data/questions';

export const QuizCard = ({ question, onAnswer, onNext, questionIndex }: {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  questionIndex: number;
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const isCorrect = selected === question.correct_answer;

  const handleConfirm = () => {
    if (selected === null) return;
    setConfirmed(true);
    onAnswer(selected === question.correct_answer);
  };

  const handleNext = () => {
    setSelected(null);
    setConfirmed(false);
    onNext();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="text-lg font-bold mb-4 leading-relaxed">
        <span className="text-blue-600 mr-2">Հարց {question.id}.</span>
        <MathText text={question.question} />
      </div>
      {question.formula && (
        <div className="bg-gray-100 p-3 rounded-lg text-center mb-4">
          <MathText text={question.formula} block />
        </div>
      )}
      <div className="grid gap-3">
        {question.options.map((opt: string, idx: number) => {
          let classes = 'p-4 rounded-lg border text-left transition ';
          if (confirmed) {
            if (idx === question.correct_answer) {
              classes += 'bg-green-50 border-green-500 ring-2 ring-green-200 ';
            } else if (idx === selected && !isCorrect) {
              classes += 'bg-red-50 border-red-500 ring-2 ring-red-200 ';
            } else {
              classes += 'border-gray-200 opacity-50 ';
            }
          } else if (selected === idx) {
            classes += 'bg-blue-50 border-blue-500 ring-2 ring-blue-200 ';
          } else {
            classes += 'hover:bg-gray-50 border-gray-300 ';
          }

          return (
            <button
              key={idx}
              className={classes}
              onClick={() => !confirmed && setSelected(idx)}
              disabled={confirmed}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border ${
                  confirmed && idx === question.correct_answer
                    ? 'bg-green-500 border-green-500 text-white'
                    : confirmed && idx === selected && !isCorrect
                    ? 'bg-red-500 border-red-500 text-white'
                    : selected === idx
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {confirmed && idx === question.correct_answer ? '✓' : confirmed && idx === selected && !isCorrect ? '✗' : idx + 1}
                </span>
                <span className="leading-relaxed"><MathText text={opt} /></span>
              </div>
            </button>
          );
        })}
      </div>

      {confirmed && (
        <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          <p className="font-bold text-lg">
            {isCorrect ? '✓ Ճիշտ է!' : '✗ Սխալ է!'}
          </p>
          {!isCorrect && (
            <p className="mt-1">
              Ճիշտ պատասխանը՝ {question.correct_answer + 1}) <MathText text={question.options[question.correct_answer]} />
            </p>
          )}
        </div>
      )}

      <button
        className={`w-full mt-6 py-3 rounded-lg font-bold text-white transition ${
          confirmed
            ? 'bg-blue-600 hover:bg-blue-700'
            : selected !== null
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={selected === null}
        onClick={confirmed ? handleNext : handleConfirm}
      >
        {confirmed ? 'Հաջորդը →' : 'Հաստատել'}
      </button>
    </div>
  );
};
