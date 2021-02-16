import display from './display';
import Point from "./Point";

// place your code on line 5 above the export statement below

class Snake {
  
  currentPosition: Point;
  currentDirection: number;
  x: xcoord;
  y: ycoord;

  constructor(){
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.x = 0;
    this.y = 0;
  }

  move(steps:number){
    let x = this.cuurentPosition.x;
    let y = this.currentPosition.y;

    if (this.currentPosition = 1) {
      y += steps;     
    }
    if (this.currentPosition = 2) {
      x += steps;     
    }if (this.currentPosition = 3) {
      y -= steps;     
    }if (this.currentPosition = 4) {
      x -= steps;     
    }

  turn(){
    if (currentDirection = 1){currentDirection = -1;}
    else {currentDirection = 1;}
  }

  turnLeft(){
    this.currentDirection--;
      if (this.currentDirection = 0)
        this.currentDirection = 3;
  }

  turnRight(){
    this.currentDirection++;
      if (this.currentDirection = 0)
        this.currentDirection = 3;
  }

  set snake(s:snake){
    this.snake = s;
  }
}
  public get position(){
    return this.getPosition;
  }


}
  public get x(){}
  public get y(){}
export default Snake;