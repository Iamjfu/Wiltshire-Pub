// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.

//= require gritter
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//Used for collapsing and showing the nav bar
$(document).ready(function() {
  menuToggle();
  windowResize();
  menuLinks();
});

var menuToggle = function() {
  $('.navbar-toggle').click(function() {
    $('#navbar-collapse-1').toggleClass('collapse');
  });
  $('.navbar-toggle').mouseleave(function() {
    $(this).blur();
  });
}

var windowResize = function () {
    $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth >= 768) {
      $('#navbar-collapse-1').addClass('collapse');
    }
  });
}

var menuLinks = function() {
  $('#starters').click(function() {
    $('html, body').animate({
        scrollTop: $("#starterMenu").offset().top
    }, 2000);
  });
  $('#sandwiches').click(function() {
    $('html, body').animate({
        scrollTop: $("#sandwichMenu").offset().top
    }, 2000);
  });
}