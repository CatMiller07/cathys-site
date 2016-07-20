// JavaScript Document
// my Site
var app = angular.module('mySite',['ngRoute']);



app.config(['$routeProvider',function($routeProvider) {
	 $routeProvider
			.when("/",{
				templateUrl:"partials/home.html",
				controller:'pageCtrl'
			})
			.when("/specials",{
				templateUrl:"partials/specials.html",
				controller:'pageCtrl'
			})
			.when("/contact",{
				templateUrl:"partials/contact.html",
				controller:'pageCtrl'
			})	
			.when("/about",{
					templateUrl:"partials/about.html",
					controller:'pageCtrl'
			});
}]);

app.controller('pageCtrl',['$scope', function(scope){
	console.log("Product Controller reporting for duty.")
	   //http.get('data/products.json').success(function(data){
	   //		      scope.products = data;
	   //			  //default to first product
	   //			  scope.selectedProduct = scope.products[0].Sku;
		// });

	   
    
}]);
