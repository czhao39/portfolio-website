$(document).ready(function() {
    $window = $(window);
    $navbar = $(".navbar");
    
    var height = Math.max($window.height(), $(".intro-content").height()+330);
    
    $(".page-section").height(height);
    $("#skills").css("margin-top", height);

    $(".typed").typed({
        strings: ["web developer", "algorithmist", "roboticist", "inquirer"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });
    
    if ($window.width() <= 640)
        particlesJS.load("particles-js", "/static/portfolio/particlesjs-config-mobile.json");
    else
        particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json");
    
    $(".intro-content").velocity({top: 130, opacity: 1}, {duration: 600, complete: function() {
        $navbar.css("top", "-20px");
        $navbar.velocity({top: 0, opacity: 1}, {duration: 600});
        $(".down-btn").velocity({bottom: 0, opacity: 1}, {duration: 600});
    }});

    $("#intro .arrow").click(function() {
        $("html").velocity("scroll", {offset: height, duration: 400});
    });

    $navbar.pushpin({top: 50});
    $window.scroll(function() {
        $navbar.css("background-color", "rgba(55, 71, 79, " + ($window.scrollTop()/height).toString() + ")");
    });
    $window.scroll();
    
    var sr = ScrollReveal();
    sr.reveal("h2.center-align, .table-div, .card", {duration: 1000});
});
