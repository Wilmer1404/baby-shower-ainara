import './HoneyDrips.css';

const HoneyDrips = () => {
  const drips = [
    { left: '8%', width: 18, height: 55, delay: '0s' },
    { left: '18%', width: 14, height: 40, delay: '0.4s' },
    { left: '30%', width: 20, height: 70, delay: '0.8s' },
    { left: '42%', width: 16, height: 50, delay: '0.2s' },
    { left: '55%', width: 22, height: 65, delay: '1.2s' },
    { left: '65%', width: 15, height: 45, delay: '0.6s' },
    { left: '75%', width: 19, height: 60, delay: '1s' },
    { left: '85%', width: 13, height: 38, delay: '0.3s' },
    { left: '93%', width: 17, height: 52, delay: '1.4s' },
  ];

  return (
    <div className="honey-drips-wrapper" aria-hidden="true">
      {/* Honey bar top */}
      <div className="honey-bar" />
      {/* Drips */}
      {drips.map((drip, i) => (
        <div
          key={i}
          className="honey-drip"
          style={{
            left: drip.left,
            width: drip.width,
            animationDelay: drip.delay,
          }}
        >
          <div className="drip-body" style={{ animationDelay: drip.delay }} />
          <div className="drip-drop" style={{ animationDelay: drip.delay }} />
        </div>
      ))}
    </div>
  );
};

export default HoneyDrips;
