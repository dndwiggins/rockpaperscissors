



document.getElementById("rock").addEventListener("click", game("rock"));

document.getElementById("paper").addEventListener("click", game("paper"));

document.getElementById("scissors").addEventListener("click", game("scissors"));

playerScore = 0;

computerScore = 0;


function game(string) {

    let computer = getComputerChoice()


    if (computer == "rock") {
        document.getElementById("compIamge").src = "images/rock.jpeg";
    }
    if (computer == "paper") {
        document.getElementById("compIamge").src = "images/paper.jpeg";
    }
    if (computer == "scissors") {
        document.getElementById("compIamge").src = "images/scissors.jpeg";
    }

    let playerChoice = string;

    if (playerChoice == "rock") {

        if (computer == "scissors") {

            playerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

        if (computer == "paper") {

            computerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

        if (computer == "rock") {

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

    } else if (playerChoice == "paper") {

        if (computer == "scissors") {

            computerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

        if (computer == "paper") {

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

        if (computer == "rock") {

            playerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }


    } else if (playerChoice == "scissors") {

        if (computer == "scissors") {


            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

        if (computer == "paper") {

            playerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

        if (computer == "rock") {

            computerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            return;
        }

    }


}



function getComputerChoice() {

    let num = Math.random();

    if (num <= 0.33) {
        return "rock";

    }

    if (num > 0.33 && num <= 0.66) {
        return "paper";

    }

    if (num > 0.66 && num <= 1) {
        return "scissors";

    }

}