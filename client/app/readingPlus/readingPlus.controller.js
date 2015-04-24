'use strict';

angular.module('appApp')
    .controller('ReadingPlusCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = 'Reading Plus';

            StaffService.getReadingPlus().then(function(response) {
                $scope.items = response.data;
                $scope.rdItems = $scope.items[0]['data'];
                $scope.coaches = $scope.items[0]['coaches'];
                $scope.dateReported = $scope.items[0]['name'];
            });

            $scope.openProfile = function(student) {
                window.open('https://intrinsicschools.illuminateed.com/live/?student_id=' + student + '&page=StudentProfile');
            };
        }
    ]);