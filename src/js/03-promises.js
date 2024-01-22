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

function handleFormSubmit(e) {
  e.preventDefault();

  let delay = Number(refs.inputDelayEl.value);
  const step = Number(refs.inputStepEl.value);
  const amount = Number(refs.inputAmountEl.value);

  for (let i = 1; i < amount + 1; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) =>
        iziToast.success({
          message: `Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
        })
      )
      .catch(({ position, delay }) =>
        iziToast.error({
          message: `Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
        })
      );
    delay += step;
  }
  clearForm();
}

function clearForm() {
  refs.inputDelayEl.value = '';
  refs.inputStepEl.value = '';
  refs.inputAmountEl.value = '';
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        return resolve({ position, delay });
      } else {
        return reject({ position, delay });
      }
    }, delay);
  });
}
