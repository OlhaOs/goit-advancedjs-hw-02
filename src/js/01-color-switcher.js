const refs = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', handleStartBtn);
refs.stopBtn.addEventListener('click', handleStopBtn);
refs.stopBtn.disabled = true;
let timerId;

function handleStartBtn() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  setBodyColor();
  timerId = setInterval(setBodyColor, 1000);
}

function setBodyColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

function handleStopBtn() {
  clearInterval(timerId);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
