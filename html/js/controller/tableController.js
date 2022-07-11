app.controller("tableCtrl", function ($scope, $http) {
	$scope.search;
	// $scope.msg = "I love table";
	$http({
		method : "GET",
		  url : "/database",
		  params: {fileName: 'country.csv'}
	  }).then(function mySuccess(response) {
		
		$scope.tbldata = response.data;
		$scope.tableHeading = Object.keys($scope.tbldata[0]);
		// m1();
	  }, function myError(response) {
		$scope.myWelcome = response.statusText;
	  });
	  
});