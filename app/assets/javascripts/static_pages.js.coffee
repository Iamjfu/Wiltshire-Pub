# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
#calling both document ready and page load because of turbolinks
$(document).ready ->
  initializers()
  return

$(document).on "page:load", ->
  initializers()
  return

initializers = ->
  submitClick()
  menuToggle()
  windowResize()
  menuLinks()
  googleMaps()
  initializeMaps()
  return


#hides the reservation submit menu so they know it submitted
submitClick = ->
  $(".submitReservation").click ->
    $(".reservationForm").fadeOut()
    $(".reservationConfirm").fadeIn()
    return

  $(".submitContact").click ->
    $(".formContainer").fadeOut()
    $(".contactConfirm h2").fadeIn()
    return

  return


#toggles the mobile menu
menuToggle = ->
  $(".navbar-toggle").click ->
    $("#navbar-collapse-1").toggleClass "collapse"
    return

  $(".navbar-toggle").mouseleave ->
    $(this).blur()
    return

  return


#makes sure resizing the page doesn't screw with the menu
windowResize = ->
  $(window).resize ->
    windowWidth = $(window).width()
    $("#navbar-collapse-1").addClass "collapse"  if windowWidth >= 768
    return

  return


#the sidebar scrolling on the menu page
menuLinks = ->
  $("#starters").click ->
    $("html, body").animate
      scrollTop: $("#starterMenu").offset().top
    , 1000
    return

  $("#sandwiches").click ->
    $("html, body").animate
      scrollTop: $("#sandwichMenu").offset().top
    , 1000
    return

  $("#burger").click ->
    $("html, body").animate
      scrollTop: $("#burgerMenu").offset().top
    , 1000
    return

  $("#dinners").click ->
    $("html, body").animate
      scrollTop: $("#dinnersMenu").offset().top
    , 1000
    return

  $("#salads").click ->
    $("html, body").animate
      scrollTop: $("#saladsMenu").offset().top
    , 1000
    return

  $("#desserts").click ->
    $("html, body").animate
      scrollTop: $("#dessertsMenu").offset().top
    , 1000
    return

  return

googleMaps = initialize = ->
  mapCanvas = document.getElementById("map-canvas")
  mapOptions =
    center: new google.maps.LatLng(51.27546779, -1.99120224)
    zoom: 20
    mapTypeId: google.maps.MapTypeId.ROADMAP

  map = new google.maps.Map(mapCanvas, mapOptions)
  return

initializeMaps = ->
  google.maps.event.addDomListener window, "load", initialize
  return