(function() {

    'use strict';

    angular.module('appApp')
        .controller('StMathCtrl', ['$rootScope', 'StaffService', '$mdBottomSheet',
            function($rootScope, StaffService, $mdBottomSheet) {
                var vm = this;
                $rootScope.pageTitle = 'ST Math';

                StaffService.getSTMath().then(function(response) {
                    vm.stmath = response.data;
                    StaffService.stmathSections = response.data[0]['sections'];
                    vm.date = response.data[0]['name'];
                });

                vm.showListBottomSheet = function($event) {
                    $mdBottomSheet.show({
                        templateUrl: 'app/stMath/stmath-bottom-sheet.html',
                        controller: 'STMathListBottomSheetCtrl',
                        targetEvent: $event
                    }).then(function(clickedItem) {
                        vm.selectedSection = vm.stmath[0][clickedItem];
                    });
                };

                vm.openProfile = function(student) {
                    window.open('https://intrinsicschools.illuminateed.com/live/?student_id=' + student + '&page=StudentProfile');
                };

            }
        ]).controller('STMathListBottomSheetCtrl', ['StaffService', '$scope', '$mdBottomSheet',

            function(StaffService, $scope, $mdBottomSheet) {
                $scope.items = StaffService.stmathSections;
                $scope.listItemClick = function(clickedItem) {
                    var clickedItem = clickedItem;
                    $mdBottomSheet.hide(clickedItem);
                };
            }
        ]);
})();