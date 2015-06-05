'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/the_zeroes', {
                templateUrl: 'app/the_zeroes/the_zeroes.html',
                controller: 'TheZeroesCtrl',
                controllerAs: 'vm',
                authenticate: true,
                staff: true
            });
    });