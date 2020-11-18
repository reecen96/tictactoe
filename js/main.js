

//---------Variables-------//
var playerTurn = 0
//total number of clicked buttons
//values for HTML scoreboard
var oScore = 0
var xScore = 0
//values for Tic Tac Toe
var diagonal = 0;
var antiDiagonal = 0;
var rows =[]
var cols =[]
//dimenstions of the Tic Tac Toe board
var dimensions = 0
var totalmoves = 0
var moves = 0
//------------------------//

$(document).ready(function(){
  const dimen = $('.dimen').html()
    dimensions = parseInt(dimen)
    totalmoves = dimen*dimen
  resetNumber(dimen)
  aiEasyFunc()
})

function resetNumber(dimens){
  moves =0
  for (i=0; i<dimens; i++){
    rows.push(0)
    cols.push(0)
}}


//function runs when button has been clicked - determins if button has already been clicked and then actions this
function addXO(col, row) {
  if(checkSquare(col,row)){
    disappear(col, row)
    move(col, row ,playerTurn)
    console.log("rows: "+rows+"cols: "+cols)
    playerTurner()
    aiEasyFunc()
} else aiEasyFunc()}


//changes player from X to O
function playerTurner(){
  if (playerTurn === 0){
    playerTurn = 1
}
  else if (playerTurn === 1){
    playerTurn = 0
}}


//returns the name of the player (number to name)
function whoPlayer (player){
  if (player === 1){
    return "X"
  }
  else if (player === 0){
    return "O"
  }}




function move(row, col, player) {

    var toAdd = (player === 1) ? 1 : -1;
     rows[row] += toAdd;
     cols[col] += toAdd;
    if (row === col) {
         diagonal += toAdd;}

    if (col === (cols.length - row - 1)) {
         antiDiagonal += toAdd;}

    var size = rows.length;
    if (Math.abs(rows[row]) === size ||
        Math.abs(cols[col]) === size ||
        Math.abs(diagonal) === size  ||
        Math.abs(antiDiagonal) === size) {
          win()}

    else {
      draw()
      turnMenu()
      return
  }};




//function runs if player wins - clears board and adds score
function win(){
  addToLocalUpdate ()
  alert(whoPlayer(playerTurn) + " wins!")
  score()
  playerTurner()
  clearBoard()}


//function adds +1 to variable moves - runs if moves > total availible spaces
function draw(){
  moves += 1

  if (moves >=  totalmoves){
    clearBoard()
    return}
  else return}


// Shows current player on HTML
function turnMenu () {
  if (playerTurn == 1){
    $('#turnMenu').text('O')
    }
  else if (playerTurn ==0){
    $('#turnMenu').text('X')
    }
}

//function to clear board - resets all variables & hides buttons
function clearBoard(){
  playerTurn = 1
  rows = []
  cols = []
  resetNumber(dimensions)
  squaresChosen= []
  diagonal = 0;
  antiDiagonal = 0;
  $('img').attr('src', '')
  $('img').css('opacity','0')
  return;}


//function to update current player on HTML
function score (){
  console.log("you score!!")
  if (playerTurn === 0){
      oScore += 1
      $('#scoreO').text(oScore)
}
  if (playerTurn === 1){
     xScore +=1
    $('#scoreX').text(xScore)
  }
}



$(document).on("click", 'td', function(event){
  const column = (event.target.id)
  const row = (event.target.className)

  if(row === "pic"){
    return;
  }
  else{
    addXO(column, row, moves)
    console.log ('clicked column: '+column+'row: '+row+ 'moves: '+moves)
  }
})



const checkSquare= function(col, row){
  const imageReplace = ("td#"+col+"."+row)
  console.log(imageReplace)
 jQuery = $(imageReplace).children()

  if (jQuery.css('opacity')==0){
    return true;
  }
  if (jQuery.css('opacity')==1){
  return false;
  }
}


//local storage

function addToLocalUpdate (){
  const localX = parseInt(localStorage.getItem("Xwin"))+1
  const localO = parseInt(localStorage.getItem("Owin"))+1

if (playerTurn===1){
localStorage.setItem("Xwin", localX)
}
if (playerTurn===0){
localStorage.setItem("Owin", localO)
}
  }



const disappear= function(col, row){
  const imageReplace = ("td#"+col+"."+row)
   jQuery = $(imageReplace).children()

   if (playerTurn === 1){
    jQuery.attr('src', 'http://clipart-library.com/image_gallery/83903.png')
    jQuery.css('opacity', '1')}

   if (playerTurn === 0){
    jQuery.attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    jQuery.css('opacity', '1')
    }
}


$(document).ready(function(){
  console.log ('DOM is ready')

$(document).ready(function(){
  $( "#xStat" ).text("hello")
  $( "#oStat" ).text("hello")
})

  $('#easy').on("click", function(){
  ai = 1
aiEasyFunc()})

  $('#reset').on("click", function(){
  ai = 0
aiEasyFunc()})

  $('#medium').on("click", function(){
  ai = 2
aiEasyFunc()})

  $('#hard').on("click", function(){
  ai = 3
aiEasyFunc()})
});
