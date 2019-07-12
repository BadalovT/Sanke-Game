function Snake(options){
  this.options=options;
  this.element=this.options.element;
  this.snake=[];
  this.food=[]

  this.init();
}

Snake.prototype.init=function(){
  this.initField();
  this.initSnake();
};

Snake.prototype.initField = function(){
  this.element.style.width=(this.options.field.sizeX*this.options.cellSize)+"px";
  this.element.style.height=(this.options.field.sizeY*this.options.cellSize)+"px";
};

Snake.prototype.initSnake = function(){
for (let i = 0, len=this.options.snake.minSize; i< len; i++) {
  var snakeItem= document.createElement("div");
  snakeItem.className="snake_item"
  snakeItem.style.width=
    snakeItem.style.height=this.options.cellSize+"px";
  snakeItem.style.top=0;
  snakeItem.style.left=(i*this.options.cellSize)+"px;"
  
  this.snake.push(this.snakeItem);
  this.element.appendChild(snakeItem)
}
}


new Snake ({
  element:document.getElementById("snake"),
  cellSize:20,
  field:{
    sizeX:10,
    sizeY:10,
  },
  snake:{
    defaultDirection : "right",
    minSize : 2,
    posX:0,
    posY:0
  }
})