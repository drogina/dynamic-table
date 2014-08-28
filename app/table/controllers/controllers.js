

module.exports = angular.module('tableApp.controllers', [])

	.controller('TableCtrl', ['$scope', '$filter', '$timeout', 'ngTableParams', 'Games', function($scope, $filter, $timeout, ngTableParams, Games) {

		$scope.games = [];
		$scope.groupby = 'homeTeam';		

		// Games.getAll(20132014).
		// 	then(function(response) {
		// 		$scope.games = response.data;

		// 		angular.forEach($scope.games, function(game) {
		// 			game.date = new Date(game.date);
		// 		});

				$scope.tableParams = new ngTableParams({
					page: 1,
					count: 100,
					sorting: {
						homeTeam: 'asc'
					}
				}, {
					groupBy: $scope.groupby,
					total: $scope.games.length,
					getData: function($defer, params) {
						Games.getAll(20132014).
							then(function(response) {
								$scope.games = response.data;

								angular.forEach($scope.games, function(game) {
									game.date = new Date(game.date);
								});

								var orderedData = params.sorting() ?
								$filter('orderBy')($scope.games, $scope.tableParams.orderBy()) : $scope.games;

								$defer.resolve(orderedData.slice((params.page()-1) * params.count(), params.page() * params.count()));	
							});
					}
				// });
		});				

		$scope.$evalAsync(function($scope) {
			$scope.$watch('groupby', function(newValue, oldValue) {
				if (newValue !== oldValue) {
					$scope.tableParams.settings().groupBy = newValue;
					console.log('Scope Value', $scope.groupby);
					console.log('Watch value', this.last);
					console.log('new table', $scope.tableParams);
					$scope.tableParams.reload();
				}
			});
		});

		$scope.reloadTable = function() {
			$scope.tableParams.reload();
		}

	}]);