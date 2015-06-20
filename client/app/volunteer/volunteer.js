'use strict';

angular.module('animalShelterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('volunteer', {
        url: '/volunteer',
        templateUrl: 'app/volunteer/volunteer.html',
        controller: 'VolunteerCtrl'
      });
  });