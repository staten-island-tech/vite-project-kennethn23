import './style.css'
/* import javascriptLogo from './javascript.svg'
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
  `<div class="all">
      <div class="pizza">
        <h2 class="card-title">Pizza Slice</h2>
        <img src="https://slicelife.imgix.net/15041/photos/original/SlicePizza_Cheese.jpg?auto=compress&auto=format" alt="Pizza" class="card-img">
        <p class="card-description">Cost: $1.25</p>
      </div>
      <div class="salad">
        <h2 class="card-title">Salad</h2>
        <img src="https://cleanfoodcrush.com/wp-content/uploads/2020/06/Clean-Food-Crush-Printable-Recipe-Marinated-Garden-Tomato-Crisp-Cucumber-Salad-800x1000.jpg" alt="Salad" class="card-img">
        <p class="card-description">Cost: $3.00</p>
      </div>
    </div>
  `);
}

function insertVegan() {

}

function insertSale() {

}

DOMSelectors.form.addEventListener("all", function (event) {
  event.preventDefault();
  insertAll();
});