angular.module('robotApp', [])
  .controller('RobotController', function() {
    var robot = this;
    var direction;
    var x = 0;
    var y = 0;
 
    robot.handleInput = function() {
      direction = 0;
      var input = robot.inputText;
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
      robot.output = x + " " + y + " " + robotDirection();
    }

    function handleForward(){
      switch(direction){
        case 0:
          y++
          break;
        case 1:
          x++
          break;
        case 2:
          y--
          break;
        case 3:
          x--
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
        console.log("Wrong input")
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