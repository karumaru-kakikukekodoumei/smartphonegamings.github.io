const hands = ['✊', '✌️', '✋'];
const handNames = {'✊': 'グー', '✌️': 'チョキ', '✋': 'パー'};
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const userButtons = document.getElementById('user-buttons');
const handBtns = document.querySelectorAll('.hand-btn');
const mainHand = document.getElementById('main-hand');
const resultArea = document.getElementById('result-area');
const msgArea = document.getElementById('message-area');

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hide');
  msgArea.textContent = 'じゃんけん…';
  mainHand.textContent = '✊';
  setTimeout(() => {
    msgArea.textContent = 'ぽん！';
    userButtons.classList.remove('hide');
  }, 900);
});

handBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    userButtons.classList.add('hide');
    const userHand = btn.dataset.hand;
    const cpuHand = hands[Math.floor(Math.random() * 3)];
    mainHand.textContent = cpuHand;
    msgArea.textContent = `あなた：${handNames[userHand]}　コンピュータ：${handNames[cpuHand]}`;
    resultArea.textContent = judge(userHand, cpuHand);
    resetBtn.classList.remove('hide');
  });
});

resetBtn.addEventListener('click', () => {
  msgArea.textContent = '最初はグー';
  mainHand.textContent = '✊';
  resultArea.textContent = '';
  resetBtn.classList.add('hide');
  startBtn.classList.remove('hide');
});

function judge(user, cpu) {
  if (user === cpu) return 'あいこ！';
  if (
    (user === '✊' && cpu === '✌️') ||
    (user === '✌️' && cpu === '✋') ||
    (user === '✋' && cpu === '✊')
  ) {
    return 'あなたの勝ち！';
  }
  return 'あなたの負け…';
}
