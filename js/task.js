function TaskCtrl($scope) {
  
	$scope.tasks = [];
	  
	$scope.addTask = function () {
	    $scope.tasks.push({text:$scope.formTaskText, done:false});
	    $scope.formTaskText = '';
	};
}