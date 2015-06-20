'use strict';

angular.module('animalShelterApp')
  .controller('NavbarCtrl', function ($scope, $location, $mdSidenav, $mdMedia) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
    $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  });