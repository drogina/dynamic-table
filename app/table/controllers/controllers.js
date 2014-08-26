

module.exports = angular.module('tableApp.controllers', [])

	.controller('TableCtrl', ['$scope', '$filter', '$timeout', 'ngTableParams', function($scope, $filter, $timeout, ngTableParams) {

		$scope.myData = [
			{
				name: 'George',
				age: 57,
				gender: 'male',
				job: 'Software Engineer'
			},
			{
				name: 'Sandy',
				age: 36,
				gender: 'female',
				job: 'Database Admin'
			},
			{
				name: 'JoAnn',
				age: 52,
				gender: 'female',
				job: 'Project Manager'
			},
			{
				name: 'Jack',
				age: 60,
				gender: 'male',
				job: 'Analyst'
			},
			{
				name: 'Connie',
				age: 18,
				gender: 'female',
				job: 'Barista'
			},
			{
				name: 'Mandy',
				age: 13,
				gender: 'female',
				job: 'Student'
			},
			{
				name: 'Liz',
				age: 13,
				gender: 'female',
				job: 'Student'
			},
			{
				name: 'Seth',
				age: 15,
				gender: 'male',
				job: 'Student'
			},
			{
				name: 'Aubrey',
				age: 17,
				gender: 'female',
				job: 'Barista'
			},
			{
				name: 'John',
				age: 65,
				gender: 'male',
				job: 'Project Manager'
			}
		];

		$scope.groupby = 'age';

		$scope.tableParams = new ngTableParams({
			page: 1,
			count: 100
		}, {
			groupBy: $scope.groupby,
			total: function() { return $scope.myData.length; },
			getData: function($defer, params) {
				var orderedData = params.sorting() ?
					$filter('orderBy')($scope.myData, $scope.tableParams.orderBy()) : $scope.myData;

					$defer.resolve(orderedData.slice((params.page()-1) * params.count(), params.page() * params.count()));
			}
		});

		$timeout(function() {
			$scope.$watch('groupby', function(value) {
				$scope.tableParams.settings().groupBy = value;
				console.log('Scope Value', $scope.groupby);
				console.log('Watch value', this.last);
				console.log('new table', $scope.tableParams);
				$scope.tableParams.reload();
			});
		});

	}]);