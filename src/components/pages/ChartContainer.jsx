import Chart from "react-google-charts";

import styles from "./ChartContainer.module.css";

const ChartContainer = ({
  chartOptions,
  chartType,
  chartData,
  customStyle,
  title,
}) => {
  return (
    <div className={styles[customStyle]}>
      <div className={styles.containertitle}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <Chart
        className={styles.piechart}
        chartType={chartType}
        options={chartOptions}
        data={chartData}
        legendToggle
      />
    </div>
  );
};

export default ChartContainer;
