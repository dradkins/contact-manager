(function (module) {

    var registerController = function ($scope) {

        $scope.message = "Hello World!";

    };

    registerController.$inject = ["$scope"];
    module.controller("registerController", registerController);

}(angular.module("XiVTechContactManager.controllers")));