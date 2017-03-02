app.controller('moviesCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.movies = service.movies;

	$scope.collect = function () {
		if(this.$parent.collection.indexOf(this.movies[this.$index]) === -1) {
			console.log(this.$parent.money);
			this.$parent.money -= this.$parent.movies[this.$index].price;
			console.log(this.$parent.money);
			this.$parent.collection.push(this.movies[this.$index]);
		} else {
			return;
		}

	}
})