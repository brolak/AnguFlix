app.controller('moviesCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.movies = service.movies;

	$scope.collect = function () {
		if(this.$parent.collection.indexOf(this.movies[this.$index]) !== 0) {
			this.$parent.collection.push(this.movies[this.$index]);
		} else {
			return;
		}

	}
})