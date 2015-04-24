'use strict';

angular.module('appApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/attendance/absences', {
                templateUrl: 'app/attendance/attendance.html',
                controller: 'AttendanceCtrl',
                authenticate: true,
                staff: true
            });
    });