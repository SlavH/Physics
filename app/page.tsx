'use client';
import { useState } from 'react';
import { questions, topics } from '@/data/questions';
import { QuizCard } from '@/components/QuizCard';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);

  const topicQuestions = selectedTopic
    ? questions.filter(q => q.topic === topics[selectedTopic])
    : [];

  const handleAnswer = (isCorrect: boolean) => {
    setAnswers(prev => [...prev, isCorrect]);
    if (isCorrect) setScore(s => s + 1);
  };

  const startQuiz = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
    setShowResults(false);
  };

  const goToNext = () => {
    if (currentIndex < topicQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    setSelectedTopic(null);
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (!selectedTopic) {
    return (
      <main className="max-w-3xl mx-auto p-4 py-10">
        <h1 className="text-4xl font-bold mb-2 text-center">Ֆիզիկայի թեստեր</h1>
        <p className="text-center text-gray-500 mb-8">2020 թվականի երկրորդ կիսամյակի քննական թեստեր</p>
        <div className="grid gap-3">
          {Object.entries(topics).map(([key, name]) => {
            const count = questions.filter(q => q.topic === name).length;
            return (
              <button
                key={key}
                className="p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:border-blue-400 hover:shadow-lg transition text-left flex justify-between items-center"
                onClick={() => startQuiz(key)}
              >
                <div>
                  <span className="font-bold text-blue-600 mr-2">Թեմա {key}</span>
                  <span>{name}</span>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{count} հարց</span>
              </button>
            );
          })}
        </div>
      </main>
    );
  }

  if (showResults) {
    const total = topicQuestions.length;
    const pct = Math.round((score / total) * 100);
    return (
      <main className="max-w-3xl mx-auto p-4 py-10">
        <div className="text-center bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Արդյունքներ</h2>
          <p className="text-5xl font-bold text-blue-600 mb-2">{score}/{total}</p>
          <p className="text-xl text-gray-600 mb-2">{pct}%</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6 max-w-md mx-auto">
            <div className="bg-blue-600 h-4 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
          <div className="space-y-2 mb-8">
            {answers.map((correct, i) => (
              <div key={i} className="flex justify-center gap-2">
                <span className={`font-bold ${correct ? 'text-green-600' : 'text-red-600'}`}>
                  {i + 1}.
                </span>
                <span className={correct ? 'text-green-600' : 'text-red-600'}>
                  {correct ? 'Ճիշտ ✓' : 'Սխալ ✗'}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              onClick={() => startQuiz(selectedTopic)}
            >
              Կրկնել
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
              onClick={goBack}
            >
              ← Վերադառնալ թեմաներին
            </button>
          </div>
        </div>
      </main>
    );
  }

  const currentQuestion = topicQuestions[currentIndex];

  return (
    <main className="max-w-3xl mx-auto p-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <button
          className="text-gray-500 hover:text-gray-700 transition"
          onClick={goBack}
        >
          ← Թեմաներ
        </button>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {topicQuestions.length}
        </span>
        <span className="text-sm text-green-600 font-medium">
          Ճիշտ՝ {score}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / topicQuestions.length) * 100}%` }}
        />
      </div>
      <QuizCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        onNext={goToNext}
        questionIndex={currentIndex + 1}
      />
    </main>
  );
}
