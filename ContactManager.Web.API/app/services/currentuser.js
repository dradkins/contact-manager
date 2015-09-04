(function (module) {

    var currentUser = function (formEncode) {

        var setProfile = function (username, fullName, token) {
            profile.username = username;
            profile.fullName = fullName;
            profile.token = token;
        };

        var profile = {
            username: "",
            fullName: "",
            token: "",
            get loggedIn() {
                return this.token;
            }
        };

        return {
            setProfile: setProfile,
            profile: profile,
        }

    }

    module.factory("currentUser", currentUser);

}(angular.module("XiVTechContactManager.services")))