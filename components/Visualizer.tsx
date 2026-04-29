import React from 'react';

interface VisualizerProps {
  hint: 'circuit' | 'optics' | 'graph' | 'particles';
}

export const Visualizer: React.FC<VisualizerProps> = ({ hint }) => {
  return (
    <div className="flex justify-center items-center h-32 bg-gray-50 rounded-lg my-4">
      {hint === 'circuit' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24 stroke-black" fill="none" strokeWidth="2">
          <rect x="10" y="5" width="80" height="40" />
          <path d="M50 5 L50 15 M50 35 L50 45" />
          <circle cx="50" cy="25" r="10" />
        </svg>
      )}
      {hint === 'optics' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24 stroke-blue-500" strokeWidth="2">
          <line x1="0" y1="25" x2="100" y2="25" strokeDasharray="4" stroke="gray" />
          <path d="M10 25 L50 25 L70 10" />
        </svg>
      )}
      {hint === 'graph' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24 stroke-green-600" fill="none" strokeWidth="2">
          <path d="M0 45 L20 40 L40 20 L80 10" />
          <line x1="0" y1="0" x2="0" y2="50" stroke="black" strokeWidth="1" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="black" strokeWidth="1" />
        </svg>
      )}
      {hint === 'particles' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24 fill-red-500">
          <circle cx="20" cy="25" r="5" />
          <circle cx="50" cy="25" r="5" />
          <circle cx="80" cy="25" r="5" />
          <path d="M25 25 L45 25" stroke="black" strokeWidth="2" />
          <path d="M55 25 L75 25" stroke="black" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};
