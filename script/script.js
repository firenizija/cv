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
let currentSlide = 0;
let j = 0;
setInterval(() => {
    $(".slider__progress").css("width", j + "%");
    if (j >= 100) {
        j = 0;
        currentSlide++;
        $(".slider__current").css("font-size", "3vw");
        $(".slider__" + currentSlide).css("font-size", "3.5vw");
        $(".slider__img").attr("src", "img/" + slides[currentSlide]);
        if (currentSlide >= slides.length - 1) currentSlide = -1;
    }
    else {
        j += 0.4;
    }
}, 50);
$(".slider__0").mouseover(() => {
    $(".slider__img").attr("src", "img/" + slides[0]);
    $(".slider__current").css("font-size", "3vw");
    $(".slider__" + 0).css("font-size", "3.5vw");
});
$(".slider__1").mouseover(() => {
    $(".slider__img").attr("src", "img/" + slides[1]);
    $(".slider__current").css("font-size", "3vw");
    $(".slider__" + 1).css("font-size", "3.5vw");
});
$(".slider__2").mouseover(() => {
    $(".slider__img").attr("src", "img/" + slides[2]);
    $(".slider__current").css("font-size", "3vw");
    $(".slider__" + 2).css("font-size", "3.5vw");
});
//skills
$(".myskills__button").click(() => {
    $(".myskills__tech").slideToggle();
});
//at start
$('document').ready(() => {
    minimalizeNav();
})