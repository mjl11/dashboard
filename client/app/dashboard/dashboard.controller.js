'use strict';

angular.module('appApp')
    .controller('DashboardCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = 'Dashboard';
            $scope.topGPAWidget = [];
            $scope.selectedGradeLevel = 0;

            StaffService.getGPA().then(function(response) {
                $scope.items = response.data[0].school;
                $scope.items = [$scope.items[0].data, $scope.items[1].data, $scope.items[2].data, $scope.items[3].data];
            });

            StaffService.getCPSOntrack().then(function(response) {
                $scope.cpsOntrack = response.data[0].data;
            });

            StaffService.getBehavior().then(function(response) {
                $scope.behavior = response.data;
            });

            StaffService.currentGPA().then(function(response) {
                $scope.currentGPA = response.data[0].school;

                for (var object in $scope.currentGPA) {
                    var gradeLevel = $scope.currentGPA[object]["name"];
                    var advisor = "";
                    var topGPA = 0;

                    for (var advisory in $scope.currentGPA[object]["data"]) {
                        if ($scope.currentGPA[object]["data"][advisory]["gpa"] > topGPA){
                            topGPA = $scope.currentGPA[object]["data"][advisory]["gpa"];
                            advisor = $scope.currentGPA[object]["data"][advisory]["name"];
                        }
                    }

                    if (gradeLevel == 7){
                        var temp = {};
                        temp.grade = "7th Grade";
                        temp.gpa = topGPA;
                        temp.advisor = advisor;
                        $scope.topGPAWidget.push(temp);
                    }else if (gradeLevel == 9){
                        var temp = {};
                        temp.grade = "9th Grade";
                        temp.gpa = topGPA;
                        temp.advisor = advisor;
                        $scope.topGPAWidget.push(temp);
                    }else {
                        var temp = {};
                        temp.grade = "10th Grade";
                        temp.gpa = topGPA;
                        temp.advisor = advisor;
                        $scope.topGPAWidget.push(temp);
                    }
                    
                }
            });

            StaffService.getADA().then(function(response) {
                $scope.adaItems = response.data;

                $scope.overallItems =
                    [{
                    name: $scope.adaItems[0].data[0].name + 'th Grade',
                    y: $scope.adaItems[0].data[0].y,
                    drilldown: '7'
                }, {
                    name: $scope.adaItems[0].data[1].name + 'th Grade',
                    y: $scope.adaItems[0].data[1].y,
                    drilldown: '9'
                }, {
                    name: $scope.adaItems[0].data[2].name + 'th Grade',
                    y: $scope.adaItems[0].data[2].y,
                    drilldown: '10'
                }, {
                    name: 'School',
                    y: $scope.adaItems[0].data[3].y,
                    drilldown: 'School'
                }];

                $scope.drilldownItems = [{
                    id: '7',
                    data: $scope.adaItems[1].data[1].data
                }, {
                    id: '9',
                    data: $scope.adaItems[1].data[2].data
                }, {
                    id: '10',
                    data: $scope.adaItems[1].data[3].data
                }, {
                    id: 'School',
                    data: $scope.adaItems[1].data[0].data
                }, ];
            });

            $scope.changeGradeLevel = function(){
                $scope.selectedGradeLevel++;
                if ($scope.selectedGradeLevel > 2)
                    $scope.selectedGradeLevel = 0;
            }
        }
    ]);