'use strict';

angular.module('appApp')
    .controller('BelowcCtrl', ['$scope', 'StaffService', '$rootScope',
        function($scope, StaffService, $rootScope) {

            $rootScope.pageTitle = 'Grades Below C';

            $scope.section = '';
            $scope.items = '';

            $scope.orderBy = 'missing_count';
            $scope.reverse = false;

            $scope.col1OrderBy = 'data.length';
            $scope.col1Reverse = true;

            $scope.studentList = null;

            StaffService.belowcGrades().then(function(response) {
                $scope.items = response.data[0].school;
            });

            $scope.selectedCourse = function(course) {
                $scope.studentList = course.data;
                $scope.section = course.name;
            };

            $scope.$watch('switchData.selectedIndex', function() {
                $scope.studentList = null;
            });

            $scope.sortOrder = function(newValue) {
                if (newValue != $scope.orderBy) {
                    $scope.orderBy = newValue;
                } else {
                    $scope.reverse = !$scope.reverse;
                }
            };

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