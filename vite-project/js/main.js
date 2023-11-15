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

DOMSelectors.lightTheme.addEventListener("click", function () {
  DOMSelectors.theme.innerHTML.replace(`<div class="theme" id="light">`);
});

DOMSelectors.darkTheme.addEventListener("click", function () {
  document.body.innerHTML = document.body.innerHTML.replace("light", "dark");
});

insertAll();

/* DOMSelectors.buttons.addEventListener("all", function (event) {
  event.preventDefault();
  insertAll();
  console.log("duigfuisdfa")
});
 */
// console.log(menu, name)