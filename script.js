var snakeWidth=10;
var snakeHeight=10;
var snakePositionLeft=10;
var snakePositionUp=10;
var right=document.querySelector(".right")
var left=document.querySelector(".left")
var up=document.querySelector(".up")
var down=document.querySelector(".down")



var createSnake = function(){
  var element=document.createElement("div");
  element.classList.add("snake");
  document.getElementById("root").appendChild(element);
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          leftPress()
          break;
      case 38:
         upPress()
          break;
      case 39:
          rightPress()
          break;
      case 40:
          downpress()
          break;
  }
};


var rightPress = function(){
  if (snakePositionLeft<790) {
    snakePositionLeft+=10;
  }
  document.querySelector(".snake").style.left = snakePositionLeft+"px";
}
var leftPress= function(){
  if (snakePositionLeft>0) {
    snakePositionLeft-=10;
  }
  document.querySelector(".snake").style.left = snakePositionLeft+"px";
}

var upPress= function(){
  if (snakePositionUp>0) {
    snakePositionUp-=10;
  }
  document.querySelector(".snake").style.top = snakePositionUp+"px";
}

var downpress= function(){
  if (snakePositionUp<390) {
    snakePositionUp+=10;
  }
  document.querySelector(".snake").style.top = snakePositionUp+"px";
}

createSnake();