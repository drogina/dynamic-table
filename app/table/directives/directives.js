
/* Directives */

module.exports = angular.module('tableApp.directives', []).
	// directive for allergy_list.html
  directive('showTable', function() {
  	return {
  		restrict: 'E',
  		template: require('../main/table.html'),
  		controller: 'TableCtrl'
  	}
  }).
  directive('loadingContainer', function() {
  	return {
  		restrict: 'A',
  		scope: false,
      link: function(scope, element, attrs) {
          var loadingLayer = angular.element('<div class="loading"></div>');
          element.append(loadingLayer);
          element.addClass('loading-container');
          scope.$watch(attrs.loadingContainer, function(value) {
              loadingLayer.toggleClass('ng-hide', !value);
          });
      }
  	};
  });