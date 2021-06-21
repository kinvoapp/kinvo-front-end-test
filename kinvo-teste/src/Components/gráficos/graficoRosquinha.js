import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const Grafico = ({data}) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        showLabels: 0,
        legendNumRows: "2",
        legendNumColumns: "3",
        legendItemFontBold:0,
        legendItemFontSize:9,
        palettecolors: "0dd1e3,9e51ba,ff8052, #FFAEBC, #EFE7BC, #4EC33D",
        decimals: 1,
        doughnutRadius: '45%',
        showPercentValues: 1,
        theme: 'gammel'
      },
      data
    },
  };
    
    return <ReactFC {...chartConfigs} />;
}

export default Grafico