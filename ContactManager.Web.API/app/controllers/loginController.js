(function (module) {

    var loginController = function ($scope) {

        $scope.message = "Hello World!";

    };

    loginController.$inject = ["$scope"];
    module.controller("loginController", loginController);

}(angular.module("XiVTechContactManager.controllers")));