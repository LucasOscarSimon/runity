(function () {

'use strict';
app.controller('indexController', ['$scope', '$location', 'authData','LoginService', function ($scope, $location, authData, loginService) {

    $scope.logOut = function () {
        loginService.logOut();
        $location.path('/home');
    }
    $scope.authentication = authData.authenticationData;

}]);
})();