function checkGuess() {
    var guess = document.getElementById("guessInput").value;
    let randomNumber = Math.ceil(Math.random() * 10);
  
    if (guess == randomNumber) {
      document.getElementById("message").innerHTML = "Good Work!";
    } else {
      document.getElementById("message").innerHTML = "Not matched. The number was " + randomNumber;
    }
  }