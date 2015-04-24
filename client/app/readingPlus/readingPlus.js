'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/readingplus', {
                templateUrl: 'app/readingPlus/readingPlus.html',
                controller: 'ReadingPlusCtrl',
                authenticate: true,
                staff: true
            });
    });