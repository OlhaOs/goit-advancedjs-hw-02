import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";const r={form:document.querySelector(".form"),inputDelayEl:document.querySelector('input[name="delay"]'),inputStepEl:document.querySelector('input[name="step"]'),inputAmountEl:document.querySelector('input[name="amount"]'),submitBTn:document.querySelector('button[type="submit"]')};r.form.addEventListener("submit",c);let u=0;function c(t){t.preventDefault();const e=Number(r.inputDelayEl.value),n=Number(r.inputStepEl.value),m=Number(r.inputAmountEl.value);let o=e;const l=setInterval(()=>{if(u===m){clearInterval(l),u=0;return}a(u+1,o).then(i=>console.log(i)).catch(i=>console.log(i)).finally(o+=n)},n)}function a(t,e){return new Promise((n,m)=>{u++;const o=Math.random()>.3;setTimeout(()=>o?(s.success({message:`Fulfilled promise ${t} in ${e}ms`,position:"topRight"}),n({position:t,delay:e})):(s.error({message:`Rejected promise ${t} in ${e}ms`,position:"topRight"}),m({position:t,delay:e})),e)})}
//# sourceMappingURL=commonHelpers3.js.map
