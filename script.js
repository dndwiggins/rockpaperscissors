

/* Bugs found fist issue was needed domcontent to load fully before adding event listners*/

document.addEventListener('DOMContentLoaded', function () {
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors');

    rock.addEventListener('click', function () { game("rock"); });
    paper.addEventListener('click', function () { game("paper"); });
    scissors.addEventListener('click', function () { game("scissors"); });
});


playerScore = 0;

computerScore = 0;









function game(string) {

    let computer = getComputerChoice()


    if (computer == "rock") {
        document.getElementById("compImage").src = "images/rock.jpeg";
    }
    if (computer == "paper") {
        document.getElementById("compImage").src = "images/paper.jpeg";
    }
    if (computer == "scissors") {
        document.getElementById("compImage").src = "images/scissors.jpeg";
    }

    let playerChoice = string;

    if (playerChoice == "rock") {

        if (computer == "scissors") {

            playerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "You Won!";

            return;


        }

        if (computer == "paper") {

            computerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "You Lost :(";

            return;
        }

        if (computer == "rock") {

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "Its a Tie";

            return;
        }

    } else if (playerChoice == "paper") {

        if (computer == "scissors") {

            computerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "You Lost :(";

            return;
        }

        if (computer == "paper") {

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "Its a Tie";

            return;
        }

        if (computer == "rock") {

            playerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "You Won!";

            return;
        }


    } else if (playerChoice == "scissors") {

        if (computer == "scissors") {

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "Its a Tie";

            return;
        }

        if (computer == "paper") {

            playerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "You Won!";

            return;
        }

        if (computer == "rock") {

            computerScore++;

            document.getElementById("score").innerText = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore;

            document.getElementById("decide").innerText = "You Lost :(";

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