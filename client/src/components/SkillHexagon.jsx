import React from "react";
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

const SkillHexagon = () => {
  return (
    <div className="w-full h-100 mt-10 outline-none focus:outline-none **:outline-none">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skillData}>
          <PolarGrid stroke="var(--txt-ter)" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: "var(--txt-sec)", fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="var(--txt-main)"
            fill="var(--txt-main)"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillHexagon;