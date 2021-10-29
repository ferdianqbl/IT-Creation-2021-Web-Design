$(document).ready(function () {
    // NavScroll
    $(window).scroll(function () {
        let height = $(this).scrollTop();
        // console.log(height);

        if ((height >= ($("#structure-main").offset().top - 50)) && (height < ($("#contact").offset().top - 300))) {
            $("ul li a.nav-link").eq(3).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
            $("ul li a.nav-link").eq(0).removeClass("active");
            $("ul li a.nav-link").eq(5).removeClass("active");
        }

        else if (height >= ($("#contact").offset().top - 550)) {
            $("ul li a.nav-link").eq(5).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(3).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
            $("ul li a.nav-link").eq(0).removeClass("active");
        }
        else {
            $("ul li a.nav-link").eq(3).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
            $("ul li a.nav-link").eq(0).removeClass("active");
            $("ul li a.nav-link").eq(5).removeClass("active");
        }
    });

    // slide for home
    $(window).ready(function () {
        $('.structure-section-text').eq(0).addClass('fade-in');
        $('.structure-img').eq(0).addClass('slide-bottom');
        $('.founder-heading').eq(0).addClass('slide-top');
        $('.founder-subheading').eq(0).addClass('slide-top');
        $('.founder-text').eq(0).addClass('slide-top');
        $('#structure-main .navbar-nav--connect').eq(0).addClass('bounce-in-left');

        $('.structure-section-text').eq(1).addClass('fade-in').addClass('animation-delay-07');
        $('.structure-img').eq(1).addClass('slide-bottom').addClass('animation-delay-07');
        $('.founder-heading').eq(1).addClass('slide-top').addClass('animation-delay-07');
        $('.founder-subheading').eq(1).addClass('slide-top').addClass('animation-delay-07');
        $('.founder-text').eq(1).addClass('slide-top').addClass('animation-delay-07');
        $('#structure-main .navbar-nav--connect').eq(1).addClass('bounce-in-left').addClass('animation-delay-07');


    });

    // animation per section
    $(window).scroll(function () {
        let height = $(this).scrollTop();

        if (height >= ($("#support-team").offset().top - 500)) {
            $('#support-team .section-heading').addClass('fade-in');
            $('#support-team .section-text').addClass('fade-in');

            $('#support-team .card').eq(0).addClass('slide-bottom');
            $('#support-team .card').eq(1).addClass('slide-top');
            $('#support-team .card').eq(2).addClass('slide-bottom');
            $('#support-team .card').eq(3).addClass('slide-top');

        }

    });

});
