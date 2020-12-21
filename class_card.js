"use strict";

class Card {
  constructor(src) {
    this.src = src;
  }

  getCardName() {
    this.src = this.src.split("/");
    this.src = this.src.pop();
    this.src = this.src.replace(".jpg", "");
    return this.src;
  }

  getComputerChoice() {
    let random = Math.random() * 100 + 1;
    if (random < 33) {
      return "paper";
    } else if (random < 66) {
      return "scissors";
    } else {
      return "rock";
    }
  }

  getWinner() {
    let computerChoice = this.getComputerChoice();
    let playerChoice = this.getCardName();

    switch (playerChoice) {
      case "paper":
        if (computerChoice === "paper") {
          return "you both win " + computerChoice;
        } else if (computerChoice === "scissors") {
          return "the computer wins, hard luck " + computerChoice;
        } else {
          return "you win, kudos " + computerChoice;
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          return "you win " + computerChoice;
        } else if (computerChoice === "scissors") {
          return "you both win " + computerChoice;
        } else {
          return "the computer wins, hard luck " + computerChoice;
        }
        break;

      case "rock":
        if (computerChoice === "paper") {
          return "the computer wins, hard luck " + computerChoice;
        } else if (computerChoice === "scissors") {
          return "you win, kudos " + computerChoice;
        } else {
          return "you both win! " + computerChoice;
        }
        break;
    }
  }
}
