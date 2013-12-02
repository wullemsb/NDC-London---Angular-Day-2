(function (app) {

    var MovieListController = function ($scope, $window,movieService) {

        var setMovies = function (response) {
            $scope.movies = response.data;
        };

        var onError = function (error) {
            if (error.status == 404) {
                $scope.error = "Not found!";
            } else {
                $scope.error = "Unexpected error";
            }
        }

        var injector = angular.injector(["ng", "movieApp"]);

        injector.invoke(function ($http) {

        });

        $scope.inject = injector.annotate(MovieListController);

        $scope.movies = movieService
            .getAll()
            .then(setMovies);

        $scope.raiseAlert = function (message) {
            $window.alert(message);
        }

        $scope.increment = function (movie) {
            movie.length += 1;
            console.log("add 1");
        };

        $scope.decrement = function (movie) {
            movie.length -= 1;
            console.log("remove 1");
        };
    };

    MovieListController.$inject = ["$scope", "$window", "movieService"];

    app.controller("MovieListController", MovieListController);

}(angular.module("movieApp")));

