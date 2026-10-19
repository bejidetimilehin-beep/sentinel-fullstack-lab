
document.addEventListener("DOMContentLoaded", function () {
    // 1. Keep the original welcome message
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

    // 2. Our first algorithm: find the largest number
    function findLargest(a, b) {
        return a > b ? a : b;
    }

    // 3. Test the algorithm
    const result1 = findLargest(25, 70);
    const result2 = findLargest(90, 40);
    const result3 = findLargest(50, 50);

    // 4. Display the results on the website
    const output = document.createElement("section");
    output.style.cssText =
        "margin:40px auto;padding:24px;max-width:700px;" +
        "background:#102238;color:#fff;border-radius:12px;" +
        "font-family:Arial,sans-serif;line-height:2;";

    output.innerHTML = `
        <h2 style="color:#30bdf2">SENTINEL ALGORITHM LAB</h2>
        <p>Largest of 25 and 70: <strong>${result1}</strong></p>
        <p>Largest of 90 and 40: <strong>${result2}</strong></p>
        <p>Largest of 50 and 50: <strong>${result3}</strong></p>
    `;

    document.body.appendChild(output);
});
