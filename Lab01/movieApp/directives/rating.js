(function (app) {

    var rating = function () {
        return {
            replace: false,
            templateUrl: "/movieApp/templates/rating.html",
            restrict: "EAC",
            transclude: false,
            scope: {
                "value": "="
            },

            link: function (scope, element) {
                scope.addStar = function () {
                    if (scope.value == 5)
                        scope.value = 1;
                    else
                        scope.value += 1;
                };
           }

        };
    };

    app.directive("rating", rating);
}(angular.module("movieApp")));