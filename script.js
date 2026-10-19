
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
