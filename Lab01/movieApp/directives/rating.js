(function (app) {

    var rating = function () {
        return {
            replace: false,
            templateUrl: "/movieApp/templates/rating.html",
            restrict: "EAC",
            transclude: false,
            scope: {
                ratingValue: "="
            },

            link: function (scope, element) {
                scope.addStar = function () {
                    if (scope.ratingValue == 5)
                        scope.ratingValue = 1;
                    else
                        scope.ratingValue += 1;
                };
           }

        };
    };

    app.directive("rating", rating);
}(angular.module("movieApp")));