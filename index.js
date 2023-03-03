

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
