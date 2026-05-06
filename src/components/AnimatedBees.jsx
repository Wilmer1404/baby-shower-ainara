import React from 'react';
import './AnimatedBees.css';

const BeeIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wings */}
    <ellipse cx="20" cy="22" rx="14" ry="8" fill="rgba(200,230,255,0.7)" stroke="rgba(150,180,220,0.5)" strokeWidth="0.5"
      style={{ animation: 'wings 0.12s ease-in-out infinite', transformOrigin: '28px 26px' }} />
    <ellipse cx="44" cy="22" rx="14" ry="8" fill="rgba(200,230,255,0.7)" stroke="rgba(150,180,220,0.5)" strokeWidth="0.5"
      style={{ animation: 'wings 0.12s ease-in-out infinite 0.06s', transformOrigin: '36px 26px' }} />
    {/* Body */}
    <ellipse cx="32" cy="36" rx="12" ry="16" fill="#f5c842" />
    <ellipse cx="32" cy="36" rx="12" ry="16" fill="url(#beeGrad)" />
    {/* Stripes */}
    <rect x="20" y="30" width="24" height="5" rx="2" fill="#3d2b1f" opacity="0.7" />
    <rect x="20" y="39" width="24" height="5" rx="2" fill="#3d2b1f" opacity="0.7" />
    {/* Head */}
    <ellipse cx="32" cy="21" rx="9" ry="8" fill="#f5c842" />
    {/* Eyes */}
    <circle cx="29" cy="20" r="2" fill="#3d2b1f" />
    <circle cx="35" cy="20" r="2" fill="#3d2b1f" />
    <circle cx="29.7" cy="19.3" r="0.7" fill="white" />
    <circle cx="35.7" cy="19.3" r="0.7" fill="white" />
    {/* Smile */}
    <path d="M28 23 Q32 26 36 23" stroke="#3d2b1f" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Antennae */}
    <line x1="27" y1="13" x2="22" y2="7" stroke="#6b4c2a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="21.5" cy="6" r="2" fill="#f5c842" stroke="#6b4c2a" strokeWidth="0.5" />
    <line x1="37" y1="13" x2="42" y2="7" stroke="#6b4c2a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="42.5" cy="6" r="2" fill="#f5c842" stroke="#6b4c2a" strokeWidth="0.5" />
    {/* Stinger */}
    <path d="M32 52 L29 56 L32 58 L35 56 Z" fill="#6b4c2a" />
    <defs>
      <linearGradient id="beeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#f5c842" />
      </linearGradient>
    </defs>
  </svg>
);

const BEES = [
  { id: 1, top: '8%', left: '5%', size: 38, duration: '7s', delay: '0s', path: 'bee-path-1' },
  { id: 2, top: '15%', right: '8%', size: 32, duration: '9s', delay: '1.5s', path: 'bee-path-2' },
  { id: 3, top: '35%', left: '3%', size: 28, duration: '11s', delay: '3s', path: 'bee-path-3' },
  { id: 4, top: '55%', right: '5%', size: 34, duration: '8s', delay: '2s', path: 'bee-path-4' },
  { id: 5, top: '75%', left: '8%', size: 30, duration: '10s', delay: '0.5s', path: 'bee-path-5' },
  { id: 6, top: '22%', left: '45%', size: 24, duration: '13s', delay: '4s', path: 'bee-path-6' },
];

const AnimatedBees = ({ count = 6 }) => {
  const bees = BEES.slice(0, count);
  return (
    <div className="animated-bees-container" aria-hidden="true">
      {bees.map((bee) => (
        <div
          key={bee.id}
          className={`bee bee-${bee.id}`}
          style={{
            top: bee.top,
            left: bee.left,
            right: bee.right,
            animationDuration: bee.duration,
            animationDelay: bee.delay,
          }}
        >
          <BeeIcon size={bee.size} />
        </div>
      ))}
    </div>
  );
};

export { BeeIcon };
export default AnimatedBees;
