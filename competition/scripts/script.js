$(document).ready(function () {
    // nav-burger
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler--nav").toggleClass("toggler-active");
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
