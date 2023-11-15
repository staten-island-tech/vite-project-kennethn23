import { menu } from "./menu";
import { DOMSelectors } from './dom';

function insertAll() {
    menu.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="all">
      <h3 class="card-title">${item.name}</h3>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <h5 class="card-description">${item.price} / ${item.pieces} piece(s), ${item.calories} calories</h5>
    </div>
    `)
    );
  }
  
  function insertChicken() {
    const filtered = menu.filter((item) => item.type.includes("chicken"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="chicken">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price} / ${item.pieces} piece(s), ${item.calories} calories</p>
    </div>
    </div>
    `)
    );
  }
  
  function insertBeef() {
    const filtered = menu.filter((item) => item.type.includes("beef"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="beef">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price} / ${item.pieces} piece(s), ${item.calories} calories</p>
    </div>
    </div>
    `)
    );
  }
  
  function insertShrimp() {
    const filtered = menu.filter((item) => item.type.includes("shrimp"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="shrimp">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price} / ${item.pieces} piece(s), ${item.calories} calories</p>
    </div>
    </div>
    `)
    );
  }
  
  function insertRice() {
    const filtered = menu.filter((item) => item.type.includes("rice"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="rice">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price} / ${item.pieces} piece(s), ${item.calories} calories</p>
    </div>
    </div>
    `)
    );
  }
  
  function insertNoodle() {
    const filtered = menu.filter((item) => item.type.includes("noodle"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="noodle">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price} / ${item.pieces} piece(s), ${item.calories} calories</p>
    </div>
    </div>
    `)
    );
  }
  
  function insertOther() {
    const filtered = menu.filter((item) => item.type.includes("other"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="other">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price} / ${item.pieces} piece(s), ${item.calories} calories</p>
    </div>
    </div>
    `)
    );
  }

  function removeEverything() {
    const all = document.querySelectorAll("#all");
    const chicken = document.querySelectorAll("#chicken");
    const beef = document.querySelectorAll("#beef");
    const shrimp = document.querySelectorAll("#shrimp");
    const rice = document.querySelectorAll("#rice");
    const noodle = document.querySelectorAll("#noodle");
    const other = document.querySelectorAll("#other");
    all.forEach((item) => item.remove());
    all.forEach((item) => item.remove());
    chicken.forEach((item) => item.remove());
    beef.forEach((item) => item.remove());
    shrimp.forEach((item) => item.remove());
    rice.forEach((item) => item.remove());
    noodle.forEach((item) => item.remove());
    other.forEach((item) => item.remove());
  }

export { insertAll, insertChicken, insertBeef, insertShrimp, insertRice, insertNoodle, insertOther, removeEverything };