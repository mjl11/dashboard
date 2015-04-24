'use strict';

angular.module('appApp')
    .controller('StuBehaviorCtrl', ['$scope', '$rootScope', 'User', 'StudentsService',
        function($scope, $rootScope, User, StudentsService) {
            $rootScope.pageTitle = "Merits/Demerits";

            $scope.email = '';

            var currentUser = User.get(function(res) {
                $scope.email = res.email;

                StudentsService.getBehavior($scope.email).then(function(response) {
                    $scope.items = response.data[0].data;
                });
            });


        }
    ]);