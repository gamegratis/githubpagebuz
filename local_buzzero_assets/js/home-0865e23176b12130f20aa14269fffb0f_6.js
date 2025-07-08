// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){var e=$("#btn-categories");e.dropdown(),$(window).on("resize click",function(){e.parent().addClass("open")}),$(".carousel").carousel({interval:8e3})});