class GameController{

  constructor(world: WorldModel){
    g = game;
  }

  run(){
    lastTime = 0;
  }

  updateFrame(){
    requestAnimationFrame()
    makeTurn(player1,player2);
  }

}