'use client';
import { useState } from 'react';
import { QuizCard } from '@/components/QuizCard';
import { questions } from '@/data/questions';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNext = (isCorrect: boolean) => {
    if (isCorrect) setScore(s => s + 1);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setCurrentIndex(questions.length);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Ֆիզիկայի թեստեր</h1>
      {currentIndex < questions.length ? (
        <QuizCard question={questions[currentIndex]} onNext={handleNext} />
      ) : (
        <div className="text-center bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">Ավարտվեց</h2>
          <p className="text-xl mt-4">Ձեր արդյունքը՝ {score}/{questions.length}</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={() => window.location.reload()}>Կրկնել</button>
        </div>
      )}
    </main>
  );
}
