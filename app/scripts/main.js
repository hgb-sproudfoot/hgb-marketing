

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

window.onload = startAnim();

function startAnim() {
    var timelineMain = new TimelineMax({
        repeat: -1
    });
    
    var itinTimeLine = new TimelineMax({
        delay: 4, repeat: -1, repeatDelay: 4.5
    });

        
    function itinAnim() {
        itinTimeLine.from('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, "itinAnim");
        itinTimeLine.from('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0 }, "itinAnim");
        itinTimeLine.from('#Rectangle-2, #BookNow', 0.5, { opacity: 0, ease: Power1.easeIn, y: 100 }, "itinAnim");
        itinTimeLine.staggerTo('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, "itinAnim+=2");
        itinTimeLine.to('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 1, { opacity: 0 }, "itinAnim+=2");
        itinTimeLine.to('#Rectangle-2, #BookNow', 1, { opacity: 0, ease: Power1.easeOut, y: 300 }, "itinAnim+=2");
    }


    timelineMain.to('#iPhone', .7, { opacity: 1, ease: Power1.easeOut, y: -700 });
    timelineMain.to('#iPhone', 1, { opacity: 0, ease: Power1.easeOut, x: 700 }, "+=2");
    itinAnim();
    timelineMain.from('#slack', 0.7, { opacity: 0, ease: Power1.easeIn, y: 400 }, "+=4");
    timelineMain.to('#slack', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, "+=2");
    itinTimeLine.restart(true);
    timelineMain.from('#email', 0.5, { opacity: 0, ease: Power1.easeIn, y: 300 }, "+=4");
    timelineMain.staggerFrom('#TravelAgent, #TravelReservations', 0.2, { opacity: 0, ease: Power1.easeIn}, 0.1);
    timelineMain.staggerFrom('.email-mock-text', 0.15, {opacity: 0, width: 0, ease: Power1.easeIn}, 0.05);
    timelineMain.to('#email', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, "+=1");
    itinTimeLine.restart(true);
    timelineMain.to("#quinn-delay-hack", 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, "+=3");


    document.getElementById('animPause').addEventListener('click', function () {
        timelineMain.pause();
        itinTimeLine.pause();
    });

    document.getElementById('animResume').addEventListener('click', function () {
        timelineMain.resume();
        itinTimeLine.resume();
    });
 

}