(function () {

    var app = angular.module("XiVTechContactManager", [
        "XiVTechContactManager.controllers",
        "XiVTechContactManager.services",
        "XiVTechContactManager.directives",
        "XiVTechContactManager.interceptors",
        "ngRoute"
    ]);

    app.config(function ($routeProvider) {

        $routeProvider
            .when("/login", {
                templateUrl: "/app/views/login.html",
                controller: "loginController"
            })
            .when("/register", {
                templateUrl: "/app/views/register.html",
                controller: "registerController"
            })
            .otherwise({ redirectTo: "/login" });

    });


}());