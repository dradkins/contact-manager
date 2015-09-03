(function (module) {

    var oauth = function ($http, formEncode, currentUser) {

        var login = function (username, password) {

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }

            var data = formEncode({
                username: username,
                password: password,
                grant_type: "password"
            });

            return $http.post("/token", data, config)
                        .then(function (response) {
                            currentUser.setProfile(username, response.data.fullName, response.data.access_token);
                            return response.data.fullName;
                        });
        }

        return {
            login: login
        }

    };

    oauth.$inject = ["$http", "formEncode", "currentUser"];
    module.factory("oauth", oauth);

}(angular.module("XiVTechContactManager.services")))