interface InputHandler{

  madeLeftMove()
    if Player(turnLeft);
      return true;
  
  madeRightMove()
    if Player (turnRight);
      return true;

  resetLeftMove()
    if madeLeftMove = "true";
      return  madeLeftMove(null);


  resetRightMove()
  if madeRightMove = "true";
    return madeRightMove(null);

}