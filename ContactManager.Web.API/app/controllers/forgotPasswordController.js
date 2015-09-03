(function (module) {

    var forgotPasswordController = function ($scope, toastr) {

        $scope.resetPassword = function (formId) {
            if ($(formId).valid()) {
                alert("Valid form");
            }
            else {
                toastr.error("invalid data entered. please enter valid data and try again.");
            }
        }

    };

    forgotPasswordController.$inject = ["$scope", "toastr"];
    module.controller("forgotPasswordController", forgotPasswordController);

}(angular.module("XiVTechContactManager.controllers")));