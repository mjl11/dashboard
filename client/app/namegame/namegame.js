'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/guess', {
                templateUrl: 'app/namegame/namegame.html',
                controller: 'NamegameCtrl',
                authenticate: true,
                staff: true
            });
    });