import View from "./View";
import WorldModel from "./WorldModel";
class CanvasView implements View {
  scale: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  public constructor() {
    this.scale = scale;
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
  }
  public display(world: WorldModel): void {
    this.canvas.width = world.width * this.scale;
    this.canvas.height = world.height * this.scale;

    this.context.fillStyle = "yellow";
    this.context.fillRect(
      0,
      0,
      world.height * this.scale,
      world.width * this.scale
    );

    this.context.fillStyle = "red";
    this.context.fillRect(
      0,
      0,
       this.scale,
       this.scale
    );

  }

  update{
    if Actor.snake;
      display Snake;
    

  }


  dispose{
    document.body.removeChild();
  }

}

export default CanvasView;