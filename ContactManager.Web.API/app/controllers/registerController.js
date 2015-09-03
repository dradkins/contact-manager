(function (module) {

    var registerController = function ($scope, toastr) {

        $scope.model = {
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
            isAgree: false
        };

        $scope.register = function (formId) {
            if ($(formId).valid()) {
                alert("Valid form");
            }
            else {
                toastr.error("invalid data entered. please enter valid data and try again.");
            }
        }

    };

    registerController.$inject = ["$scope", "toastr"];
    module.controller("registerController", registerController);

}(angular.module("XiVTechContactManager.controllers")));