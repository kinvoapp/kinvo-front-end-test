import React from 'react';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ChartProps {
  [key: string]: any;
  allowChartUpdate?: boolean;
  constructorType?: keyof typeof Highcharts;
  containerProps?: { [key: string]: any };
  highcharts?: typeof Highcharts;
  immutable?: boolean;
  options?: Highcharts.Options;
  updateArgs?: [boolean] | [boolean, boolean] | [boolean, boolean, boolean];
  callback?: Highcharts.ChartCallbackFunction;
}

export const Chart: React.FC<ChartProps> = props => {
  return <HighchartsReact highcharts={Highcharts} {...props} />;
};
