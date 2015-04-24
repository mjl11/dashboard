'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/account/login/login.html',
                controller: 'LoginCtrl'
            });
    });