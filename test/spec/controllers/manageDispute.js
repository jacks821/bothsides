'use strict';

describe('Controller: ManagedisputeCtrl', function () {

  // load the controller's module
  beforeEach(module('bothSidesFrontEndApp'));

  var ManagedisputeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagedisputeCtrl = $controller('ManagedisputeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
