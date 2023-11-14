import '../css/style.css';
import { DOMSelectors } from './dom';
import { insertAll, insertChicken, insertBeef, insertShrimp, insertTofu, insertSoup, insertOther, removeEverything } from './inserts';

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

DOMSelectors.tofu.addEventListener("click", function () {
  removeEverything();
  insertTofu();
});

DOMSelectors.soup.addEventListener("click", function () {
  removeEverything();
  insertSoup();
});

DOMSelectors.other.addEventListener("click", function () {
  removeEverything();
  insertOther();
});

insertAll();

/* DOMSelectors.buttons.addEventListener("all", function (event) {
  event.preventDefault();
  insertAll();
  console.log("duigfuisdfa")
});
 */
// console.log(menu, name)