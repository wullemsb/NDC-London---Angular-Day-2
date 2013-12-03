(function (app) {

    var MovieListController = function ($scope, $window,movieService) {

        var setMovies = function (response) {
            $scope.movies = response.data;

            $scope.numberOfMovies = $scope.movies.length;
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
            .then(setMovies,onError);

        $scope.raiseAlert = function (message) {
            $window.alert(message);
        };

        $scope.flag = true;
        
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

