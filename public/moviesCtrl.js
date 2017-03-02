app.controller('moviesCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.movies = service.movies;

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
})