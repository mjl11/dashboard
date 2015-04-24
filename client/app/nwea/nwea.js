'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/nwea/performance', {
                templateUrl: 'app/nwea/nwea.html',
                controller: 'NweaCtrl',
                authenticate: true,
                staff: true
            });
    });