'use strict';

describe('Controller: NeedsCtrl', function () {

  // load the controller's module
  beforeEach(module('animalShelterApp'));

  var NeedsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NeedsCtrl = $controller('NeedsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
