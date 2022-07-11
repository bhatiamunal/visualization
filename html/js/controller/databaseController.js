//const app = require("../../../app");

app.controller("databaseCtrl", function ($scope, $http) {
	// $scope.msg = "I love database";
	// $http({
	// 	method : "GET",
	// 	  url : "/database"
	//   }).then(function mySuccess(response) {
		
	// 	$scope.tbldata = response.data;
	// 	$scope.tableHeading = Object.keys($scope.tbldata[0]);
	// 	m1();
	//   }, function myError(response) {
	// 	$scope.myWelcome = response.statusText;
	//   });
	//   var formdata = new FormData();
	//   $scope.getTheFiles = function ($files) {
	// 	  angular.forEach($files, function (value, key) {
	// 		  formdata.append(key, value);
	// 	  });
	//   };
	  // NOW UPLOAD THE FILES.
	//   $scope.uploadFiles = function () {
	// 	debugger
	// 	var request = {
	// 		method: 'POST',
	// 		url: '/database',
	// 		data: formdata,
	// 		headers: {
	// 			'Content-Type': undefined
	// 		}
	// 	};

	// 	// SEND THE FILES.
	// 	$http(request)
	// 		.then(function (d) {
	// 			alert(d);
	// 		})
			
	// }



	$scope.upload = function(){
 
		var fd = new FormData();
		var files = document.getElementById('file').files[0];
		fd.append('data',files);
	  
		// AJAX request
		$http({
		 method: 'post',
		 url: 'database',
		 data: fd,
		 headers: {'Content-Type': undefined},
		}).then(function successCallback(response) { 
		  // Store response data
		  $scope.response = response.data;
		});
	   }
	 
});

app.directive('ngFile', ['$parse', function ($parse) {
	return {
	 restrict: 'A',
	 link: function(scope, element, attrs) {
	  element.bind('change', function(){
   
	   $parse(attrs.ngFile).assign(scope,element[0].files)
	   scope.$apply();
	  });
	 }
	};
   }]);
// app.directive('ngFiles', ['$parse', function ($parse) {

// 	function fn_link(scope, element, attrs) {
// 		var onChange = $parse(attrs.ngFiles);
// 		element.on('change', function (event) {
// 			onChange(scope, { $files: event.target.files });
// 		});
// 	};

// 	return {
// 		link: fn_link
// 	}
// } ])

// function m1(){
// 	// Check for the File API support.
// if (window.File && window.FileReader && window.FileList && window.Blob) {
// 	document.getElementById('files').addEventListener('change', handleFileSelect, false);
//   } else {
// 	alert('The File APIs are not fully supported in this browser.');
//   }
  
//   function handleFileSelect(evt) {
// 	var f = evt.target.files[0]; // FileList object
// 	var reader = new FileReader();
// 	// Closure to capture the file information.
// 	reader.onload = (function(theFile) {
// 	  return function(e) {
// 		var binaryData = e.target.result;
// 		//Converting Binary Data to base 64
// 		var base64String = window.btoa(binaryData);
// 		//showing file converted to base64
// 		// document.getElementById('base64').value = base64String;
// 		// alert('File converted to base64 successfuly!\nCheck in Textarea');
// 		debugger
// 	  };
// 	})(f);
// 	// Read in the image file as a data URL.
// 	reader.readAsBinaryString(f);
//   }
// }