'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/students/behavior', {
                templateUrl: 'app/students/stuBehavior/stuBehavior.html',
                controller: 'StuBehaviorCtrl',
                authenticate: true
            });
    });