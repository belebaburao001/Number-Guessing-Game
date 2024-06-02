
function checkGuess() {
    const randomNumber = Math.floor(Math.random() * 10) +1;

    const userGuess = document.getElementById('userguess');
    const userNumber = document.getElementById('userNumber');
    const randomNumDisplay = document.getElementById('randomNumber');
    const guess = parseInt(userGuess.value);
    const feedback = document.getElementById('feedback');

    userNumber.textContent = `Your guess: ${guess}`;
    randomNumDisplay.textContent = `Random number: ${randomNumber}`;


    if (isNaN(guess) || guess < 1 || guess > 10) {
        feedback.textContent = 'Please enter a Number between 1 and 10';
        return;
    }

    if (guess === randomNumber) {
        feedback.textContent = 'Congratulation! You guessed the correct number.';
    } else if (guess < randomNumber) {
        feedback.textContent = 'Too Low! Try again.';
    } else {
        feedback.textContent = 'Too high Try again.'
    }
}