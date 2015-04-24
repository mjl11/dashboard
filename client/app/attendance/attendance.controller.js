'use strict';

angular.module('appApp')
    .controller('AttendanceCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = "Top Absences Last 5 Days"

            StaffService.getAbsences().then(function(response) {
                $scope.items = response.data;
            });

            $scope.openProfile = function(student) {
                window.open('https://intrinsicschools.illuminateed.com/live/?student_id=' + student + '&page=StudentProfile');
            };
        }
    ]);