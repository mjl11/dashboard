'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/grades/histogram', {
                templateUrl: 'app/grades/histogram/histogram.html',
                controller: 'HistogramCtrl',
                controllerAs: 'vm',
                authenticate: true,
                staff: true
            });
    });