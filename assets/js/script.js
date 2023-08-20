(function ($) {

    'use strict';

    /*------------------------------------
        Mobile Menu
    --------------------------------------*/

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.side-icon > a').on('click', function (event) {
        event.preventDefault();
        $('.side-bar-menu').addClass('active')
    });

    $('.close-icon > a').on('click', function (event) {
        event.preventDefault();
        $('.side-bar-menu').removeClass('active')
    });


    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let win = $(window);
    let sticky_id = $("#header");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("header-scrolled");
        } else {
            sticky_id.addClass("header-scrolled");
        }
    });


    /*------------------------------------
        Overlay Close
    --------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $('#scrollUp').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

 
 
})(jQuery);

