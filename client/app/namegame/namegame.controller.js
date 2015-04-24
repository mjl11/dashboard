'use strict';

angular.module('appApp')
    .controller('NamegameCtrl', ['$scope', '$rootScope', 'StaffService', '$mdToast', '$animate',
        function($scope, $rootScope, StaffService, $mdToast, $animate) {
            $rootScope.pageTitle = 'Student Name Game';

            $scope.selectedStu = '';

            $scope.numCorrect = 0;
            $scope.numAttempted = 0;
            $scope.multipleIncorrect = false;

            $scope.percentCorrect = 100;

            var getImage = function() {
                if ($scope.numAttempted > 0) {
                    $scope.multipleIncorrect = false;
                }
                StaffService.getRandom().then(function(response) {
                    $scope.students = response.data;
                    var url = 'http://portal.intrinsicschools.org/assets/images/students/' + $scope.students[0].student_id + '.jpg';
                    var http = new XMLHttpRequest();
                    http.open('HEAD', url, false);
                    http.send();
                    if (http.status === 404) {
                        getImage();
                    }
                });
            };

            getImage();

            $scope.checkStudent = function() {
                if ($scope.students[0].student_id != $scope.selectedStu) {
                    $mdToast.show(
                        $mdToast.simple()
                        .position('bottom left')
                        .content('Nope, try again!')
                    );
                    if (!$scope.multipleIncorrect) {
                        $scope.numAttempted++;
                        $scope.multipleIncorrect = true;
                    }
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                        .position('bottom left')
                        .content('Correct!')
                    );
                    if (!$scope.multipleIncorrect) {
                        $scope.numCorrect++;
                        $scope.numAttempted++;
                    }
                    $scope.percentCorrect = Math.round($scope.numCorrect / $scope.numAttempted * 100);
                    getImage();
                }
            };
        }
    ]);