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
    $(".button-collapse").sideNav({closeOnClick: true});
    $(".scrollspy").scrollSpy();
    $('.modal-trigger').leanModal();
});
