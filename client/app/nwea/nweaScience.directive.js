'use strict';

angular.module('appApp')
    .directive('nweaScience', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                categories: '='
            },
            template: '<div class="ttmchart" id="{{items.section}}"></div>',
            link: function(scope, element, attrs) {

                scope.$watch('items', function(newValue) {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: scope.items.section
                        },
                        title: {
                            text: 'Science Performance: Distribution',
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: "Section: " + scope.items.section
                        },
                        colors: ['#81C784', '#388E3C'],
                        xAxis: {
                            categories: scope.items.categories
                        },
                        yAxis: {
                            title: {
                                text: "Number of Students"
                            },
                            max: scope.items.max,
                            min: 0
                        },
                        tooltip: {
                            shared: true
                        },
                        series: scope.items.data,
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