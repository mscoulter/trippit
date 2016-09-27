var app = angular.module("ex8", []);
app.controller("ControllerOne", function($scope){
  $scope.view = {};
  $scope.view.number = 5;
  $scope.pickRandomNumber = function() {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
})
app.controller("Reverse", function($scope){
  $scope.view = {};
  $scope.click = function() {
    console.log("moo");
    $scope.view.word = $scope.view.word.split("").reverse().join("")
  }
})

app.controller("pong", function($scope){
  $scope.view = {};
  $scope.view.p1=0;
  $scope.view.p2=0;
  $scope.add1 = function() {
    $scope.view.p1 += 1
  }
  $scope.add2 = function() {
    $scope.view.p2 += 1
  }
  $scope.serve = function() {
    if (($scope.view.p1+$scope.view.p2)%2==0) {
      return true
    }
    else {
      return false;
    }
  }
})

app.controller("count", function($scope){
  $scope.view = {};
  $scope.view.enterCount = 0;
})

app.controller("ColorBox", function($scope){
  $scope.view = {};
  $scope.randomColor = function(){
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    return color;
  };
  var replaying = false;

$scope.replay = function() {
  var displayPrevColor = function() {
    // do some logic to change color
    // if done replay colors
    replaying = false;
    // else
    $timeout(displayPrevColor, 1000);
    // end if/else
  };
  if (!replaying) {
    replaying = true;
    // This timeout starts the timeout loop
    $timeout(function() { displayPrevColor(); }, 500);
  }
};
})
