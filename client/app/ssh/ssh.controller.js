'use strict';

angular.module('appApp')
    .controller('SshCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            $rootScope.pageTitle = 'Silent Study Hall';

            StaffService.getSSH().then(function(response) {
                $scope.items = response.data;
            });
        }
    ]);