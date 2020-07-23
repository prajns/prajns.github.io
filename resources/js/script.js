$(document).ready(function() {

    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').removeClass("animate__slideOutUp").addClass('sticky animate__slideInDown');
        } else {
            $('nav').removeClass('animate__slideInDown').addClass("animate__slideOutUp");
        }
    }, {
      offset: '60px;'
    });

    $('.js--scroll-header').click(function () {
        $('html, body').animate({scrollTop: $('header').offset().top}, 1000); 
    });

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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
    });

    $(".card").mouseenter(function() {

        $( this ).find('.card-img-top').addClass('animate__zoomOut');
        $( this ).find('.card-body').removeClass('animate__zoomOut').addClass('animate__zoomIn').css('display', 'flex');

    }).mouseleave(function() {
        $( this ).find('.card-body').addClass('animate__zoomOut');

        $( this ).find('.card-img-top').removeClass('animate__zoomOut').addClass('animate__zoomIn');

    });

    $('[data-toggle="tooltip"]').tooltip();

    /* Animations on scroll */
    $('.js--wp-0a').waypoint(function(direction) {
        $('.js--wp-0a').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '70%'
    });
    $('.js--wp-0b').waypoint(function(direction) {
        $('.js--wp-0b').addClass('animate__animated animate__fadeInRightBig');
    }, {
        offset: '70%'
    });

    $('.js--wp-1a').waypoint(function(direction) {
        $('.js--wp-1a').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '65%'
    });

    $('.js--wp-1b').waypoint(function(direction) {
        $('.js--wp-1b').addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '65%'
    });

    $('.js--wp-2a').waypoint(function(direction) {
        $('.js--wp-2a').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '68%'
    });

    $('.js--wp-2b').waypoint(function(direction) {
        $('.js--wp-2b').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '68%'
    });

    $('.js--wp-3a').waypoint(function(direction) {
        $('.js--wp-3a').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '65%'
    });

    $('.js--wp-3b').waypoint(function(direction) {
        $('.js--wp-3b').addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '65%'
    });

    $('.js--wp-4a').waypoint(function(direction) {
        $('.js--wp-4a').addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--wp-4b').waypoint(function(direction) {
        $('.js--wp-4b').addClass('animate__animated animate__fadeInLeftBig');
    }, {
        offset: '60%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-5a').waypoint(function(direction) {
        $('.progress-bar-label span').addClass('animate__animated animate__fadeIn');
        setTimeout(function(){ 
            $('.progress-bar-js').width('50%');
            $('.progress-bar-html').width('55%');
            $('.progress-bar-css').width('60%');
            $('.progress-bar-angular').width('30%');
            $('.progress-bar-bootstrap').width('62%');
            $('.progress-bar-mysql').width('55%');
            $('.progress-bar-nodejs').width('20%');
            $('.progress-bar-git').width('30%');
            $('.progress-bar-ux').width('45%');
            $('.progress-bar-ps').width('50%');
            $('.progress-bar-il').width('35%');
        }, 500);
    }, {
        offset: '55%'
    });

    $('.js--wp-5b').waypoint(function(direction) {
        $('.js--wp-5b').addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js--wp-6a').waypoint(function(direction) {
        $('.js--wp-6a').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '70%'
    });

    $('.js--wp-6b').waypoint(function(direction) {
        $('.js--wp-6b').addClass('animate__animated animate__fadeInRightBig');
    }, {
        offset: '75%'
    });

    $('.js--wp-7a').waypoint(function(direction) {
        $('.js--wp-7a').addClass('animate__animated animate__slideInUp');
    }, {
        offset: '70%'
    });

    $('.js--wp-7b').waypoint(function(direction) {
        $('.js--wp-7b').addClass('animate__animated animate__slideInUp');
    }, {
        offset: '71%'
    });

    $('.js--wp-7c').waypoint(function(direction) {
        $('.js--wp-7c').addClass('animate__animated animate__slideInUp');
    }, {
        offset: '72%'
    });

    $('.js--wp-9a').waypoint(function(direction) {
        $('.js--wp-9a').addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '80%'
    });

    $('.js--wp-9b').waypoint(function(direction) {
        $('.js--wp-9b').addClass('animate__animated animate__fadeInLeftBig');
    }, {
        offset: '80%'
    });

    $('.js--wp-10').waypoint(function(direction) {
        $('.js--wp-10').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '78%'
    });

    $('.js--wp-11').waypoint(function(direction) {
        $('.js--wp-11').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '78%'
    });

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-angle-up');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-angle-up');
        }        
    });

    $(".progress").mouseenter(function() {

        const logo = $(this).attr('data-logo');
        $( '#skill-image' ).addClass('animate__flip').css('background-image', `url('resources/img/logos/${logo}.svg')`);

    }).mouseleave(function() {
        $( '#skill-image' ).removeClass('animate__flip');
    });

});