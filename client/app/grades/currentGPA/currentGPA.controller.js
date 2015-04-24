'use strict';

angular.module('appApp')
    .controller('CurrentGPACtrl', ['$scope', 'StaffService', '$rootScope',
        function($scope, StaffService, $rootScope) {
            $rootScope.pageTitle = 'Current GPA';

            $scope.section = '';
            $scope.items = '';

            $scope.orderBy = 'gpa';
            $scope.reverse = false;

            $scope.col1OrderBy = 'gpa';
            $scope.col1Reverse = false;

            $scope.studentList = null;

            StaffService.currentGPA().then(function(response) {
                $scope.items = response.data[0].school;
            });

            $scope.selectedAdvisor = function(advisor) {
                $scope.studentList = advisor.data;
                $scope.section = advisor.name;
            };

            $scope.sortOrder = function(newValue) {
                if (newValue != $scope.orderBy) {
                    $scope.orderBy = newValue;
                    $scope.reverse = false;
                } else {
                    $scope.reverse = !$scope.reverse;
                }
            };

            $scope.$watch('switchData.selectedIndex', function() {
                $scope.studentList = null;
            });

            $scope.col1SortOrder = function(newValue) {
                if (newValue != $scope.col1OrderBy) {
                    $scope.col1OrderBy = newValue;
                    $scope.col1Reverse = false;
                } else {
                    $scope.col1Reverse = !$scope.col1Reverse;
                }
            };

            $scope.isSectionSelected = function(section) {
                if ($scope.section === section) {
                    return true;
                } else {
                    return false;
                }
            };

            $scope.toggleSelectSection = function(section) {
                $scope.section = section;
            };

            $scope.openProfile = function(student) {
                window.open('https://intrinsicschools.illuminateed.com/live/?student_id=' + student + '&page=StudentProfile');
            };
        }
    ]);