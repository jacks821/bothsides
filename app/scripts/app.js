'use strict';

angular.module('bothSidesFrontEndApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute'
])
 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
