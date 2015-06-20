'use strict';

angular.module('animalShelterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adoption', {
        url: '/adoption',
        templateUrl: 'app/adoption/adoption.html',
        controller: 'AdoptionCtrl'
      });
  });