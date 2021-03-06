'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.create',
  'myApp.join',
  'myApp.search',
  'myApp.played',
  'myApp.next',
  'myApp.suggest',
  'myApp.settings',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  //$routeProvider.otherwise({redirectTo: '#!/next'});
}]);
