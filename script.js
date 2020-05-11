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

$('h1').html('여기를 클릭하면 회색박스가 없어진다우').css({
   'color':'#fff',
   'background':'red'
});

$('h3').html('이소연의 제이쿼리 연습장').css({
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
    $('.box03').animate({'opacity': 0},1500,
        function () {
            $('.box03').animate({'opacity':1},1500);
        });

});

$('.section-list ul li').on('mouseover', function () {
    $(this).css({'background-color':'#ddd'});
})

$('.section-list ul li').on('mouseout', function () {
    $(this).css({'background-color':"#fff"});
} );

$('.btn-menu').on('click', function () {
    $('ul').show();
});

$('.box04').on('click', function() {
    $(this).animate({'margin-left': '200px'})
});

$('.box05').animate({'width':'700px'},
    function () {
        $(this).animate({'width':'100px'})
} )