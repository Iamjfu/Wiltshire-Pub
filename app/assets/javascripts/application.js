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
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//calling both document ready and page load because of turbolinks
$(document).ready(function() {
  menuToggle();
  windowResize();
  menuLinks();
});

$(document).on('page:load', function() {
  menuToggle();
  windowResize();
  menuLinks();
});

//toggles the mobile menu
var menuToggle = function() {
  $('.navbar-toggle').click(function() {
    $('#navbar-collapse-1').toggleClass('collapse');
  });
  $('.navbar-toggle').mouseleave(function() {
    $(this).blur();
  });
}

//makes sure resizing the page doesn't screw with the menu
var windowResize = function () {
    $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth >= 768) {
      $('#navbar-collapse-1').addClass('collapse');
    }
  });
}

//the sidebar scrolling on the menu page
var menuLinks = function() {
  $('#starters').click(function() {
    $('html, body').animate({
        scrollTop: $("#starterMenu").offset().top
    }, 1000);
  });
  $('#sandwiches').click(function() {
    $('html, body').animate({
        scrollTop: $("#sandwichMenu").offset().top
    }, 1000);
  });
  $('#burger').click(function() {
    $('html, body').animate({
        scrollTop: $("#burgerMenu").offset().top
    }, 1000);
  });
  $('#dinners').click(function() {
    $('html, body').animate({
        scrollTop: $("#dinnersMenu").offset().top
    }, 1000);
  });
  $('#salads').click(function() {
    $('html, body').animate({
        scrollTop: $("#saladsMenu").offset().top
    }, 1000);
  });
  $('#desserts').click(function() {
    $('html, body').animate({
        scrollTop: $("#dessertsMenu").offset().top
    }, 1000);
  });
}