'use strict';

angular.module('appApp')
    .factory('StaffService', ['$http',
        function($http) {

            var elaSections = '';
            var stmathSections = '';

            // Public API here
            return {
                getGPA: function() {
                    return $http.get('/api/hc/gpa');
                },
                getADA: function() {
                    return $http.get('/api/hc/ada');
                },
                getCPSOntrack: function() {
                    return $http.get('/api/hc/cps/ontrack');
                },
                getBehavior: function() {
                    return $http.get('/api/behavior');
                },
                belowcGrades: function() {
                    return $http.get('/api/grades/belowc');
                },
                currentGPA: function() {
                    return $http.get('/api/grades/currentGPA');
                },
                gradesHistogram: function() {
                    return $http.get('/api/grades/histogram');
                },
                getTTM: function() {
                    return $http.get('/api/hc/ttm');
                },
                getAR: function() {
                    return $http.get('/api/hc/ar');
                },
                getARDetailed: function() {
                    return $http.get('/api/ar');
                },
                getReadingPlus: function() {
                    return $http.get('/api/hc/readingplus');
                },
                getRetentionData: function() {
                    return $http.get('/api/hc/retention');
                },
                getAbsences: function() {
                    return $http.get('/api/attendance/absences');
                },
                getSSH: function() {
                    return $http.get('/api/hc/ssh');
                },
                getInfractionsLastWeek: function() {
                    return $http.get('/api/behavior/infraction.by.staff.last.week');
                },
                getInfractionsThisWeek: function() {
                    return $http.get('/api/behavior/infraction.by.staff.this.week');
                },
                getNWEA: function(subject) {
                    return $http.get('/api/hc/nwea/progress/' + subject);
                },
                getNWEAGrowth: function(subject) {
                    return $http.get('/api/hc/nwea/growth/' + subject);
                },
                getRandom: function() {
                    return $http.get('/api/students/random');
                },
                getOfficeHours: function() {
                    return $http.get('/api/officehours');
                },
                getSTMath: function() {
                    return $http.get('/api/stmath');
                },
                getKudos: function() {
                    return $http.get('/api/kudos');
                }
            };
        }
    ]);