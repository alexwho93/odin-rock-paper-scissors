function camelize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getComputerChoice() {
  const hand = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return hand[randomNumber];
}

function getHumanChoice() {
  let humanChoice = prompt("Your choice?\nrock, paper or scissors");

  return humanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(`You win! Rock beats Scissors`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(`You win! Paper beats Rock`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(`You win! Scissors beats Paper`);
    } else if (humanChoice === computerChoice) {
      console.log(`It's a draw!`);
    } else {
      console.log(
        `You lose! ${camelize(computerChoice)} beats ${camelize(humanChoice)}`
      );
      computerScore++;
    }
  }

  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(
      `Round: ${round} / humanScore: ${humanScore} computerScore: ${computerScore}`
    );

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations you win the game!");
  } else if (humanScore === computerScore) {
    console.log("It's a draw!");
  } else {
    console.log("You lose the game!");
  }
}

playGame();
