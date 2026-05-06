import { useState, useEffect } from 'react';
import './Countdown.css';

function calculateTimeLeft(targetDate) {
  const target = new Date(targetDate);
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    passed: false,
  };
}

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (n) => String(n).padStart(2, '0');

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  if (timeLeft.passed) {
    return (
      <div className="countdown-passed">
        <span>🎉 ¡El gran día ha llegado!</span>
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <p className="countdown-label">¿Cuánto falta?</p>
      <div className="countdown-grid">
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-unit">
            <div className="countdown-box">
              <span className="countdown-number">{pad(value)}</span>
            </div>
            <span className="countdown-unit-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
