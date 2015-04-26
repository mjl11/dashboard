'use strict';

angular.module('appApp')
    .directive('gpaChart', function() {
        return {
            template: '<div id="gpaChart"></div>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            link: function(scope, element, attrs) {
                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'gpaChart',
                        type: 'column'
                    },
                    title: {
                        text: 'Current GPA',
                        style: {
                            fontFamily: "RobotoDraft",
                            fontSize: "22px"
                        }
                    },
                    colors: ['#4CAF50'],
                    xAxis: {
                        categories: ['7th Grade', '9th Grade', '10th Grade', 'School']
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        max: 4,
                        plotLines: [{
                            value: 3,
                            color: '#29B6F6',
                            width: 2,
                            zIndex: 5,
                            label: {
                                text: 'Target',
                                align: 'center',
                                style: {
                                    color: '#29B6F6'
                                }
                            }
                        }]
                    },
                    tooltip: {
                        headerFormat: '{point.x}<br />',
                        pointFormat: '{point.y}'
                    },
                    series: [{
                        name: 'Current Cycle',
                        data: scope.items
                    }],
                    style: {
                        fontFamily: "RobotoDraft"
                    },
                    exporting: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    legend: {
                        enabled: false
                    }
                });

                scope.$watch('items', function(newValue) {
                    chart.series[0].setData(newValue, true);
                }, true);
            }
        };
    });