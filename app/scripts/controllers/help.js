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
                content: 'To create a dispute:<br>1.  <a href="/signup">Sign Up</a><br>2.  Click "Create a Dispute"<br>3.  Accept the Terms of Service<br>4.  Choose your Parameters (i.e. Term of Voting, Character Limit)<br>5.  Write your Side of the Story<br>6.  Submit and Wait for Other Side'
            },
            {
                title: 'Voting on a Dispute',
                content: 'To vote on a dispute:<br>1.  <a href="/signup">Sign Up</a> and <a href="/signin">Sign In</a><br>2.  Click your personalized tab in the top corner<br>3.  Scroll to "Vote on Disputes"<br>4.  Click on any Dispute<br>5.  Vote!'
            },
            {
                title: 'Sign Up for BothSides',
                content: 'To Sign Up to Vote or Create a Dispute:<br>1.  Go to the <a href="/signup/">Sign Up</a> Page<br>2.  Enter your Sign Up Information<br>3.  Hit Enter and VOTE!'
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
