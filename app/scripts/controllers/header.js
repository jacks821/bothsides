'use strict';

angular.module('bothSidesFrontEndApp')
  .controller('HeaderCtrl', ['$scope','$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() === path;
    };
  }]);
