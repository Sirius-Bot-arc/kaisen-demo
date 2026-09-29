"use client";
import { useEffect, useRef, useState } from "react";

// Drop a supplied/licensed character image at /public/images/yuji.png.
// Until then, an original neutral silhouette placeholder is shown.
export default function Operator() {
  const ref = useRef<HTMLImageElement>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setMissing(true);
  }, []);
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-2xl">
      <div className="core-glow absolute inset-[10%] rounded-full" />
      {missing ? (
        <svg viewBox="0 0 320 400" className="relative h-full w-full" role="img" aria-label="Placeholder silhouette. Add public/images/yuji.png">
          <path d="M60 400c0-70 40-110 100-110s100 40 100 110z" fill="#1d1238" stroke="#b26bff" strokeOpacity=".6" />
          <circle cx="160" cy="190" r="58" fill="#1d1238" stroke="#b26bff" strokeOpacity=".6" />
          <path d="M104 170l14-38 22 22 20-42 20 42 22-22 14 38z" fill="#2a1a52" stroke="#ff4d8d" strokeOpacity=".7" />
          <text x="160" y="372" textAnchor="middle" fontSize="11" fill="#b3a6d6">Add public/images/yuji.png</text>
        </svg>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src="/images/yuji.png" alt="Field Operator illustration" onError={() => setMissing(true)} className="operator-img relative h-full w-full object-contain" />
      )}
      <div className="embers" />
    </div>
  );
}
