app.controller('moviesCtrl', function($scope,service) {
	//define variable in scope of controller
	$scope.movieList = service.data;
	console.log($scope.movieList);

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