$(document).ready(function() {
    $window = $(window);
    $navbar = $(".navbar");

    let height = Math.max($window.height(), $(".hero-content").height()+330);

    $(".page-section").height(height);
    $("#intro").css("margin-top", height);

    $(".typed").typed({
        strings: ["data scientist", "roboticist", "stock trader", "web developer"],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
    });

    let contentTop;
    if ($window.width() <= 640) {
        particlesJS.load("particles-js", "/static/portfolio/js/particlesjs-config-mobile.json");
        contentTop = "25%";
    } else {
        particlesJS.load("particles-js", "/static/portfolio/js/particlesjs-config.json");
        contentTop = "20%";
    }

    TweenLite.to($(".hero-content"), 0.9, {top: contentTop, opacity: 1, onComplete: function() {
        $navbar.css("top", "-20px");
        TweenLite.to($navbar, 0.8, {top: 0, opacity: 1});
        TweenLite.to($(".down-btn"), 0.8, {bottom: 0, opacity: 1});
    }});

    $(".modal").modal();
    $("#intro-modal").modal("open");

    $("#hero .arrow").click(function() {
        $("html, body").animate({scrollTop: height+"px"}, 500);
    });

    $navbar.pushpin({top: 46});
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

    let $rocket = $(".rocket > i");
    $rocket.click(function() {
        $rocket.addClass("activated");
        let dist = Math.min($window.height(), $window.width()) + 20;
        TweenLite.to($rocket, 0.8, {top: -dist, left: dist, ease: Power2.easeIn, onComplete: function() {
            $rocket.css("display", "none");
            Materialize.toast('Woah!', 2000, 'rounded');
        }});
    })
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
        TweenLite.to($el, 0.8, {width: the_width, ease: Power1.easeOut});
    });
}


const FANCY_LEN = 14000;
const MIN_OSC = 1;
var NUM_CIRCS;
var RADIUS;

var count;
var $circles;

function initialize_fancy() {
    if ($window.width() <= 992)
        NUM_CIRCS = 16;
    else
        NUM_CIRCS = 20;

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
            let period = FANCY_LEN / (MIN_OSC + ind);
            TweenMax.to(this, period / 2 / 1000, {attr: {cy: 20 - RADIUS}, fill: color, yoyo: true, ease: Sine.easeInOut, repeat: (MIN_OSC+ind) * 2 - 1, onComplete: cycle});
        });
    }
}
