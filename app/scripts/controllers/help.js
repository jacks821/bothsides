'use strict';

angular.module('bothSidesFrontEndApp')
    .controller('HelpCtrl', ['$scope','$modal','$log', function ($scope, $modal, $log) {

        $scope.items = [
            {
                title: 'Demo Version',
                content: 'This is a demo version'
            },
            {
                title: 'Creating a Dispute',
                content: 'To create a dispute'
            },
            {
                title: 'Voting on a Dispute',
                content: 'To vote a dispute please select a dispute page and read the rules.'
            }];

        $scope.open = function () {

            var modalInstance = $modal.open({
                templateUrl: 'views/help.html',
                controller: ['$scope', '$modalInstance','items', function ($scope, $modalInstance, items) {
                    $scope.items = items;
                    $scope.selected = {
                        item: $scope.items[0]
                    };
                    $scope.ok = function () {
                        $modalInstance.close($scope.selected.item);
                    };
                }],
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
