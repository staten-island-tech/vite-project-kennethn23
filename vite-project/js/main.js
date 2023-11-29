import '../css/style.css';
import { DOMSelectors } from './dom';
import { menu } from './menu';
import { insert } from './inserts';

let buttons = document.querySelectorAll(".foodButton");
console.log(buttons);
buttons.forEach((button) => button.addEventListener("click", 
function () {
  if (button == buttons[0]) {
    insert(menu);
  } else {
    let filter = button.textContent;
    let filteredMenu = menu.filter((food) => food.type.includes(filter));
    insert(filteredMenu);
  };
}));

insert(menu);

/* DOMSelectors.all.addEventListener("click", function () {
  insert(menu);
});

DOMSelectors.chicken.addEventListener("click", function () {
  const chicken = menu.filter((item) => item.type.includes("chicken"));
  insert(chicken);
});

DOMSelectors.beef.addEventListener("click", function () {
  const beef = menu.filter((item) => item.type.includes("beef"));
  insert(beef);
});

DOMSelectors.shrimp.addEventListener("click", function () {
  const shrimp = menu.filter((item) => item.type.includes("shrimp"));
  insert(shrimp);
});

DOMSelectors.rice.addEventListener("click", function () {
  const rice = menu.filter((item) => item.type.includes("rice"));
  insert(rice);
});

DOMSelectors.noodle.addEventListener("click", function () {
  const noodle = menu.filter((item) => item.type.includes("noodle"));
  insert(noodle);
});

DOMSelectors.other.addEventListener("click", function () {
  const other = menu.filter((item) => item.type.includes("other"));
  insert(other);
}); */

document.querySelector("#theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
  else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

insert(menu);