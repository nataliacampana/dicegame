// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the playe name
function editNames() {
    tdnome1 = document.querySelector("#nome1");
    tdnome2 = document.querySelector("#nome2");

    tdnome1.textContent = nome1;
    tdnome2.textContent = nome2;
    
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change Player2 name");
    
    nome1 = player1;
    nome2 = player2;

    tdnome1.textContent = nome1;
    tdnome2.textContent = nome2;

}

// Function to roll the dice
function rollTheDice() {
    setTimeout(function() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";

        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = (player2 + " WINS!");

        } else {
            document.querySelector("h1").innerHTML = (player1 + " WINS!");

        }
    
    }, 25);
}