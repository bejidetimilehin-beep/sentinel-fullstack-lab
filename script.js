
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");
    const helloButton = document.getElementById("hello-button");

    if (welcomeMessage) {
        welcomeMessage.textContent =
            "Welcome to my lab. The journey starts here!";
    }

    if (helloButton) {
        helloButton.addEventListener("click", function () {
            alert("Hello! Welcome to Sentinel Full-Stack Lab. Keep learning, keep building, and stay secure!");
        });
    }

    function findLargest(a, b) {
        return a > b ? a : b;
    }

    const lab = document.createElement("section");
    lab.style.cssText =
        "margin:40px auto;padding:24px;max-width:700px;" +
        "background:#102238;color:white;border-radius:12px;" +
        "font-family:Arial,sans-serif;line-height:2;";

    lab.innerHTML = `
        <h2 style="color:#30bdf2">SENTINEL ALGORITHM LAB</h2>
        <p>Largest of 25 and 70: ${findLargest(25, 70)}</p>
        <p>Largest of 90 and 40: ${findLargest(90, 40)}</p>
        <p>Largest of 50 and 50: ${findLargest(50, 50)}</p>
        <hr>
        <h3>Try It Yourself</h3>
        <label for="number-a">First number</label><br>
        <input id="number-a" type="number" placeholder="Enter first number"><br>
        <label for="number-b">Second number</label><br>
        <input id="number-b" type="number" placeholder="Enter second number"><br>
        <button id="compare-button">Find Largest</button>
        <p id="comparison-result">Enter two numbers to begin.</p>
    `;

    document.body.appendChild(lab);

    document.getElementById("compare-button").addEventListener("click", function () {
        const aInput = document.getElementById("number-a");
        const bInput = document.getElementById("number-b");
        const result = document.getElementById("comparison-result");

        if (aInput.value === "" || bInput.value === "") {
            result.textContent = "Please enter both numbers.";
            return;
        }

        const a = Number(aInput.value);
        const b = Number(bInput.value);

        if (a === b) {
            result.textContent = "Both numbers are equal: " + a;
        } else {
            result.textContent = "The largest number is: " + findLargest(a, b);
        }
    });
});

/* SENTINEL ALGORITHM 2: NUMBER GUESSING GAME */

(function () {
    const game = document.createElement("section");

    game.style.cssText =
        "margin:30px auto;padding:24px;max-width:700px;" +
        "background:#102238;color:white;border-radius:12px;" +
        "font-family:Arial,sans-serif;line-height:2;";

    game.innerHTML = `
        <h2 style="color:#30bdf2">
            SENTINEL NUMBER GUESSING GAME
        </h2>

        <p>I'm thinking of a number between 1 and 100.</p>
        <p>Can you guess it?</p>

        <input
            id="sentinel-guess"
            type="number"
            min="1"
            max="100"
            placeholder="Enter your guess"
            style="padding:12px;width:200px;max-width:90%;"
        >

        <button
            id="sentinel-guess-button"
            style="padding:12px;background:#30bdf2;
            border:0;border-radius:6px;cursor:pointer;"
        >
            Check Guess
        </button>

        <p id="sentinel-game-message" aria-live="polite">
            Your game starts now!
        </p>

        <p>Attempts: <span id="sentinel-attempts">0</span></p>

        <button
            id="sentinel-restart"
            style="padding:10px;background:#243f59;
            color:white;border:1px solid #30bdf2;
            border-radius:6px;cursor:pointer;"
        >
            Play Again
        </button>
    `;

    document.body.appendChild(game);

    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let gameOver = false;

    const guessInput = document.getElementById("sentinel-guess");
    const guessButton = document.getElementById("sentinel-guess-button");
    const message = document.getElementById("sentinel-game-message");
    const attemptDisplay = document.getElementById("sentinel-attempts");
    const restartButton = document.getElementById("sentinel-restart");

    function checkGuess() {
        if (gameOver) return;

        const value = guessInput.value.trim();
        const guess = Number(value);

        if (value === "" || !Number.isInteger(guess) ||
            guess < 1 || guess > 100) {
            message.textContent =
                "Enter a whole number between 1 and 100.";
            return;
        }

        attempts++;
        attemptDisplay.textContent = attempts;

        if (guess < secretNumber) {
            message.textContent = "Too low! Try a bigger number.";
        } else if (guess > secretNumber) {
            message.textContent = "Too high! Try a smaller number.";
        } else {
            message.textContent =
                "Correct! You won in " + attempts + " attempts!";
            gameOver = true;
        }

        guessInput.value = "";
        if (!gameOver) guessInput.focus();
    }

    guessButton.addEventListener("click", checkGuess);

    guessInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") checkGuess();
    });

    restartButton.addEventListener("click", function () {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        gameOver = false;
        attemptDisplay.textContent = "0";
        message.textContent = "New game! Make your first guess.";
        guessInput.value = "";
        guessInput.focus();
    });
})();

