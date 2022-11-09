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

var contagem = document.getElementsByClassName('clearfix').length;

var valor = document.querySelectorAll('.badge');

contagem.textContent = valor;