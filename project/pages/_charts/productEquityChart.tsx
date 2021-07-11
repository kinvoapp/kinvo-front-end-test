import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type Props = {
  productEquities: { value: number; name: string }[];
  pieChartColors: string[];
};

function ProductEquityChart({ productEquities, pieChartColors }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={340} height={340}>
        <Pie
          data={productEquities}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={90}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
        >
          {productEquities.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={pieChartColors[index % pieChartColors.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ProductEquityChart;
