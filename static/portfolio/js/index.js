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
    
    $(".intro-content").velocity({top: 90, opacity: 1}, {duration: 1000}, {queue: false});

    $(".button-collapse").sideNav({closeOnClick: true, menuWidth: 245});
    
    $window = $(window);
    $nav_wrapper = $(".nav-wrapper");
    $nav = $("nav");
    var is_dark = false;
    $window.scroll(function() {
        var pos = $window.scrollTop();
        if (pos == 0) {
            $nav_wrapper.velocity({backgroundColor: "#4db6ac"}, {duration: 400});
            $nav.css("box-shadow", "none");
            is_dark = false;
        }
        else if (!is_dark) {
            $nav_wrapper.velocity({backgroundColor: "#00796b"}, {duration: 400});
            $nav.css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)");
            is_dark = true;
        }
    });

    $(".scrollspy").scrollSpy();
    var sr = ScrollReveal();
    sr.reveal(".section", {duration: 1000});
    sr.reveal("#skills tr", {duration: 1000});
    sr.reveal(".card", {duration: 1000});
    
    $('.modal-trigger').leanModal();
});
