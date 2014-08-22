
 require('angular/angular');
 require('angular-bootstrap/ui-bootstrap-tpls');
 require('angular-ui-utils/ui-utils.js');

// Declare app level module which depends on controllers, directives, and services
angular.module('myApp', [
  'ui.utils',
  'ui.bootstrap',
  require('./module').name
]);
