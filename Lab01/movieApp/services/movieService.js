(function (app) {
    var movieService = function () {
        var getAllMovies = function () {
            return [
                { title: "Star Wars V", length: 120 },
                { title: "Star Wars III", length: 120 },
                { title: "Star Wars I", length: 120 },
                { title: "Starship Troopers", length: 90 }
            ];
        };

        return {
            getAll:getAllMovies
        };
    }

    app.factory("movieService", movieService);

}(angular.module("movieApp")));