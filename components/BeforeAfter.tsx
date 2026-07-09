"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/site";

export default function BeforeAfter({ project }: { project: Project }) {
  const [pos, setPos] = useState(50);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const swept = useRef(false);

  // One-time attention sweep when the slider first scrolls into view,
  // so visitors realise it's draggable. Cancelled by any interaction.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || swept.current) return;
        swept.current = true;
        obs.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now: number) => {
          if (dragging.current) return;
          const t = Math.min(1, (now - start) / duration);
          // 50 → 72 → 32 → 50 smooth sweep
          const angle = t * Math.PI * 2;
          setPos(50 + Math.sin(angle) * 22 * (1 - t * 0.3));
          if (t < 1) raf = requestAnimationFrame(tick);
          else setPos(50);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(stage);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <div className="ba">
      <div
        ref={stageRef}
        className="ba__stage"
        role="slider"
        aria-label={`${project.title} before and after comparison`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.after} alt={`${project.title} — after`} />
        <div className="ba__before-wrap" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.before} alt={`${project.title} — before`} />
        </div>
        <span className="ba__label ba__label--before">Before</span>
        <span className="ba__label ba__label--after">After</span>
        <div className="ba__handle" style={{ left: `${pos}%` }} />
      </div>
      <div className="ba__meta">
        <span className="category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
