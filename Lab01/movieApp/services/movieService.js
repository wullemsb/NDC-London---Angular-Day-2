/// <reference path="../../scripts/underscore.js" />
(function (app) {
    var movieService = function ($http) {
        var getAllMovies = function () {
            return $http.get("movieApp/data/movies.json");
        };

        var update = function (movie) {
            var movies = localStorage.getItem('movies');
            var existingMovie = _.findwhere(movies, { title: movie.title });
            if (existingMovie) {
                existingMovie = movie;
            }
        };

        return {
            getAll:getAllMovies
        };
    }

    movieService.$inject = ["$http"];

    app.factory("movieService", movieService);

}(angular.module("movieApp")));