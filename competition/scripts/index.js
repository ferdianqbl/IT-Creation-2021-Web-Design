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
});
