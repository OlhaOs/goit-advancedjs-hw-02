import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t={bodyEl:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",o);t.stopBtn.addEventListener("click",r);t.stopBtn.disabled=!0;let n;function o(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e(),n=setInterval(e,1e3)}function e(){t.bodyEl.style.backgroundColor=a()}function r(){clearInterval(n),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}function a(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map
