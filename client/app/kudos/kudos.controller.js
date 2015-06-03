'use strict';

angular.module('appApp')
    .controller('KudosCtrl', ['$rootScope', '$http',  '$mdDialog',
    function ($rootScope, $http, $mdDialog) {
        var vm = this;
        vm.posts = "";
        vm.kudosTo;
        vm.kudosContent;
        $rootScope.pageTitle = 'Intrinsic Kudos';

        vm.newKudos = function (ev) {
            $mdDialog.show({
                controller: KudosFormCtrl,
                templateUrl: 'app/kudos/newKudos.html',
                targetEvent: ev,
                clickOutsideToClose: true
            })};
        
        vm.submit = function() {
            
          console.log("Submitted");  
          
        };
        
        function KudosFormCtrl(scope, $mdDialog) {
            scope.submit = function() {
              vm.kudosTo = scope.kudosTo;
              vm.kudosContent = scope.kudosContent;
              $mdDialog.hide();
              vm.addKudos();
            }
        }
        
        vm.addKudos = function() {
            $http.post('/api/kudos', {
                kudosTo: vm.kudosTo,
                kudosFrom: "Marcos A",
                kudosContent: vm.kudosContent});
        };

    }
]);