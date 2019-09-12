"use strict"

angular.module("App").config(["$routeProvider", function($routeProvider){
	
	$routeProvider
	.when("/main", {template: "<main-page></main-page>"})
	.when("/play", {template: "<play-page></play-page>"})
	.when("/wins",  {template: "<win-page></win-page>"})
	.when("/instructions", {template: "<ctrl-page></ctrl-page>"})
	.otherwise({redirectTo: "/main"});
	
}]);