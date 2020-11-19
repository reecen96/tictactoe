

//----------1. determines if AI is active---------//
//determines which AI type to use (0 = pvp, 1= easy(random), 2=Medium(pre determined moves), 3=)
var ai= 0


//----------2. actions AI moves---------//
//actions AI move
function actionMove (col, row){
  addXO(col,row)
}


//----------3. determine which AI to use---------//
//determins which AI to use & if it is the AI's turn
function aiFunc(){
  if (playerTurn ==1){
    return
  }
  if (playerTurn == 0){
    if (ai ==1){
       pickSquare ()
  }
    if (ai==2){
      mediumAI ()
  }
  }
}

//----------4. Easy AI---------//
//Easy AI (random moves)
function pickSquare (){
  var col =0
  var row =0
  col = Math.floor(Math.random() * dimensions)
  row = Math.floor(Math.random() * dimensions)
  actionMove(col,row)
}


//----------5. Medium AI---------//
//Medium AI (pre-determined moves)
function mediumAI(){
  const random = Math.floor(Math.random() * dimensions)
  const r1 = Math.round((dimensions-1)/2)
  const r2 = 0
  const r3 = dimensions-1
//move 1
  if (checkSquare(r3,r3)){
    actionMove(r3, r3)}
//move 2
    else if (checkSquare(r1,r1)){
        actionMove(r1, r1)}
//move 3
  else if (checkSquare(0,0)){
    actionMove(0,0)}
//move 4
  else if (checkSquare(0,r3)){
    actionMove(0, r3)}
//move 5
  else if (checkSquare(0,r1)){
    actionMove(0, r1)}
//move 6
  else if (checkSquare(r1,0)){
    actionMove(r1, 0)}
//once moves made - random moves
  else {
      actionMove(random, random)
  return
}}






//---Minimax---//
