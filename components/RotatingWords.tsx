"use client";

import { useEffect, useState } from "react";

/** Cycles through words with a flip-up animation. */
export default function RotatingWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setAnimating(false);
      }, 280);
    }, 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className={`rotating-word${animating ? " rotating-word--out" : ""}`} aria-live="polite">
      {words[index]}
    </span>
  );
}
