app.controller('collectionCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.collection = service.collection;

	$scope.money = 6;

	$scope.delete = false;

	$scope.removal = false;

	$scope.iconSwitch = function () {
		this.delete = !this.delete;
		this.removal = !this.removal;
	}

	$scope.remove = function () {
		this.money+=this.price;
		this.collection.splice(this.$index,1);
	}
})