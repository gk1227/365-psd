"use strict"

var app = angular.module("365psd", 
	[ '365psd.controllers'
	, 'ngRoute'
	]
);

app.config(function($routeProvider){

	$routeProvider
	.when("/",
		{ controller: "homeCtrl"
		, templateUrl: "partials/home.html"	
		} 
	)
	.otherwise({redirectTo: "/"})
});