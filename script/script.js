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
    hideMenu();
});
function hideMenu() {
    $(".navbar__burger").attr("src", "img/burger.svg");
    $(".navbar__list").slideToggle("slow", () => {
        $(".navbar").css("backgroundColor", "transparent");
        $(".navbar").fadeIn("fast");
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
//at start