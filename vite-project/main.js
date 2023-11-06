/* import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 */

const DOMSelectors = {
  all: document.querySelector("#all"),
  vegan: document.querySelector("#vegan"),
  sale: document.querySelector("#sale"),
  box: document.querySelector(".card-holder"),
}

function insertAll() {
  DOMSelectors.box.insertAdjacentHTML("beforeend", 
  `<div class="entry">
    <img src="" alt="Image" class="card-img">
    <h1 class="agent-name-card"></h1>
    <h2></h2>
  </div>
  `);
}

function insertVegan() {

}

function insertSale() {

}

DOMSelectors.form.addEventListener("all", function (event) {
  event.preventDefault();

});