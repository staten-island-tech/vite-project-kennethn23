import { menu } from "./menu";
import { DOMSelectors } from './dom';

function insertAll() {
    menu.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="all">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price}</p>
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
      <p class="card-description">${item.price}</p>
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
      <p class="card-description">${item.price}</p>
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
      <p class="card-description">${item.price}</p>
    </div>
    `)
    );
  }
  
  function insertTofu() {
    const filtered = menu.filter((item) => item.type.includes("tofu"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="tofu">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price}</p>
    </div>
    `)
    );
  }
  
  function insertSoup() {
    const filtered = menu.filter((item) => item.type.includes("soup"));
    filtered.forEach((item) => DOMSelectors.box.insertAdjacentHTML("beforeend", 
    `<div class="card" id="soup">
      <h2 class="card-title">${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <p class="card-description">${item.price}</p>
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
      <p class="card-description">${item.price}</p>
    </div>
    `)
    );
  }

  function removeEverything() {
    const all = document.querySelectorAll("#all");
    const chicken = document.querySelectorAll("#chicken");
    const beef = document.querySelectorAll("#beef");
    const shrimp = document.querySelectorAll("#shrimp");
    const tofu = document.querySelectorAll("#tofu");
    const soup = document.querySelectorAll("#soup");
    const other = document.querySelectorAll("#other");
    all.forEach((item) => item.remove());
    all.forEach((item) => item.remove());
    chicken.forEach((item) => item.remove());
    beef.forEach((item) => item.remove());
    shrimp.forEach((item) => item.remove());
    tofu.forEach((item) => item.remove());
    soup.forEach((item) => item.remove());
    other.forEach((item) => item.remove());
  }

export { insertAll, insertChicken, insertBeef, insertShrimp, insertTofu, insertSoup, insertOther, removeEverything };