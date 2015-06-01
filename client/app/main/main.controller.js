'use strict';

angular.module('appApp')
    .controller('MainCtrl', ['$scope', '$mdSidenav', 'Auth', 'User', '$location', '$rootScope',

        function($scope, $mdSidenav, Auth, User, $location, $rootScope) {

            $rootScope.pageTitle = 'Dashboard by Intrinsic Schools';

            $scope.showMenu = false;

            $scope.selectedMenu = 'Belmont Campus';

            var currentUser = User.get(function(res) {
                try {
                   $scope.userPic = res.google.image.url.substring(0, res.google.image.url.length - 6);
                   $scope.displayName = res.google.displayName;
                }
                catch (e) {
                   $scope.userPic = rres.google.picture.substring(0, res.google.picture.length - 6);
                   $scope.displayName = res.google.name;
                }
                $scope.USER_ID = res.email; 
            });

            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle();
            };

            $scope.toggleSelectSection = function(section) {
                $scope.selectedMenu = section;
            };

            $scope.$on('logged in!', function(event, args) {
                $scope.showMenu = true;
                if (Auth.isStaff()) {
                    $scope.items = staffItems;
                } else if (Auth.isStudent()) {
                    $scope.items = stuItems;
                } else {
                    $scope.items = {};
                }
            });

            $scope.go = function(name, url) {
                $mdSidenav('left').close();
                $location.path(url);
            };

            var staffItems = [{
                'name': 'Belmont Campus',
                'sections': [{
                    'name': 'Dashboard',
                    'url': '/'
                }, {
                    'name': 'Kudos',
                    'url': '/kudos'
                },{
                    'name': 'Name Game',
                    'url': '/guess'
                }]
            }, {
                'name': 'Assessments',
                'sections': [{
                    'name': '7th Grade NWEA Growth',
                    'url': '/nwea/growth'
                }, {
                    'name': '7th Grade NWEA Performance',
                    'url': '/nwea/performance'
                }]
            }, {
                'name': 'Attendance',
                'sections': [{
                    'name': 'Top Absences Last 5 Days',
                    'url': '/attendance/absences'
                }]
            }, {
                'name': 'Culture',
                'sections': [{
                    'name': 'Infractions by Staff',
                    'url': '/infractions'
                }, {
                    'name': 'Silent Study Hall',
                    'url': '/ssh'
                }]
            },{
                'name': 'Enrollment',
                'sections': [{
                    'name': 'Retention YTD',
                    'url': '/retention'
                }]
            }, {
                'name': 'Grades',
                'sections': [{
                    'name': 'Overview',
                    'url': '/grades/histogram'
                },
                {
                    'name': 'Current GPA',
                    'url': '/grades/currentgpa'
                }, {
                    'name': 'Grades Below C',
                    'url': '/grades/belowc'
                }, {
                    'name': 'Office Hours',
                    'url': '/officehours'
                }]
            }, {
                /**
                {
                    'name': 'Accelerated Reader Overview',
                    'url': '/ar'
                }
                **/
                'name': 'Online Programs',
                'sections': [{
                    'name': 'Accelerated Reader Detailed',
                    'url': '/ar/detailed'
                }, {
                    'name': 'ST Math',
                    'url': '/stmath'
                }, {
                    'name': 'Think Through Math',
                    'url': '/ttm'
                }]
            }];

            var stuItems = [{
                'name': 'Culture',
                'sections': [{
                    'name': 'Merits/Demerits',
                    'url': '/students/behavior'
                }]},{
                'name': 'Office Hours',
                'sections': [{
                    'name': 'Attendance',
                    'url': '/students/officehours'
                }]
            }];

        }
    ]);