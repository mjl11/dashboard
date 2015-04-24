'use strict';

angular.module('appApp')
    .controller('RetentionCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = 'Student Retention Year to Date';

            StaffService.getRetentionData().then(function(response) {
                $scope.items = response.data[0]['overall'];
                $scope.historicalItems = response.data[0]['historical']['data'];
            });
        }
    ]);