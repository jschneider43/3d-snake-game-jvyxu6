class Player {
  _snakeController: SnakeController;

  constructor(sc:SnakeController){
    this._snakeController = sc;
  }

  abstract makeTurn(){
    
  }

}

class AvoidWallsPlayer extends Player {

  constructor(){
    return super.constructor;
  }

  makeTurn(){
    snake.turnLeft = turnSnakeLeft;
  }

}
export default Player;