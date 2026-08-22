"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOnCTA, setIsOnCTA] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = (e: Event) => {
      const el = e.target as Element;
      if (el.matches("button, a, [role='button'], input, textarea, select")) {
        setIsHovering(true);
        if (el.matches("button, a")) {
          const text = el.textContent?.toLowerCase() || "";
          setIsOnCTA(
            text.includes("start") ||
              text.includes("free") ||
              text.includes("get") ||
              text.includes("try")
          );
        }
      }
    };
    const onLeave = () => {
      setIsHovering(false);
      setIsOnCTA(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[99999] transition-transform duration-75"
        aria-hidden
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99998] transition-all duration-200"
        style={{
          border: isOnCTA
            ? "1.5px solid rgba(0,229,255,0.7)"
            : isHovering
            ? "1.5px solid rgba(92,107,255,0.7)"
            : "1.5px solid rgba(255,255,255,0.5)",
          background: isHovering
            ? isOnCTA
              ? "rgba(0,229,255,0.06)"
              : "rgba(92,107,255,0.08)"
            : "transparent",
          width: isHovering ? "48px" : "40px",
          height: isHovering ? "48px" : "40px",
          marginLeft: isHovering ? "-4px" : "0",
          marginTop: isHovering ? "-4px" : "0",
        }}
        aria-hidden
      />
    </>
  );
}
