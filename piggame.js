let scores,roundScore,activePlayer,dice;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
document.querySelector("#current-" + activePlayer).textContent = dice;
let x = document.querySelector("#score-0").textContent;
document.querySelector(".dice").style.display = "none";
