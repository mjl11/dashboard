'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/ttm', {
                templateUrl: 'app/thinkThroughMath/thinkThroughMath.html',
                controller: 'ThinkThroughMathCtrl',
                authenticate: true,
                staff: true
            });
    });