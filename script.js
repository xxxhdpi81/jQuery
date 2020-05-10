$(".menu-btn").on("click", function() {
    $(".sidebar").toggle();
})

$(".event-popup").on("click", function () {
    $(".popup").show();
})

$(".popup").on("click", function () {
    $(".popup").hide();
})