class MainMenuController{

  constructor{
    game(g);
    button(playGameButton);
    input(humanPlayersInput);
    input(aiPlayersInput);
  }

  button(){
    document.createTextNode(Start Game!);
    this.switchContext.bind(this)
  }

  init(data){
    body(humanPlayersInput, aiPlayersInput, playGameButton);
  }

  switchContext{
    document.body.removeChild;

  }

}