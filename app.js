(function(){
var app = angular.module('testApp', []);

app.controller('PromiseCtrl', function($scope, $http){
	$scope.getRecords = function(){
		$http.get('data.json').then(function(result){
			alert("Success");
		}, function(result){
				alert("failure");
		})
	};
	$scope.getRecordsWithError = function(){
		$http.get('bad_path.nothing').then(function(result){
			alert("success");
		}, function(result){
			alert("Faulure");
		})
	}
});

})();