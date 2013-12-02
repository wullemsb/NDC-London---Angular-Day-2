(function (app) {

    var MovieListController = function ($scope) {
        $scope.movies =
            [
                { title: "Star Wars V", length: 120 },
                { title: "Star Wars III", length: 120 },
                { title: "Star Wars I", length: 120 }
            ];
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

