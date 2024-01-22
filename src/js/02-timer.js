import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  calendar: document.querySelector('#datetime-picker'),
  timerEl: document.querySelector('.timer'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates[0]);
  },
};
flatpickr(refs.calendar, options);

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', hanldeStartTimer);

function checkDate(data) {
  if (new Date() - data > 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      position: 'topCenter',
    });

    return;
  }
  refs.startBtn.disabled = false;
}

function hanldeStartTimer() {
  const deltaTime = refs.calendar._flatpickr.selectedDates[0] - new Date();
  getTimerStarted(deltaTime);
  refs.startBtn.disabled = true;
  refs.calendar.disabled = true;
}
function getTimerStarted(ms) {
  const interval = 1000;
  renderTimer(convertMs(ms));
  const timerId = setInterval(() => {
    if (ms - interval >= 0) {
      ms -= interval;
      renderTimer(convertMs(ms));
    } else {
      iziToast.info({
        title: 'Info',
        message: 'Time is up!',
        position: 'topCenter',
      });
      clearInterval(timerId);
    }
  }, interval);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function renderTimer({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${addLeadingZero(days)}`;
  refs.hoursEl.textContent = `${addLeadingZero(hours)}`;
  refs.minutesEl.textContent = `${addLeadingZero(minutes)}`;
  refs.secondsEl.textContent = `${addLeadingZero(seconds)}`;
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
