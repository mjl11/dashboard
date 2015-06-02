'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/kudos', {
                templateUrl: 'app/kudos/kudos.html',
                controller: 'KudosCtrl',
                controllerAs: 'vm',
                authenticate: true,
                staff: true
            });
    });