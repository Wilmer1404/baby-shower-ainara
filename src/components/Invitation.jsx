import { motion } from 'framer-motion';
import Countdown from './Countdown';
import AnimatedBees from './AnimatedBees';
import './Invitation.css';

/* ---- Event data ---- */
const BABY_NAME   = 'Ainara Anthonella';
const MAMA_NAME   = 'Marian Purizaca Valdiviezo';
const PAPA_NAME   = 'Juan José Ancajima Huiman';
const MAMA_PHONE  = '51974536268'; 
const PAPA_PHONE  = '51974536268'; 

const waUrl = (phone) => {
  const msg = encodeURIComponent(
    `Hola, confirmo mi asistencia al Baby Shower de ${BABY_NAME} 🐝✨`
  );
  return `https://wa.me/${phone}?text=${msg}`;
};

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Local+Liberal+Calle+Tumbes+Sinchi+Roca';

/* ---- Section fade-in variant ---- */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/* ---- Wave SVG divider ---- */
const WaveSeparator = () => (
  <div className="wave-sep" aria-hidden="true">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" width="100%" height="40">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill="rgba(245,200,66,0.15)"
      ></path>
    </svg>
    <div className="wave-bee">🐝</div>
  </div>
);

/* ---- Section wrapper ---- */
const Section = ({ children, className = '' }) => (
  <motion.section
    className={`inv-section ${className}`}
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
  >
    {children}
  </motion.section>
);

/* =========================================
   MAIN INVITATION COMPONENT
   ========================================= */
