var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'html/pages/home.html'
    })
    .when("/table", {
		templateUrl: 'html/pages/table.html',
        controller : "tableCtrl"
    })
    .when("/charts", {
        templateUrl: 'html/pages/charts.html',
        controller : "chartsCtrl"
    })
	.when("/dashboard", {
		templateUrl: 'html/pages/dashboard.html',
        controller : "dashboardCtrl"
    })
    .when("/database", {
        templateUrl: 'html/pages/database.html',
        controller : "databaseCtrl"
    })
});

