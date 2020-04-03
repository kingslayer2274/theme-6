$(".port-item").click(function() {
  $(".collapse").collapse("hide");
});
$(document).on("click", '[data-toggle="lightbox"]', function(e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});

$(document).ready(function() {
  console.log(window.jQuery);
});

$(function() {
  console.log(window.jQuery);
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  center: true,
  pagination: false,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: true
    }
  },
  navText: [
    "<i class='fas fa-angle-left fa-2x'></i>",
    "<i class='fa fa-angle-right fa-2x'></i>"
  ]
});

$(document).ready(function() {
  $(".owl-dots").remove();

  console.log("done");
});

$(document).ready(function() {
  if ($(document).width() < 500) {
    $(".all").removeClass("container");
    $(".all").removeClass("py-3");
    $(".fa-circle").removeClass("fa-stack-2x");
    // $(".col").addClass("xs-pr-0");
    //$(".col-3").addClass("xs-pr-0");
    //$(".col-4").addClass("xs-pr-0");
    $(".owl-prev").attr("style", "padding:2rem 1rem !important");
    $(".owl-next").attr("style", "padding:2rem 1rem !important");
    $(".xs-pr-0").attr("style", "padding-right:0rem !important");
    $(".ports").attr("style", "max-width : 1000% !important");
  }
});

$("#accordion1").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});
