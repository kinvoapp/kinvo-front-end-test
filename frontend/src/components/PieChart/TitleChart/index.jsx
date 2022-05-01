import {
    ChartLegend,
    ChartLegendContainer,
    Container,
    Title
} from "./styles";

import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell,
  } from "recharts";

export function TitleChart({
    typeChartData, 
    title
}){

  const COLORS = ["#0DD1E3", "#FF8052", "#9E51BA"];

    return(
        <Container>
            <Title>{title}</Title>

            <ResponsiveContainer width="100%" height={180}>
                <PieChart width={300} height={180}>
                    <Pie
                        dataKey="portfolioProductId"
                        data={typeChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        fill="#bfca82"
                    >
                        {typeChartData
                        ? typeChartData.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                            ))
                        : null}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <ChartLegendContainer>
                <ChartLegend>Tipo</ChartLegend>
                <ChartLegend>Tipo</ChartLegend>
                <ChartLegend>Tipo</ChartLegend>
                <ChartLegend>Tipo</ChartLegend>
                <ChartLegend>Tipo</ChartLegend>
                <ChartLegend>Tipo</ChartLegend>
            </ChartLegendContainer>

        </Container>
    )

}