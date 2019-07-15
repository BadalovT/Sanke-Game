function Snake(options) {
  this.options = options;
  this.element = this.options.element;
  this.snake = [];
  this.food = [];
  this.direction = "right";
  // this.gameOver=false
  this.init();
}

Snake.prototype.init = function () {
  this.initField();
  this.initSnake();
  this.stepFunction();
  this.listen();
};

Snake.prototype.initField = function () {
  this.element.style.width = (this.options.field.sizeX * this.options.cellSize) + "px";
  this.element.style.height = (this.options.field.sizeY * this.options.cellSize) + "px";
};

Snake.prototype.initSnake = function () {
  for (let i = 0, len = this.options.snake.minSize; i < len; i++) {
    var snakeItem = document.createElement("div");
    snakeItem.className = "snake_item"
    snakeItem.style.width =
      snakeItem.style.height = this.options.cellSize + "px";

    snakeItem.style.top = 0;
    snakeItem.style.left = (i * this.options.cellSize) + "px";


    this.snake.push({
      element: snakeItem,
      posX: i,
      posY: 0,
      direction: 'right'
    });
    this.element.appendChild(snakeItem)
  }
}

Snake.prototype.move = function () {
  for (var i = 0, len = this.snake.length; i < len; i++) {
    var snakeItem = this.snake[i];
    switch (snakeItem.direction) {
      case 'left':
        snakeItem.posX--;
        snakeItem.element.style.left = (snakeItem.posX * this.options.cellSize) + "px";
        break;
      case 'right':
        snakeItem.posX++;
        snakeItem.element.style.left = (snakeItem.posX * this.options.cellSize) + "px";
        break;
      case 'top':
        snakeItem.posY--;
        snakeItem.element.style.left = (snakeItem.posY * this.options.cellSize) + "px";
        break;
      case 'bottom':
        snakeItem.posY++;
        snakeItem.element.style.left = (snakeItem.posY * this.options.cellSize) + "px";
        break;
    }
  }
  for (var i = len-2; i >=0; i--) {
    this.snake[i].direction=this.snake[i+1].direction;
  }
}

Snake.prototype.changeDirection=function(direction){
  var head = this.snake[this.snake.length - 1];
  head.direction=direction;
}

Snake.prototype.listen = function () {
  var _this=this;
  window.addEventListener('keydown', function () {
    var e = window.event;
    switch (e.keycode) {
      case 38:
        _this.changeDirection('top')
        break;
      case 40:
        _this.changeDirection('bottom')
        break;
      case 37:
        _this.changeDirection('left')
        break;
      case 39:
        _this. changeDirection('right')
        break;

    }
  })
}



Snake.prototype.checkgameOver = function () {
  var head = this.snake[this.snake.length - 1];
  if (head.posX == this.options.field.sizeX) {
    return true;
  } else if (head.posY == this.options.field.sizeY) {
    return true;
  } else if (head.posX < 0) {
    return true;
  } else if (head.posY < 0) {
    return true;
  }
  return false;
}

Snake.prototype.stepFunction = function () {
  var _this = this;
  if (!this.checkgameOver()) {
    this.move()
    return setTimeout(function () {
      _this.stepFunction();
    }, 1000)
  }
  alert("Game Over")
}

new Snake({
  element: document.getElementById("snake"),
  cellSize: 20,
  field: {
    sizeX: 10,
    sizeY: 10,
  },
  snake: {
    defaultDirection: "right",
    minSize: 2,
    // posX:0,
    // posY:0
  }
})