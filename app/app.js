
 require('angular/angular');
 require('angular-bootstrap/ui-bootstrap-tpls');
 require('angular-ui-utils/ui-utils.js');
 require('ng-table/ng-table.js');

// Declare app level module which depends on controllers, directives, and services
angular.module('tableApp', [
  'ui.utils',
  'ui.bootstrap',
  'ngTable',
  require('./table').name
]);
