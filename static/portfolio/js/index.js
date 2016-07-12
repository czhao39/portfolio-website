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
    
    //$(".intro-content").fadeIn(1500).animate({top: 90}, {queue: false, duration: 1000});
    $(".intro-content").velocity({top: 90, opacity: 1}, {duration: 1000}, {queue: false});

    $(".button-collapse").sideNav({closeOnClick: true, menuWidth: 245});
    
    $(".scrollspy").scrollSpy();
    var sr = ScrollReveal();
    sr.reveal(".section", {duration: 1000});
    sr.reveal("#skills tr", {duration: 1000});
    sr.reveal(".card", {duration: 1500});
    
    $('.modal-trigger').leanModal();
});
