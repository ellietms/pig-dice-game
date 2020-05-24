let scores,roundScore,activePlayer,gamePlaying;
gamePlaying = true;
init();
let lastDice = dice;

document.querySelector(".btn-roll").addEventListener("click",function(){
if(gamePlaying){
//1.random  number
  let   dice =  Math.floor(Math.random() * 6) + 1;
// 2.Display the result
   let diceDOM = document.querySelector(".dice");
   diceDOM.style.display = "block";
   diceDOM.src = "dice-" + dice + ".png";
// 3.Update the round score If the rolled number was NOT a 1
   if(dice === 6 && lastDice === 6){
    scores[activePlayer] = 0;
    document.querySelector("#score-" + activePlayer).textContent = "0";
    nextPlayer();
   }
   else if (dice !== 1 ) {
       roundScore += dice;
       document.querySelector("#current-" + activePlayer).textContent = roundScore;
   }
   else{
       nextPlayer();
   }
   
}
});

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
     // Add Current score to global score
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =  scores[activePlayer];
    let input = document.querySelector(".final-score").value;
    // undefined , 0 , null or "" are COERCED false
    if(input){
       let winningScore = input; 
    }
    else{
        winningScore = 100;
    }
    //check if player won the game 
    if(scores[activePlayer] >= 100){
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        gamePlaying = false;
    }
    else{
        nextPlayer();
    }
    }
})

function nextPlayer(){
    activePlayer=== 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click",init);

function init(){
scores = [0,0];
activePlayer = 0;
roundScore = 0;
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.add("active");
}