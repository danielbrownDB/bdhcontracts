"use client";

import { useEffect, useState } from "react";

type Video = { src: string; title: string };

/** Grid of video thumbnails that open in a full-screen lightbox player. */
export default function VideoLightbox({ videos }: { videos: Video[] }) {
  const [open, setOpen] = useState<Video | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="grid grid--3">
        {videos.map((v) => (
          <button
            key={v.src}
            className="video-thumb"
            onClick={() => setOpen(v)}
            aria-label={`Play ${v.title}`}
          >
            <video src={v.src} preload="metadata" muted playsInline tabIndex={-1} />
            <span className="video-thumb__play" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        ))}
      </div>
      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <button className="lightbox__close" aria-label="Close video" onClick={() => setOpen(null)}>
            ✕
          </button>
          <video src={open.src} controls autoPlay playsInline />
        </div>
      )}
    </>
  );
}
