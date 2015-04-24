(function() {

    'use strict';

    angular.module('appApp')
        .controller('AcceleratedReaderDetailedCtrl', ['$rootScope', 'StaffService', '$mdBottomSheet',
            function($rootScope, StaffService, $mdBottomSheet) {
                var vm = this;
                $rootScope.pageTitle = 'Accelerated Reader Detailed';
                vm.selectedSection = '';
                StaffService.elaSections = '';

                StaffService.getARDetailed().then(function(response) {
                    vm.items = response.data;
                    StaffService.elaSections = vm.items[0].sections;
                    vm.month = vm.items[0].month;
                });

                vm.showListBottomSheet = function($event) {
                    $mdBottomSheet.show({
                        templateUrl: 'app/acceleratedReader/ar-bottom-sheet.html',
                        controller: 'ListBottomSheetCtrl',
                        targetEvent: $event
                    }).then(function(clickedItem) {
                        vm.selectedSection = vm.items[0][clickedItem];
                    });
                };

            }
        ])
        .controller('ListBottomSheetCtrl', ['StaffService', '$scope', '$mdBottomSheet',

            function(StaffService, $scope, $mdBottomSheet) {
                $scope.items = StaffService.elaSections;
                $scope.listItemClick = function(clickedItem) {
                    var clickedItem = clickedItem;
                    $mdBottomSheet.hide(clickedItem);
                };
            }
        ]);
})();