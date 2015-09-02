(function (module) {

    var forgotPasswordController = function ($scope) {

        $scope.resetPassword = function (formId) {
            if ($(formId).valid()) {
                alert("Valid form");
            }
            else {
                alert("Invalid form");
            }
        }

    };

    forgotPasswordController.$inject = ["$scope"];
    module.controller("forgotPasswordController", forgotPasswordController);

}(angular.module("XiVTechContactManager.controllers")));