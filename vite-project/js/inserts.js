import { DOMSelectors } from './dom';

function insert(array) {
    array.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="all">
      <h3 class="card-title">${item.name}</h3>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <h3 class="card-description">${item.price} | ${item.pieces} | ${item.calories} calories</h3>
      
    </div>
    `)
    );
  }

export { insert };
