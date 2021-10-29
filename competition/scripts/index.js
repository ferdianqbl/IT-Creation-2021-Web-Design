$(document).ready(function () {
    // NavScroll
    $(window).scroll(function () {
        let height = $(this).scrollTop();
        // console.log(height);

        if ((height >= ($("#home").offset().top - 50)) && (height < ($("#about-us").offset().top - 100))) {
            $("ul li a.nav-link").eq(0).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(3).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
            $("ul li a.nav-link").eq(5).removeClass("active");
        }
        else if ((height >= ($("#about-us").offset().top - 100)) && (height < ($("#news").offset().top - 100))) {
            $("ul li a.nav-link").eq(1).addClass("active");
            $("ul li a.nav-link").eq(0).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(3).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
            $("ul li a.nav-link").eq(5).removeClass("active");
        }
        else if ((height >= ($("#news").offset().top - 100)) && (height < ($("#structure").offset().top - 550))) {
            $("ul li a.nav-link").eq(2).addClass("active");
            $("ul li a.nav-link").eq(0).removeClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(3).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
            $("ul li a.nav-link").eq(5).removeClass("active");
        }
        else if ((height >= ($("#structure").offset().top - 550)) && (height < ($("#contact").offset().top - 550))) {
            $("ul li a.nav-link").eq(3).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(0).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
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
            $("ul li a.nav-link").eq(0).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(3).removeClass("active");
            $("ul li a.nav-link").eq(4).removeClass("active");
            $("ul li a.nav-link").eq(5).removeClass("active");
        }
    });

    // slide for home
    $(window).ready(function () {
        $('.header-heading').addClass('slide-bottom');
        $('.header-subheading').addClass('slide-top');
        $('.banner').addClass('fade-in');
    });

    // animation per section
    $(window).scroll(function () {
        let height = $(this).scrollTop();

        if (height >= ($("#about-us").offset().top - 500)) {
            $('#about-us .about-us-img').addClass('scale-in-tl');
            $('#about-us .about-us-text').addClass('scale-in-tr');
        }

        if (height >= ($("#news").offset().top - 500)) {
            $('.news-text').addClass('fade-in');
            $('.card').eq(0).addClass('slide-bottom');
            $('.card').eq(1).addClass('slide-bottom');
            $('.card').eq(2).addClass('slide-bottom');
            $('.card').eq(3).addClass('slide-top').addClass('animation-delay-05');
            $('.card').eq(4).addClass('slide-top').addClass('animation-delay-05');
            $('.card').eq(5).addClass('slide-top').addClass('animation-delay-05');
            $('.card').eq(6).addClass('slide-bottom').addClass('animation-delay-09');
            $('.card').eq(7).addClass('slide-bottom').addClass('animation-delay-09');
            $('.card').eq(8).addClass('slide-bottom').addClass('animation-delay-09');
        }

        if (height >= ($("#structure").offset().top - 500)) {
            $('#structure .structure-img').addClass('scale-in-tr');
            $('#structure .structure-text').addClass('scale-in-tl');
        }
    });
});
