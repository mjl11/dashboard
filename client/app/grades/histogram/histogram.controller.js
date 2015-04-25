'use strict';

angular.module('appApp')
    .controller('HistogramCtrl', ['StaffService', '$rootScope',
        function(StaffService, $rootScope) {

            var vm = this;

            $rootScope.pageTitle = 'Gradebook Overview';

            StaffService.gradesHistogram().then(function(response) {
                vm.courses = response.data;
            });

        }
    ]);