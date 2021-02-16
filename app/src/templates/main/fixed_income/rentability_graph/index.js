import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { RentabilityContainer } from './styles'

function RentabilityGraph({ rentabilityData }) {
    const [options, setOptions] = useState({
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
            type: 'areaspline'

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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [1, 4, 3, 5, 6, 12, 4, 6, 3, 7],
            name: 'John'
        }, {
            data: [2, 4, 1, 4, 4, 4, 3, 5, 6, 8],
        }],

    });

    useEffect(() => {
        if (rentabilityData) {
            setOptions((o) => { return { ...o, ...rentabilityData } })
        }
    }, [rentabilityData])

    return (
        <RentabilityContainer>
            <div className='rentability_title'>
                <h2>Rentabilidade dos Títulos</h2>
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </RentabilityContainer>
    )
}

export default RentabilityGraph