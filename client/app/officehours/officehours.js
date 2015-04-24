'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/officehours', {
                templateUrl: 'app/officehours/officehours.html',
                controller: 'OfficehoursCtrl',
                authenticate: true,
                staff: true
            });
    });