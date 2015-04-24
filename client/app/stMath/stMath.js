'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/stmath', {
                templateUrl: 'app/stMath/stMath.html',
                controller: 'StMathCtrl',
                controllerAs: 'vm',
                authenticate: true,
                staff: true
            });
    });