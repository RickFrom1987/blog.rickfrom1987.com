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

        var wrapAll = function(q) {
            $(q).each( function() {
                var $img = $(this),
                        href = $img.data('original');
                $img.wrap('<a rel="fancybox" href="' + href + '" title="' + $img.attr('alt') + '" class="link"></a>');
            });
        };

        wrapAll('.post-content img');
        wrapAll('.post-excerpt img');
        
        $('[rel="fancybox"]').fancybox();
        $(".post-content").fitVids();

        $("img").lazyload({
          threshold: 50,
          effect: "fadeIn"
        });

    });

}(jQuery));