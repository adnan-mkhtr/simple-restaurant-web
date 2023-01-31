let navbar = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", () =>{
    navbar.classList.toggle("active");
})

// document.querySelector("#nav-toggle").onclick = () =>{
//     navbar.classList.toggle("active")
// }