const Invitation = () => {
  return (
    <motion.div
      className="invitation-page"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Floating bees in invitation */}
      <div className="inv-bees-layer" aria-hidden="true">
        <AnimatedBees count={4} />
      </div>

      {/* ===================== */}
      {/* CARD WRAPPER */}
      {/* ===================== */}
      <div className="invitation-card premium-card">
        
        {/* Organic Background Blobs */}
        <div className="blob blob-1" aria-hidden="true"></div>
        <div className="blob blob-2" aria-hidden="true"></div>
        <div className="blob blob-3" aria-hidden="true"></div>
        
        {/* ---- TOP HONEY BAR ---- */}
        <div className="inv-top-bar" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="inv-drip" style={{ animationDelay: `${i * 0.35}s` }} />
          ))}
        </div>

        {/* ================================================= */}
        {/* SECTION 1: HERO */}
        {/* ================================================= */}
        <Section className="sec-hero">
          <p className="hero-intro">
            La dulce espera está por terminar,<br />
            te invito a mi
          </p>
          <h1 className="hero-title">Baby Shower</h1>

          {/* Hunny Bear */}
          <motion.div
            className="hunny-bear-wrapper"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <img
              src="/hunny-bear.png"
              alt="Oso Hunny con miel para el Baby Shower de Ainara Anthonella"
              className="hunny-bear-img"
              loading="eager"
            />
          </motion.div>

          {/* Baby name */}
          <motion.div
            className="baby-name-ribbon"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="baby-name-badge">
              <span className="baby-bee-emoji">🐝</span>
              <span className="baby-name">{BABY_NAME}</span>
              <span className="baby-bee-emoji">🐝</span>
            </div>
          </motion.div>
        </Section>

        <WaveSeparator />

        {/* ================================================= */}
        {/* SECTION 2: PARENTS */}
        {/* ================================================= */}
        <Section className="sec-parents">
          <p className="sec-label">Mis Papis</p>
          <div className="parents-display">
            <div className="couple-photo-frame">
              <img
                src="/couple.png"
                alt="Juan José y Marian, papás de Ainara Anthonella"
                className="couple-photo"
                loading="lazy"
              />
              <div className="photo-frame-deco" aria-hidden="true">🍯</div>
            </div>
            <div className="parents-names-group">
              <div className="parent-name-block">
                <span className="parent-name">{PAPA_NAME}</span>
              </div>
              <span className="parents-ampersand">&amp;</span>
              <div className="parent-name-block">
                <span className="parent-name">{MAMA_NAME}</span>
              </div>
            </div>
          </div>
        </Section>

        <WaveSeparator />

        {/* ================================================= */}
        {/* SECTION 3: DATE */}
        {/* ================================================= */}
        <Section className="sec-date">
          <div className="date-card">
            <div className="date-card-inner">
              <span className="date-day-name">Sábado</span>
              <div className="date-number-row">
                <div className="date-big-number">16</div>
                <div className="date-month-year">
                  <span className="date-month">Mayo</span>
                  <span className="date-year">2026</span>
                </div>
              </div>
              {/* Honey drips mini */}
              <div className="date-honey-mini" aria-hidden="true">🍯</div>
            </div>
          </div>

          {/* Countdown */}
          <Countdown targetDate="2026-05-16T18:00:00-05:00" />
        </Section>

        <WaveSeparator />

        {/* ================================================= */}
        {/* SECTION 4: LOCATION */}
        {/* ================================================= */}
        <Section className="sec-location">
          <div className="location-icon-wrap">
            <span className="location-icon">📍</span>
          </div>
          <h2 className="sec-title">Recepción</h2>

          <div className="location-info">
            <p className="location-venue">"Local Liberal"</p>
            <p className="location-address">Calle Tumbes con Sinchi Roca</p>
          </div>

          {/* Embedded map */}
          <div className="map-container">
            <iframe
              title="Ubicación Local Liberal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5!2d-80.6282!3d-5.1945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9035116f70000001%3A0x1!2sCalle+Tumbes+Piura+Peru!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            />
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-maps"
            id="maps-link-btn"
            aria-label="Ver ubicación en Google Maps"
          >
            <span>🗺️</span>
            <span>Ver ubicación</span>
          </a>

          {/* Time */}
          <div className="time-badge">
            <span className="time-icon">🕕</span>
            <span className="time-text">6:00 PM</span>
          </div>
        </Section>

        <WaveSeparator />

        {/* ================================================= */}
        {/* SECTION 5: RSVP */}
        {/* ================================================= */}
        {/* ================================================= */}
        {/* SECTION 4.5: ULTRASOUND */}
        {/* ================================================= */}
        <Section className="sec-ultrasound">
          <p className="ultrasound-label">Ya puedes ver mi carita 🥺</p>
          <div className="ultrasound-frame">
            <img
              src="/ultrasound.jpg"
              alt="Ecografía de Ainara Anthonella"
              className="ultrasound-img"
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="ultrasound-overlay" aria-hidden="true">
              <span>💛</span>
            </div>
          </div>
        </Section>

        <WaveSeparator />

        <Section className="sec-rsvp">
          <div className="rsvp-icon-wrap">
            <span className="rsvp-icon">💌</span>
          </div>
          <h2 className="sec-title">Confirmación</h2>
          <p className="rsvp-text">
            Nos encantaría saber que nos acompañarás,<br />
            permítenos preparar los detalles<br />
            <strong>confirmando tu asistencia.</strong>
          </p>

          <div className="rsvp-buttons">
            <a
              href={waUrl(MAMA_PHONE)}
              target="_blank"
              rel="noopener noreferrer"
              id="confirm-mama-btn"
              className="btn-rsvp btn-mama"
              aria-label="Confirmar asistencia a mamá por WhatsApp"
            >
              <span className="btn-wa-icon">💬</span>
              <span>Confirmar asistencia a mamá</span>
            </a>
            <a
              href={waUrl(PAPA_PHONE)}
              target="_blank"
              rel="noopener noreferrer"
              id="confirm-papa-btn"
              className="btn-rsvp btn-papa"
              aria-label="Confirmar asistencia a papá por WhatsApp"
            >
              <span className="btn-wa-icon">💬</span>
              <span>Confirmar asistencia a papá</span>
            </a>
          </div>
        </Section>

        {/* ================================================= */}
        {/* SECTION 6: CLOSING */}
        {/* ================================================= */}
        <Section className="sec-closing">
          <div className="closing-bees" aria-hidden="true">🐝🐝🐝</div>
          <p className="closing-gift-note">
            Si deseas, puedes traer un presente.
          </p>
          <div className="closing-main">
            <p className="closing-thanks-pre">Gracias</p>
            <p className="closing-thanks-sub">por ser parte de este día tan especial 🍯</p>
          </div>
          <div className="closing-honeycomb" aria-hidden="true">
            <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,5 35,5 42,17 35,29 20,29 13,17" fill="rgba(245,200,66,0.4)" stroke="#e6a817" strokeWidth="1.5"/>
              <polygon points="38,5 53,5 60,17 53,29 38,29 31,17" fill="rgba(245,200,66,0.6)" stroke="#e6a817" strokeWidth="1.5"/>
              <polygon points="56,5 71,5 78,17 71,29 56,29 49,17" fill="rgba(245,200,66,0.4)" stroke="#e6a817" strokeWidth="1.5"/>
              <polygon points="29,26 44,26 51,38 44,50 29,50 22,38" fill="rgba(245,200,66,0.7)" stroke="#e6a817" strokeWidth="1.5"/>
              <polygon points="47,26 62,26 69,38 62,50 47,50 40,38" fill="rgba(245,200,66,0.5)" stroke="#e6a817" strokeWidth="1.5"/>
              <polygon points="20,46 35,46 42,58 35,70 20,70 13,58" fill="rgba(245,200,66,0.5)" stroke="#e6a817" strokeWidth="1.5"/>
              <polygon points="38,46 53,46 60,58 53,70 38,70 31,58" fill="rgba(245,200,66,0.8)" stroke="#e6a817" strokeWidth="1.5"/>
              <polygon points="56,46 71,46 78,58 71,70 56,70 49,58" fill="rgba(245,200,66,0.5)" stroke="#e6a817" strokeWidth="1.5"/>
            </svg>
          </div>
        </Section>

        {/* ---- BOTTOM DECORATION ---- */}
        <div className="inv-bottom-deco" aria-hidden="true">
          <span>🌸</span> <span>🐝</span> <span>🍯</span> <span>🐝</span> <span>🌸</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Invitation;
