let scores,roundScore,activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// document.querySelector("#current-" + activePlayer).textContent = dice;
// let x = document.querySelector("#score-0").textContent;
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

document.querySelector(".btn-roll").addEventListener("click",function(){
//   1.random  number
  let   dice =  Math.floor(Math.random() * 6) + 1;
// 2.Display the result
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
// 3.Update the round score If the rolled number was NOT a 1
    if (dice !== 1 ) {
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
    else{
        nextPlayer();
    }

});

document.querySelector(".btn-hold").addEventListener("click",function(){
    // Add Current score to global score
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =  scores[activePlayer];
    //check if player own  
    if(scores[activePlayer] >= 100){
        document.querySelector("#name" + activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }
    else{
        nextPlayer();
    }
    //next player
    nextPlayer();
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