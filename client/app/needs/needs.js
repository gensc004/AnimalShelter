'use strict';

angular.module('animalShelterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('needs', {
        url: '/needs',
        templateUrl: 'app/needs/needs.html',
        controller: 'NeedsCtrl'
      });
  });