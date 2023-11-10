import { menu, name } from "./menu";
import { DOMSelectors } from './dom';

function insertAll() {
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card-gallery">
    <div class="card" id="pizza">
      <h2 class="card-title">Pizza Slice</h2>
      <img src="./pizza.jpg" alt="Pizza" class="card-img">
      <p class="card-description">Cost: ${menu[0].price}</p>
    </div>
    <div class="card" id="salad">
      <h2 class="card-title">Salad</h2>
      <img src="https://cleanfoodcrush.com/wp-content/uploads/2020/06/Clean-Food-Crush-Printable-Recipe-Marinated-Garden-Tomato-Crisp-Cucumber-Salad-800x1000.jpg" alt="Salad" class="card-img">
      <p class="card-description">Cost: $3.00</p>
    </div>
  </div>
    `);
  }
  
  function insertVegan() {
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card-gallery">
    <div class="card" id="salad">
      <h2 class="card-title">Salad</h2>
      <img src="https://cleanfoodcrush.com/wp-content/uploads/2020/06/Clean-Food-Crush-Printable-Recipe-Marinated-Garden-Tomato-Crisp-Cucumber-Salad-800x1000.jpg" alt="Salad" class="card-img">
      <p class="card-description">Cost: $3.00</p>
    </div>
  </div>
    `);
  }
  
  function insertSale() {
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card-gallery">
    <div class="card" id="pizza">
      <h2 class="card-title">Pizza Slice</h2>
      <img src="./pizza.jpg" alt="Pizza" class="card-img">
      <p class="card-description">Cost: $1.25</p>
    </div>
    `);
  }

export { insertAll, insertSale, insertVegan };