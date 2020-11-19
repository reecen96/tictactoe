

//----------1. Fighter animations--------//
//----Animates fighter annimations at the bottom of the screen----//
function activateAuto1 (){
  $('#fighters').attr('src', 'https://i.ibb.co/SJ7SLVC/ezgif-com-gif-maker-1.gif');
  setTimeout(function() {
  $('#fighters').attr('src', 'https://i.ibb.co/FmzQSgp/stand-still.png')
  }, 1000)
}

function activateAuto2 (){
  $('#fighters').attr('src', 'https://i.ibb.co/8s288q2/ezgif-com-gif-maker-3.gif');
  setTimeout(function() {
  $('#fighters').attr('src', 'https://i.ibb.co/FmzQSgp/stand-still.png')
  }, 1000)
}

//----------2. draw - text popup--------//
// ----function play when game is a draw (no more possible moves)---//
function gameDraw (){
  $('#outCome').text('Draw!');
  $('#outCome').fadeIn('medium');
    setTimeout(function() {
  $('#outCome').fadeOut('medium');
  }, 2000)
}

//----------3. win - text popup--------//
// function plays when there is a win//
function winMessage(){
  if (playerTurn ==0){
    gameO()
    activateAuto2()
  }
  else{
    activateAuto1()
    gameX()
  }
}


//----------3a. win X --------//
//plays when X wins//
function gameX (){
  $('#outCome').css('color', 'red')
  $('#outCome').text('X Wins')
  $('#outCome').fadeIn('medium');
  setTimeout(function() {
    $('#outCome').fadeOut('medium')
  }, 3000)
}

//----------3a. win O --------//
function gameO (){
  $('#outCome').css('color', 'blue')
  $('#outCome').text('O Wins');
  $('#outCome').fadeIn('medium');
  setTimeout(function() {
    $('#outCome').fadeOut('medium')
  }, 3000)
}


//----------4. timer function --------//
//sets timer game on (1) / off (0)
var timedGames=0
//sets timer seconds
var sec = 20


//game timer
var timeFunc = function (){
  if(timedGames == 1){
    var timer = setInterval(function() {
       $('.timer').text("Time: " +sec--);
       if (sec == -1) {
          clearInterval(timer);
          sec = 15
          winEntireGame()
          resetNumber()
       }
    }, 1000);
  }
}

//game timer win states - total score win state
function winEntireGame(){
  if ( oScore > xScore){
    gameO()
    refresh()
  }
  else{
    updateLeaderboard(name, xScore)
    gameX()
    refresh()
  }
}
var name= 0
//game timer reset function
  function refresh (){
      setTimeout(function() {
    document.location.reload()
  }, 3000)}
