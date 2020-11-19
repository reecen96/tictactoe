
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
// ----------------------------------
function gameDraw (){
  $('#outCome').text('Draw!');
    setTimeout(function() {
  $('#outCome').text('')
}, 2000)}



function winMessage(){
  if (playerTurn ==0){
    gameO()
    activateAuto2()
  }
  if (playerTurn ==1){
    activateAuto1()
    gameX()
  }
}


function gameX (){
  $('#outCome').css('color', 'red')
  $('#outCome').text('X Wins');
  setTimeout(function() {
    $('#outCome').text('')
  }, 2000)
}


function gameO (){
  $('#outCome').css('color', 'blue')
  $('#outCome').text('O Wins');
  setTimeout(function() {
    $('#outCome').text('')
  }, 2000)
}

var timedGames=0
var sec = 30

var timeFunc = function (){
if(timedGames == 1){
  var timer = setInterval(function() {
     $('.timer').text("time: " +sec--);
     if (sec == -1) {
        clearInterval(timer);
        sec = 15
        winEntireGame()
        resetNumber()
     }
  }, 1000);
}}

function winEntireGame(){

  if ( oScore > xScore){
    gameO()
    refresh()
  }
  if ( xScore > oScore){
    gameX()
    refresh()
    document.location.reload()
  }}

  function refresh (){
      setTimeout(function() {
    document.location.reload()
  }, 2000)}
