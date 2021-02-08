import display from './display';

// place your code on line 5 above the export statement below

class Snake {
  
  currentPosition: number;
  currentDirection: number;
  x: xcoord;
  y: ycoord;

  constructor(){
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.x = 0;
    this.y = 0;
  }

  move(currentPosition:number){
    if (currentDirection = 0) this.position = new Point(this.position.x,this.position.y);
    else if (currentDirection = 1) this.position = new Point(this.position.x,this.position.y);
    else if (currentDirection = 2) this.position = new Point(this.position.x,this.position.y);
    else (currentDirection = 3) this.position = new Point(this.position.x,this.position.y);
  }

  turn(){
    if (currentDirection = 1){currentDirection = -1;}
    else {currentDirection = 1;}
  }

  turnLeft(){
    if(currentDirection = 0) currentDirection + 1;
    else if(currentDirection = 1) currentDirection + 1;
    else if(currentDirection = 2) currentDirection + 1;
    else currentDirection = 3
  }

  turnRight(){
 if(currentDirection = 3) currentDirection - 1;
    else if(currentDirection = 2) currentDirection - 1;
    else if(currentDirection = 1) currentDirection - 1;
    else currentDirection = 0
  }

  set snake(s:snake){
    this.snake = s;
  }
}
  public get position(){
    return this.getPosition;
  }

class Point {
  private xcoord:number;
  private ycoord:number;

  constructor(){
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }

class WorldModel(){

  constructor(){
    this.snake = s;

  update(steps){
    
  }
  }
}

}
  public get x(){}
  public get y(){}
export default Snake;