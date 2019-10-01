var app = angular.module('robotApp', [])
app.controller('RobotController', function RobotController($scope) {
  var direction;
  $scope.x = 0;
  $scope.y = 0
  
  $scope.handleStartPosition = function() {
    console.log(typeof($scope.startX));
    console.log("startx: " + $scope.startX + "starty: " + $scope.startY);
    if (!isNaN($scope.startX) && !isNaN($scope.startY)){
    $scope.x = $scope.startX;
    $scope.y = $scope.startY;
    } else {
      $scope.output = "Incorrect startposition"
    }
    console.log("x: " + $scope.x + "y: " + $scope.y);
  }

  $scope.handleReset = function(){
    $scope.x = 0;
    $scope.y = 0;
    direction = 0;
    $scope.output = "";
    document.getElementById('startX').value = '';
    document.getElementById('startY').value = '';
    document.getElementById('input').value = '';
  }

  $scope.handleInput = function() {
    direction = 0;
    var input = $scope.inputText;
    for (var i= 0; i < input.length; i++){
      console.log(input.charAt(i));
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
});
app.controller('RoomController', function RoomController($scope) {

  $scope.handleQuadratic = function(){
    document.getElementById("iframe1").src = 'quadraticform.html';
  }

  $scope.handleCircular = function(){
    document.getElementById("iframe1").src = 'circularform.html';
    console.log("Hello from handlecircular");
  }

  $scope.handleHeightWidth = function(){
    console.log("side:" + $scope.width);
  }

  $scope.handleRadius = function(){
    console.log("radius:" + $scope.radius);
  }

});