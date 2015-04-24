'use strict';

angular.module('appApp')
    .directive('readingplusChart', function() {
        return {
            template: '<div id="readingplusChart">Oops, chart did not render!</div>',
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                date: '='
            },
            link: function(scope, element, attrs) {

                var listStudents = function(coach, points) {
                    if (points > 0) {
                        points += 5;
                    }
                    var result = '';
                    for (var stu in scope.items[coach][points]) {
                        result = result + scope.items[coach][points][stu].last_name + ", " +
                            scope.items[coach][points][stu].first_name + '<br />';
                    }
                    return result;
                };

                scope.$watch('items', function(newValue) {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'readingplusChart',
                            type: 'spline'
                        },
                        title: {
                            text: 'Reading Plus',
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: 'Cycle ending ' + scope.date
                        },
                        colors: ['yellow', '#E91E63', '#64B5F6', 'black', 'green', 'purple'],
                        xAxis: {
                            categories: ['0 points', '6 points', '7 points', '8 points', '9 points', '10 points']
                        },
                        yAxis: {
                            title: {
                                text: 'Number of Students'
                            },
                            max: 50,
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