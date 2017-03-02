app.controller('collectionCtrl', function($scope,service) {
	//define variable in scope of controller
  	$scope.collection = service.collection;

	$scope.collection.money = {
		"amount": 6,
		"nomore": false
	};

	$scope.delete = false;

	$scope.removal = false;

	$scope.iconSwitch = function () {
		this.delete = !this.delete;
		this.removal = !this.removal;
	}

	$scope.remove = function () {
		this.collection.splice(this.$index,1);
	}

	$scope.addMoney = function () {
		this.collection.money.amount++;
		this.collection.money.nomore = false;
	}
})