import Snake from "./Snake"

class WorldModel {
  _snake: Snake;

  constructor() {
    this._snake = null;
    this.width: number;
    this.height: number;
    this._view = null;
    allSnakes[];
    allViews[];
    aca = ActorCollisionHandlers;
  }

  update(steps:number){
    this._snake.move(steps);
    allSnakes(move.Snake);
    allViews(){
      return this.update;
    }
    snakeCollide[];  

    Actor.Food(Math.floor(n*Math.random()));

    reset{
      dispose();
    }
  }
  get snake() {
    return this.allSnakes;
  }

  get width(){
    return this.width;
  }

  get height(){
    return this.height;
  }

  public set view() {
    this._view = view;
  }

  addSnake(s){
    Snake[s];
  }

  addView(v){
    View[v];
  }

}


export default WorldModel;