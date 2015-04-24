'use strict';

angular.module('appApp')
    .controller('NweaCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = '7th Grade NWEA Performance';

            StaffService.getNWEA('reading').then(function(response) {
                $scope.ritems = response.data;
            });

            StaffService.getNWEA('math').then(function(response) {
                $scope.mitems = response.data;
            });

            StaffService.getNWEA('science').then(function(response) {
                $scope.sitems = response.data;
            });
        }
    ]);