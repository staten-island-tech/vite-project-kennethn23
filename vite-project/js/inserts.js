import { menu } from "./menu";
import { DOMSelectors } from './dom';



function insertAll() {
  let menuNames = [];
  let menuPrices = [];
  let menuCalores = [];
  let menuPieces = [];
  let menuImages = [];
  menu.forEach((item) => menuNames.push(item.name));
  menu.forEach((item) => menuPrices.push(item.price));
  menu.forEach((item) => menuCalores.push(item.calories));
  menu.forEach((item) => menuPieces.push(item.pieces));
  menu.forEach((item) => menuImages.push(item.image));
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card-gallery">
    <div class="card" id="pizza">
      <h2 class="card-title">${menu[0].name}</h2>
      <img src="${menu[0].image}" alt="${menu[0].name}" class="card-img">
      <p class="card-description">${menu[0].price}</p>
    </div>
    <div class="card" id="salad">
      <h2 class="card-title">${menu[1].name}</h2>
      <img src="${menu[1].image}" alt="${menu[1].name}" class="card-img">
      <p class="card-description">${menu[1].price}</p>
    </div>
  </div>
    `);
  }
  
  function insertVegan() {
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card-gallery">
    <div class="card" id="salad">
      <h2 class="card-title">${menu[1].name}</h2>
      <img src="${menu[1].image}" alt="${menu[1].name}" class="card-img">
      <p class="card-description">${menu[1].price}</p>
    </div>
  </div>
    `);
  }
  
  function insertSale() {
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card-gallery">
    <div class="card" id="pizza">
      <h2 class="card-title">${menu[0].name}</h2>
      <img src="${menu[0].image}" alt="${menu[0].name}" class="card-img">
      <p class="card-description">${menu[0].price}</p>
    </div>
    </div>
    `);
  }

export { insertAll, insertSale, insertVegan };