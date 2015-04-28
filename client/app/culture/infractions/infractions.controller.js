'use strict';

angular.module('appApp')
    .controller('InfractionsCtrl', ['$scope', '$rootScope', 'StaffService',
        function($scope, $rootScope, StaffService) {
            var vm = this;
            $rootScope.pageTitle = 'Infractions by Staff';

            vm.choice = 'last';

            StaffService.getInfractionsLastWeek().then(function(response) {
                vm.items = response.data;
                vm.lastWeek = response.data;
            });

            StaffService.getInfractionsThisWeek().then(function(response) {
                vm.thisWeek = response.data;
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

             $scope.$watch('vm.choice', function() {
                if(vm.choice == 'last'){
                    vm.items = vm.lastWeek;
                }else{
                    vm.items = vm.thisWeek;
                }
           });

        }
    ]);