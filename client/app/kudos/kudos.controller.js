'use strict';

angular.module('appApp')
    .controller('KudosCtrl', ['$rootScope', '$http',  '$mdDialog', 'Auth', 'StaffService', '$mdToast',
    function ($rootScope, $http, $mdDialog, Auth, StaffService, $mdToast) {
        var vm = this;
        vm.items = "";
        vm.kudosTo = "";
        vm.kudosFrom = Auth.getCurrentUser().name;
        vm.kudosContent = "";
        $rootScope.pageTitle = 'Intrinsic Kudos';
        
        StaffService.getKudos().then(function(response) {
                vm.items = response.data;
            });

        vm.newKudos = function (ev) {
            $mdDialog.show({
                controller: KudosFormCtrl,
                templateUrl: 'app/kudos/newKudos.html',
                targetEvent: ev,
                clickOutsideToClose: true
            })};
        
        function KudosFormCtrl(scope, $mdDialog) {
            scope.submit = function() {
                vm.kudosTo = scope.kudosTo;
                vm.kudosContent = scope.kudosContent;
                vm.kudosFrom = Auth.getCurrentUser().name;
              $mdDialog.hide();
              if(typeof(vm.kudosTo) != "undefined" 
                && typeof(vm.kudosContent) != "undefined" 
                && typeof(vm.kudosFrom) != "undefined"){
                    
                vm.addKudos();
                
              }
            };
        }
        
        vm.addKudos = function() {
            StaffService.postKudos({
                kudosTo: vm.kudosTo,
                kudosFrom: vm.kudosFrom,
                kudosContent: vm.kudosContent,
                likes: []});
            StaffService.getKudos().then(function(response) {
                vm.items = response.data;
            });
        };
        
        vm.like = function(req) {
            var likes = req.likes;
            likes.push(Auth.getCurrentUser().email);
            $http.put('/api/kudos/' + req._id, {
                _id: req._id,
                likes: likes
            });
          $mdToast.show(
                $mdToast.simple()
                .position('bottom left')
                .content('Like!')
            );
          StaffService.getKudos().then(function(response) {
                vm.items = response.data;
            });
        };
        
        vm.alreadyLiked = function(req){
            var result = isInArray(Auth.getCurrentUser().email, req);
            return result;
        };
        
        function isInArray(value, array) {
          return array.indexOf(value) > -1;
        }
    }
]);