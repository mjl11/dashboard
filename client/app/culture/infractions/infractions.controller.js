'use strict';

angular.module('appApp')
    .controller('InfractionsCtrl', ['$rootScope', 'StaffService',
        function($rootScope, StaffService) {
            var vm = this;
            $rootScope.pageTitle = 'Infractions by Staff (Last Week)';

            StaffService.getInfractions().then(function(response) {
                vm.items = response.data;
            });

            vm.orderBy = 'last_name';
            vm.reverse = false;

            vm.sortOrder = function(newValue) {
                if (newValue != vm.orderBy) {
                    vm.orderBy = newValue;
                    vm.reverse = false;
                } else {
                    vm.reverse = !vm.reverse;
                }
            };

        }
    ]);