'use strict';

angular.module('appApp')
    .directive('retentionChart', function() {
        return {
            template: '<div id="retentionChart">Oops, chart did not render!</div>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                historical: '='
            },
            link: function(scope, element, attrs) {

                scope.$watch('items', function(newValue) {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'retentionChart',
                            type: 'column'
                        },
                        title: {
                            text: 'Student Retention',
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
                            min: 75,
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
                            pointFormat: '{point.y}%'
                        },
                        series: [scope.items],
                        drilldown: {
                            series: scope.historical,
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