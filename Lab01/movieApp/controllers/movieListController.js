(function (app) {

    var MovieListController = function ($scope, $window,movieService) {
        $scope.movies = movieService.getAll();

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

    app.controller("MovieListController", MovieListController);

}(angular.module("movieApp")));

