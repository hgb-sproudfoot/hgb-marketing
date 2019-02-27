


document.addEventListener('DOMContentLoaded', function () {
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


    var masterTimeline = new TimelineMax({onComplete:function() {
        masterTimeline.restart();
        itinTimeLine.restart(true);
    }

    });

    var itinTimeLine = new TimelineMax({ // length: 3s
        delay: 4, repeatDelay: 4, repeat:2
    });


    var itinAnim =
    itinTimeLine.from('.itinerary-mock-text', 0.2, { width: 0, ease: Power1.easeIn }, 'itinAnim')
    itinTimeLine.from('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itinAnim');
    itinTimeLine.from('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0 }, 'itinAnim');
    itinTimeLine.from('#Rectangle-2, #BookNow', 0.5, { opacity: 0, ease: Power1.easeIn, y: 100 }, 'itinAnim');
    itinTimeLine.staggerTo('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itinAnim+=2');
    itinTimeLine.to('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 1, { opacity: 0 }, 'itinAnim+=2');
    itinTimeLine.to('#Rectangle-2, #BookNow', 1, { opacity: 0, ease: Power1.easeOut, y: 300 }, 'itinAnim+=2');
    

    masterTimeline.to('#iPhone', .7, { opacity: 1, ease: Power1.easeOut, y: -700 });
    masterTimeline.staggerFrom('.phone-mock-text', 0.5, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.05);
    masterTimeline.to('#iPhone', 1, { opacity: 0, ease: Power1.easeOut, x: 700 }, '+=1');
    itinAnim.play();
    masterTimeline.from('#slack', 0.7, { opacity: 0, ease: Power1.easeIn, y: 400 }, '+=3.5');
    masterTimeline.staggerFrom('.slack-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeOut }, 0.02);    
    masterTimeline.to('#slack', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1.3');  
    masterTimeline.from('#email', 0.5, { opacity: 0, ease: Power1.easeIn, y: 300 }, '+=3.5');
    masterTimeline.staggerFrom('#TravelAgent, #TravelReservations', 0.2, { opacity: 0, ease: Power1.easeIn }, 0.1);
    masterTimeline.staggerFrom('.email-mock-text', 0.15, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.03);
    masterTimeline.from('#send-btn', 0.2, { opacity: 0, ease: Power1.easeIn });
    masterTimeline.to('#email', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1');
    masterTimeline.to('#quinn-delay-hack', 4, {opacity: 0, ease: Power1.easeOut});



    document.getElementById('animPause').addEventListener('click', function () {
        masterTimeline.pause();
        itinTimeLine.pause(); 
    });

    document.getElementById('animResume').addEventListener('click', function () {
        masterTimeline.resume();
        itinTimeLine.resume();
    });
}
