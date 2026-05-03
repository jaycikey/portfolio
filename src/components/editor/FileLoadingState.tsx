import { useEffect, useState } from 'react';

interface Props {
  filename: string;
  onComplete: () => void;
}

export default function FileLoadingState({ filename, onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const DURATION = 420;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(onComplete, 80);
      }
    }
    frame = requestAnimationFrame(tick);

    // Fallback if rAF is throttled
    const fallback = window.setTimeout(onComplete, 500);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filled = Math.round(progress / 10);
  const empty = 10 - filled;
  const bar = '▓'.repeat(filled) + '░'.repeat(empty);

  return (
    <div className="flex flex-1 flex-col justify-end pb-8 pl-6 pt-0 font-mono">
      <div className="mb-2.5 text-[13px] text-muted">
        Loading {filename}... [{bar}] {progress}%
      </div>
      <div className="relative h-0.5 max-w-[400px] rounded-sm bg-border">
        <div
          className="absolute bottom-0 left-0 top-0 rounded-sm bg-accent transition-[width] duration-[40ms] linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
