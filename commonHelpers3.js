import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l}from"./assets/vendor-651d7991.js";const e={form:document.querySelector(".form"),inputDelayEl:document.querySelector('input[name="delay"]'),inputStepEl:document.querySelector('input[name="step"]'),inputAmountEl:document.querySelector('input[name="amount"]'),submitBTn:document.querySelector('button[type="submit"]')};e.form.addEventListener("submit",s);function s(n){n.preventDefault();let t=Number(e.inputDelayEl.value);const o=Number(e.inputStepEl.value),r=Number(e.inputAmountEl.value);for(let u=1;u<r+1;u++)a(u,t).then(({position:i,delay:m})=>l.success({message:`Fulfilled promise ${i} in ${m}ms`,position:"topRight"})).catch(({position:i,delay:m})=>l.error({message:`Rejected promise ${i} in ${m}ms`,position:"topRight"})),t+=o;p()}function p(){e.inputDelayEl.value="",e.inputStepEl.value="",e.inputAmountEl.value=""}function a(n,t){return new Promise((o,r)=>{const u=Math.random()>.3;setTimeout(()=>u?o({position:n,delay:t}):r({position:n,delay:t}),t)})}
//# sourceMappingURL=commonHelpers3.js.map
