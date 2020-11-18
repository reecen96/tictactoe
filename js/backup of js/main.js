console.log("hi there")

//if player = 0 (o goes)/ if player = 1 (x goes)
var playerTurn = 1
var squaresChosen= []
var playO = []
var playX = []
var oScore = 0
var xScore = 0

const addXO = function(variable){


  if(!squaresChosen.includes(variable)) {

   if (playerTurn === 0){
    playerTurn = 1
    squaresChosen.push(variable)
    playO.push(variable)
    disappear(variable)
    containsAll(playO);

  }

  else if (playerTurn === 1){
    playerTurn = 0
    squaresChosen.push(variable)
    playX.push(variable)
    disappear(variable)
    containsAll(playX);
  }

  else{
    return
  }
}
}

function whoPlayer (player){
  if (player === 1){
    return "X"
  }
  else if (player === 0){
    return "O"
  }
}

//player is either X or O (compares array of player to possibleWins)
function containsAll(player){
 for(var i=0; i<possibleWins.length; i++){

  var a = possibleWins[i][0];
  var b = possibleWins[i][1];
  var c = possibleWins[i][2];
  // console.log(a + " "+ b +" "+ c)

 turnMenu()
 if (player.includes(a) && player.includes(b) && player.includes(c)){
   alert(whoPlayer(playerTurn) + " wins!")
   clearBoard()
  score(playerTurn)}

  else if (squaresChosen.length >= 9){
    alert('its a draw!')
    clearBoard()
    return
 }
}}


const possibleWins = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
[1, 5, 9],
[5, 5, 3]
]

function turnMenu () {
  if (playerTurn == 1){
$('#turnMenu').text('O')
  }
  else if (playerTurn ==0){
$('#turnMenu').text('X')
  }
}




function clearBoard(){
playerTurn = 1
squaresChosen= []
playO = []
playX = []
$('img').css('opacity', '0')
}

function score (player){
if (playerTurn === 1){
oScore += 1
$('#scoreO').text(oScore)
console.log ("Score O =" + oScore + " x="+ xScore )
}
else if (playerTurn === 0){
xScore +=1
$('#scoreX').text(xScore)
console.log ( "Score O =" + oScore + " x="+ xScore )}
}

$(document).ready(function(){
  console.log ('DOM is ready')


  $('.x1').on("click", function(){
    console.log("o1 clicked")
    addXO(1)

    })

  $('.x2').on("click", function(){
    console.log("o2 clicked")
    addXO(2)
    })

  $('.x3').on("click", function(){
    console.log("o3 clicked")
    addXO(3)
    })

  $('.x4').on("click", function(){
    console.log("o4 clicked")
    addXO(4)
    })

  $('.x5').on("click", function(){
    console.log("o5 clicked")
    addXO(5)
    })

  $('.x6').on("click", function(){
    console.log("o6 clicked")
    addXO(6)
    })

  $('.x7').on("click", function(){
    console.log("o7 clicked")
    addXO(7)
    })

  $('.x8').on("click", function(){
    console.log("o8 clicked")
    addXO(8)
    })

  $('.x9').on("click", function(){
    console.log("o9 clicked")
    addXO(9)
    })

});

const disappear= function(location){
if (playerTurn === 1){
 if (location === 1){
   $('.x1').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x1').css('opacity', '1')
}
 if (location === 2){
   $('.x2').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x2').css('opacity', '1')
}
 if (location === 3){
   $('.x3').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x3').css('opacity', '1')
}
 if (location === 4){
   $('.x4').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x4').css('opacity', '1')
}
 if (location === 5){
   $('.x5').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x5').css('opacity', '1')
}
 if (location === 6){
   $('.x6').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x6').css('opacity', '1')
}
 if (location === 7){
   $('.x7').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x7').css('opacity', '1')
}
 if (location === 8){
   $('.x8').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x8').css('opacity', '1')
}
 if (location === 9){
   $('.x9').attr('src', 'http://clipart-library.com/image_gallery/83903.png')
   $('.x9').css('opacity', '1')
}
}

else if (playerTurn === 0){
  if (location === 1){
    $('.x1').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x1').css('opacity', '1')
 }
  if (location === 2){
    $('.x2').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x2').css('opacity', '1')
 }
  if (location === 3){
    $('.x3').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x3').css('opacity', '1')
 }
  if (location === 4){
    $('.x4').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x4').css('opacity', '1')
 }
  if (location === 5){
    $('.x5').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x5').css('opacity', '1')
 }
  if (location === 6){
    $('.x6').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x6').css('opacity', '1')
 }
  if (location === 7){
    $('.x7').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x7').css('opacity', '1')
 }
  if (location === 8){
    $('.x8').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x8').css('opacity', '1')
 }
  if (location === 9){
    $('.x9').attr('src', 'http://clipart-library.com/image_gallery/7606.png')
    $('.x9').css('opacity', '1')
 }
}


}
