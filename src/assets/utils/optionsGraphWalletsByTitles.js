const optionsGraphWalletsByTitles = {
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
        name: 'Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)',
        y: (100 * 1) / 6
      }, {
        name: 'CDB Pré XP INVESTIMENTOS CCTVM (9,5% a.a.)',
        y: (100 * 1) / 6
      }, {
        name: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
        y: (100 * 1) / 6
      }, {
        name: 'CDB Banco C6 (102% do CDI)',
        y: (100 * 1) / 6
      }, {
        name: 'CDB BANCO SANTANDER (99% do CDI)',
        y: (100 * 1) / 6
      }, {
        name: 'CDB Pré BANCO SOFISA (7,05% a.a.)',
        y: (100 * 1) / 6
      }
    ]
  }]
}

export default optionsGraphWalletsByTitles