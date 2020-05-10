$(".menu-btn").on("click", function() {
    $(".sidebar").toggle();
})

$(".event-popup").on("click", function () {
    $(".popup").show();
})

$(".popup").on("click", function () {
    $(".popup").hide();
})

$(".v").html("About Us").css("color","red");

/*
$(document).ready(function () {
    $('h1').css('color','red');
    $('h1').css('background','yellow');
})
*/

/*
$(function () {
    $('h1').css('color','red');
});
*/


/*
$(function () {
    $('h1').css({
        'color':'blue',
        'background':'black',
        'textdecoration':'underline'
    })
});
*/

$('h1').html('제이쿼리 연습').css({
   'color':'#fff',
   'background':'red'
});

