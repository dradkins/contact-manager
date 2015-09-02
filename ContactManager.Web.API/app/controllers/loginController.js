(function (module) {

    var loginController = function ($scope, oauth, currentuser) {

        $scope.username = "";
        $scope.password = "";
        $scope.user = currentuser.profile;

        $scope.login = function (formId, formName) {
            if ($(formId).valid()) {
                oauth.login($scope.username, $scope.password)
                     .catch(alert("unable to login"));
                $scope.password = $scope.username = "";
                formName.$setPrestine()
            }
            else {
                alert("Invalid form");
            }
        }

    };

    loginController.$inject = ["$scope"];
    module.controller("loginController", loginController);

}(angular.module("XiVTechContactManager.controllers")));