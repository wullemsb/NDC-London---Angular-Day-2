(function (app) {
    var movieService = function ($http) {
        var getAllMovies = function () {

            var defer
            return $http.get("movieApp/data/movies.json");
        };

        return {
            getAll:getAllMovies
        };
    }

    app.factory("movieService", movieService);

}(angular.module("movieApp")));