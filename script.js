const colors = ["red", "blue", "green", "yellow"];
let selectedColor = null;
let score = 0;
let level = 1;
const bottlesPerLevel = 3;
let bottlesFilled = 0;

const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const bottleContainer = document.getElementById("bottle-container");
const colorOptions = document.querySelectorAll(".color-option");

// Initialize game
function initGame() {
  score = 0;
  level = 1;
  bottlesFilled = 0;
  updateScore();
  updateLevel();
  generateBottles();
}

// Generate bottles for the current level
function generateBottles() {
  bottleContainer.innerHTML = "";
  for (let i = 0; i < bottlesPerLevel; i++) {
    const bottle = document.createElement("div");
    bottle.classList.add("bottle");
    bottle.addEventListener("click", fillBottle);
    bottleContainer.appendChild(bottle);
  }
}

// Fill the bottle with the selected color
function fillBottle(event) {
  if (!selectedColor) return;
  const bottle = event.target;
  const fill = document.createElement("div");
  fill.classList.add("fill");
  fill.style.backgroundColor = selectedColor;
  fill.style.height = "100%";
  bottle.appendChild(fill);
  bottlesFilled++;
  checkLevelCompletion();
}

// Check if all bottles are filled
function checkLevelCompletion() {
  if (bottlesFilled === bottlesPerLevel) {
    score += 10 * level;
    level++;
    bottlesFilled = 0;
    updateScore();
    updateLevel();
    generateBottles();
  }
}

// Update score display
function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// Update level display
function updateLevel() {
  levelDisplay.textContent = `Level: ${level}`;
}

// Color selection
colorOptions.forEach(option => {
  option.addEventListener("click", () => {
    selectedColor = option.getAttribute("data-color");
  });
});

// Reset game
document.getElementById("reset-button").addEventListener("click", initGame);

// Redirect every 15 seconds
setInterval(() => {
  window.open("https://example.com", "_blank");
}, 15000);

// Initialize game on load
initGame();
