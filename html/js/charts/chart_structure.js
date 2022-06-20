
function drawDefaultST(selectedChart){
    
    Highcharts.chart('container', {
        chart: {
            type: selectedChart.chartName
        },
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
    
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        credits: {
            enabled: false
        },
    
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
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
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
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
}
function pieChartsST(selectedChart){
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: selectedChart.chartName
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    });
}
function packBubbleST(selectedChart){
    Highcharts.chart('container', {
        chart: {
            type: selectedChart.chartName,
            height: '100%'
        },
        title: {
            text: 'Carbon emissions around the world (2014)'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
            packedbubble: {
                minSize: '30%',
                maxSize: '120%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: 'Europe',
            data: [{
                name: 'Germany',
                value: 767.1
            }, {
                name: 'Croatia',
                value: 20.7
            },
            {
                name: "Belgium",
                value: 97.2
            },
            {
                name: "Czech Republic",
                value: 111.7
            },
            {
                name: "Netherlands",
                value: 158.1
            },
            {
                name: "Spain",
                value: 241.6
            },
            {
                name: "Ukraine",
                value: 249.1
            },
            {
                name: "Poland",
                value: 298.1
            },
            {
                name: "France",
                value: 323.7
            },
            {
                name: "Romania",
                value: 78.3
            },
            {
                name: "United Kingdom",
                value: 415.4
            }, {
                name: "Turkey",
                value: 353.2
            }, {
                name: "Italy",
                value: 337.6
            },
            {
                name: "Greece",
                value: 71.1
            },
            {
                name: "Austria",
                value: 69.8
            },
            {
                name: "Belarus",
                value: 67.7
            },
            {
                name: "Serbia",
                value: 59.3
            },
            {
                name: "Finland",
                value: 54.8
            },
            {
                name: "Bulgaria",
                value: 51.2
            },
            {
                name: "Portugal",
                value: 48.3
            },
            {
                name: "Norway",
                value: 44.4
            },
            {
                name: "Sweden",
                value: 44.3
            },
            {
                name: "Hungary",
                value: 43.7
            },
            {
                name: "Switzerland",
                value: 40.2
            },
            {
                name: "Denmark",
                value: 40
            },
            {
                name: "Slovakia",
                value: 34.7
            },
            {
                name: "Ireland",
                value: 34.6
            },
            {
                name: "Croatia",
                value: 20.7
            },
            {
                name: "Estonia",
                value: 19.4
            },
            {
                name: "Slovenia",
                value: 16.7
            },
            {
                name: "Lithuania",
                value: 12.3
            },
            {
                name: "Luxembourg",
                value: 10.4
            },
            {
                name: "Macedonia",
                value: 9.5
            },
            {
                name: "Moldova",
                value: 7.8
            },
            {
                name: "Latvia",
                value: 7.5
            },
            {
                name: "Cyprus",
                value: 7.2
            }]
        }, {
            name: 'Africa',
            data: [{
                name: "Senegal",
                value: 8.2
            },
            {
                name: "Cameroon",
                value: 9.2
            },
            {
                name: "Zimbabwe",
                value: 13.1
            },
            {
                name: "Ghana",
                value: 14.1
            },
            {
                name: "Kenya",
                value: 14.1
            },
            {
                name: "Sudan",
                value: 17.3
            },
            {
                name: "Tunisia",
                value: 24.3
            },
            {
                name: "Angola",
                value: 25
            },
            {
                name: "Libya",
                value: 50.6
            },
            {
                name: "Ivory Coast",
                value: 7.3
            },
            {
                name: "Morocco",
                value: 60.7
            },
            {
                name: "Ethiopia",
                value: 8.9
            },
            {
                name: "United Republic of Tanzania",
                value: 9.1
            },
            {
                name: "Nigeria",
                value: 93.9
            },
            {
                name: "South Africa",
                value: 392.7
            }, {
                name: "Egypt",
                value: 225.1
            }, {
                name: "Algeria",
                value: 141.5
            }]
        }, {
            name: 'Oceania',
            data: [{
                name: "Australia",
                value: 409.4
            },
            {
                name: "New Zealand",
                value: 34.1
            },
            {
                name: "Papua New Guinea",
                value: 7.1
            }]
        }, {
            name: 'North America',
            data: [{
                name: "Costa Rica",
                value: 7.6
            },
            {
                name: "Honduras",
                value: 8.4
            },
            {
                name: "Jamaica",
                value: 8.3
            },
            {
                name: "Panama",
                value: 10.2
            },
            {
                name: "Guatemala",
                value: 12
            },
            {
                name: "Dominican Republic",
                value: 23.4
            },
            {
                name: "Cuba",
                value: 30.2
            },
            {
                name: "USA",
                value: 5334.5
            }, {
                name: "Canada",
                value: 566
            }, {
                name: "Mexico",
                value: 456.3
            }]
        }, {
            name: 'South America',
            data: [{
                name: "El Salvador",
                value: 7.2
            },
            {
                name: "Uruguay",
                value: 8.1
            },
            {
                name: "Bolivia",
                value: 17.8
            },
            {
                name: "Trinidad and Tobago",
                value: 34
            },
            {
                name: "Ecuador",
                value: 43
            },
            {
                name: "Chile",
                value: 78.6
            },
            {
                name: "Peru",
                value: 52
            },
            {
                name: "Colombia",
                value: 74.1
            },
            {
                name: "Brazil",
                value: 501.1
            }, {
                name: "Argentina",
                value: 199
            },
            {
                name: "Venezuela",
                value: 195.2
            }]
        }, {
            name: 'Asia',
            data: [{
                name: "Nepal",
                value: 6.5
            },
            {
                name: "Georgia",
                value: 6.5
            },
            {
                name: "Brunei Darussalam",
                value: 7.4
            },
            {
                name: "Kyrgyzstan",
                value: 7.4
            },
            {
                name: "Afghanistan",
                value: 7.9
            },
            {
                name: "Myanmar",
                value: 9.1
            },
            {
                name: "Mongolia",
                value: 14.7
            },
            {
                name: "Sri Lanka",
                value: 16.6
            },
            {
                name: "Bahrain",
                value: 20.5
            },
            {
                name: "Yemen",
                value: 22.6
            },
            {
                name: "Jordan",
                value: 22.3
            },
            {
                name: "Lebanon",
                value: 21.1
            },
            {
                name: "Azerbaijan",
                value: 31.7
            },
            {
                name: "Singapore",
                value: 47.8
            },
            {
                name: "Hong Kong",
                value: 49.9
            },
            {
                name: "Syria",
                value: 52.7
            },
            {
                name: "DPR Korea",
                value: 59.9
            },
            {
                name: "Israel",
                value: 64.8
            },
            {
                name: "Turkmenistan",
                value: 70.6
            },
            {
                name: "Oman",
                value: 74.3
            },
            {
                name: "Qatar",
                value: 88.8
            },
            {
                name: "Philippines",
                value: 96.9
            },
            {
                name: "Kuwait",
                value: 98.6
            },
            {
                name: "Uzbekistan",
                value: 122.6
            },
            {
                name: "Iraq",
                value: 139.9
            },
            {
                name: "Pakistan",
                value: 158.1
            },
            {
                name: "Vietnam",
                value: 190.2
            },
            {
                name: "United Arab Emirates",
                value: 201.1
            },
            {
                name: "Malaysia",
                value: 227.5
            },
            {
                name: "Kazakhstan",
                value: 236.2
            },
            {
                name: "Thailand",
                value: 272
            },
            {
                name: "Taiwan",
                value: 276.7
            },
            {
                name: "Indonesia",
                value: 453
            },
            {
                name: "Saudi Arabia",
                value: 494.8
            },
            {
                name: "Japan",
                value: 1278.9
            },
            {
                name: "China",
                value: 10540.8
            },
            {
                name: "India",
                value: 2341.9
            },
            {
                name: "Russia",
                value: 1766.4
            },
            {
                name: "Iran",
                value: 618.2
            },
            {
                name: "Korea",
                value: 610.1
            }]
        }]
    });
}