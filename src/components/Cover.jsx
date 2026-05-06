import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBees from './AnimatedBees';
import HoneyDrips from './HoneyDrips';
import './Cover.css';

const Cover = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [envelopeStage, setEnvelopeStage] = useState('idle'); // idle | flap-open | fly-out

  const handleEnvelopeClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setEnvelopeStage('flap-open');

    setTimeout(() => {
      setEnvelopeStage('fly-out');
    }, 600);

    setTimeout(() => {
      onOpen();
    }, 1300);
  };

  return (
    <motion.div
      className="cover-screen honeycomb-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      {/* Honey Drips Top */}
      <HoneyDrips />

      {/* Animated Bees */}
      <AnimatedBees count={6} />

      {/* Background decorative hexagons */}
      <div className="hex-deco hex-deco-1" aria-hidden="true" />
      <div className="hex-deco hex-deco-2" aria-hidden="true" />
      <div className="hex-deco hex-deco-3" aria-hidden="true" />

      {/* Sparkle dots */}
      <div className="sparkle s1" aria-hidden="true">✦</div>
      <div className="sparkle s2" aria-hidden="true">✦</div>
      <div className="sparkle s3" aria-hidden="true">✦</div>
      <div className="sparkle s4" aria-hidden="true">✦</div>

      {/* Main content */}
      <div className="cover-content">
        {/* Title header */}
        <motion.div
          className="cover-title-section"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="cover-ribbon">
            <span className="ribbon-text">Ainara Anthonella</span>
          </div>
          <h1 className="cover-main-title">
            <span>Mi</span>
            <span className="cover-title-highlight"> Baby Shower</span>
          </h1>
        </motion.div>

        {/* Envelope */}
        <motion.div
          className="envelope-wrapper"
          initial={{ scale: 0.7, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring', bounce: 0.35 }}
        >
          <motion.button
            id="open-invitation-btn"
            className={`envelope ${envelopeStage}`}
            onClick={handleEnvelopeClick}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            animate={
              envelopeStage === 'fly-out'
                ? { scale: 1.15, opacity: 0, y: -60, transition: { duration: 0.6 } }
                : {}
            }
            aria-label="Abrir invitación del Baby Shower"
          >
            {/* Envelope body */}
            <div className="env-body">
              {/* Envelope back */}
              <div className="env-back" />
              {/* Envelope flap */}
              <div className={`env-flap ${envelopeStage === 'flap-open' || envelopeStage === 'fly-out' ? 'open' : ''}`}>
                <div className="env-flap-inner" />
              </div>
              {/* Envelope front overlay */}
              <div className="env-front">
                {/* Seal */}
                <div className="env-seal">
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <circle cx="26" cy="26" r="25" fill="#f5c842" stroke="#d4891a" strokeWidth="2" />
                    <circle cx="26" cy="26" r="20" fill="#fde68a" stroke="#e6a817" strokeWidth="1" />
                    {/* Bee in seal */}
                    <ellipse cx="26" cy="20" rx="7" ry="6" fill="#f5c842" />
                    <rect x="19" y="22" width="14" height="3.5" rx="1.5" fill="#3d2b1f" opacity="0.8" />
                    <rect x="19" y="26.5" width="14" height="3.5" rx="1.5" fill="#3d2b1f" opacity="0.8" />
                    <ellipse cx="26" cy="18" rx="5.5" ry="5" fill="#f5c842" />
                    <circle cx="24" cy="17.5" r="1.2" fill="#3d2b1f" />
                    <circle cx="28" cy="17.5" r="1.2" fill="#3d2b1f" />
                    <ellipse cx="18" cy="18" rx="7" ry="4" fill="rgba(200,230,255,0.6)" />
                    <ellipse cx="34" cy="18" rx="7" ry="4" fill="rgba(200,230,255,0.6)" />
                    <path d="M22 32 L26 38 L30 32" fill="#f5c842" stroke="#d4891a" strokeWidth="1" />
                  </svg>
                </div>
                {/* CTA text */}
                <div className="env-cta">
                  <span className="env-bee-icon">🐝</span>
                  <span className="env-cta-text">Ver invitación</span>
                </div>
              </div>
              {/* Envelope bottom fold lines */}
              <div className="env-left-fold" />
              <div className="env-right-fold" />
            </div>
          </motion.button>

          {/* Glow ring */}
          <div className="envelope-glow" aria-hidden="true" />

          {/* Sparkles around envelope */}
          <div className="env-sparkle env-sparkle-1">✨</div>
          <div className="env-sparkle env-sparkle-2">✨</div>
          <div className="env-sparkle env-sparkle-3">✨</div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="cover-subtitle-section"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <p className="cover-tap-hint">
            <span className="hint-arrow">👆</span> Toca el sobre para abrir
          </p>
        </motion.div>
      </div>

      {/* Bottom honey pool */}
      <div className="honey-pool-bottom" aria-hidden="true" />
    </motion.div>
  );
};

export default Cover;
