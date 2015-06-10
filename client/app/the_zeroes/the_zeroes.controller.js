'use strict';

angular.module('appApp')
    .controller('TheZeroesCtrl', ['$rootScope', 'StaffService',
        function($rootScope, StaffService) {
            var vm = this;
            $rootScope.pageTitle = 'The Zeroes';

            StaffService.getTheZeroes().then(function(response) {
                vm.the_zeroes = response.data;
            });


        }
    ]);