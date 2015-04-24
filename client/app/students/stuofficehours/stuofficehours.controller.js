'use strict';

angular.module('appApp')
  .controller('StuofficehoursCtrl', ['$scope', '$rootScope', 'User', 'StudentsService',
        function($scope, $rootScope, User, StudentsService) {
            $rootScope.pageTitle = "Office Hours";

            $scope.email = '';

            var currentUser = User.get(function(res) {
                $scope.email = res.email;

                StudentsService.getOfficeHours($scope.email).then(function(response) {
                    $scope.assigned = response.data[0].assigned;
                    $scope.attended = response.data[0].attended;
                });
            });
  }]);
