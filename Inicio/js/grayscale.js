(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(function () {
  var all_classes = "";
  var timer = undefined;
  $.each($('li', '.social-class'), function (index, element) {
    all_classes += " btn-" + $(element).data("code");
  });
  $('li', '.social-class').mouseenter(function () {
    var icon_name = $(this).data("code");
    if ($(this).data("icon")) {
      icon_name = $(this).data("icon");
    }
    var icon = "<i class='fa fa-" + icon_name + "'></i>";
    $('.btn-social', '.social-sizes').html(icon + "Sign in with " + $(this).data("name"));
    $('.btn-social-icon', '.social-sizes').html(icon);
    $('.btn', '.social-sizes').removeClass(all_classes);
    $('.btn', '.social-sizes').addClass("btn-" + $(this).data('code'));
  });
  $($('li', '.social-class')[Math.floor($('li', '.social-class').length * Math.random())]).mouseenter();
});