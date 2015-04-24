'use strict';

angular.module('appApp')
    .directive('ttmChart', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '='
            },
            template: '<div class="ttmchart" id="{{items.section}}"></div>',
            link: function(scope, element, attrs) {

                scope.$watch('items', function(newValue) {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: scope.items.section,
                            type: 'column'
                        },
                        title: {
                            text: "Coach " + scope.items.name,
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: "Section: " + scope.items.section
                        },
                        colors: ['#64B5F6', '#E91E63'],
                        xAxis: {
                            categories: ['0 points', '6 points', '7 points', '8 points', '9 points', '10 points']
                        },
                        yAxis: {
                            title: {
                                text: 'Number of Students'
                            },
                            max: scope.items.max,
                            min: 0
                        },
                        tooltip: {
                            headerFormat: '{series.name}<br />',
                            pointFormat: '{point.y} Students'
                        },
                        plotOptions: {
                            series: {
                                cursor: 'pointer',
                                point: {
                                    events: {
                                        click: function(e) {
                                            hs.htmlExpand(null, {
                                                pageOrigin: {
                                                    x: e.pageX || e.clientX,
                                                    y: e.pageY || e.clientY
                                                },
                                                headingText: this.series.name,
                                                maincontentText: this.y +
                                                    ' students with ' + this.x +
                                                    ' points.<br /><br />' +
                                                    listStudents(this.series.index, this.x),
                                                width: 200
                                            });
                                        }
                                    }
                                },
                                marker: {
                                    lineWidth: 1
                                }
                            }
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