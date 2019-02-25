

document.addEventListener("DOMContentLoaded", function(){
    var pathEls = document.querySelectorAll('svg .circuit-wire path');
    pathEls.forEach((path, index) => {
        var offset = anime.setDashoffset(path);
        path.setAttribute('stroke-dashoffset', offset);
        anime({
            targets: path,
            strokeDashoffset: [offset, 0],
            duration: anime.random(500, 1000),
            delay: anime.random(0, 100),
            direction: 'normal',
            easing: 'easeInOutSine',
            autoplay: true
        });
    });
})

var timelineMain = new TimelineMax({

});

timelineMain.to('#iPhone', .7, {opacity: 1, ease: Power1.easeOut, y: -750 });
timelineMain.to('#iPhone', 1, {opacity: 0, ease: Power1.easeOut, x: 700}, 2);
timelineMain.from('#date-card', .5, {opacity: 0, ease: Power1.easeIn, x: -300}, "itinAnim");
timelineMain.from('#pax-card, #flight-card, #hotel-card', 1, {opacity: 0 }, "itinAnim");
timelineMain.from('#book-btn', .5, {opacity: 0, ease: Power1.easeIn, y: 100}, "itinAnim");
timelineMain.staggerTo('#pax-card, #flight-card, #hotel-card', 1, {opacity: 0, ease: Power1.easeOut, x: 300}, .05, "itinAnim+=2");
timelineMain.to('#date-card', 1, {opacity: 0}, "itinAnim+=2");
timelineMain.to('#book-btn', 1, {opacity: 0, ease: Power1.easeOut, y: 300}, "itinAnim+=2");


document.getElementById('animStart').addEventListener('click', function() {
    timelineMain.restart()
})