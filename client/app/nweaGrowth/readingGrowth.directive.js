'use strict';

angular.module('appApp')
    .directive('readingGrowth', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
            },
            template: '<div class="ttmchart" id="readingGrowth"></div>',
            link: function(scope, element, attrs) {

                scope.$watch('items', function(newValue) {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'readingGrowth',
                            type: 'column'
                        },
                        title: {
                            text: 'Reading Growth',
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: "Fall to Spring"
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