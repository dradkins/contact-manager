(function (module) {

    var loginController = function ($scope, toastr, oauth, currentuser) {

        $scope.username = "";
        $scope.password = "";
        $scope.user = currentuser.profile;

        $scope.login = function (formId, formName) {
            if ($(formId).valid()) {
                oauth.login($scope.username, $scope.password)
                     .catch(toastr.error("unable to login."));
                $scope.password = $scope.username = "";
                formName.$setPristine()
            }
            else {
                toastr.error("invalid data entered. please enter valid data and try again.");
            }
        }

    };

    loginController.$inject = ["$scope", "toastr", "oauth", "currentuser"];
    module.controller("loginController", loginController);

}(angular.module("XiVTechContactManager.controllers")));