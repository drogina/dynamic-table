
/* Directives */

module.exports = angular.module('tableApp.directives', []).
	// directive for allergy_list.html
  directive('showTable', [function() {
  	return {
  		restrict: 'E',
  		template: require('../main/table.html'),
  		controller: 'TableCtrl'
  	}
  }]);