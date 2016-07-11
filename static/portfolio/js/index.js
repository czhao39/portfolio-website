$(document).ready(function() {
    $(".typed").typed({
        strings: ["first", "second"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true,
    });
    particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json", function() {
        console.log("particles loaded");
    });
    $(".button-collapse").sideNav();
});
