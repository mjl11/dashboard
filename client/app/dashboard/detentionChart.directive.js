'use strict';

angular.module('appApp')
    .directive('detentionChart', function() {
        return {
            template: '<div id="detentionChart">Oops, chart did not render!</div>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            link: function(scope, element, attrs) {

                scope.$watch('items', function(newValue) {

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'detentionChart',
                            type: 'spline'
                        },
                        title: {
                            text: 'Detention',
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: 'Percentage of Students Earning a Detention'
                        },
                        colors: ['#4CAF50', '#81C784', '#388E3C'],
                        xAxis: {
                            categories: scope.items[0]['categories'].slice(scope.items[0]['categories'].length - 5, scope.items[0]['categories'].length),
                            labels: {
                                rotation: -45,
                                align: 'right'
                            },
                            title: {
                                text: 'Cycle Start Date',
                            }
                        },
                        yAxis: {
                            title: {
                                text: null
                            },
                            max: 50,
                            min: 0,
                            plotLines: [{
                                value: 15,
                                color: '#29B6F6',
                                width: 2,
                                zIndex: 5,
                                label: {
                                    text: 'Target',
                                    align: 'left',
                                    style: {
                                        color: '#29B6F6'
                                    }
                                }
                            }]
                        },
                        tooltip: {
                            headerFormat: '{series.name}<br />',
                            pointFormat: '{point.y}%'
                        },
                        series: [{
                            name: scope.items[0]['name'] + 'th Grade',
                            data: scope.items[0]['data'].slice(scope.items[0]['data'].length - 5, scope.items[0]['data'].length)
                        }, {
                            name: scope.items[1]['name'] + 'th Grade',
                            data: scope.items[1]['data'].slice(scope.items[1]['data'].length - 5, scope.items[1]['data'].length)
                        }, {
                            name: scope.items[2]['name'] + 'th Grade',
                            data: scope.items[2]['data'].slice(scope.items[2]['data'].length - 5, scope.items[2]['data'].length)
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
                            layout: 'vertical',
                            backgroundColor: '#FFFFFF',
                            align: 'right',
                            verticalAlign: 'top',
                            floating: true,
                            y: 70
                        }
                    });
                }, true);
            }
        };
    });