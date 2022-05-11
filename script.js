let current = 0;
let allContainers = document.querySelectorAll(".image-container");

function next() {
  let arrayOfContainers = Array.from(allContainers);
  arrayOfContainers[current++].removeAttribute("data-active");
  if (current == arrayOfContainers.length) {
    current = 0;
  }
  arrayOfContainers[current].setAttribute("data-active", "");
}
function prev() {
  let arrayOfContainers = Array.from(allContainers);
  arrayOfContainers[current--].removeAttribute("data-active");
  if (current == 0) {
    current = arrayOfContainers.length - 1;
  }
  arrayOfContainers[current].setAttribute("data-active", "");
}
