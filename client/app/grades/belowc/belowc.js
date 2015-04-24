'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/grades/belowc', {
                templateUrl: 'app/grades/belowc/belowc.html',
                controller: 'BelowcCtrl',
                authenticate: true,
                staff: true
            });
    });