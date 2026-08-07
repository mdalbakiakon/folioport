import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Text,
} from "recharts";

const skillData = [
  { skill: "Frontend", value: 90 },
  { skill: "Backend", value: 80 },
  { skill: "AI/ML Research", value: 85 },
  { skill: "UI/UX Design", value: 95 },
  { skill: "DevOps", value: 65 },
  { skill: "System Design", value: 70 },
];

const CustomTick = ({ x, y, cx, cy, payload, textAnchor }) => {
  const dy = y > cy ? 10 : y < cy ? -4 : 0;

  return (
    <Text
      x={x}
      y={y + dy}
      width={55}
      fill="var(--txt-sec)"
      fontSize={12}
      textAnchor={textAnchor}
      verticalAnchor="middle"
    >
      {payload.value}
    </Text>
  );
};

const SkillHexagon = () => {
  return (
    <div className="w-full h-100 px-1.25 outline-none focus:outline-none **:outline-none flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={skillData}
          outerRadius="75%"
          margin={{ top: 15, right: 5, bottom: 30, left: 5 }}
        >
          <PolarGrid stroke="var(--txt-ter)" />
          <PolarAngleAxis dataKey="skill" tick={<CustomTick />} />
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