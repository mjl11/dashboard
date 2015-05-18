'use strict';

angular.module('appApp')
    .factory('Auth', function Auth($location, $rootScope, $http, User, $cookieStore, $q) {
    var currentUser = {};
    if ($cookieStore.get('token')) {
        currentUser = User.get();
    }

    return {
        /**
         * Delete access token and user info
         *
         * @param  {Function}
         */
        logout: function () {
            $cookieStore.remove('token');
            currentUser = {};
        },

        /**
         * Gets all available info on authenticated user
         *
         * @return {Object} user
         */
        getCurrentUser: function () {
            return currentUser;
        },

        /**
         * Check if a user is logged in
         *
         * @return {Boolean}
         */
        isLoggedIn: function () {
            return currentUser.hasOwnProperty('role');
        },

        /**
         * Waits for currentUser to resolve before checking if user is logged in
         */
        isLoggedInAsync: function (cb) {
            if (currentUser.hasOwnProperty('$promise')) {
                currentUser.$promise.then(function () {
                    $rootScope.$broadcast('logged in!');
                    cb(true);
                }).catch(function () {
                    cb(false);
                });
            } else if (currentUser.hasOwnProperty('role')) {
                $rootScope.$broadcast('logged in!');
                cb(true);
            } else {
                cb(false);
            }
        },

        /**
         * Check if a user is an admin
         *
         * @return {Boolean}
         */
        isAdmin: function () {
            return currentUser.role === 'admin';
        },

        isStaff: function () {
            return currentUser.role === 'staff';
        },

        isStudent: function () {
            return currentUser.role === 'student';
        },

        /**
         * Get auth token
         */
        getToken: function () {
            return $cookieStore.get('token');
        }
    };
});