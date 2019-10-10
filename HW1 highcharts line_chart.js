Highcharts.chart('chartPlaceHolder', {

    title: {
        text: '# UCSD Applications Men and Women'
    },

    yAxis: {
        title: {
            text: 'Number of Enrollments'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'fulltime men applied',
        data: [18147,19838,20566,21590,21725,22332,25097,28758,31992,34618,37009,39779,41583,45636]
    }, {
        name: 'fulltime women applied',
        data: [22371,23748,24507,25775,25321,25761,28351,32049,35408,38822,41047,44430,46845,52265]
    }
],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});