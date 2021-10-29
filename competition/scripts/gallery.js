$(document).ready(function () {
    // NavScroll
    $(window).scroll(function () {
        let height = $(this).scrollTop();
        // console.log(height);

        if ((height >= ($("#gallery").offset().top - 50)) && (height < ($("#contact").offset().top - 200))) {
            $("ul li a.nav-link").eq(4).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(3).removeClass("active");
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
            $("ul li a.nav-link").eq(4).addClass("active");
            $("ul li a.nav-link").eq(1).removeClass("active");
            $("ul li a.nav-link").eq(2).removeClass("active");
            $("ul li a.nav-link").eq(3).removeClass("active");
            $("ul li a.nav-link").eq(0).removeClass("active");
            $("ul li a.nav-link").eq(5).removeClass("active");
        }
    });

    // slide for home
    $(window).ready(function () {
        $('.section-heading').addClass('fade-in');
        $('.section-text').addClass('fade-in');
    });

    $(window).scroll(function () {
        let height = $(this).scrollTop();

        if (height >= ($("#gallery").offset().top - 500)) {
            $('.card').eq(0).addClass('slide-bottom');
            $('.card').eq(1).addClass('slide-top').addClass('animation-delay-05');
            $('.card').eq(2).addClass('slide-bottom').addClass('animation-delay-07');
            $('.card').eq(3).addClass('slide-top').addClass('animation-delay-09');

        }

    });
});
