

module.exports = angular.module('app.myApp', [
	require('./controllers/controllers.js').name,
	require('./directives/directives.js').name,
	require('./services/services.js').name
]);