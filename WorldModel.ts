import Snake from "./Snake"

class WorldModel {
  _snake: Snake;

  constructor(s:snake) {
    this._snake = s;

    this.width: number;
    this.height: number;
  }

  update(steps:number){
    this._snake.move(steps);
  }
  get snake() {
    return this._snake;
  }

  get width(){
    return this.width;
  }

  get height(){
    return this.height;
  }

}


export default WorldModel;