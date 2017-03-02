app.controller('collectionCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.collection = service.collection;
	console.log($scope.collection);

	$scope.delete = false;

	$scope.iconSwitch = function () {
		this.delete = !this.delete;
	}

	$scope.emptyCollection = true;


	//define functions in scope of controller
	/*$scope.addText = function () {
		$scope.allText.push($scope.textInput);
		$scope.textInput = "";
	}

	$scope.removeText = function() {
		$scope.allText.splice(this.$index,1);
	}*/
})