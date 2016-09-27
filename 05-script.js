var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.obj = {name: "mike", age: 28, title: "Dr."};
  $scope.tooShort = true;
  $scope.increment = function(){
    $scope.tooShort = $scope.pass.length<6;
  }
});

app.controller('CameraController', function($scope) {
  $scope.items = [
  {
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: 'Nikon D810A',
    image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }]
});
