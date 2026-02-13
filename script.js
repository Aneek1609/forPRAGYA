const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainGif = document.getElementById("mainGif");
const mainText = document.getElementById("mainText");

// YES → go next page
yesBtn.addEventListener("click", function () {
    window.location.href = "page2.html";
});

// NO → change gif + text + hide button
noBtn.addEventListener("click", function () {
    mainGif.src = "https://media.tenor.com/3OnEyI7LelQAAAAi/milk-and-mocha.gif";
    mainText.innerHTML = "How dare you clicked NO 😤💔";
    noBtn.style.display = "none";
});
const startDate = new Date("2025-12-07");