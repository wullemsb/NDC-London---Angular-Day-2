(function () {
    var app = angular.module("movieApp", []);

    app.config(function ($httpProvider) {
        $httpProvider.defaults.headers.common["x-myheader"] = "Some secret value";
    });

    var run = function ($rootScope) {
        $rootScope.message = "Something on the root scope";
    };

    run.$inject = ["$rootScope"];

    app.run(run);

}());
