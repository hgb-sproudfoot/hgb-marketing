


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


    const masterTimeline = new TimelineMax({
        onComplete: function () {
            masterTimeline.restart();
        }
    });





    // Email animation
    masterTimeline.from('#email', 0.5, { opacity: 0, ease: Power1.easeIn, y: 300 });
    masterTimeline.staggerFrom('#TravelAgent, #TravelReservations', 0.2, { opacity: 0, ease: Power1.easeIn }, 0.1);
    masterTimeline.staggerFrom('.email-mock-text', 0.15, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.03);
    masterTimeline.from('#send-btn', 0.2, { opacity: 0, ease: Power1.easeIn });
    masterTimeline.from('#send-btn', 0.25, { filter: "url(#dropshadow)" });
    masterTimeline.to('#send-btn', 0.1, { filter: "url(#inset-shadow)", fill: "#3D83D5", ease: Power1.easeIn });
    masterTimeline.to('#send-btn', 0.25, { filter: "url(#dropshadow)", fill: "#4A90E2", ease: Power1.easeOut });
    masterTimeline.to('#email', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1');

    // Itinerary 3 animation
    masterTimeline.from('#itinerary-3 .mock-text', 0.2, { width: 0, ease: Power1.easeIn }, 'itin3Anim')
    masterTimeline.from('.itinerary-3-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'iti32Anim');
    masterTimeline.from('.itinerary-3-card', 1, { opacity: 0 }, 'itin3Anim');
    masterTimeline.from('#itinerary-3 #Button-3', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itin3Anim');
    masterTimeline.from('#itinerary-3 #Rounded-Rectangle', 0.25, { filter: "url(#dropshadow)" });
    masterTimeline.to('#itinerary-3 #Rounded-Rectangle', 0.1, { filter: "url(#inset-shadow)", fill: "#3F7F9A", ease: Power1.easeIn });
    masterTimeline.to('#itinerary-3 #Rounded-Rectangle', 0.25, { filter: "url(#dropshadow)", fill: "#4C8CA7", ease: Power1.easeOut });
    masterTimeline.staggerTo('.itinerary-3-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itin3Anim+=2.2');
    masterTimeline.to('.itinerary-3-date', 1, { opacity: 0 }, 'itin3Anim+=2.2');
    masterTimeline.to('#itinerary-3 #Button-3', 1, { opacity: 0, backgroundColor: "#00FFFF", y: 500, ease: Power1.easeOut }, 'itin3Anim+=2.2');

    // iPhone animation
    masterTimeline.to('#iPhone', .7, { opacity: 1, ease: Power1.easeOut, y: -700 });
    masterTimeline.staggerFrom('.phone-mock-text', 0.5, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.05);
    masterTimeline.to('#iPhone', 1, { opacity: 0, ease: Power1.easeOut, x: 700 }, '+=1');

    // Itinerary 1 animation
    masterTimeline.from('#itinerary-1 .mock-text', 0.2, { width: 0, ease: Power1.easeIn }, 'itinAnim')
    masterTimeline.from('.itinerary-1-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itinAnim');
    masterTimeline.from('.itinerary-1-card', 1, { opacity: 0 }, 'itinAnim');
    masterTimeline.from('#itinerary-1 #Button-1', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itinAnim');
    masterTimeline.from('#itinerary-1 #Rounded-Rectangle', 0.25, { filter: "url(#dropshadow)" });
    masterTimeline.to('#itinerary-1 #Rounded-Rectangle', 0.1, { filter: "url(#inset-shadow)", fill: "#3F7F9A", ease: Power1.easeIn });
    masterTimeline.to('#itinerary-1 #Rounded-Rectangle', 0.25, { filter: "url(#dropshadow)", fill: "#4C8CA7", ease: Power1.easeOut });
    masterTimeline.staggerTo('.itinerary-1-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itinAnim+=2.2');
    masterTimeline.to('.itinerary-1-date', 1, { opacity: 0 }, 'itinAnim+=2.2');
    masterTimeline.to('#itinerary-1 #Button-1', 1, { opacity: 0, backgroundColor: "#00FFFF", y: 500, ease: Power1.easeOut }, 'itinAnim+=2.2');

    // Slack animation
    masterTimeline.from('#slack', 0.7, { opacity: 0, ease: Power1.easeIn, y: 400 });
    masterTimeline.staggerFrom('.slack-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeOut }, 0.02);
    masterTimeline.to('#slack', 1, { opacity: 0, ease: Power1.easeOut, x: 300 });

    // Itinerary 2 animation
    masterTimeline.from('#itinerary-2 .mock-text', 0.2, { width: 0, ease: Power1.easeIn }, 'itin2Anim')
    masterTimeline.from('.itinerary-2-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itin2Anim');
    masterTimeline.from('.itinerary-2-card', 1, { opacity: 0 }, 'itin2Anim');
    masterTimeline.from('#itinerary-2 #Button-2', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itin2Anim');
    masterTimeline.to('#itinerary-2 .has-error', 0.3, { opacity: 0, x: 500, ease: Power1.easeIn });
    masterTimeline.to('#itinerary-2 .has-error .warning-stripe', 0.0, { fill: '#7ED321' });
    masterTimeline.to('#itinerary-2 .has-error .warning-icon', 0.0, { opacity: 0 });
    masterTimeline.to('#itinerary-2 .has-error', 0.7, { opacity: 1, x: 0, ease: Elastic.easeInOut.config(1, 0.7) });
    masterTimeline.from('#itinerary-2 #Rounded-Rectangle', 0.25, { filter: "url(#dropshadow)" });
    masterTimeline.to('#itinerary-2 #Rounded-Rectangle', 0.1, { filter: "url(#inset-shadow)", fill: "#3F7F9A", ease: Power1.easeIn });
    masterTimeline.to('#itinerary-2 #Rounded-Rectangle', 0.25, { filter: "url(#dropshadow)", fill: "#4C8CA7", ease: Power1.easeOut });
    masterTimeline.staggerTo('.itinerary-2-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itin2Anim+=2.2');
    masterTimeline.to('.itinerary-2-date', 1, { opacity: 0 }, 'itin2Anim+=2.2');
    masterTimeline.to('#itinerary-2 #Button-2', 1, { opacity: 0, backgroundColor: "#00FFFF", y: 500, ease: Power1.easeOut }, 'itin2Anim+=2.2');
    
    
    document.getElementById('animPause').addEventListener('click', function () {
        masterTimeline.pause();
    });

    document.getElementById('animResume').addEventListener('click', function () {
        masterTimeline.resume();
    });

    document.getElementById('reverse').addEventListener('click', function () {
        masterTimeline.reversed(!masterTimeline.reversed());
    });

    document.getElementById('slowDown').addEventListener('click', function () {
        masterTimeline.timeScale(0.5);
    });

    document.getElementById('regular').addEventListener('click', function() {
        masterTimeline.timeScale(1);
    });

    document.getElementById('faster').addEventListener('click', function() {
        masterTimeline.timeScale(1.5);
    });

}
