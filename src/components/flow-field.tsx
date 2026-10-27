"use client";
import { useEffect, useRef, useState } from "react";
const staticPaths = Array.from({ length: 22 }, (_, i) => {
  let path = "";
  for (let step = 0; step <= 100; step++) {
    const x = step * 8;
    const y =
      40 +
      i * 10 +
      Math.sin(x / 155 + i * 0.08) * 38 +
      Math.exp(-((x - 450) ** 2) / 26000) * Math.sin(i / 4) * 68;
    path += `${step ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return path;
});
export function FlowField() {
  const [paused, setPaused] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = hostRef.current,
      canvas = canvasRef.current;
    if (!host || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0.6, y: 0.5 },
      target = { x: 0.6, y: 0.5 };
    let width = 800,
      height = 330,
      frame = 0,
      visible = false,
      lastTime = 0,
      elapsed = 0;
    function resize() {
      const rect = host!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * scale;
      canvas!.height = height * scale;
      context!.setTransform(scale, 0, 0, scale, 0, 0);
    }
    function draw(time: number) {
      frame = 0;
      if (!visible || paused || preference.matches || document.hidden) return;
      frame = requestAnimationFrame(draw);
      if (time - lastTime < 1000 / 30) return;
      elapsed += Math.min(time - lastTime, 50);
      lastTime = time;
      pointer.x += (target.x - pointer.x) * 0.025;
      pointer.y += (target.y - pointer.y) * 0.025;
      context!.clearRect(0, 0, width, height);
      const count = width < 500 ? 18 : 28;
      for (let line = 0; line < count; line++) {
        context!.beginPath();
        for (let step = 0; step <= 100; step++) {
          const x = (step / 100) * width;
          const bend = Math.exp(-((step / 100 - pointer.x) ** 2) / 0.055);
          const y =
            height * (0.12 + (line / count) * 0.62) +
            Math.sin(step / 20 + line * 0.09 + elapsed / 16000) *
              height *
              0.09 +
            bend * Math.sin(line / 5 + pointer.y * 2) * height * 0.24;
          if (step === 0) context!.moveTo(x, y);
          else context!.lineTo(x, y);
        }
        context!.strokeStyle =
          line % 5 === 0
            ? "rgba(163, 85, 48, .38)"
            : "rgba(113, 136, 139, .28)";
        context!.lineWidth = 0.7;
        context!.stroke();
      }
    }
    function sync() {
      cancelAnimationFrame(frame);
      frame = 0;
      const running =
        visible && !paused && !preference.matches && !document.hidden;
      canvas!.style.opacity = running ? "1" : "0";
      host!.classList.toggle("flow-active", running);
      if (running) {
        lastTime = performance.now();
        frame = requestAnimationFrame(draw);
      }
    }
    function move(event: PointerEvent) {
      const rect = host!.getBoundingClientRect();
      target.x = Math.max(0, Math.min(1, (event.clientX - rect.left) / width));
      target.y = Math.max(0, Math.min(1, (event.clientY - rect.top) / height));
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const resizeObserver = new ResizeObserver(resize);
    observer.observe(host);
    resizeObserver.observe(host);
    resize();
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    // Attach to the hero so the decorative layer never intercepts links or selection.
    const hero = host.closest("section");
    hero?.addEventListener("pointermove", move);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      hero?.removeEventListener("pointermove", move);
    };
  }, [paused]);
  return (
    <>
      <div className="flow-field" ref={hostRef} aria-hidden="true">
        <svg viewBox="0 0 800 330" preserveAspectRatio="none">
          {staticPaths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={i % 5 === 0 ? "#A35530" : "#71888B"}
              strokeWidth=".7"
              opacity=".3"
            />
          ))}
        </svg>
        <canvas ref={canvasRef} />
      </div>
      <button
        type="button"
        className="flow-toggle"
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? "Resume flow" : "Pause flow"}
        <span aria-hidden="true">{paused ? " ▷" : " Ⅱ"}</span>
      </button>
    </>
  );
}
