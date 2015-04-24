'use strict';

angular.module('appApp')
    .directive('scienceGrowth', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
            },
            template: '<div class="ttmchart" id="scienceGrowth"></div>',
            link: function(scope, element, attrs) {

                scope.$watch('items', function(newValue) {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'scienceGrowth',
                            type: 'column'
                        },
                        title: {
                            text: 'Science Growth',
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: "Fall to Winter"
                        },
                        colors: ['#4CAF50', '#388E3C'],
                        xAxis: {
                            categories: [scope.items.data]
                        },
                        yAxis: {
                            title: {
                                text: "Percentage Met Growth Targets"
                            },
                            max: 100,
                            min: 0
                        },
                        tooltip: {
                            pointFormat: '<b>{point.y}%</b>'
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