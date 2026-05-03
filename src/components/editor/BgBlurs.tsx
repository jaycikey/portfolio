export default function BgBlurs() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute"
        style={{
          right: '5%',
          top: '12%',
          width: 380,
          height: 420,
          background: 'rgb(77,91,206)',
          opacity: 0.18,
          borderRadius: '40% 60% 70% 30% / 50% 50% 60% 40%',
          filter: 'blur(60px)',
          transform: 'rotate(-15deg)',
        }}
      />
      <div
        className="absolute"
        style={{
          right: '18%',
          top: '30%',
          width: 320,
          height: 360,
          background: 'rgb(67,217,173)',
          opacity: 0.15,
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(60px)',
          transform: 'rotate(20deg)',
        }}
      />
    </div>
  );
}
