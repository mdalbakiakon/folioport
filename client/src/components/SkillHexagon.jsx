import React, { useRef, useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const skillData = [
  { skill: "Frontend", value: 90 },
  { skill: "Backend", value: 80 },
  { skill: "AI/ML Research", value: 85 },
  { skill: "UI/UX Design", value: 95 },
  { skill: "DevOps", value: 65 },
  { skill: "System Design", value: 70 },
];

const MOBILE_BREAKPOINT = 420;

const wrapLabel = (label, maxChars = 10) => {
  const words = label.split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  });
  if (current) lines.push(current);

  return lines;
};

const makeCustomTick = (isMobile) => ({ x, y, cx, cy, payload, textAnchor }) => {
  const dxRaw = x - cx;
  const dyRaw = y - cy;
  const dist = Math.sqrt(dxRaw * dxRaw + dyRaw * dyRaw) || 1;
  const offset = 14;
  const ox = x + (dxRaw / dist) * offset;
  const oy = y + (dyRaw / dist) * offset;

  const entry = skillData.find((d) => d.skill === payload.value);
  // Only wrap on narrow (mobile) containers — desktop keeps the full label on one line
  const lines = isMobile ? wrapLabel(payload.value) : [payload.value];

  return (
    <text x={ox} y={oy} textAnchor={textAnchor}>
      {lines.map((line, i) => (
        <tspan
          key={i}
          x={ox}
          dy={i === 0 ? "0" : "14"}
          fill="var(--txt-sec)"
          fontSize={12}
        >
          {line}
        </tspan>
      ))}
      <tspan x={ox} dy="14" fill="var(--txt-main)" fontSize={11} fontWeight={600}>
        {entry ? `${entry.value}%` : ""}
      </tspan>
    </text>
  );
};

const SkillHexagon = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect?.width ?? 0;
      setIsMobile(width < MOBILE_BREAKPOINT);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 1, 
        rootMargin: "0px 0px 75% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-100 px-1.25 outline-none focus:outline-none **:outline-none flex justify-center items-center"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={skillData}
          outerRadius={"65%"}
          margin={
            isMobile
              ? { top: 5, right: 5, bottom: 5, left: 5 }
              : { top: 2.5, right: 2.5, bottom: 2.5, left: 2.5 }
          }
        >
          <PolarGrid stroke="var(--txt-ter)" />
          <PolarAngleAxis dataKey="skill" tick={makeCustomTick(isMobile)} />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            key={hasEntered ? "animate" : "idle"}
            name="Skills"
            data={hasEntered ? skillData : skillData.map((d) => ({ ...d, value: 0 }))}
            dataKey="value"
            stroke="var(--txt-main)"
            fill="var(--txt-main)"
            fillOpacity={0.3}
            isAnimationActive={hasEntered}
            animationBegin={750}
            activeDot={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillHexagon;