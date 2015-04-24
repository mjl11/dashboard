'use strict';

angular.module('appApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ssh', {
        templateUrl: 'app/ssh/ssh.html',
        controller: 'SshCtrl'
      });
  });
