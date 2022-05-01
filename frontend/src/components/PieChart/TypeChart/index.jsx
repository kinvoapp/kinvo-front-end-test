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

export function TypeChart({
    typeChartData, 
    title
}){

    const colors = ["#0DD1E3", "#FF8052", "#9E51BA"];

    const colorsResults = typeChartData.map((entry, index) => {
        return <Cell
            key={index}
            fill={colors[index % colors.length]}
        />
    })

    const legendResults = typeChartData.map((entry, index) => {
        return <ChartLegend
            key={`type-${index}`}
        >
            {entry.movementTypeId}
        </ChartLegend>
    })

    return(
        <Container>
            <Title>{title}</Title>

            <ResponsiveContainer width="100%" height={180}>
                <PieChart width={300} height={180}>
                    <Pie
                        dataKey="movementTypeId"
                        data={typeChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        fill="#bfca82"
                    >
                        {colorsResults}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <ChartLegendContainer>
                {legendResults}
            </ChartLegendContainer>

        </Container>
    )

}