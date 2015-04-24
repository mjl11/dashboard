'use strict';

angular.module('appApp')
    .controller('NweaGrowthCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = '7th Grade NWEA Growth';

            StaffService.getNWEAGrowth('reading').then(function(response) {
                $scope.reading = response.data;
            });

            StaffService.getNWEAGrowth('math').then(function(response) {
                $scope.math = response.data;
            });

            StaffService.getNWEAGrowth('science').then(function(response) {
                $scope.science = response.data;
            });
        }
    ]);