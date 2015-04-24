'use strict';

angular.module('appApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/students/officehours', {
        templateUrl: 'app/students/stuofficehours/stuofficehours.html',
        controller: 'StuofficehoursCtrl',
        authenticate: true
      });
  });
