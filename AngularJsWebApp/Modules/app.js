var serviceBase = 'http://localhost:49707/';

var app = angular.module('AngularApp', ['ngRoute', 'LocalStorageModule']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/Modules/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/Modules/views/login.html"
    });
    $routeProvider.when("/next", {
        controller: "nextController",
        templateUrl: "/Modules/views/Next.html"
    });
    $routeProvider.when("/myInfo", {
        templateUrl: "/Modules/views/Info.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

})
    .config(['$httpProvider', function ($httpProvider) {

        $httpProvider.interceptors.push(function ($q, $rootScope, $window, $location) {

            return {
                request: function (config) {

                    return config;
                },
                requestError: function (rejection) {

                    return $q.reject(rejection);
                },
                response: function (response) {
                    if (response.status == "401") {
                        $location.path('/login');
                    }
                    //the same response/modified/or a new one need to be returned.
                    return response;
                },
                responseError: function (rejection) {

                    if (rejection.status == "401") {
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }]);