
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");
    const helloButton = document.getElementById("hello-button");

    if (welcomeMessage) {
        welcomeMessage.textContent =
            "Welcome to my lab. The journey starts here!";
    }

    if (helloButton) {
        helloButton.addEventListener("click", function () {
            alert(
                "Hello! Welcome to Sentinel Full-Stack Lab. " +
                "Keep learning, keep building, and stay secure!"
            );
        });
    }

    // Algorithm 1: Find the largest number
    function findLargest(a, b) {
        return a > b ? a : b;
    }

    // Create the lab section
    const lab = document.createElement("section");
    lab.style.cssText =
        "margin:40px auto;padding:24px;max-width:700px;" +
        "background:#102238;color:#fff;border-radius:12px;" +
        "font-family:Arial,sans-serif;line-height:2;";

    lab.innerHTML = `
        <h2 style="color:#30bdf2">SENTINEL ALGORITHM LAB</h2>
        <p>Largest of 25 and 70: <strong>${findLargest(25, 70)}</strong></p>
        <p>Largest of 90 and 40: <strong>${findLargest(90, 40)}</strong></p>
        <p>Largest of 50 and 50: <strong>${findLargest(50, 50)}</strong></p>

        <hr style="border-color:#36516b;margin:24px 0">

        <h3>Try It Yourself</h3>
        <label for="number-a">First number</label><br>
        <input id="number-a" type="number" placeholder="Enter first number"
          style="padding:12px;width:90%;max-width:320px"><br>

        <label for="number-b">Second number</label><br>
        <input id="number-b" type="number" placeholder="Enter second number"
          style="padding:12px;width:90%;max-width:320px"><br>

        <button id="compare-button"
          style="margin-top:15px;padding:12px 20px;background:#30bdf2;
          border:0;border-radius:6px;cursor:pointer;font-weight:bold">
          Find Largest
        </button>

        <p id="comparison-result" aria-live="polite">
          Enter two numbers to begin.
        </p>
    `;

    document.body.appendChild(lab);

    document.getElementById("compare-button").addEventListener("click", function () {
        const first = document.getElementById("number-a");
        const second = document.getElementById("number-b");
        const result = document.getElementById("comparison-result");

        if (first.value.trim() === "" || second.value.trim() === "") {
            result.textContent = "Please enter both numbers.";
            return;
        }

        const a = Number(first.value);
        const b = Number(second.value);

        result.textContent = a === b
            ? "Both numbers are equal: " + a
            : "The largest number is: " + findLargest(a, b);
    });
});
