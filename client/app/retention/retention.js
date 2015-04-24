'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/retention', {
                templateUrl: 'app/retention/retention.html',
                controller: 'RetentionCtrl',
                authenticate: true,
                staff: true
            });
    });