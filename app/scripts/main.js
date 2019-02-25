

document.addEventListener("DOMContentLoaded", function () {
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

function itinAnim() {
    timelineMain.from('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, "itinAnim");
    timelineMain.from('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0 }, "itinAnim");
    timelineMain.from('#Rectangle-2, #BookNow', 0.5, { opacity: 0, ease: Power1.easeIn, y: 100 }, "itinAnim");
    timelineMain.staggerTo('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, "itinAnim+=2");
    timelineMain.to('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 1, { opacity: 0 }, "itinAnim+=2");
    timelineMain.to('#Rectangle-2, #BookNow', 1, { opacity: 0, ease: Power1.easeOut, y: 300 }, "itinAnim+=2");
};


timelineMain.to('#iPhone', .7, { opacity: 1, ease: Power1.easeOut, y: -700 });
// timelineMain.from('')
timelineMain.to('#iPhone', 1, { opacity: 0, ease: Power1.easeOut, x: 700 }, 2);
itinAnim();
timelineMain.from('#slack', 1, { opacity: 0, ease: Power1.easeIn, y: 400 });
timelineMain.to('#slack', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, "+=2");
timelineMain.from('#email', 0.5, {opacity: 0, ease: Power1.easeIn, y: 300} );
timelineMain.to('#email', 1, {opacity: 0, ease: Power1.easeOut, x: 300 }, "+=2");


document.getElementById('animStart').addEventListener('click', function () {
    timelineMain.restart()
})