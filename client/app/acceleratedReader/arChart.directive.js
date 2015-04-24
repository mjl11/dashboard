(function() {

    'use strict';

    angular.module('appApp')
        .directive('arChart', function() {
            return {
                template: '<div id="arChart">Oops, chart did not render!</div>',
                restrict: 'E',
                replace: true,
                scope: {
                    items: '='
                },
                link: function(scope, element, attrs) {

                    scope.$watch('items', function(newValue) {
                        var chart = new Highcharts.Chart({
                            chart: {
                                renderTo: 'arChart',
                                type: 'spline'
                            },
                            title: {
                                text: 'Accelerated Reader',
                                style: {
                                    fontFamily: "RobotoDraft",
                                    fontSize: "22px"
                                }
                            },
                            subtitle: {
                                text: 'Percentage of students that have read at least 1 book with 80% or higher comprehension'
                            },
                            colors: ['#4CAF50', '#81C784', '#388E3C'],
                            xAxis: {
                                categories: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June']
                            },
                            yAxis: {
                                title: {
                                    text: 'Percent of Students'
                                },
                                max: 100,
                                min: 0
                            },
                            tooltip: {
                                headerFormat: '{series.name}th Grade<br />',
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
                                enabled: true
                            }
                        });
                    }, true);
                }
            };
        });
})();