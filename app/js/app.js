(function() {
  "use strict";

  var app = angular.module("HelloWorldApp", [
    'ngRoute'
  ]);

  app.config(function($routeProvider, $locationProvider) {

    $routeProvider.when("/area", {
      templateUrl: 'templates/area.html'
    });

    $routeProvider.when("/perimeter", {
      templateUrl: 'templates/perimeter.html'
    });

    $locationProvider.html5Mode(false);
  });

  app.controller("HelloWorldController",[
    '$scope',
    function($scope){

      $scope.circleArea = function() {
        return Math.PI * Math.pow($scope.number, 2);
      };

      $scope.circlePerimeter = function() {
        return 2 * Math.PI * $scope.number;
      };

      $scope.$watch("number", function( newValue, oldValue ) {
        if ( newValue === undefined ) return;

        if ( isNaN( newValue ) ) {
          $scope.numberError = true;
        } else {
          $scope.numberError = false;
        }
      });
    }
  ]);
}());