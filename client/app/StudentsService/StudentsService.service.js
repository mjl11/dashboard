'use strict';

angular.module('appApp')
    .factory('StudentsService', ['$http',
        function($http) {

            return {
                getBehavior: function(email) {
                    return $http.get('/api/students/behavior/' + email);
                },
                getOfficeHours: function(email) {
                    return $http.get('/api/students/officehours/' + email);
                }
            };
        }
    ]);