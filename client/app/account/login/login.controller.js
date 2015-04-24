'use strict';

angular.module('appApp')
    .controller('LoginCtrl', ['$scope', '$location', '$window',
        function($scope, $location, $window) {

            $scope.loginOauth = function(provider) {
                $window.location.href = '/auth/' + provider;
            };
        }
    ]);