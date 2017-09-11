(function () {

    'use strict';
    app.controller('nextController', ['$scope', 'AuthenticationService', function ($scope, authenticationService) {
        authenticationService.validateRequest();
    }]);
})();