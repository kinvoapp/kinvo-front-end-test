import {
    Container,
    Title
} from "./styles";

import React, { useEffect, useState } from "react"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export function ProfitabilityGraphic({
    graphicData, title
}){
       
    return(
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width="99%" height="85%">
                <AreaChart
                    width={500}
                    height={200}
                    data={graphicData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="0 0" />
                    <XAxis dataKey="dailyReferenceDate" />
                    <YAxis dataKey="value" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="productName"
                        stackId="1"
                        stroke="#5255ff"
                        fill="#5255ff"
                    />
                    <Area
                        type="monotone"
                        dataKey="correctedQuota"
                        stackId="1"
                        stroke="#56D9FE"
                        fill="#56D9FE"
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stackId="1"
                        stroke="#A3A1FB"
                        fill="#A3A1FB"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Container>
    )
}