// todo: navbar initially part of summary section, then gradually become smaller when scrolling, then pushpin

$(document).ready(function() {
    $(".typed").typed({
        strings: ["first", "second"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true,
    });
    particlesJS.load("particles-js", "/static/portfolio/particlesjs-config.json");
    $(".button-collapse").sideNav();
});
