(function() {

    'use strict';

    angular.module('appApp')
        .controller('AcceleratedReaderCtrl', ['$rootScope', 'StaffService',
            function($rootScope, StaffService) {
                var vm = this;
                $rootScope.pageTitle = 'Accelerated Reader Overview';

                StaffService.getAR().then(function(response) {
                    vm.items = response.data;
                });

            }
        ]);
})();