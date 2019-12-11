//navbar
let navbarStatus = true;
$(".navbar__burger").click(() => {
    if (navbarStatus) {
        showMenu();
    }
    else {
        hideMenu();
    }
})
$(".navbar__option").click(() => {
    if (window.innerWidth < 500) {
        hideMenu();
    }
});
window.onscroll = () => {
    minimalizeNav();
}
$(".navbar").mouseover(() => {
    $(".navbar").css("opacity", "1");
}).mouseleave(() => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $(".navbar").css("opacity", "0.5");
    }
});
function minimalizeNav() {
    if (window.innerWidth > 500) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $(".navbar__option").css("padding", ".5vw 0");
            $(".navbar").css("opacity", ".5");
        }
        else {
            $(".navbar__option").css("padding", "2vw 0");
            $(".navbar").css("opacity", "1");
        }
    }
}
function hideMenu() {
    $(".navbar__burger").attr("src", "img/burger.svg");
    $(".navbar__list").slideToggle("slow", () => {
        $(".navbar").css("backgroundColor", "transparent").fadeIn("fast");
        navbarStatus = !navbarStatus;
    });
}
function showMenu() {
    $(".navbar").css("backgroundColor", "#0077ff");
    $(".navbar__burger").attr("src", "img/closeburger.svg");
    $(".navbar__list").slideToggle("slow", () => {
        navbarStatus = !navbarStatus;
    });
}
//slider
const slides = ["pcservice.svg", "frontendslide.svg", "ctfslide.svg"];
let i = 0;
setInterval(() => {

    $(".slider__img").attr("src", "img/" + slides[i]);
    i++;
    if (i > slides.length - 1) i = 0;
}, 5500);
//skills
$(".myskills__button").click(() => {
    $(".myskills__tech").slideToggle();
});
//at start
$('document').ready(() => {
    minimalizeNav();
})