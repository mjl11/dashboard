'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                authenticate: true,
                staff: true
            }).when('/', {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                authenticate: true,
                staff: true
            });
    });