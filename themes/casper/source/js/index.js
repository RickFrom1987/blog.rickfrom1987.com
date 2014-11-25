/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
  
        $(window).on('scroll', function() {
          if ($(".navbar").offset().top > 50) {
            return $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            return $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
        });

        $(".post-content").fitVids();

        $("img").lazyload({
          threshold: 50,
          effect: "fadeIn"
        });

    });

}(jQuery));