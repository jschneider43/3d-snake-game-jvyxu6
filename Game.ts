class Game{

  constructor{
    contextSwitches = new Maps;
    controllers = new Maps;
    controllers Map(START) = new MainMenuController;
    controllers Map(GAME) = new GameController;
    currentContext(START)
  }

  switchContext{
    data;

    Game.currentContext = Map.contextSwitches;  
  }

}