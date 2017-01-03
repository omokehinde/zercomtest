var app = angular.module('starter.controllers', []);



app.controller("LoginController", function($scope, $http, $location) {

  $scope.form = {};

  $scope.submit = function(argument) {
    console.log($scope.form);
    	//$location.path('/dashboard');
    $http(
    		{
    			url: 'http://zercomsystems.com/locator/public/account/create/token',
    			method: 'POST',
    			data:{
    					'email': $scope.form.email,
    					'password': $scope.form.password
    			}
    		}

    	).then(function (response) {
    		$location.path('/dashboard');
    	}, function (error) {
    		$location.path('/');
    	});

  }

});


app.controller("SignupController", function($scope, $http) {
	
	$scope.form = {};

  $scope.submit = function() {
    console.log($scope.form);

    $http(
    		{
    			url: 'http://zercomsystems.com/locator/public/account/create',
    			method: 'POST',
    			data:{
    					'email': $scope.form.email,
    					'password': $scope.form.password
    			}
    		}

    	).then(function (response) {
    		$location.path('/dashboard');
    	}, function (error) {
    		$location.path('/');
    	});
  }

})