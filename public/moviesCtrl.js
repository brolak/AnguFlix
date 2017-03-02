app.controller('moviesCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.movies = service.movies;

	$scope.collect = function () {
		this.$parent.collection.push(this.movies[this.$index]);
		console.log(this.$parent.collection);
	}
})