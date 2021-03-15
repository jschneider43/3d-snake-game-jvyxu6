class Point {
  xcoord: number;
  ycoord: number;

  constructor(x:number, y:number){
    this.xcoord = x;
    this.ycoord = y;
  }

  get x(){
    return this.xcoord;
  }

  get y(){
      return this.ycoord;
  }

  equals(p){
    if this.Point(x,y) = p;
      return true;
  }


}

export default Point;