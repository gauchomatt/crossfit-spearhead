function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined: shift = 0;
        break;
        case 'h': shift = el.eq(0).outerHeight();
        break;
        case 'h/2': shift = el.eq(0).outerHeight() / 2;
        break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity : 1
                    }, 1000);
                });
            }
        }
    });
}

(function($) {
    $(function() {
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        // Simple Scroll To
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
            return false;
            }
          }
        });

        // Sections height & scrolling
        $(window).resize(function() {
            var sH = $(window).height();
            $('section.header-10-sub').css('height', (sH - $('header').outerHeight()) + 'px');
           // $('section:not(.header-10-sub):not(.content-11)').css('height', sH + 'px');
        });

        $('.header-10-sub .scroll-btn a').on('click', function(e) {
            e.preventDefault();
            $.scrollTo($(this).closest('section').next(), {
                axis : 'y',
                duration : 500
            });
            return false;
        });

        $('.header-10-sub .hero-unit a').on('click', function(e) {
            e.preventDefault();
            $.scrollTo($('#' + $(this).data('section')), {
                axis : 'y',
                duration : 500
            });
        });

        $('.nav, .nav-scroll').find('a').on('click', function(e) {
            e.preventDefault();
            $.scrollTo($('#' + $(this).data('section')), {
                axis : 'y',
                duration : 500,
                filter: ':not(.external)'
            });
        });

        // Parallax
        $('.header-10-sub, .content-23.custom-bg').each(function() {
            if(! isMobile.any()) {
              $(this).parallax('50%', 0.3, true);
            } else {
              $(this).css('background-attachment', 'initial');
            }
        });

        /* For the section content-8 */
        if ($('.content-8').length > 0) {
            fadedEls($('.content-8'), 300);
        }

        /* For the section content-7 */

        if ($('.content-7').length > 0) {

            // Faded elements
            fadedEls($('.content-7'), 300);

            // Ani screen
            (function(el) {
                $('img:first-child', el).css('left', '-29.7%');

                $(window).resize(function() {
                    if (!el.hasClass('ani-processed')) {
                        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                    }
                }).scroll(function() {
                    if (!el.hasClass('ani-processed')) {
                        if ($(window).scrollTop() >= el.data('scrollPos')) {
                            el.addClass('ani-processed');
                            $('img:first-child', el).animate({
                                left : 0
                            }, 500);
                        }
                    }
                });
            })($('.screen'));
        }


        (function(el) {
            el.css('left', '-100%');

            $(window).resize(function() {
                if (!el.hasClass('ani-processed')) {
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                }
            }).scroll(function() {
                if (!el.hasClass('ani-processed')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        el.addClass('ani-processed');
                        el.animate({
                            left : 0
                        }, 500);
                    }
                }
            });
        })($('.content-11 > .container'));

        $(window).resize().scroll();

    });

    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });

})(jQuery);
