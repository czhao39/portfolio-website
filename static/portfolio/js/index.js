$(document).ready(function() {
    $window = $(window);
    $navbar = $(".navbar");
    
    var height = Math.max(window.innerHeight, $(".intro-content").height()+330);
    
    $(".page-section").height(height);
    $("#skills").css("margin-top", height);
    $(".table-div").scrollLeft(($(".table-div table").width()-$(".table-div").width()) / 2);

    $(".typed").typed({
        strings: ["first", "second"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });
    
    particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json");
    
    $(".intro-content").velocity({top: 130, opacity: 1}, {duration: 1000}, {queue: false});

    $(".arrow-white").click(function() {
        $("body, html").animate({scrollTop: window.innerHeight - $navbar.height()});
    });

    $navbar.pushpin({top: 50});
    $window.scroll(function() {
        $navbar.css("background-color", "rgba(55, 71, 79, " + ($window.scrollTop()/50).toString() + ")");
    });
    $window.scroll();
    
    var sr = ScrollReveal();
    sr.reveal(".section", {duration: 1000});
    sr.reveal(".card", {duration: 1000});
});
