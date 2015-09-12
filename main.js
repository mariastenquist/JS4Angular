var app = angular.module('myApp', []);
var mainControllerFunc = function($scope){
	// $scope.pink = ''
	$scope.buttonText = "Hello World!"
	// $scope.

	$scope.button = function(){
		console.log("you clicked the button!")
	}

	$scope.paragraphOne = function(){
		console.log("you hovered over paragraph one")
	}
	$scope.hovering = false
	$scope.hoverOnParagraph = function(){
		$scope.hovering = !$scope.hovering
		// if (input === 1){
		// 	$scope.pink = 'pink1'
	
	}
	$scope.hovering = false
	$scope.hoverOnParagraph = function(){
		$scope.hovering = !$scope.hovering
		
	}

}



angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])