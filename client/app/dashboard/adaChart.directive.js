'use strict';

angular.module('appApp')
    .directive('adaChart', function() {
        return {
            template: '<div id="adaChart"></div>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                drilldown: '='
            },
            link: function(scope, element, attrs) {

                var chart = null;

                scope.$watch('items', function(newValue) {

                }, true);

                scope.$watch('drilldown', function(newValue) {

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'adaChart',
                            type: 'column'
                        },
                        title: {
                            text: 'Average Daily Attendance',
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                    colors: ['#4CAF50'],
                        xAxis: {
                            type: 'category'
                        },
                        yAxis: {
                            title: {
                                text: null
                            },
                            max: 100,
                            min: 80,
                            plotLines: [{
                                value: 95,
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
                            pointFormat: '<b>{point.y:.2f}%</b>'
                        },
                        series: [{
                            name: 'ADA',
                            data: scope.items
                        }],
                        drilldown: {
                            series: scope.drilldown,
                            activeAxisLabelStyle: {
                                fontWeight: 'normal',
                                textDecoration: 'none'
                            }
                        },
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

                }, true);
            }
        };
    });