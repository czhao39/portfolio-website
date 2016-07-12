// todo: navbar initially part of summary section, then gradually become smaller when scrolling, then pushpin

$(document).ready(function() {
    $(".typed").typed({
        strings: ["first", "second"],
        typeSpeed: 20,
        backSpeed: 20,
        backDelay: 1000,
        loop: true,
    });
    
    particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json");
    
    $(".intro-content").fadeIn(1500).animate({top: 90}, {queue: false, duration: 1000});

    $(".button-collapse").sideNav({closeOnClick: true, menuWidth: 250});
    
    $(".scrollspy").scrollSpy();
    var sr = ScrollReveal();
    sr.reveal(".section");
    sr.reveal("#skills tr");
    sr.reveal(".card");
    
    $('.modal-trigger').leanModal();
});
