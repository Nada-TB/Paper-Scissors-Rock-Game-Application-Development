"use strict";
/************************************variables*********************************************** */
const cards = document.querySelectorAll("#player img");
let computerChoice = document.getElementById("computerChoice");
let computerScrore = 0;
let playerScore = 0;

/*************************************************functions************************************ */
function scaleCard(element, size) {
  element.style.transform = "scale(" + size + ")";
}

function fetchMessage(element, message) {
  element.textContent = message;
}

function changeSrc(element, newSrc) {
  element.src = newSrc;
}

function getScore(compare) {
  if (compare === "the computer wins, hard luck ") {
    computerScrore++;
  } else if (compare === "you win, kudos ") {
    playerScore++;
  } else {
    playerScore++;
    computerScrore++;
  }
}

/***********************************************Events****************************************** */

for (let i = 1; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    let card = new Card(cards[i].src);
    let result = card.getWinner();
    let newSrc = result.split(" ").pop();
    getScore(result.replace(newSrc, ""));
    scaleCard(cards[i], 1.2);
    changeSrc(computerChoice, "images/" + newSrc + ".jpg");
    document.getElementById("result").style.display = "block";
    document.getElementById("score").style.display = "block";
    fetchMessage(document.getElementById("result"), result.replace(newSrc, ""));
    fetchMessage(document.getElementById("computerScore"), computerScrore);
    fetchMessage(document.getElementById("playerScore"), playerScore);

    setTimeout(() => {
      scaleCard(this, 1);
      fetchMessage(document.getElementById("result"), " play again!");
      changeSrc(computerChoice, "images/question.png");
    }, 2000);
  });
}
