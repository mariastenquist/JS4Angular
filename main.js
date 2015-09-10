var app = angular.module('myApp', []);

var mainControllerFunc = function($scope){

	$scope.button = function(){
		console.log("you clicked the button!")
	}

	$scope.paragraphOne = function(){
		console.log("you hovered over paragraph one")
	}
	
	$scope.buttonText = "firstbutton"
	
}







angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])