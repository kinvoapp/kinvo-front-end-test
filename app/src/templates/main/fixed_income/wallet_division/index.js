import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from './styles'

function WalletDivision({ walletDataByType, walletDataByTitle }) {

    const options = {
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
    }


    return (
        <Container>
            {walletDataByType &&
                < div className='graph_container'>
                    <div className='graph_title'>
                        <h2>Divisão de Carteira por Tipos</h2>
                    </div>
                    <div className='graph_data'>
                        <HighchartsReact highcharts={Highcharts} options={{ ...options, series: [{ ...options.series[0], data: [...walletDataByType] }] }} />
                    </div>

                </div>
            }
            {walletDataByTitle &&
                <div className='graph_container'>
                    <div className='graph_title'>
                        <h2>Divisão de Carteira por Título</h2>
                    </div>
                    <div className='graph_data'>
                        <HighchartsReact highcharts={Highcharts} options={{ ...options, series: [{ ...options.series[0], data: [...walletDataByTitle] }] }} />
                    </div>

                </div>}
        </Container >
    )
}

export default WalletDivision