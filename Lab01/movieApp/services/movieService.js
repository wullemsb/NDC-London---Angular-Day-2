/// <reference path="../../scripts/underscore.js" />
(function (app) {
    var movieService = function ($http,$q) {
        var getAllMovies = function () {
            return $http.get("movieApp/data/movies.json");
        };

        var getMovieById = function (id) {

            var deferred=$q.defer();

            $http.get("movieApp/data/movies.json")
                .then(function (result) {
                    var movie = null;

                    var movies=angular.fromJson(result.data);

                    movie = _.findWhere(movies, { id: parseInt(id) })

                    if (movie)
                        deferred.resolve({ data: movie });
                    else
                        deferred.reject("Could not find a movie");
                });

            return deferred.promise;
        };

        var update = function (movie) {
            var movies = localStorage.getItem('movies');
            var existingMovie = _.findwhere(movies, { title: movie.title });
            if (existingMovie) {
                existingMovie = movie;
            }
        };

        return {
            getAll: getAllMovies,
            getById: getMovieById
        };
    }

    movieService.$inject = ["$http","$q"];

    app.factory("movieService", movieService);

}(angular.module("movieApp")));