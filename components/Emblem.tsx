export default function Emblem({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="28" stroke="#b26bff" strokeOpacity=".4" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="21" stroke="#b26bff" strokeWidth="2" strokeDasharray="6 4" />
      <path d="M32 14l15.6 27H16.4z" stroke="#ff4d8d" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="4" fill="#ff4d8d" />
    </svg>
  );
}
