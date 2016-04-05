var christina = angular.module('christina', []);

christina.controller('mainController', [ "$scope", "$http", function($scope, $http){
	$scope.word = { fr: '', en: ''};
	$http.get('/words').success((results) => {
		$scope.words = results;
	})
	$scope.addWord = function() {
		$http.post('/words', { word: $scope.word}).success((result)=>{
			$scope.word = { fr: '', en: ''};
			$scope.words = result;
		}).error((data, status) => {
			console.log(data);
		});
	} 

}]);