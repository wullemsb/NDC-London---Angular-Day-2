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

        $scope.movies = movieService
            .getAll()
            .then(setMovies);

        $scope.raiseAlert = function (message) {
            $window.alert(message);
        };
        
        $scope.edit = function (movie) {
            $scope.editable = {
                index: $scope.movies.indexOf(movie),
                movie: angular.copy(movie)
            };
        };

    };

    MovieListController.$inject = ["$scope", "$window", "movieService"];

    app.controller("MovieListController", MovieListController);

}(angular.module("movieApp")));

