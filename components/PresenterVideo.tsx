'use client';

import { useEffect, useRef, useState } from 'react';

export function PresenterVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="presenter-wrap">
      <div className="hero-portrait">
        <video ref={videoRef} className="presenter-video" muted loop playsInline preload="metadata" poster="/presenter-poster.jpg" src="/presenter.webm" aria-label="Silent video of Jette Aries Portilla" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setUnavailable(true)} />
      </div>
      {!unavailable && <button type="button" className="presenter-control" onClick={togglePlayback} aria-label={playing ? 'Pause presenter video' : 'Play presenter video'}>{playing ? 'Pause video' : 'Play video'}</button>}
    </div>
  );
}
