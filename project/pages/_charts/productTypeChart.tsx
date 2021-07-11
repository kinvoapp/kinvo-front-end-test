import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type Props = {
  productTypes: { value: number }[];
  pieChartColors: string[];
};

function ProductTypeChart({ productTypes, pieChartColors }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={340} height={340}>
        <Pie
          data={productTypes}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={90}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
        >
          {productTypes.map((_, index) => (
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

export default ProductTypeChart;
