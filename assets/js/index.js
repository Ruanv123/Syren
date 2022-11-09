$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("hamburguer-active");
        $(".nav-list-mobile").toggleClass("active");
    });
});

/* carrinho dropdown */
(function () {
    $(".cart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
    });
})();
