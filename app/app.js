'use strict';

// Declare app level module which depends on views, and components
angular.module('storeApp', [
  'ngRoute',
  'storeApp.view1',
  'storeApp.view2',
  'storeApp.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
