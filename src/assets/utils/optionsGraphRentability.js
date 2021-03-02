const optionsGraphRentability = {
  accessibility: {
    enabled: false
  },
  chart: {
    type: 'areaspline',
    spacingBottom: 20,
    spacingLeft: 25, 
    spacingRight: 25,
    spacingTop: 20
  },
  data: {
    startColumn:0,
    startRow:0
  },
  title: {
      text: ''
  },
  colors: ['#A3A1FB', '#56D9FE'],
  xAxis: {
    categories: [
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês',
      'Mês'
    ],
    min: 0,
    max: 11
  },
  yAxis: {
    title: {
      text: ''
    },
    categories: [
      '0',
      '4,000',
      '6,000',
      '8,000',
      '10,000',
      '12,000'
    ],
    min: 0,
    max: 5,
    showEmpty: false
  },
  tooltip: false,
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },
  series: [{
    data: [5, 3.5, 3, 3.5, 4, 5, 4, 3, 4, 4.5, 4, 4.5, 4.75]
  }, {
    data: [4, 2.5, 2, 2.5, 3, 4, 3, 2, 3, 3.5, 3, 3.5, 4]
  }]
}

export default optionsGraphRentability