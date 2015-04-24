'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/ar', {
                templateUrl: 'app/acceleratedReader/acceleratedReader.html',
                controller: 'AcceleratedReaderCtrl',
                controllerAs: 'vm',
                authenticate: true,
                staff: true
            })
            .when('/ar/detailed', {
                templateUrl: 'app/acceleratedReader/acceleratedReaderDetailed.html',
                controller: 'AcceleratedReaderDetailedCtrl',
                controllerAs: 'vm',
                authenticate: true,
                staff: true
            });
    });