import '../css/style.css';
import { DOMSelectors } from './dom';
import { insertAll, insertVegan, insertSale } from './inserts';

DOMSelectors.all.addEventListener("click", function () {
  const currentDiv = document.querySelector(".card-gallery");
  currentDiv.remove();
  insertAll();
})

DOMSelectors.vegan.addEventListener("click", function () {
  const currentDiv = document.querySelector(".card-gallery");
  currentDiv.remove();
  insertVegan();
})

DOMSelectors.sale.addEventListener("click", function () {
  const currentDiv = document.querySelector(".card-gallery");
  currentDiv.remove();
  insertSale();
})

/* DOMSelectors.buttons.addEventListener("all", function (event) {
  event.preventDefault();
  insertAll();
  console.log("duigfuisdfa")
});
 */
// console.log(menu, name)