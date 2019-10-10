Highcharts.chart('chartPlaceHolder', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'UCSD 2018 Men Enrollment'
    },
    xAxis: {
        categories: [''],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'fulltime men applied',
        data: [45636]
    }, {
        name: 'fulltime men admitted',
        data: [13781]
    }, {
        name: 'fulltime men enrolled',
        data: [3220]
    }]
});