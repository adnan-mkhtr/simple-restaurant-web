let navbar = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navLink = document.querySelectorAll(".nav__link");
navToggle.addEventListener("click", () =>{
    navbar.classList.toggle("active");
})

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("active")){
            navbar.classList.remove("active")
        }
    })
})

// document.querySelector("#nav-toggle").onclick = () =>{
//     navbar.classList.toggle("active")
// }

let mixMenu = mixitup(".menu__wrapper", {
    load: {
        filter: ".breakfast"
    },
    selectors: {
        target: ".menu__card"
    },
    animation: {
        duration: 800,
    },
});

const menuItems = document.querySelectorAll(".menu__item");

function activeMenuItem(){
    menuItems.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

menuItems.forEach((item) => item.addEventListener("click", activeMenuItem))