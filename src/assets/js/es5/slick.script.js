'use strict';

$(document).ready(function () {
    "use strict";

    // slick left Image carousel

    $('.left-image-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.leftRs'),
        nextArrow: $('.rightRs')

    });
    // slick left Image carousel
    $('.right-image-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.right-image-arrow-left'),
        nextArrow: $('.right-image-arrow-right')

    });

    // slick work carousel
    $('.slick-work-carousel-wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.work-arrow-left'),
        nextArrow: $('.work-arrow-right'),
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 765,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }]

    });

    // slick Services carousel
    $('.slick-services-carousel-wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.services-arrow-left'),
        nextArrow: $('.services-arrow-right'),
        dots: false,
        // centerMode: true,
        // centerPadding: '60px',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 765,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }]

    });

    // slick Services carousel two
    $('.slick-services-carousel-two-wrap').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.services-two-arrow-left'),
        nextArrow: $('.services-two-arrow-right'),
        dots: false,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,

                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 765,
            settings: {
                slidesToShow: 1

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }]

    });

    // slick Services carousel two
    $('.slick-testimonial-carousel-wrap').slick({
        // centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.testimonial-arrow-left'),
        nextArrow: $('.testimonial-arrow-right'),
        dots: false,

        responsive: [{
            breakpoint: 998,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 765,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }]

    });
});