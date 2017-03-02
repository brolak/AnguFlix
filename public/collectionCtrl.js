app.controller('collectionCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.collection = service.collection;

	$scope.delete = false;

	$scope.iconSwitch = function () {
		this.delete = !this.delete;
	}

	$scope.remove = function () {
		this.collection.splice(this.$index,1);
	}
})