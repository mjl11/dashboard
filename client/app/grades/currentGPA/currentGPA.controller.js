'use strict';

angular.module('appApp')
    .controller('CurrentGPACtrl', ['StaffService', '$rootScope',
        function(StaffService, $rootScope) {
            var vm = this;
            $rootScope.pageTitle = 'Current GPA';

            vm.section = '';
            vm.items = '';

            vm.orderBy = 'gpa';
            vm.reverse = false;

            vm.col1OrderBy = 'gpa';
            vm.col1Reverse = false;

            vm.studentList = null;

            StaffService.currentGPA().then(function(response) {
                vm.items = response.data[0].school;
            });

            vm.selectedAdvisor = function(advisor) {
                vm.studentList = advisor.data;
                vm.section = advisor.name;
            };

            vm.sortOrder = function(newValue) {
                if (newValue != vm.orderBy) {
                    vm.orderBy = newValue;
                    vm.reverse = false;
                } else {
                    vm.reverse = !vm.reverse;
                }
            };

            $rootScope.$watch('switchData.selectedIndex', function() {
                vm.studentList = null;
            });

            vm.col1SortOrder = function(newValue) {
                if (newValue != vm.col1OrderBy) {
                    vm.col1OrderBy = newValue;
                    vm.col1Reverse = false;
                } else {
                    vm.col1Reverse = !vm.col1Reverse;
                }
            };

            vm.isSectionSelected = function(section) {
                if (vm.section === section) {
                    return true;
                } else {
                    return false;
                }
            };

            vm.toggleSelectSection = function(section) {
                vm.section = section;
            };

            vm.openProfile = function(student) {
                window.open('https://intrinsicschools.illuminateed.com/live/?student_id=' + student + '&page=StudentProfile');
            };
        }
    ]);