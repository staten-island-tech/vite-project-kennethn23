import '../css/style.css';
import { DOMSelectors } from './dom';
import { menu } from './menu';
import { insert } from './inserts';

DOMSelectors.all.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  insert(menu);
});

DOMSelectors.chicken.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  const chicken = menu.filter((item) => item.type.includes("chicken"));
  insert(chicken);
});

DOMSelectors.beef.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  const beef = menu.filter((item) => item.type.includes("beef"));
  insert(beef);
});

DOMSelectors.shrimp.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  const shrimp = menu.filter((item) => item.type.includes("shrimp"));
  insert(shrimp);
});

DOMSelectors.rice.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  const rice = menu.filter((item) => item.type.includes("rice"));
  insert(rice);
});

DOMSelectors.noodle.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  const noodle = menu.filter((item) => item.type.includes("noodle"));
  insert(noodle);
});

DOMSelectors.other.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  const other = menu.filter((item) => item.type.includes("other"));
  insert(other);
});

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