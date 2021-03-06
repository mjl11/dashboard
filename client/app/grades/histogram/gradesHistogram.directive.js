'use strict';

angular.module('appApp')
    .directive('gradesHistogram', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                course: '='
            },
            template: '<div class="ttmchart" id="{{course._id}}"></div>',
            link: function(scope, element, attrs) {

                scope.$watch('course', function(newValue) {

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: scope.course._id,
                            type: 'column',
                            height: 300,
                            width: 400
                        },
                        title: {
                            text: scope.course.name,
                            style: {
                                fontFamily: "RobotoDraft",
                                fontSize: "22px"
                            }
                        },
                        subtitle: {
                            text: "Grade Level: " + scope.course.grade_level
                        },
                        colors: ['#81C784', '#388E3C'],
                        xAxis: {
                            categories: scope.course.categories
                        },
                        yAxis: {
                            title: {
                                text: "Count"
                            },
                            max: Math.max.apply(Math, scope.course.data),
                            min: 0
                        },
                        tooltip: {
                            pointFormat: '<b>{point.y} students</b>'
                        },
                        plotOptions: {
                            column: {
                                cursor: 'pointer',
                                point: {
                                    events: {
                                        click: function (e) {
                                            hs.htmlExpand(null, {
                                                pageOrigin: {
                                                    x: e.pageX || e.clientX,
                                                    y: e.pageY || e.clientY
                                                },
                                                headingText: this.series.name,
                                                maincontentText:  printArray(scope.course.students[e.point.category]),
                                                width: 350
                                            });
                                        }
                                    }
                                }
                            }
                        },
                        series: [scope.course],
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

                    var printArray = function(value){
                        var result = '';
                        for (var i in value) {result += value[i] + '<br />';}
                        return result;
                    };
                }, true);
            }
        };
    });