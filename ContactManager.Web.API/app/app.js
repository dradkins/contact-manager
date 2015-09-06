(function () {

    var app = angular.module("XiVTechContactManager", [
        "XiVTechContactManager.controllers",
        "XiVTechContactManager.services",
        "XiVTechContactManager.directives",
        "XiVTechContactManager.interceptors",
        "ui.router",
        "toastr"
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("login", { url: "/login", templateUrl: "/app/templates/login.html", controller: "loginController" })
            .state("register", { url: "/register", templateUrl: "/app/templates/register.html", controller: "registerController" })
            .state("forgot-password", { url: "/forgot-password", templateUrl: "/app/templates/forgot-password.html", controller: "forgotPasswordController" })
            .state("email-confirm", { url: "/email-confirm", templateUrl: "/app/templates/email-confirm.html" })
            .state("confirm-email", { url: "/confirm-email/:userId/:confirmationToken", templateUrl: "/app/templates/confirm-email.html", controller: "confirmEmailController" })
        $urlRouterProvider.otherwise("/login");
    });


}());