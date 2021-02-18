



function myFunction() {
  let u = document.getElementById("ul")
  let x = document.getElementById("nav");
  if (x.className === "nav") {
      x.className += " show";
      u.className += " showUl"
  } else {
      x.className = "nav";
      u.className = "ul"
  }
}

let isScrolling = false

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let listItems = document.querySelectorAll("#secContent")
let firstBox = document.querySelector("#firstBox");
let secondBox = document.querySelector("#secondBox")

function scrolling(e) {
  if (isPartiallyVisible(firstBox)) {
    firstBox.classList.add("active");

    document.body.classList.add("colorOne");
    document.body.classList.remove("colorTwo");
  } else {
    document.body.classList.remove("colorOne");
    document.body.classList.remove("colorTwo");
  }

  if(isFullyVisible(secondBox)) {
    secondBox.classList.add("active")

    document.body.classList.add("colorTwo");
    document.body.classList.remove("colorOne");
  }

  for(let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i]

    if(isPartiallyVisible(listItem)) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  }
}

function isPartiallyVisible(el) {
  let elementBoudary = el.getBoundingClientRect();

  let top = elementBoudary.top;
  let bottom = elementBoudary.bottom;
  let height = elementBoudary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  let elementBoudary = el.getBoundingClientRect();

  let top = elementBoudary.top;
  let bottom = elementBoudary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}


