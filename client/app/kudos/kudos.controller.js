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
            
        };
    
        /**
        $http.get('https://spreadsheets.google.com/feeds/list/18P0V8dpeygXFW3rqDMBXRjM936Pd83-Zs-pJKqbQEYk/oglu2iy/private/full?reverse=true&orderby=column:timestamp')
            .success(function (data, status, headers, config) {
            vm.posts = data;
        }).
            error(function (data, status, headers, config) {
            // log error
        });
    
        var x2js = new X2JS();
        vm.rawJson = x2js.xml_str2json(vm.posts);
        vm.numResponses = vm.rawJson.feed.totalResults.__cnt;
        vm.kudos = [];
    
        for (var i = 0; i < vm.rawJson.feed.totalResults.__cnt; i++) {
            var temp = {
                "kudosId": vm.rawJson.feed.entry[i].id,
                "kudosTo": vm.rawJson.feed.entry[i].whodoyouwanttothank.__text,
                "kudosFrom": vm.rawJson.feed.entry[i].staffname.__text,
                "kudosContent": vm.rawJson.feed.entry[i].createyourkudos.__text
                //"kudosDate": vm.rawJson.feed.entry[i].formatteddate.__text
            };
            vm.kudos.push(temp);
        }
        */
    }
]);