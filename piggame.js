let scores,roundScore,activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// document.querySelector("#current-" + activePlayer).textContent = dice;
// let x = document.querySelector("#score-0").textContent;
document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click",function(){
//   1.random  number
  let   dice =  Math.floor(Math.random() * 6) + 1;
// 2.Display the result
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + "png";

})
