"use client";

import { useEffect, useRef } from "react";

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.2, y: 0.3, r: 0.35, color: "rgba(200,101,34,0.12)", speed: 0.0003 },
      { x: 0.8, y: 0.2, r: 0.3,  color: "rgba(180,83,24,0.10)", speed: 0.0004 },
      { x: 0.5, y: 0.7, r: 0.4,  color: "rgba(226,138,75,0.08)",   speed: 0.0002 },
      { x: 0.1, y: 0.8, r: 0.25, color: "rgba(200,101,34,0.08)",  speed: 0.0005 },
      { x: 0.9, y: 0.6, r: 0.3,  color: "rgba(180,83,24,0.07)", speed: 0.00035 },
    ];

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob, i) => {
        const cx = (blob.x + Math.sin(t * blob.speed + i) * 0.15) * canvas.width;
        const cy = (blob.y + Math.cos(t * blob.speed * 1.3 + i) * 0.12) * canvas.height;
        const r = blob.r * Math.min(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
