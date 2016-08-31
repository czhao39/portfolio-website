$(document).ready(function() {
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
        $("body, html").animate({scrollTop: window.innerHeight});
    });

    $window = $(window);
    $nav_wrapper = $(".nav-wrapper");
    $nav = $("nav");
    $page_title = $(".page-title");
    var is_dark = false;
    /*$window.scroll(function() {
        var pos = $window.scrollTop();
        if (pos == 0) {
            $nav_wrapper.velocity({backgroundColor: "#4db6ac"}, {duration: 200}).velocity({paddingTop: "10px"}, {queue: false});
            $nav.css("box-shadow", "none");
            if ($window.width() <= 375)
                $page_title.velocity({fontSize: "1.2rem"}, {queue: false});
            else if ($window.width() <= 640)
                $page_title.velocity({fontSize: "1.8rem"}, {queue: false});
            else 
                $page_title.velocity({fontSize: "2.5rem"}, {queue: false});
            is_dark = false;
        }
        else if (!is_dark) {
            $nav_wrapper.velocity({backgroundColor: "#00796b"}, {duration: 200}).velocity({paddingTop: "0"}, {queue: false});
            $nav.css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)");
            if ($window.width() <= 375)
                $page_title.velocity({fontSize: "1.1rem"}, {queue: false});
            else if ($window.width() <= 640)
                $page_title.velocity({fontSize: "1.6rem"}, {queue: false});
            else 
                $page_title.velocity({fontSize: "2rem"}, {queue: false});

            is_dark = true;
        }
    });
    $window.scroll();
    $window.resize(function() {$window.scroll();});*/

    var sr = ScrollReveal();
    sr.reveal(".section", {duration: 1000});
    sr.reveal("#skills tr", {duration: 1000});
    sr.reveal(".card", {duration: 1000});
});
