(function () {
    var app = angular.module("movieApp", ["ngRoute"]);

    var configure=function ($httpProvider,$routeProvider,$locationProvider) {
        $httpProvider.defaults.headers.common["x-myheader"] = "Some secret value";

        $routeProvider
            .when("/",{templateUrl:"movieApp/templates/listTemplate.html"})
            .when("/details/:id",{templateUrl:"movieApp/templates/detailsTemplate.html"})
            .otherwise({redirectTo:"/"});

        //$locationProvider
    };

    configure.$inject=["$httpProvider","$routeProvider","$locationProvider"];

    app.config(configure);

    var run = function ($rootScope) {
        $rootScope.message = "Something on the root scope";
        $rootScope.version = angular.version;
    };

    run.$inject = ["$rootScope"];

    app.run(run);

}());
