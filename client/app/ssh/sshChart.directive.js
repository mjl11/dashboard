'use strict';

angular.module('appApp')
    .directive('sshChart', function() {
        return {
            template: '<div id="sshChart">Oops, chart did not render!</div>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            link: function(scope, element, attrs) {

                scope.$watch('items', function(newValue) {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'sshChart',
                            type: 'column'
                        },
                        title: {
                            text: 'Silent Study Hall',
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: 'Average Daily Percentage by Month'
                        },
                        colors: ['#4CAF50'],
                        xAxis: {
                            categories: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June']
                        },
                        yAxis: {
                            title: {
                                text: null
                            },
                            max: 25,
                            min: 0,
                            plotLines: [{
                                value: 10,
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
                        series: scope.items,
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