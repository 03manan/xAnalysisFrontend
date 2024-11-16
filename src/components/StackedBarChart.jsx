import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

// StackedBarChart Component
const StackedBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data} barSize={40}>
        <XAxis dataKey="name" /> {/* Display category names */}
        <Bar dataKey="positive" stackId="a" fill="#8A6DED" />
        <Bar dataKey="neutral" stackId="a" fill="#6FC9F6" />
        <Bar dataKey="negative" stackId="a" fill="#E7F2FF" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
