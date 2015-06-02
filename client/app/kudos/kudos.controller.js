'use strict';

angular.module('appApp')
    .controller('KudosCtrl', ['$rootScope', '$http',
        function($rootScope, $http) {
            var vm = this;
            $rootScope.pageTitle = 'Intrinsic Kudos';

            $http.get('https://docs.google.com/a/intrinsicschools.org/spreadsheets/d/18P0V8dpeygXFW3rqDMBXRjM936Pd83-Zs-pJKqbQEYk/gviz/tq')
            .success(function(data, status, headers, config) {
              vm.posts = data;
            }).
            error(function(data, status, headers, config) {
              // log error
            });

        }
    ]);