var app = angular.module("broken", []);

app.controller('MainController', function($scope) {
  $scope.view={};
  $scope.view.number = 42;
});
