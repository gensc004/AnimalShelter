'use strict';

angular.module('animalShelterApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedAlignment: 'md-left'
      };
     var iconData = [
            {name: 'icon-home'        , color: "#777" },
            {name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
            {name: 'icon-google-plus2', color: "#A00" },
            {name: 'icon-youtube4'    , color:"#00A" },
             // Use theming to color the font-icon
            {name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
          ];

  });
