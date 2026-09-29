export default function Core() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      <div className="core-glow absolute inset-[16%] rounded-full" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <g className="spin-slow"><circle cx="200" cy="200" r="190" fill="none" stroke="#b26bff" strokeOpacity=".4" strokeDasharray="2 10" strokeWidth="2" /></g>
        <g className="spin-rev"><circle cx="200" cy="200" r="165" fill="none" stroke="#5b5cff" strokeWidth="3" strokeDasharray="90 40 30 40" strokeLinecap="round" /></g>
        <g className="spin-slow">
          <polygon points="200,60 321,270 79,270" fill="none" stroke="#ff4d8d" strokeOpacity=".7" strokeWidth="1.5" />
          <polygon points="200,340 79,130 321,130" fill="none" stroke="#b26bff" strokeOpacity=".7" strokeWidth="1.5" />
        </g>
        <g className="spin-rev-fast"><path d="M200 84a116 116 0 0 1 100 58M200 316a116 116 0 0 1-100-58" fill="none" stroke="#ff3b4e" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" /></g>
        <circle cx="200" cy="200" r="46" fill="#b26bff" fillOpacity=".25" className="pulse" />
        <circle cx="200" cy="200" r="16" fill="#ff4d8d" className="pulse" />
      </svg>
      <div className="core-scan absolute inset-[6%] overflow-hidden rounded-full" />
    </div>
  );
}
