'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/infractions', {
                templateUrl: 'app/culture/infractions/infractions.html',
                controller: 'InfractionsCtrl',
                controllerAs: 'vm',
                authenticate: true,
                staff: true
            });
    });