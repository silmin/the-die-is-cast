$(window).scroll( function() {
    $(".animation").each( function() {
        var distanceY = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scrollPos > distanceY - windowHeight + 1100) {
            console.log({scrollPos, distanceY, windowHeight});
            $(this).addClass("active");
        }
    });
});