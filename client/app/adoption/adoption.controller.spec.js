'use strict';

describe('Controller: AdoptionCtrl', function () {

  // load the controller's module
  beforeEach(module('animalShelterApp'));

  var AdoptionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdoptionCtrl = $controller('AdoptionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
