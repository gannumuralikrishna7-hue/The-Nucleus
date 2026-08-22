"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = Date.now();
    const end = start + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * value).toFixed(decimals)));
      if (now < end) requestAnimationFrame(tick);
      else setCount(value);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
