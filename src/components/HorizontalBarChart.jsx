import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

// HorizontalBarChart Component
const HorizontalBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data} layout="vertical" barSize={30}>
        <XAxis type="number" /> {/* Numerical scale */}
        <YAxis type="category" dataKey="name" axisLine={false} /> {/* Category names */}
        <Bar dataKey="value" fill="#8A6DED" radius={[0, 10, 10, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBarChart;
