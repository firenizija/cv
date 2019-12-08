let navbarStatus = false;
$(".navbar__burger").click(() => {
    if (navbarStatus) {
        showMenu();
    }
    else {
        hideMenu();
    }
})
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