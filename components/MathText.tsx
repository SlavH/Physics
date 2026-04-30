'use client';
import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  text: string;
  block?: boolean;
}

const latexCommands = [
  'rho', 'varepsilon', 'varphi', 'mu', 'nu', 'alpha', 'beta', 'gamma',
  'delta', 'omega', 'lambda', 'pi', 'Phi', 'Psi', 'Delta', 'Omega',
  'Sigma', 'Lambda', 'xi', 'zeta', 'eta', 'theta', 'sigma', 'tau',
  'cdot', 'times', 'div', 'leq', 'geq', 'sqrt', 'sum', 'int',
  'vec', 'left', 'right', 'frac', 'infty', 'approx', 'neq',
  'partial', 'nabla', 'prod', 'oplus', 'otimes',
  'sin', 'cos', 'tan', 'oint', 'circ', 'mid', 'hat', 'ell', 'psi', 'epsilon',
  'mathrm', 'text', 'overline', 'underline', 'widehat', 'tilde',
  'pm', 'mp', 'gg', 'll', 'propto', 'prime'
];

export const MathText: React.FC<MathTextProps> = ({ text, block }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const activeRef = block ? blockRef : containerRef;

  useEffect(() => {
    if (!activeRef.current) return;
    const container = activeRef.current;
    container.innerHTML = '';

    const parts: { type: 'text' | 'math'; content: string }[] = [];
    let lastIndex = 0;

    const pattern = new RegExp(
      '\\\\(' + latexCommands.join('|') + ')' +
      '(?:[_^][a-zA-Z0-9]+)?' +
      '(?:\\{[^{}]*\\})*',
      'g'
    );

    let match;
    while ((match = pattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
      }
      parts.push({ type: 'math', content: match[0] });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.slice(lastIndex) });
    }

    if (parts.length === 0) {
      parts.push({ type: 'text', content: text });
    }

    for (const part of parts) {
      if (part.type === 'math') {
        const span = document.createElement('span');
        span.className = 'inline-math mx-0.5';
        try {
          katex.render(part.content, span, { throwOnError: false, displayMode: !!block });
        } catch {
          span.textContent = part.content;
        }
        container.appendChild(span);
      } else {
        container.appendChild(document.createTextNode(part.content));
      }
    }
  }, [text, block, activeRef]);

  if (block) {
    return <div ref={blockRef} className="my-3 text-center text-lg" />;
  }

  return <span ref={containerRef} />;
};
