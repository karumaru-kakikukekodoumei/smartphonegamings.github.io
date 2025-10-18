const hands = ['Rock', 'Scissors', 'Paper'];
const playBtn = document.getElementById('play-btn');
const userHandElem = document.getElementById('user-hand');
const cpuHandElem = document.getElementById('cpu-hand');
const judgeElem = document.getElementById('judge');

function playJanken() {
  const userHand = hands[Math.floor(Math.random() * 3)];
  const cpuHand = hands[Math.floor(Math.random() * 3)];
  userHandElem.textContent = `Your hand: ${userHand}`;
  cpuHandElem.textContent = `CPU's hand: ${cpuHand}`;
  judgeElem.textContent = `Result: ${judge(userHand, cpuHand)}`;
}

// For tap/touch and click
playBtn.addEventListener('click', playJanken);
playBtn.addEventListener('touchend', function(e) {
  e.preventDefault(); // Prevent double event on mobile
  playJanken();
});

function judge(user, cpu) {
  if (user === cpu) return "Draw!";
  if (
    (user === 'Rock' && cpu === 'Scissors') ||
    (user === 'Scissors' && cpu === 'Paper') ||
    (user === 'Paper' && cpu === 'Rock')
  ) {
    return "You win!";
  }
  return "You lose...";
}