'use strict';

angular.module('appApp')
    .controller('KudosCtrl', ['$rootScope', '$http',
    function ($rootScope, $http) {
        var vm = this;
        vm.posts;
        $rootScope.pageTitle = 'Intrinsic Kudos';

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
                "kudosTo": vm.rawJson.feed.entry[i].whodoyouwanttothank.__text,
                "kudosFrom": vm.rawJson.feed.entry[i].staffname.__text,
                "kudosContent": vm.rawJson.feed.entry[i].createyourkudos.__text
                //"kudosDate": vm.rawJson.feed.entry[i].formatteddate.__text
            };
            vm.kudos.push(temp);
        }

    }
]);