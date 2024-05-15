function camelize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getComputerChoice() {
  const hand = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);

  return hand[randomNumber];
}

function getEmoji(word) {
  let result = "";
  switch (word) {
    case "rock":
      result = "👊";
      break;
    case "paper":
      result = "✋";
      break;
    case "scissor":
      result = "✌️";
      break;
    default:
      alert("Error! Please refresh");
  }

  return result;
}

function playGame() {
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorButton = document.querySelector(".scissor");
  rockButton.addEventListener("click", () =>
    playRound("rock", getComputerChoice())
  );

  paperButton.addEventListener("click", () =>
    playRound("paper", getComputerChoice())
  );

  scissorButton.addEventListener("click", () =>
    playRound("scissor", getComputerChoice())
  );

  const roundNode = document.querySelector(".round");
  const winStatus = document.querySelector(".win-status");
  const winReason = document.querySelector(".win-reason");

  const playerScoreNode = document.querySelector("#player-score");
  const computerScoreNode = document.querySelector("#computer-score");

  const playerChoiceNode = document.querySelector("#player-choice");
  const compueterChoiceNode = document.querySelector("#computer-choice");

  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissor") {
      humanScore++;

      winStatus.textContent = "You win!";
      winReason.textContent = "Rock beats Scissor!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;

      winStatus.textContent = "You win!";
      winReason.textContent = "Paper beats Rock!";
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      humanScore++;

      winStatus.textContent = "You win!";
      winReason.textContent = "Scissor beats Paper!";
    } else if (humanChoice === computerChoice) {
      winStatus.textContent = "It's a draw!";
      winReason.textContent = "";
    } else {
      winStatus.textContent = "You lose!";
      winReason.textContent = `${camelize(computerChoice)} beats ${camelize(
        humanChoice
      )}`;
      computerScore++;
    }
    round++;

    if (humanScore >= 5) {
      playerScoreNode.textContent = "5";
      winStatus.textContent = "Congratulation! You won the game!";
      winReason.textContent = "";
      return;
    } else if (computerScore >= 5) {
      computerScoreNode.textContent = "5";
      winStatus.textContent = "Sorry, you lost the game!";
      winReason.textContent = "";
      return;
    }

    roundNode.textContent = "Round: " + round.toString();
    playerScoreNode.textContent = humanScore.toString();
    computerScoreNode.textContent = computerScore.toString();

    playerChoiceNode.textContent = getEmoji(humanChoice);
    compueterChoiceNode.textContent = getEmoji(computerChoice);
  }
}

playGame();
