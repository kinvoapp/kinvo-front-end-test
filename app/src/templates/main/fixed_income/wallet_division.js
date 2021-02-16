import React, {useEffect, useState} from 'react'
import Highcharts, { setOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function WalletDivision({walletDataByType}) {

    const [options, setOptions] = useState({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '',
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%'],
                size: '80%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                {
                    name: 'Other',
                    y: 7.61,
                    color: '#000',
                }
            ]
        }]
    })

    useEffect(() => {
        if(walletDataByType){
            console.log(walletDataByType)
            setOptions((o) => {
                console.log(o.series[0])
                return {...o, series: [{...o.series[0], data: [...walletDataByType]}]}
            })
        }
    }, [walletDataByType])

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default WalletDivision