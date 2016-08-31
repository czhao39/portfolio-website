$(document).ready(function() {
    $(".typed").typed({
        strings: ["first", "second"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });
    
    particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json");
    
    $(".intro-content").velocity({top: 140, opacity: 1}, {duration: 1000}, {queue: false});

    $(".arrow-white").click(function() {
        $("body, html").animate({scrollTop: window.innerHeight});
    });

    $navbar = $(".navbar");
    $navbar.pushpin({top: 50});
    $window = $(window);
    $window.scroll(function() {
        $navbar.css("background-color", "rgba(69, 90, 100, " + ($window.scrollTop()/50).toString() + ")");
    });
    $window.scroll();
    
    var sr = ScrollReveal();
    sr.reveal(".section", {duration: 1000});
    sr.reveal("#skills tr", {duration: 1000});
    sr.reveal(".card", {duration: 1000});
});
