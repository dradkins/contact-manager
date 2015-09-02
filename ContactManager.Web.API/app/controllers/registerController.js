﻿(function (module) {

    var registerController = function ($scope) {

        $scope.register = function (formId) {
            if ($(formId).valid()) {
                alert("Valid form");
            }
            else {
                alert("Invalid form");
            }
        }

    };

    registerController.$inject = ["$scope"];
    module.controller("registerController", registerController);

}(angular.module("XiVTechContactManager.controllers")));