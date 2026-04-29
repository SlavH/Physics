import React from 'react';

interface VisualizerProps {
  hint?: string;
}

export const Visualizer: React.FC<VisualizerProps> = ({ hint }) => {
  if (!hint) return null;

  return (
    <div className="flex justify-center items-center h-32 bg-gray-50 rounded-lg my-4">
      {hint === 'circuit' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="2">
          <rect x="10" y="5" width="80" height="40" stroke="black" />
          <circle cx="50" cy="25" r="10" stroke="black" />
          <text x="50" y="29" textAnchor="middle" fontSize="8" fill="black">R</text>
          <path d="M50 5 L50 15 M50 35 L50 45" stroke="black" />
        </svg>
      )}
      {hint === 'magnetic_field' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="2">
          <line x1="0" y1="10" x2="100" y2="10" stroke="blue" strokeDasharray="4" />
          <line x1="0" y1="25" x2="100" y2="25" stroke="blue" strokeDasharray="4" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="blue" strokeDasharray="4" />
          <circle cx="50" cy="25" r="5" fill="red" stroke="red" />
          <text x="50" y="48" textAnchor="middle" fontSize="6" fill="black">B</text>
        </svg>
      )}
      {hint === 'wave' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="2">
          <path d="M0 25 Q10 5 20 25 Q30 45 40 25 Q50 5 60 25 Q70 45 80 25 Q90 5 100 25" stroke="blue" />
          <line x1="0" y1="25" x2="100" y2="25" stroke="gray" strokeDasharray="2" />
        </svg>
      )}
      {hint === 'particles' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24">
          <circle cx="20" cy="25" r="5" fill="red" />
          <circle cx="50" cy="25" r="5" fill="red" />
          <circle cx="80" cy="25" r="5" fill="red" />
          <path d="M25 25 L45 25" stroke="black" strokeWidth="2" />
          <path d="M55 25 L75 25" stroke="black" strokeWidth="2" />
        </svg>
      )}
      {hint === 'pendulum' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="2">
          <line x1="50" y1="5" x2="50" y2="40" stroke="black" />
          <circle cx="50" cy="40" r="5" fill="blue" stroke="black" />
          <path d="M50 5 L35 35" stroke="gray" strokeDasharray="2" />
        </svg>
      )}
      {hint === 'coil' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="2">
          <path d="M10 25 Q20 10 30 25 Q40 40 50 25 Q60 10 70 25 Q80 40 90 25" stroke="black" />
          <line x1="5" y1="25" x2="10" y2="25" stroke="black" />
          <line x1="90" y1="25" x2="95" y2="25" stroke="black" />
        </svg>
      )}
      {hint === 'interference' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="1">
          <circle cx="20" cy="25" r="15" stroke="blue" />
          <circle cx="20" cy="25" r="25" stroke="blue" />
          <circle cx="80" cy="25" r="15" stroke="red" />
          <circle cx="80" cy="25" r="25" stroke="red" />
        </svg>
      )}
      {hint === 'prism' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="2">
          <polygon points="30,45 50,5 70,45" stroke="black" />
          <line x1="5" y1="25" x2="38" y2="22" stroke="white" />
          <line x1="62" y1="20" x2="80" y2="15" stroke="red" />
          <line x1="62" y1="22" x2="80" y2="22" stroke="green" />
          <line x1="62" y1="25" x2="80" y2="30" stroke="blue" />
        </svg>
      )}
      {hint === 'photon' && (
        <svg viewBox="0 0 100 50" className="w-48 h-24" fill="none" strokeWidth="2">
          <line x1="10" y1="25" x2="60" y2="25" stroke="yellow" />
          <polygon points="55,20 65,25 55,30" fill="yellow" stroke="yellow" />
          <circle cx="75" cy="25" r="4" fill="red" />
          <path d="M65 25 L71 25" stroke="yellow" />
          <text x="75" y="42" textAnchor="middle" fontSize="6" fill="black">e⁻</text>
        </svg>
      )}
    </div>
  );
};
