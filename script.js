const playerOneScore = document.querySelector(".player1-score") 
const playerTwoScore = document.querySelector(".player2-score") 
const playerOneButton = document.querySelector(".player-1") 
const playerTwoButton = document.querySelector(".player-2") 
const resetGame = document.querySelector(".reset")
const updateScore = document.querySelector(".winning-score-update")
const updateScoreDisplay = document.querySelector(".winning-score-display")


var player1Score = 0;
var player2Score = 0;
var winningScore = 5;

var gameOver = false;

playerOneButton.addEventListener("click",() => {
  if(!gameOver){
    player1Score++;
    playerOneScore.textContent = player1Score;
    
  }
  if(player1Score === winningScore){
    playerOneScore.classList.add("green")
    gameOver = true;
  }
})


playerTwoButton.addEventListener("click",() => {

  if(!gameOver){
    player2Score++;
    playerTwoScore.textContent = player2Score;
 
  }

  if(player2Score === winningScore){
    playerTwoScore.classList.add("green")
    gameOver = true;
  }
 
})

function reset(){
  player1Score = 0;
  player2Score = 0;
  winningScore = 5;

  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOneScore.classList.remove("green");
  playerTwoScore.classList.remove("green");
  gameOver = false;
}



resetGame.addEventListener("click",() => {
   reset()
})

updateScore.addEventListener("change", e => {
 
  var updateWinningScore = e.target.value;
  console.log(updateWinningScore)
  winningScore = Number(updateWinningScore);
  updateScoreDisplay.textContent = updateWinningScore;

  reset()

})















