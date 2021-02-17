class SnakeController {

  constructor() {
    this.World = w;
    this.Snake = s;

    this.snakeWorld = w;
    this.slitherer = s;
  }


  turnSnakeLeft(){
    snake.turnLeft();
  }

  turnSnakeRight(){
    snake.turnRight();
  }

  get snakePosition() {
    return this.currentPosition;
  }

  get snakeDirection(){
    return this.currentDirection;
  }

  get worldWidth(){
    return worldModel.width;
  }

  get worldHeight(){
    return worldModel.height;
  }

}
export default SnakeController;