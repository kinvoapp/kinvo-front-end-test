import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartTitle = () => {
  const [data, setData] = useState([]);

  const URL =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get(URL)
        .then((response) => response.data.data.snapshotByProduct)
        .then((data) => data);
      setData(result);
    };
    fetchData();
  }, [URL]);

  const labels = data.map((item) => {
    return item.fixedIncome.name;
  });

  const values = data.map((item) => {
    return item.position.valueApplied;
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: values,
        backgroundColor: [
          "#E65C30",
          "#F02499",
          "#792BD9",
          "#2465F0",
          "#22E6D6",
          "#DBE606",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };
  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChartTitle;
