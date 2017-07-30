$(document).ready(function() {
    $window = $(window);
    $navbar = $(".navbar");

    let height = Math.max($window.height(), $(".intro-content").height()+330);

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

    let options = [
        {selector: "#skills h2.center-align", offset: 100, callback: underline},
        {selector: "#projects h2.center-align", offset: 100, callback: underline},
        {selector: "#skills .table-div", offset: 100, callback: loadProgress}
    ];
    Materialize.scrollFire(options);  // underline section titles on scroll into view

    let sr = ScrollReveal();
    sr.reveal(".card", {viewFactor: 0.1, duration: 1000});

    initialize_fancy();
});

function underline(el) {
    $(el).addClass("underline");
}

function loadProgress() {
    $("#skills .determinate").each(function() {
        let the_width = this.style.width;
        let $el = $(this);
        $el.width(0);
        $el.css("visibility", "visible");
        $el.velocity({width: the_width}, {duration: 1000, easing: "easeOutCubic"});
    });
}


const FANCY_LEN = 10000;
const MIN_OSC = 1;
var NUM_CIRCS;
var RADIUS;

var count;
var $circles;

function initialize_fancy() {
    if ($window.width() <= 992)
        NUM_CIRCS = 10;
    else
        NUM_CIRCS = 12;

    let fancy_animation = document.getElementById("fancy-animation");
    RADIUS = 100 / (3 * NUM_CIRCS - 1);
    for (let i=0; i<NUM_CIRCS; i++) {
        let circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circ.setAttribute("cx", RADIUS + RADIUS*3*i);
        circ.setAttribute("cy", RADIUS);
        circ.setAttribute("r", RADIUS);
        fancy_animation.appendChild(circ);
    }

    $circles = $("#fancy-animation circle");
    count = NUM_CIRCS;
    cycle();
};

function cycle() {
    count++;
    if (count >= NUM_CIRCS) {
        count = 0;
        let r = (155 + Math.round(Math.random()*100)).toString(16);
        if (r.length === 1) r = "0" + r;
        let g = (Math.round(Math.random()*200)).toString(16);
        if (g.length === 1) g = "0" + g;
        let b = (Math.round(Math.random()*200)).toString(16);
        if (b.length === 1) b = "0" + b;
        let color = "#" + r + g + b;
        $circles.each(function(ind) {
            $(this).velocity({cy: 20 - RADIUS, fill: color}, {duration: FANCY_LEN/(MIN_OSC+ind)/2.0, loop: MIN_OSC+ind, complete: cycle});
        });
    }
}
