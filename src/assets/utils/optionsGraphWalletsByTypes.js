const optionsGraphWalletsByTypes = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  credits: {
    enabled: false
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      colors: ['#0DD1E3', '#9E51BA', '#FF8052', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
      cursor: 'pointer',
      dataLabels: {
          enabled: false
      },
      innerSize: '160px',
      showInLegend: true
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [
      {
        name: 'Renda Fixa Pós',
        y: (100 * 3) / 6
      }, {
        name: 'Renda Fixa Pré',
        y: (100 * 2) / 6
      }, {
        name: 'Tesouro Direto',
        y: (100 * 1) / 6
      }
    ]
  }]
}

export default optionsGraphWalletsByTypes