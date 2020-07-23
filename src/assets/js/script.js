$(document).ready(function() {
  "use strict";
  var $customizer = $(".customizer");
  var $landingWrap = $("#landing_wrap");
  var $customizerCircleBtn = $(".change-bg");
  // var $searchInput = $(".search-bar input");
  // var $searchCloseBtn = $(".search-close");

  // // Reusable utilities
  // window.gullUtils = {
  //     isMobile: function isMobile() {
  //         return window && window.matchMedia("(max-width: 767px)").matches;
  //     },
  //     changeCssLink: function(storageKey, fileUrl) {
  //         localStorage.setItem(storageKey, fileUrl);
  //         location.reload();
  //     }
  // };

  // // Search toggle
  // var $searchUI = $(".search-ui");
  // $searchInput.on("focus", function() {
  //     $searchUI.addClass("open");
  // });
  // $searchCloseBtn.on("click", function() {
  //     $searchUI.removeClass("open");
  // });

  // // Secondary sidebar dropdown menu
  // var $dropdown = $(".dropdown-sidemenu");
  // var $subMenu = $(".submenu");

  // $dropdown.find("> a").on("click", function(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     var $parent = $(this).parent(".dropdown-sidemenu");
  //     $dropdown.not($parent).removeClass("open");
  //     $(this)
  //         .parent(".dropdown-sidemenu")
  //         .toggleClass("open");
  // });

  // Perfect scrollbar

  $(".perfect-scrollbar, [data-perfect-scrollbar]").each(function(index) {
    var $el = $(this);
    var ps = new PerfectScrollbar(this, {
      suppressScrollX: $el.data("suppress-scroll-x"),
      suppressScrollY: $el.data("suppress-scroll-y")
    });
  });

  // aos
  AOS.init({
    duration: 1200
  });

  // Toggle customizer
  $(".handle").on("click", function(e) {
    $customizer.toggleClass("show");
  });

  function changeBg(data) {
    $landingWrap.addClass(data);
  }
  //chnage landing Wrap class
  $(".change-bg").on("click", function(e) {
    var bgClass = $(this).attr("data-class");
    console.log(bgClass);
    var currentBgClass = $landingWrap.attr("class");
    $landingWrap.removeClass(currentBgClass);
    $landingWrap.addClass("landing-" + bgClass);
  });
});

// PreLoader
// $(window).load(function() {
//     $('#preloader').fadeOut('slow', function() {
//         $(this).remove();
//     });
// });

// makes sure the whole site is loaded
$(window).on("load", function() {
  // will first fade out the loading animation
  jQuery("#loader").fadeOut();
  // will fade out the whole DIV that covers the website.
  jQuery("#preloader")
    .delay(500)
    .fadeOut("slow");
});
