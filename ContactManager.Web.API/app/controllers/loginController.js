(function (module) {

    var loginController = function ($scope, $http, toastr, oauth, currentUser) {

        $scope.username = "";
        $scope.password = "";
        $scope.user = currentUser.profile;
        $scope.form;

        $scope.login = function (formId, formName) {
            if ($(formId).valid()) {
                oauth.login($scope.username, $scope.password)
                     .then(onLoginSuccess, onLoginError);
                $scope.form = formName;
            }
            else {
                toastr.error("invalid data entered. please enter valid data and try again.");
            }
        }

        var onLoginSuccess = function (data) {
            console.log(data);
            toastr.success("Welcom to contact manager " + data);
        }

        var onLoginError = function (data) {
            if (data.status === 400) {
                toastr.error(data.data.error_description);
            }
            $scope.password = "";
            $scope.form.$setPristine();
        }

    };

    loginController.$inject = ["$scope", "$http", "toastr", "oauth", "currentUser"];
    module.controller("loginController", loginController);

}(angular.module("XiVTechContactManager.controllers")));