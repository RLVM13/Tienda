//ESCRIBIMOS LAS PREGUNTAS MODIFICANDO EL DOM
//output
/* {
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120
} 

Categorias:
1-4 hombre (4)
5-8 joyeria(4)
9-14 electronica(6)
15-20 mujer(6)
*/


async function consultarApi() {
    await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
        .then((data) => {
            for (let i = 0; i < 8; i++) {
                /*  let cod_id = data[i].id;
                 let titulo = data[i].title;
                 let precio = data[i].price;
                 let descripcion = data[i].description;
                 let categoria = data[i].category;
                 let imagen = data[i].imagen;
                 let tasa = data[i].rating.rate;
                 let stock = data[i].rating.count; */
                //console.log(data[i].title);
                imagenDescripcion(data, i);
                console.log(data);
            }
            for (i = 8; i < 12; i++) {
                console.log(data);
                imagenBotones(data, i);
            }
            //console.log(data);

        });
    return;
}
consultarApi();

function imagenDescripcion(objeto, indice) {
    let datos = `<img src="${objeto[indice].image}" />`;
    datos += `<a class="img-text" href="">`;
    datos += `<p>${objeto[indice].description.substr(0, 70) + '...'}</p></a>`;
    document.getElementById("imagen" + indice).innerHTML = datos;
}

function imagenBotones(objeto, indice) {
    let nombre =`<a href="#">${objeto[indice].title}</a>`;
    nombre += `<div class="ratting">`;
    /* for(let j=0; i < Math.round(`${objeto[indice].rate}`);j++){
        console.log(Math.round(`${objeto[indice].rate}`));
        nombre += `<i class="fa fa-star"></i>`;
    } */
    nombre += `<i class="fa fa-star"></i>`;
    nombre += `<i class="fa fa-star"></i>`;
    nombre += `<i class="fa fa-star"></i>`;
    nombre += `<i class="fa fa-star"></i>`;
    nombre += `</div>`;
    document.getElementById("nombre" + indice).innerHTML = nombre;

    let datos = `<a href = "product-detail.html">`;
    datos += `<img src = "${objeto[indice].image}" /></a>`;
    datos += `<div class="product-action"><a href="#"><i class="fa fa-cart-plus"></i></a>`;
    datos += `<a href = "#"><i class="fa fa-heart"></i></a>`;
    datos += `<a href = "#"><i class="fa fa-search"></i></a></div>`;
    document.getElementById("producto" + indice).innerHTML = datos;

    let precio = `<h3><span>€</span>${objeto[indice].price }</h3>`;
    precio += `<a class="btn" href = "" ><i class="fa fa-shopping-cart"></i>Comprar</a>`;
    document.getElementById("precio" + indice).innerHTML = precio;
}








(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header slider
    $('.header-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    // Product Slider 3 Column
    $('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    // Product Detail Slider
    $('.product-slider-single').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-single-nav'
    });
    $('.product-slider-single-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product-slider-single'
    });


    // Brand Slider
    $('.brand-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // Widget slider
    $('.sidebar-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    // Quantity
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if ($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });


    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);

