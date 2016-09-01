$(document).ready(function() {
    $window = $(window);
    $navbar = $(".navbar");
    
    var height = Math.max($window.height(), $(".intro-content").height()+330);
    
    $(".page-section").height(height);
    $("#skills").css("margin-top", height-50);
    $(".table-div").scrollLeft(($(".table-div table").width()-$(".table-div").width()) / 2);

    $(".typed").typed({
        strings: ["full-stack developer", "algorithmist", "roboticist", "stock trader", "inquirer"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });
    
    particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json");
    
    $(".intro-content").velocity({top: 130, opacity: 1}, {duration: 1000}, {queue: false});

    $("#intro .arrow").click(function() {
        $("body, html").animate({scrollTop: height-50});
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
