$(document).ready(function() {
    $window = $(window);
    $navbar = $(".navbar");
    
    var height = Math.max($window.height(), $(".intro-content").height()+330);
    
    $(".page-section").height(height);
    $("#skills").css("margin-top", height+10);

    $(".typed").typed({
        strings: ["roboticist", "algorithmist", "web developer", "inquirer"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });
    
    if ($window.width() <= 640)
        particlesJS.load("particles-js", "/static/portfolio/js/particlesjs-config-mobile.json");
    else
        particlesJS.load("particles-js", "/static/portfolio/js/particlesjs-config.json");
    
    $(".intro-content").velocity({top: "25%", opacity: 1}, {duration: 900, complete: function() {
        $navbar.css("top", "-20px");
        $navbar.velocity({top: 0, opacity: 1}, {duration: 800});
        $(".down-btn").velocity({bottom: 0, opacity: 1}, {duration: 800});
    }});

    $("#intro .arrow").click(function() {
        $("html").velocity("scroll", {offset: height, duration: 400});
    });

    $navbar.pushpin({top: 50});
    $window.scroll(function() {
        $navbar.css("background-color", "rgba(55, 71, 79, " + ($window.scrollTop()/height).toString() + ")");
    });
    $window.scroll();

    var options = [
        {selector: "#skills h2.center-align", offset: 100, callback: underline},
        {selector: "#projects h2.center-align", offset: 100, callback: underline}
    ];
    Materialize.scrollFire(options);  // underline section titles on scroll into view

    var sr = ScrollReveal();
    sr.reveal(".table-div, .card", {viewFactor: 0.1, duration: 1000});
});

function underline(el) {
    $(el).addClass("underline");
}
