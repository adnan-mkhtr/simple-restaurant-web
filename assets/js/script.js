let navbar = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navLink = document.querySelectorAll(".nav__link"),
sidebarToggle = document.getElementById("sidebar-toggle"),
sideBar = document.getElementById("sidebar");
navToggle.addEventListener("click", () =>{
    navbar.classList.toggle("active");

    if (sideBar.classList.contains("active")){
        sideBar.classList.remove("active");
    }
})

sidebarToggle.addEventListener("click", () =>{
    sideBar.classList.toggle("active");

    if (navbar.classList.contains("active")){
        navbar.classList.remove("active");
    }
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

menuItems.forEach((item) => item.addEventListener("click", activeMenuItem));

// Animation scroll by scroll reveal

const sr = ScrollReveal({
    distance: "100px",
    duration: 2000,
    delay: 400,
});

sr.reveal(".home__content");
sr.reveal(".img_home", {origin: "top"});
sr.reveal(".feature__card", {interval:200});
sr.reveal(".img_about", {origin: "left"});
sr.reveal(".about__content", {origin: "right"});
sr.reveal(".review__card, .blog__post, .footer__content", {interval: 200});
