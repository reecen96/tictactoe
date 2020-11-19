
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
var dimensions = 3
var totalmoves = 0
var moves = 0
//------------------------//



//----------1. ready page on load---------//
//This sets the dimensions & total moves when the game loads//
$(document).ready(function(){
  tableBuild()
  resetNumber()
  aiFunc()
  $("#statX").html("X:"+parseInt(localStorage.getItem("Xwin")))
  $("#timedBoard").html(localStorage.getItem("scores"))
  $("#statO").html("O:"+parseInt(localStorage.getItem("Owin")))
  $("#clicks").html("Total page clicks: "+parseInt(localStorage.getItem("clicks")))
})



//----------2. creates rows/board and resets variables---------//
//Creates the rows/columns for var row/cols & resets total moves
function resetNumber(){
  $('.pic').css('opacity','0 !important')
  $('#0.0').css('opacity','0 !important')
  $('.pic').attr('src', '')
  $('#fighters').css('opacity','1')
  totalmoves = dimensions*dimensions
  rows = []
  cols = []
  squaresChosen= []
  diagonal = 0;
  antiDiagonal = 0;
  moves =0
  for (i=0; i<dimensions; i++){
  rows.push(0)
  cols.push(0)
  }
}



//----------3. creates table---------//
//table builder
function tableBuild(){
  var table ='';

  for (var r=0; r< dimensions;r++){
    table += '<tr>'
    for (var c=0; c< dimensions; c++){
      table += '<td ' +'class='+r +' id='+ c +'> '+ '<img class=pic src=""> ' +'</td>'
    }
    table += '</tr>'
    }
  $('#ticTac').html(table)
}



//----------4. detects which square is clicked---------//
// returns the X&Y coordinatants of box clicked
$(document).on("click", 'td', function(event){
  const column = (event.target.id)
  const row = (event.target.className)
//return if image clicked
  if(row === "pic"){
    return;
  }
  else{
    console.log("clicked ADDXO")
    addXO(column, row, moves)
  }
})



//----------5. checks if square has been clicked and actions---------//
//function runs when button has been clicked - determins if button has already been clicked and then actions this
function addXO(col, row) {
//runs function checkSquare to check is square has been previously clicked
  if(checkSquare(col,row)){
    appear(col, row)
    move(col, row ,playerTurn)
    playerTurner()
    aiFunc()
  }
  //if AI move fails - they have another go
  else {
    aiFunc()
  }
}


//----------6. checks if square is availible---------//
//this makes chosen square visible (function)
const checkSquare= function(col, row){
  const imageReplace = ("td#"+col+"."+row)
  const $square = $(imageReplace).children()
  if ($square.attr('src')==''){
    return true;
  }
  else{
    return false
  }
}


//----------7. adds X&O image to square---------//
//sets image of chosen square//
const appear= function(col, row){
  const imageReplace = ("td#"+col+"."+row)
  jQuery = $(imageReplace).children()
  if (playerTurn === 1){
    jQuery.attr('src', 'https://www.pinclipart.com/picdir/big/176-1766362_red-x-cross-gif-clipart.png')
    jQuery.fadeTo(300, 1)
  }

  if (playerTurn === 0){
    jQuery.attr('src', 'https://i.ibb.co/PcYmFYL/favicon.png')
    jQuery.fadeTo(300, 1)
  }
}



//----------8. updates board variables & determines if win (core game code)--------//
//determins where move is made on board - updates VAR rows, col, diagonal, antiDiagonal
function move(row, col, player) {
  //-diagonal is O, +diagonal is X
    var toAdd = (player === 1) ? 1 : -1;
    rows[row] += toAdd;
    cols[col] += toAdd;
    if (row === col) {
         diagonal += toAdd;
    }
    if ((parseInt(col)+parseInt(row))== (cols.length-1)) {
         antiDiagonal += toAdd
    }
//calculates if entire row/col/diag/antidiag has been set - if true player wins
    var size = rows.length;
    if (Math.abs(rows[row]) === size ||
        Math.abs(cols[col]) === size ||
        Math.abs(diagonal) === size  ||
        Math.abs(antiDiagonal) === size) {
          win()
        }
//if player does not win - turn to next player and determine if there has been a draw
    else {
      moveCount()
      return
  }
}




//----------9. checks how many moves have been made--------//
//function adds +1 to variable moves - runs if moves > total availible spaces
function moveCount(){
moves += 1
//if total moves made = total availible moves there has been a draw
if (moves >=  totalmoves){
  resetNumber()
  gameDraw()
}
}



//----------10. changes player turn (X to O)---------//
//changes player from X to O
function playerTurner(){
  if (playerTurn === 0){
    playerTurn = 1
    $('#turnMenu').text('X')
    //this activates animation
    activateAuto1()
}
  else {
    playerTurn = 0
    $('#turnMenu').text('O')
    //this activates animation
    activateAuto2()
  }
}



//----------11. player win function--------//
  //function runs if player wins - clears board and adds score
function win(){
  resetNumber()
  score()
  winMessage()
  playerTurner()
  $('.pic').css('opacity','0 !important')
  }




//----------12. updates win count on HTML & Local storage--------//
//function to update score player on HTML
function score (){
  const localO = parseInt(localStorage.getItem("Owin"))+1
  const localX = parseInt(localStorage.getItem("Xwin"))+1
  if (playerTurn === 0){
    oScore += 1
    $('#scoreO').text("O wins: " +oScore)
    localStorage.setItem("Owin", localO)
  }
  else{
    xScore +=1
    $('#scoreX').text("xWins: " +xScore)
    localStorage.setItem("Xwin", localX)
  }
}



//----------13. document click counter for local storage--------//
//adds click counter to local storage//
jQuery(document).ready(function($){
  $(this).click(function(){
    var addClick= parseInt(localStorage.getItem("clicks"))+1
    localStorage.setItem("clicks", addClick)
  })
})

//----------14. Leaderboard update--------//

function updateLeaderboard (name, score){
  var input = ["'"+name+"'"+" - "+score + " points   <br>"]
  var scoreBoards= (localStorage.getItem("scores"))+input
  localStorage.setItem("scores", scoreBoards)
}


//----------14. Button--------//
//DOM -Jquery functions//
$(document).ready(function(){
  console.log ('DOM is ready')


//activate PVP
$('#easy').on("click", function(){
  ai = 1
  aiFunc()
})

//activate easy AI
$('#reset').on("click", function(){
  ai = 0
  aiFunc()
})

//activate Medium AI
$('#medium').on("click", function(){
  ai = 2
  aiFunc()
})

//activate hard AI
$('#hard').on("click", function(){
  console.log('yo')
  ai = 3
  aiFunc()
})

//reset document
$('#resetButton').on("click", function(){
  console.log('clicked!')
  document.location.reload()
})

//button to change gameboard size
$('#gameSize').on("click", function(){
  if (dimensions > 6){
    dimensions=3
    tableBuild()
    resetNumber()
  }
  else {
    dimensions +=1
    tableBuild()
    resetNumber()
  }
})

//butto for game timer
$('#timedGame').on("click", function(){
  if (timedGames==0){
    timedGames =1
    timeFunc()
    ai = 2
    aiFunc()
  }

  if (timedGames==1){
    timedGames= 0
  }
})


$("#submitButt").click(function(){
  name= $("#nameInput").val();
})

});
