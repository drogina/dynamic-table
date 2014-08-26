

module.exports = angular.module('app.tableApp', [
	require('./controllers/controllers.js').name,
	require('./directives/directives.js').name,
	require('./services/services.js').name
]);