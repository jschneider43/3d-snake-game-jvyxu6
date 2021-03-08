class GameController{

  constructor(world: WorldModel);

  run(){
    lastTime = 0;
  }

  updateFrame(){
    requestAnimationFrame()
    makeTurn(player1,player2);
  }

}