import React, { useEffect, useState } from 'react'
import Highcharts, { format, setOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from './styles'

function WalletDivision({ walletDataByType, walletDataByTitle }) {

    const [options, setOptions] = useState({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 340,
            height: 340,
        },
        legend: {
            enabled: true,
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
                    enabled: false,
                },
                showInLegend: true,
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%'],
                size: '80%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Saldo Bruto',
            innerSize: '60%',
            data: []
        }]
    })

    const [options1, setOptions1] = useState({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 340,
            height: 340,
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
                    enabled: false,
                },
                showInLegend: true,
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%'],
                size: '80%'
            }
            
        },
        series: [{
            type: 'pie',
            name: 'Saldo Bruto',
            innerSize: '60%',
            data: []
        }]
    })

    useEffect(() => {
        if (walletDataByType) {
            setOptions((o) => {
                return { ...o, series: [{ ...o.series[0], data: [...walletDataByType] }] }
            })
        }
    }, [walletDataByType])

    useEffect(() => {
        if (walletDataByTitle) {
            setOptions1((o) => {
                return { ...o, series: [{ ...o.series[0], data: [...walletDataByTitle] }] }
            })
        }
    }, [walletDataByTitle])

    return (
        <Container>
            <div className='graph_container'>
                <div className='graph_title'>
                    <h2>Divisão de Carteira por Tipos</h2>
                </div>
                <div className='graph_data'>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>

            </div>
            <div className='graph_container'>
                <div className='graph_title'>
                    <h2>Divisão de Carteira por Título</h2>
                </div>
                <div className='graph_data'>
                    <HighchartsReact highcharts={Highcharts} options={options1} />
                </div>
        
            </div>
        </Container>
    )
}

export default WalletDivision