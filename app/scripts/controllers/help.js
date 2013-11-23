'use strict';

angular.module('bothSidesFrontEndApp')
    .controller('HelpCtrl', ['$scope','$modal','$log', function ($scope, $modal, $log) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function () {

            var modalInstance = $modal.open({
                templateUrl: 'views/help.html',
                controller: function ($scope, $modalInstance, items) {
                    $scope.items = items;
                    $scope.selected = {
                        item: $scope.items[0]
                      };
                    $scope.ok = function () {
                        $modalInstance.close($scope.selected.item);
                      };
                  },
                resolve: {
                    items: function () {
                        return $scope.items;
                      }
                  }
                });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
              }, function () {
                $log.info('Modal dismissed at: ' + new Date());
              });
          };
      }]);
