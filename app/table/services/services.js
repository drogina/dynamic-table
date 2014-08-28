

module.exports = angular.module('tableApp.services', []).

	factory('Games', function($http) {
		return {
			getAll: function(seasonId) {
				return $http({
					method: 'GET',
					url: 'http://www.nicetimeonice.com/api/seasons/' + seasonId + '/games'
				})
			},
			getByTeam: function(sesonnId, teamId) {
				return $http({
					method: 'GET',
					url: 'http://www.nicetimeonice.com/api/seasons/' + seasonId + '/games',
					params: {
						team: teamId
					}
				})
			}
		};
	});