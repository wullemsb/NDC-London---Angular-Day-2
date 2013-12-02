(function () {
    var app = angular.module("movieApp", []);

    var configure=function ($httpProvider) {
        $httpProvider.defaults.headers.common["x-myheader"] = "Some secret value";
    });

    configure.$inject=["$httpProvider"];

    app.config(configure);

    var run = function ($rootScope) {
        $rootScope.message = "Something on the root scope";
        $rootScope.version = angular.version;
    };

    run.$inject = ["$rootScope"];

    app.run(run);

}());
