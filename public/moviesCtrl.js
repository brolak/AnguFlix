app.controller('moviesCtrl', function($scope,service,$http) {
	
	//define variable in scope of controller
	$scope.movies = service.movies;

	// Declaring variables
  	var apiKey = '8827ea31eb495768c6d732582c199ecc';
  	var apiEndpoint = "http://api.themoviedb.org/3/search/movie";
  	//$scope.movieImagePath = "http://image.tmdb.org/t/p/w154";
  	$scope.movieQuery = "";
  	$scope.movieImagePath = "http://image.tmdb.org/t/p/w154";

	$scope.collect = function () {
		if(this.$parent.collection.indexOf(this.movies[this.$index]) === -1) {
			if(this.$parent.collection.money.amount < this.movies[this.$index].price) {
				this.$parent.collection.money.nomore = true;
				return;
			}
			this.$parent.collection.money.amount -= this.$parent.movies[this.$index].price;
			this.$parent.collection.push(this.movies[this.$index]);
		} else {
			return;
		}

	}

	// Function for getting the list of movies
  	$scope.findMovies = function () {

    // Generate API URL
    var url = apiEndpoint + '?query=' + $scope.movieQuery + '&api_key=' + apiKey;

    $http({
        method: 'GET',
          url: url
    })
    .then(function (response) {
        // retrieve data
            $scope.movies = response.data.results;
            console.log($scope.movies);

        }, function(response) {
        // when the response give back error
            $scope.movies = [];
            console.log("something went wrong");
        })
    
  	};

})