//https://gist.github.com/textchimp/afcb3ddc676dccd59ccb18cb9391c87a//


//determines which AI type to use (0 = pvp, 1= easy(random), 2=Medium(pre determined moves), 3=)
var ai= 0


//actions AI move
function actionMove (col, row){
  addXO(col,row)
}

//determins which AI to use & if it is the AI's turn
function aiEasyFunc(){
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

//random Math for easy AI
function pickSquare (){
  var col =0
  var row =0
  col = Math.floor(Math.random() * dimensions)
  row = Math.floor(Math.random() * dimensions)
  console.log(col, row)
  actionMove(col,row)
  // addXO(col, row, 0)
}

//Medium AI (tought moves)
function mediumAI(){
console.log('hello')
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
  //move 4
  else {
      actionMove(random, random)}
  return
    }
