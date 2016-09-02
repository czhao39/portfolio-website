$(document).ready(function() {
    $window = $(window);
    $navbar = $(".navbar");
    
    var height = Math.max($window.height(), $(".intro-content").height()+330);
    
    $(".page-section").height(height);
    $("#skills").css("margin-top", height);

    $(".typed").typed({
        strings: ["full-stack developer", "algorithmist", "roboticist", "stock trader", "inquirer"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });
    
    particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json");
    
    $(".navbar").velocity({top: 0, opacity: 1}, {duration: 600, complete: function() { $(".intro-content").velocity({top: 130, opacity: 1}, {duration: 600}); }});
    // simultaneous animation
    // $(".navbar").velocity({top: 0, opacity: 1}, {duration: 600});
    // $(".intro-content").velocity({top: 130, opacity: 1}, {duration: 600});


    $("#intro .arrow").click(function() {
        $("body, html").animate({scrollTop: height});
    });

    $navbar.pushpin({top: 50});
    $window.scroll(function() {
        $navbar.css("background-color", "rgba(55, 71, 79, " + ($window.scrollTop()/50).toString() + ")");
    });
    $window.scroll();
    
    var sr = ScrollReveal();
    sr.reveal("h2.center-align, .table-div, .card", {duration: 1000});
});
