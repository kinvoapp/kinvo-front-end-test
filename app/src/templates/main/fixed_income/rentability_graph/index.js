import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { RentabilityContainer } from './styles'
import {useWindowSize} from '../../../../hooks'

function RentabilityGraph({ rentabilityData }) {
    const windowSize = useWindowSize()
    const options = {
        defs: {
            gradient0: {
                tagName: 'linearGradient',
                id: 'gradient-0',
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                children: [{
                    tagName: 'stop',
                    offset: 0
                }, {
                    tagName: 'stop',
                    offset: 1
                }]
            },
            gradient1: {
                tagName: 'linearGradient',
                id: 'gradient-1',
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                children: [{
                    tagName: 'stop',
                    offset: 0
                }, {
                    tagName: 'stop',
                    offset: 1
                }]
            },
            gradient2: {
                tagName: 'linearGradient',
                id: 'gradient-2',
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                children: [{
                    tagName: 'stop',
                    offset: 0
                }, {
                    tagName: 'stop',
                    offset: 1
                }]
            },
            gradient3: {
                tagName: 'linearGradient',
                id: 'gradient-3',
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                children: [{
                    tagName: 'stop',
                    offset: 0
                }, {
                    tagName: 'stop',
                    offset: 1
                }]
            }
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        chart: {
            styledMode: true,
            type: 'areaspline',
            width: windowSize.width > 650 ? (windowSize.width * 0.9) - 247 :  windowSize.width * 0.8,

        },
        title: {
            text: ''
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        xAxis: {
            categories: []
        },
        series: [],

    }



    return (
        <RentabilityContainer>
            <div className='rentability_title'>
                <h2>Rentabilidade dos Títulos</h2>
            </div>
            <HighchartsReact highcharts={Highcharts} options={{ ...options, ...rentabilityData }} />
        </RentabilityContainer>
    )

}





export default RentabilityGraph