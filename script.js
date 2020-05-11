$(".menu-btn").on("click", function() {
    $(".sidebar").toggle();
})

$(".menu-btn").on("mouseover", function () {
    $(".menu-btn a").css('color','red')
});

$(".menu-btn").on("mouseout", function () {
    $(".menu-btn a").css('color','#242424')

});

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

$('h3').html('이소연').css({
    color: 'blue',
    fontsize: '72px'
});

$('.box').css({
   background: '#ddd',
   width: '300px',
   height: '200px'
});


/*
$('.box').on('mouseover', function () {
    $(this).css('background-color','black');
})

$('.box').on('mouseout', function () {
    $(this).css('background-color','#dddddd');
})
*/


$('h1').on('click', function () {
    $('.box').toggle();
});

$('.box02').on('click', function () {
    $('.box03').animate({'opacity':0},3000);
} );
