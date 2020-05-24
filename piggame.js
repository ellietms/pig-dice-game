let scores,roundScore,activePlayer,gamePlaying;
init();
let lastDice = dice;

document.querySelector(".btn-roll").addEventListener("click",function(){
if(gamePlaying){
//1.random  number
  let dice1 =  Math.floor(Math.random() * 6) + 1;
  let dice2 =   Math.floor(Math.random() * 6) + 1;
// 2.Display the result
   document.getElementById("dice-1").style.display = 'block';
   document.getElementById("dice-2").style.display = 'block';
   document.getElementById("dice-1").src = "dice-" + dice + ".png";
// 3.Update the round score If the rolled number was NOT a 1
   if (dice1 !== 1 && dice2 !== 1 ) {
       roundScore += dice1 + dice2;
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
        document.querySelector(".dice-1").style.display = "none";
        document.querySelector(".dice-2").style.display = "none";
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
        document.querySelector(".dice-1").style.display = "none";
        document.querySelector(".dice-2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click",init);

function init(){
scores = [0,0];
activePlayer = 0;
roundScore = 0;
gamePlaying = true;
document.querySelector(".dice-1").style.display = "none";
document.querySelector(".dice-2").style.display = "none";
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