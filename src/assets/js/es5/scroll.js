"use strict";

window.onload = function () {
  var navbarLinks = document.querySelectorAll(".scroll-to");
  // console.log(navbarLinks);

  navbarLinks.forEach(function (element) {
    return element.addEventListener("click", smoothScroll);
  });

  //smooth-scrolling

  function smoothScroll(event) {
    event.preventDefault();
    var clickLink = event.currentTarget.getAttribute("href");
    // console.log(clickLink);
    window.scrollTo({
      top: clickLink === '#' ? 0 : document.querySelector(clickLink).offsetTop,
      behavior: 'smooth'
    });
  }
};

// let nav_r = document.querySelector('#main-header');
// console.log(nav_r);

// let topNav = nav.offsetTop;
// console.log(topNav);
// function fixNav(){
//   // console.log(topNav, window.scrollY);
//   if(window.scrollY >= topNav)
//   {
//     document.body.classList.add('fixed-nav-scroll');
//     console.log('ok');
//   }
//   else{
//     document.body.classList.remove('fixed-nav-scroll');
//   }
// }

// window.addEventListener('scroll', fixNav);

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 24) {
    //clearHeader, not clearheader - caps H
    $(".main-header").addClass("header-fixed");
  } else {
    $(".main-header").removeClass("header-fixed");
  }
}); //missing );