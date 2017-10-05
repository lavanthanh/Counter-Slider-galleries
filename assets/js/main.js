;(function($) {

    'use strict'

    var counter = function() {
        $('.counter').on('on-appear', function() {
            $(this).find('.numb-count').each(function() {
                var to = parseInt($(this).attr('data-to')), speed = parseInt($(this).attr('data-speed'));
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                }
            });
        }); //counter
    };

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });
    };

    var gallleries = function() {
        $('.wprt-galleries').each(function(){
                var itemW = $(this).data("width");
                var itemM = $(this).data("margin");

                $(this).children('#wprt-carousel').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: itemW,
                    itemMargin: itemM,
                    asNavFor: $(this).children('#wprt-slider'),
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>'
                });
                $(this).children('#wprt-slider').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    sync: $(this).children('#wprt-carousel'),
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>'
                });
            });
    }

    var magnificPopup = function() {
        if ( $().magnificPopup ) {
            $('.wprt-galleries').each(function () {
                $(this).find('.zoom').magnificPopup({
                    disableOn: 700,
                    type: 'image',
                    gallery:{
                        enabled: true
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            });
        }
    }

    $(function() {
    	counter();
        detectViewport();
        gallleries();
        magnificPopup();
    });

})(jQuery);