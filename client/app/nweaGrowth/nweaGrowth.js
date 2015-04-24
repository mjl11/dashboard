'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/nwea/growth', {
                templateUrl: 'app/nweaGrowth/nweaGrowth.html',
                controller: 'NweaGrowthCtrl',
                authenticate: true,
                staff: true
            });
    });