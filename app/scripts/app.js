'use strict';

angular.module('bothSidesFrontEndApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/voters', {
        templateUrl: 'views/voters.html',
        controller: 'VotersCtrl'
      })
      .when('/createDispute', {
        templateUrl: 'views/createDispute.html',
        controller: 'CreatedisputeCtrl'
      })
      .when('/dispute', {
        templateUrl: 'views/dispute.html',
        controller: 'DisputeCtrl'
      })
      .when('/manageDispute', {
        templateUrl: 'views/manageDispute.html',
        controller: 'ManagedisputeCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/signUp', {
        templateUrl: 'views/signUp.html',
        controller: 'SignupCtrl'
      })
      .when('/signIn', {
        templateUrl: 'views/signIn.html',
        controller: 'SigninCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
