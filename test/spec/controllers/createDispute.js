'use strict';

describe('Controller: CreatedisputeCtrl', function () {

  // load the controller's module
  beforeEach(module('bothSidesFrontEndApp'));

  var CreatedisputeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatedisputeCtrl = $controller('CreatedisputeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
