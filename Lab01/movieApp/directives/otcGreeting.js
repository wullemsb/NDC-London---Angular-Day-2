(function (app) {

    var otcGreeting = function () {
        return {
            replace: false,
            templateUrl: "/movieApp/templates/otcGreeting.html",
            restrict: "EAC",
            transclude: true,
            scope: {
                number:"="
            }
        };
    };

    app.directive("otcGreeting", otcGreeting);
}(angular.module("movieApp")));