'use strict';

angular.module('appApp')
    .controller('AttendanceCtrl', ['$rootScope', 'StaffService',
        function($rootScope, StaffService) {
            var vm = this;
            $rootScope.pageTitle = "Top Absences Last 5 Days"

            StaffService.getAbsences().then(function(response) {
                vm.items = response.data;
            });

            vm.openProfile = function(student) {
                window.open('https://intrinsicschools.illuminateed.com/live/?student_id=' + student + '&page=StudentProfile');
            };
        }
    ]);