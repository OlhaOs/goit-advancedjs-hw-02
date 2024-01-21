import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  inputDelayEl: document.querySelector('input[name="delay"]'),
  inputStepEl: document.querySelector('input[name="step"]'),
  inputAmountEl: document.querySelector('input[name="amount"]'),
  submitBTn: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', handleFormSubmit);
let promiseCounter = 0;

function handleFormSubmit(e) {
  e.preventDefault();

  const firstDelay = Number(refs.inputDelayEl.value);
  const step = Number(refs.inputStepEl.value);
  const amount = Number(refs.inputAmountEl.value);

  let delay = firstDelay;

  const intervalId = setInterval(() => {
    if (promiseCounter === amount) {
      clearInterval(intervalId);
      promiseCounter = 0;
      return;
    }

    createPromise(promiseCounter + 1, delay)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally((delay += step));
  }, step);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    promiseCounter++;
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        iziToast.success({
          message: `Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
        });

        return resolve({ position, delay });
      } else {
        iziToast.error({
          message: `Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
        });

        return reject({ position, delay });
      }
    }, delay);
  });
}
