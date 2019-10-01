var app = angular.module('robotApp', [])
app.controller('RobotController', function RobotController($scope) {
  var direction;
  $scope.height;
  $scope.width;
  $scope.radius;
  var hitTheWall = false;
  $scope.x = 0;
  $scope.y = 0

  $scope.handleHeightWidth = function(){
    $scope.width = $scope.inputWidth;
    $scope.height = $scope.inputHeight;
    $scope.radius = undefined;
  }

  $scope.handleRadius = function(){
    $scope.radius = $scope.inputRadius;
  }
  
  $scope.handleStartPosition = function() {
    if (!isNaN($scope.startX) && !isNaN($scope.startY)){
    $scope.x = $scope.startX;
    $scope.y = $scope.startY;
    } else {
      $scope.output = "Incorrect startposition"
    }
  }

  $scope.handleReset = function(){
    location.reload();
  }

  $scope.handleInput = function() {
    direction = 0;
    var input = $scope.inputText;
    for (var i= 0; i < input.length; i++){
      switch(input.charAt(i)){
        case "G": 
        case "F":
          handleForward()
          break;
        case "H":
        case "R": 
          handleRight()
          break;
        case "V":
        case "L": 
          handleLeft()
          break;
        default: 
          handleWrongInput()
          return;
      }
      if (hitTheWall == true){
        $scope.output = "I hit the wall.";
        $scope.x = 0;
        $scope.y = 0;
        return;
      }
    }
    $scope.output = $scope.x + " " + $scope.y + " " + robotDirection();
  }

  function handleForward(){
    switch(direction){
      case 0:
        $scope.y--
        break;
      case 1:
        $scope.x++
        break;
      case 2:
        $scope.y++
        break;
      case 3:
        $scope.x--
        break;
      default:
        break;
    }
    if (contains($scope.x, $scope.y) === false) {
      hitTheWall = true;
    }
  }

  function handleRight(){
      if (direction == 3){
          direction = 0
      } else {
          direction++
      }
  }

  function handleLeft(){
      if (direction == 0){
          direction = 3
      } else {
          direction--
      }
  }

  function handleWrongInput(){
      $scope.output = "Incorrect input";
  }

  function robotDirection(){
    switch(direction){
      case 0: 
        return "N"
      case 1:
        return "E"
      case 2: 
        return "S"
      case 3:
        return "W"
      default:
        return "Direction error";
    }
  }

  function contains(x, y){
    if (typeof $scope.radius == 'undefined'){
      if (x > $scope.width || y > $scope.height || x < 0  || y < 0){
        return false;
      } else {
        return true;
      }
    } else {
      console.log(Math.abs(x) + Math.abs(y));
      if (Math.abs(x) + Math.abs(y) > $scope.radius){
        return false;
      } else {
        return true;
      }
    }
  }
});