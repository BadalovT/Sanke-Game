var snakeWidth=10;
var snakeHeight=10;
var snakePositionLeft=0;
var snakePositionUp=0;
var foodPositionLeft=Math.round(Math.random()/10*790)/10*100;
var foodPositionTop=Math.round(Math.random()/10*390)/10*100;
var right=document.querySelector(".right")
var left=document.querySelector(".left")
var up=document.querySelector(".up")
var down=document.querySelector(".down")

var isright=true;
var isleft=true;
var isdown=true;
var isup=true;



var createSnake = function(){
  var element=document.createElement("div");
  element.classList.add("snake");
  document.getElementById("root").appendChild(element);
}

var createFood = function(){
  var element=document.createElement("div");
  element.classList.add("food");
  element.style.left = foodPositionLeft+"px";
  element.style.top = foodPositionTop+"px";

  document.getElementById("root").appendChild(element);
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
        if (isleft==true) {
          leftPress()
        }
          break;
      case 38:
        if (isup==true) {
         upPress()
        }
          break;
      case 39:
        if (isright==true) {
          rightPress()
          
        }
          break;
      case 40:
        if (isdown=true) {
          downpress()
        }
          break;
  }
};


var rightPress = function(){
  if (snakePositionLeft<790) {
    snakePositionLeft+=10;
  }
  document.querySelector(".snake").style.left = snakePositionLeft+"px";
  isleft=false;
  isdown==true;
  isup=true;
}
var leftPress= function(){
  if (snakePositionLeft>0) {
    snakePositionLeft-=10;
  }
  document.querySelector(".snake").style.left = snakePositionLeft+"px";
  isright=false;
  isdown==true;
  isup=true;
}

var upPress= function(){
  if (snakePositionUp>0) {
    snakePositionUp-=10;
  }
  document.querySelector(".snake").style.top = snakePositionUp+"px";
  isdown=false;
  isleft=true;
  isright=true;
}

var downpress= function(){
  if (snakePositionUp<390) {
    snakePositionUp+=10;
  }
  document.querySelector(".snake").style.top = snakePositionUp+"px";
  isup=false;
  isleft=true;
  isright=true;
}

createSnake();
createFood();