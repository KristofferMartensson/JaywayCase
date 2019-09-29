angular.module('robotApp', [])
  .controller('RobotController', function() {
    var robot = this;
    var direction;
    robot.x = 0;
    robot.y = 0
    
    robot.handleStartPosition = function() {
      console.log(typeof(robot.startX));
      console.log("startx: " + robot.startX + "starty: " + robot.startY);
      if (!isNaN(robot.startX) && !isNaN(robot.startY)){
      robot.x = robot.startX;
      robot.y = robot.startY;
      } else {
        robot.output = "Incorrect startposition"
      }
      console.log("x: " + robot.x + "y: " + robot.y);
    }

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
      robot.output = robot.x + " " + robot.y + " " + robotDirection();
    }

    function handleForward(){
      switch(direction){
        case 0:
          robot.y--
          break;
        case 1:
          robot.x++
          break;
        case 2:
          robot.y++
          break;
        case 3:
          robot.x--
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
        robot.output = "Incorrect input";
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