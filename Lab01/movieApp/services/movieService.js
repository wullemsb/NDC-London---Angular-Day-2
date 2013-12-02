(function (app) {
    var movieService = function ($http) {
        var getAllMovies = function () {
            return $http.get("movieApp/data/movies.json");
        };

        return {
            getAll:getAllMovies
        };
    }

    movieService.$inject = ["$http"];

    app.factory("movieService", movieService);

}(angular.module("movieApp")));