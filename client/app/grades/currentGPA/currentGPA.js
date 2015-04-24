'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/grades/currentgpa', {
                templateUrl: 'app/grades/currentGPA/currentGPA.html',
                controller: 'CurrentGPACtrl',
                authenticate: true,
                staff: true
            });
    });