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

// Based on https://codepen.io/bassta/pen/bysgL
// Converts percentage to pixel value
// Used because greensock does not support percentage based animations
function percentToPixel(_elem, _perc){
    return (document.querySelector(_elem).parentElement.offsetWidth/100)* parseFloat(_perc);
}

function startAnim() {


    const masterTimeline = new TimelineMax({
        onComplete: function () {
            masterTimeline.restart();
        }
    });

    // Email animation
    masterTimeline.from('#email', 0.5, { opacity: 0, ease: Power1.easeIn, y: 300 });
    masterTimeline.staggerFrom('#TravelAgent, #TravelReservations', 0.2, { opacity: 0, ease: Power1.easeIn }, 0.1);
    masterTimeline.staggerFrom('.email-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.03);
    masterTimeline.from('#send-btn', 0.2, { opacity: 0, ease: Power1.easeIn });
    masterTimeline.from('#send-btn', 0.25, { filter: 'url(#dropshadow)' });
    masterTimeline.to('#send-btn', 0.25, { filter: 'url(#inset-shadow)', fill: '#3D83D5', ease: Power1.easeIn });
    masterTimeline.to('#send-btn', 0.25, { filter: 'url(#dropshadow)', fill: '#4A90E2', ease: Power1.easeOut });
    masterTimeline.to('#email', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1');

    // Itinerary 3 animation
    masterTimeline.from('#itinerary-3 .mock-text', 0.3, { width: 0, ease: Power1.easeIn }, 'itin3Anim')
    masterTimeline.from('.itinerary-3-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itin3Anim');
    masterTimeline.from('.itinerary-3-card', 1, { opacity: 0 }, 'itin3Anim');
    masterTimeline.from('#itinerary-3 #Button-3', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itin3Anim');
    masterTimeline.from('#itinerary-3 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)' });
    masterTimeline.to('#itinerary-3 #Rounded-Rectangle', 0.1, { filter: 'url(#inset-shadow)', fill: '#3F7F9A', scale: 0.99, ease: Power1.easeIn });
    masterTimeline.to('#itinerary-3 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)', fill: '#4C8CA7', scale: 1, ease: Power1.easeOut });
    masterTimeline.staggerTo('.itinerary-3-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itin3Anim+=2.2');
    masterTimeline.to('.itinerary-3-date', 1, { opacity: 0 }, 'itin3Anim+=2.2');
    masterTimeline.to('#itinerary-3 #Button-3', 1, { opacity: 0, backgroundColor: '#00FFFF', y: 500, ease: Power1.easeOut }, 'itin3Anim+=2.2');

    // Slack animation
    masterTimeline.from('#slack', 0.7, { opacity: 0, ease: Power1.easeIn, y: 400 });
    masterTimeline.staggerFrom('.slack-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeOut }, 0.02);
    masterTimeline.to('#slack', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1');

    // Itinerary 2 animation
    masterTimeline.from('#itinerary-2 .mock-text', 0.3, { width: 0, ease: Power1.easeIn }, 'itin2Anim')
    masterTimeline.from('.itinerary-2-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itin2Anim');
    masterTimeline.from('.itinerary-2-card', 1, { opacity: 0 }, 'itin2Anim');
    masterTimeline.from('#itinerary-2 #Button-2', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itin2Anim');
    masterTimeline.to('#itinerary-2 .has-error', 0.3, { opacity: 0, x: 500, ease: Power1.easeOut });
    masterTimeline.to('#itinerary-2 .has-error .warning-stripe', 0.0, { fill: '#7ED321' });
    masterTimeline.to('#itinerary-2 .has-error .warning-icon', 0.0, { opacity: 0 });
    masterTimeline.to('#itinerary-2 .has-error', 0.7, { opacity: 1, x: 0, ease: Elastic.easeInOut.config(1, 0.7) });
    masterTimeline.from('#itinerary-2 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)' });
    masterTimeline.to('#itinerary-2 #Rounded-Rectangle', 0.1, { filter: 'url(#inset-shadow)', fill: '#3F7F9A', scale: 0.99, ease: Power1.easeIn });
    masterTimeline.to('#itinerary-2 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)', fill: '#4C8CA7', scale: 1, ease: Power1.easeOut }, 'buttonPressed');
    masterTimeline.staggerTo('.itinerary-2-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, 'buttonPressed+=0.3');
    masterTimeline.to('.itinerary-2-date', 1, { opacity: 0 }, 'buttonPressed+=0.3');
    masterTimeline.to('#itinerary-2 #Button-2', 1, { opacity: 0, backgroundColor: '#00FFFF', y: 500, ease: Power1.easeOut }, 'buttonPressed+=0.3');

    // iPhone animation
    masterTimeline.to('#iPhone', .7, { opacity: 1, ease: Power1.easeOut, y: -700 });
    masterTimeline.staggerFrom('.phone-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.05);
    masterTimeline.to('#iPhone', 1, { opacity: 0, ease: Power1.easeOut, x: 700 }, '+=1');

    // Itinerary 1 animation
    masterTimeline.from('#itinerary-1 .mock-text', 0.3, { width: 0, ease: Power1.easeIn }, 'itinAnim')
    masterTimeline.from('.itinerary-1-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itinAnim');
    masterTimeline.from('.itinerary-1-card', 1, { opacity: 0 }, 'itinAnim');
    masterTimeline.from('#itinerary-1 #Button-1', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itinAnim');
    masterTimeline.from('#itinerary-1 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)' });
    masterTimeline.to('#itinerary-1 #Rounded-Rectangle', 0.1, { filter: 'url(#inset-shadow)', fill: '#3F7F9A', scale: 0.99, ease: Power1.easeIn });
    masterTimeline.to('#itinerary-1 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)', fill: '#4C8CA7', scale: 1, ease: Power1.easeOut });
    masterTimeline.staggerTo('.itinerary-1-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itinAnim+=2.2');
    masterTimeline.to('.itinerary-1-date', 1, { opacity: 0 }, 'itinAnim+=2.2');
    masterTimeline.to('#itinerary-1 #Button-1', 1, { opacity: 0, backgroundColor: '#00FFFF', y: 500, ease: Power1.easeOut }, 'itinAnim+=2.2');
    
    // Playback controls
    document.getElementById('animPause').addEventListener('click', function () {
        masterTimeline.paused(!masterTimeline.paused());
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

    // NLP Timeline
    const nlpTimeline = new TimelineMax({
        onComplete: function () {
            nlpTimeline.restart();
        }
    });

    // Ensures first screen of animation has correct z-indexing
    nlpTimeline.from('#nlp-airline', 0.0, {zIndex: 100});

    // NLP Airline
    nlpTimeline.from('#nlp-airline .channel-tools', 1, {opacity: 0, ease: Power1.easeOut});
    nlpTimeline.from('#nlp-airline .cursor-hand', 0.5, {x: percentToPixel('#nlp-airline', 100), y: percentToPixel('#nlp-airline', 25), ease: Power1.easeOut}, 'airlineHandShown');
    nlpTimeline.to('#nlp-airline', 1, {x: percentToPixel('#nlp-airline', 100), ease: Power1.easeIn}, 'airlineHandShown+=1');

    // NLP Hotel
    nlpTimeline.from('#nlp-hotel .channel-tools', 1, {opacity: 0, ease: Power1.easeOut});
    nlpTimeline.from('#nlp-hotel .cursor-hand', 0.5, {x: percentToPixel('#nlp-hotel', 100), y: percentToPixel('#nlp-hotel', 25), ease: Power1.easeOut}, 'hotelHandShown');
    nlpTimeline.to('#nlp-hotel', 1, {x: percentToPixel('#nlp-hotel', 100), ease: Power1.easeIn}, 'hotelHandShown+=1');

    // NLP OTA
    nlpTimeline.from('#nlp-ota .channel-tools', 1, {opacity: 0, ease: Power1.easeOut}, 'resetAnimationPoint');
    nlpTimeline.from('#nlp-ota .cursor-hand', 0.5, {x: percentToPixel('#nlp-ota', 100), y: percentToPixel('#nlp-ota', 25), ease: Power1.easeOut}, 'otaHandShown');
    nlpTimeline.to('#nlp-ota', 1, {x: percentToPixel('#nlp-ota', 100), ease: Power1.easeIn}, 'otaHandShown+=1');

    // Start reseting positions of first screen of timeline when NLP OTA animation begins
    nlpTimeline.to('#nlp-airline', 0.0, {x: 0, zIndex: 70}, 'resetAnimationPoint');
    nlpTimeline.to('#nlp-airline .channel-tools', 0.0, {opacity: 0}, 'resetAnimationPoint');

}
