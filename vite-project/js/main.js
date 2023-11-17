import '../css/style.css';
import { DOMSelectors } from './dom';
import { insertAll, insertChicken, insertBeef, insertShrimp, insertRice, insertNoodle, insertOther, removeEverything } from './inserts';

DOMSelectors.all.addEventListener("click", function () {
  removeEverything();
  insertAll();
});

DOMSelectors.chicken.addEventListener("click", function () {
  removeEverything();
  insertChicken();
});

DOMSelectors.beef.addEventListener("click", function () {
  removeEverything();
  insertBeef();
});

DOMSelectors.shrimp.addEventListener("click", function () {
  removeEverything();
  insertShrimp();
});

DOMSelectors.rice.addEventListener("click", function () {
  removeEverything();
  insertRice();
});

DOMSelectors.noodle.addEventListener("click", function () {
  removeEverything();
  insertNoodle();
});

DOMSelectors.other.addEventListener("click", function () {
  removeEverything();
  insertOther();
});

document.querySelector("#theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    console.log("a");
  }
  else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

insertAll();

/* DOMSelectors.buttons.addEventListener("all", function (event) {
  event.preventDefault();
  insertAll();
  console.log("duigfuisdfa")
});
 */
// console.log(menu, name)