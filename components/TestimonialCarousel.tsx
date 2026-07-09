"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/site";

/** Auto-advancing, swipeable testimonial carousel. Pauses on hover/focus. */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, 5000);
    return () => clearInterval(id);
  }, [go]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((t) => (
          <figure key={t.author} className="carousel__slide">
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.author}</strong>
              <span>{t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel__controls">
        <button aria-label="Previous testimonial" onClick={() => go(-1)}>
          ←
        </button>
        <div className="carousel__dots" role="tablist" aria-label="Testimonials">
          {items.map((t, i) => (
            <button
              key={t.author}
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button aria-label="Next testimonial" onClick={() => go(1)}>
          →
        </button>
      </div>
    </div>
  );
}
