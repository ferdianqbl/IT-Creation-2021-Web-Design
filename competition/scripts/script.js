$(document).ready(function () {
    // nav-burger
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler--nav").toggleClass("toggler-active");
    });

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

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
        $(".navbar-toggler--nav").removeClass("toggler-active");
    });


    // when navbar scroll
    let navbarCollapse = function () {
        if ($("#navbar").offset().top > 100)
            $("#navbar").addClass("nav-collapse");
        else
            $("#navbar").removeClass("nav-collapse");
    }

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
});
