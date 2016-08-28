// JavaScript Document
// my Site
var app = angular.module('mySite',['ngRoute']);



app.config(['$routeProvider',function($routeProvider) {
	 $routeProvider
			.when("/",{
				templateUrl:"partials/home.html",
				controller:'HomeCtrl'
			})
			.when("/contact",{
				templateUrl:"partials/contact.html",
				controller:'ContactCtrl'
			})
			.when("/about",{
					templateUrl:"partials/about.html",
					controller:'AboutCtrl'
			})
			// .otherwise({
			// 	redirectTo: '/'
			// });
}]);

app.controller('HomeCtrl',['$scope', function($scope){
		 $scope.menu = ['Home', 'Contact', 'About'];
		 console.log($scope.menu);
}]);

app.controller('ContactCtrl',['$scope', function(scope){
	   console.log('contactCtrl');
}]);

app.controller('AboutCtrl',['$scope', function(scope){
	   console.log('aboutCtrl');
}]);
