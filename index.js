let items = document.querySelectorAll('.movie-listing .carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})


// Adds the active class depending on click
let allNavlinks = document.querySelectorAll(".nav-link");
for (let i = 0; i < 3; i++) {
  allNavlinks[i].addEventListener("click", function() {
    allNavlinks[0].classList.remove("active");
    allNavlinks[1].classList.remove("active");
    allNavlinks[2].classList.remove("active");

    allNavlinks[i].classList.add("active");

  })
}
