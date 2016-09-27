var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope){
  $scope.FavColor = "Red";
  $scope.secondsInCentury = (60*60*24*365*100);
  $scope.rightNow = new Date();
})

app.controller("MadLibController", function($scope){
  $scope.toggle=false;
  $scope.click = function(){
    $scope.toggle = true;
  };
  $scope.clear = function(){
    console.log("hi");
    $scope.toggle = false;
    $scope.mad = null;
  }
})
