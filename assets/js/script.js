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

//  contact form js

const FORM = $("form"); // set form or other element here
const TYPES = ["input[type=text], input[type=submit]"]; // set which elements get targeted by the focus
const FOCUS = $("#focus"); // focus element

// function for positioning the div
function position(e) {
    // get position
    var props = {
        top: e.offset().top,
        left: e.offset().left,
        width: e.outerWidth(),
        height: e.outerHeight(),
        radius: parseInt(e.css("border-radius"))
    };

    // set position
    FOCUS.css({
        top: props.top,
        left: props.left,
        width: props.width,
        height: props.height,
        "border-radius": props.radius
    });

    FOCUS.fadeIn(200);
}

FORM.find(TYPES.join()).each(function (i) {
    // when clicking an input defined in TYPES
    $(this).focus(function () {
        el = $(this);

        // adapt size/position when resizing browser
        $(window).resize(function () {
            position(el);
        });

        position(el);
    });
});

FORM.on("focusout", function (e) {
    setTimeout(function () {
        if (!e.delegateTarget.contains(document.activeElement)) {
            FOCUS.fadeOut(200);
        }
    }, 0);
});


// photo gallery js

$(function () {
    const strL = "assets/img/gallery/";
    const strR =
        ".jpg";
    const imgs = [
        {
            descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            titulo: "",
            url: strL + "gallery-1" + strR
        },
        {
            descripcion:
                "Nipa Palm picture from Nature.",
            titulo: "Nipa Palm",
            url: strL + "gallery-2" + strR
        },
        {
            descripcion:
                "Vegetable gardening.",
            titulo: "Gardening.",
            url: strL + "gallery-3" + strR
        },
        {
            descripcion:
                "Vegetable production.",
            titulo: "Production.",
            url: strL + "gallery-4" + strR
        },
        {
            descripcion:
                "Maize plant",
            titulo: "Maize plant",
            url: strL + "gallery-5" + strR
        },
        {
            descripcion:
                "Selling nursery plant.",
            titulo: "Nursery plant.",
            url: strL + "gallery-6" + strR
        },
        {
            descripcion:
                "Bitter guard sapling.",
            titulo: "Bitter guard",
            url: strL + "gallery-7" + strR
        },
        {
            descripcion:
                "Leaf Vegetable plant.",
            titulo: "Vegetable plant",
            url: strL + "gallery-8" + strR
        },
        {
            descripcion:
                "Child labour returning from the river after catch fish from heavy risk costal location in the nearest bay of Bengal in Bangladesh (Hazardous work for youth & Children’s).",
            titulo: "Child labour",
            url: strL + "gallery-9" + strR
        },
        {
            descripcion:
                "Picture: Sesbania Aculata is best for agro based plants and environmentally best species..",
            titulo: "Sesbania Aculata",
            url: strL + "gallery-10" + strR
        },
        {
            descripcion:
                "",
            titulo: "",
            url: strL + "gallery-11" + strR
        },
        {
            descripcion:
                "",
            titulo: "",
            url: strL + "gallery-12" + strR
        },
        {
            descripcion:
                "",
            titulo: "",
            url: strL + "gallery-13" + strR
        },
        {
            descripcion:
                "",
            titulo: "",
            url: strL + "gallery-14" + strR
        },
    ];

    $.each(imgs, function (i, img) {
        $(".galeria .contenedorImgs").append(`
      <div class="imagen" style="background-image:url('${img.url}')">
        <p class="nombre">${img.titulo}</p>
      </div>`);
    });
    setTimeout(() => {
        $(".galeria").addClass("vis");
    }, 1000);
    $(".galeria").on("click", ".contenedorImgs .imagen", function () {
        var imagen = imgs[$(this).index()].url;
        var titulo = imgs[$(this).index()].titulo;
        var descripcion = imgs[$(this).index()].descripcion;
        $(".galeria").addClass("scale");
        $(this).addClass("activa");
        if (!$(".fullPreview").length) {
            $("body").append(`
        <div class="fullPreview">
          <div class="cerrarModal"></div>
          <div class="wrapper">
            <div class="blur" style="background-image:url(${imagen})"></div>
            <p class="titulo">${titulo}</p>
            <img src="${imagen}">
            <p class="desc">${descripcion}</p>
          </div>
          <div class="controles">
            <div class="control av"></div>
            <div class="control ret"></div>
            <a href=${'#'} class="btn btn-outline-light mid">
                See details
            </a>
          </div>
        </div>`);
            $(".fullPreview").fadeIn().css("display", "flex");
        }
    });
    $("body").on("click", ".fullPreview .cerrarModal", function () {
        $(".contenedorImgs .imagen.activa").removeClass("activa");
        $(".galeria").removeClass("scale");
        $(this)
            .parent()
            .fadeOut(function () {
                $(this).remove();
            });
    });
    $("body").on("click", ".fullPreview .control", function () {
        var activa = $(".contenedorImgs .imagen.activa");
        var index;
        if ($(this).hasClass("av")) {
            index = activa.next().index();
            if (index < 0) index = 0;
        } else {
            index = activa.prev().index();
            if (index < 0) index = imgs.length - 1;
        }
        $(".fullPreview").addClass("anim");
        setTimeout(() => {
            $(".contenedorImgs .imagen.activa").removeClass("activa");
            $(".contenedorImgs .imagen").eq(index).addClass("activa");
            $(".fullPreview")
                .find(".blur")
                .css("background-image", "url(" + imgs[index].url + ")");
            $(".fullPreview").find("img").attr("src", imgs[index].url);
            $(".fullPreview").find(".titulo").text(imgs[index].titulo);
            $(".fullPreview").find(".desc").text(imgs[index].descripcion);
            $(".fullPreview").removeClass("anim");
        }, 500);
    });
});

// WOW animation js 
new WOW().init();