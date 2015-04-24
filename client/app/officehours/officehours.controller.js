'use strict';

angular.module('appApp')
    .controller('OfficehoursCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = 'Office Hours Overview';

            $scope.section = '';
            $scope.items = '';

            $scope.orderBy = 'attended';
            $scope.reverse = false;

            $scope.col1OrderBy = 'attendance';
            $scope.col1Reverse = false;

            $scope.studentList = null;

            StaffService.getOfficeHours().then(function(response) {
                $scope.items = response.data;
            });

            $scope.selectedAdvisory = function(advisory) {
                $scope.studentList = advisory.data;
                $scope.section = advisory.name;
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