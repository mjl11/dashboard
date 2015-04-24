'use strict';

angular.module('appApp')
    .controller('ThinkThroughMathCtrl', ['$scope', '$rootScope', 'StaffService', '$mdDialog',
        function($scope, $rootScope, StaffService, $mdDialog) {
            $rootScope.pageTitle = 'Think Through Math';

            StaffService.getTTM().then(function(response) {
                $scope.items = response.data;
            });

            $scope.showInfo = function() {
                $mdDialog.show({
                    template: '<md-dialog>' +
                        '  <md-content>' +
                        '<h2>Point Breakdown</h2>' +
                        '<div>At least 4 lessons attempted, 2 passed, and 60 minutes total time =  10 points</div>' +
                        '<div>At least 3 lessons attempted, 2 passed, and 60 minutes total time = 9 points</div>' +
                        '<div>At least 2 lessons attempted, 2 passed, and 60 minutes total time = 8 points</div>' +
                        '<div>At least 4 lessons attempted, 1 passed, and 60 minutes total time = 7 points</div>' +
                        '<div>At least 3 lessons attempted, 1 passed, and 60 minutes total time = 6 points</div>' +
                        '<div>Not spending 60 minutes per week and/or not passing any lessons = 0 points</div>' +
                        '</md-content>' +
                        '</md-dialog>'
                });
            };

        }
    ]);