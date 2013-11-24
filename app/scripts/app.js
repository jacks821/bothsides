'use strict';

angular.module('bothSidesFrontEndApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
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
      .when('/disputes/create', {
        templateUrl: 'views/createDispute.html',
        controller: 'CreatedisputeCtrl'
      })
      .when('/disputes', {
        templateUrl: 'views/dispute.html',
        controller: 'DisputeCtrl'
      })
      .when('/disputes/:id/manage', {
        templateUrl: 'views/manageDispute.html',
        controller: 'ManagedisputeCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/disputes/:id', {
        templateUrl: 'views/disputeDetail.html',
        controller: 'DisputedetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
