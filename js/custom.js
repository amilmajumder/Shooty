$(function () {

    // Preloader js    
    $(window).on('load', function () {
        $('.preloader').delay(1500).fadeOut(500);

    })
    
    $('.about-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2500,
    });

    //sticky menu js
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 80) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
        if (scrolling > 300) {
            $('.back-top').fadeIn(500);
        } else {

            $('.back-top').fadeOut(500);
        }
    });

    // background video
    jQuery(".player").YTPlayer();


    // back-top
    $('.back-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    //venoboxjs
    $('.venobox').venobox();

    //slider js
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        centerMode: true,
        centerPadding: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
    });

    //wow js
    new WOW().init();
    
    //counterup js
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });
    
});
