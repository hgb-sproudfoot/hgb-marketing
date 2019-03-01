


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


    // const masterTimeline = new TimelineMax({onComplete:function() {
    //     masterTimeline.restart();
    //     itinTimeline.restart(true);
    // }

    // });

    // const itinTimeline = new TimelineMax({ // length: 3s
    //     delay: 4, repeatDelay: 4, repeat:2
    // });

    // itinTimeline.from('.itinerary-mock-text', 0.2, { width: 0, ease: Power1.easeIn }, 'itinAnim')
    // itinTimeline.from('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itinAnim');
    // itinTimeline.from('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0 }, 'itinAnim');
    // itinTimeline.from('#Rectangle-2, #BookNow', 0.5, { opacity: 0, ease: Power1.easeIn, y: 100 }, 'itinAnim');
    // itinTimeline.from('#Rectangle-2', 0.25, { filter: "url(#dropshadow)"});
    // itinTimeline.to('#Rectangle-2', 0.1, {filter: "url(#inset-shadow)", fill: "#3F7F9A" , ease: Power1.easeIn});
    // itinTimeline.to('#Rectangle-2', 0.25, {filter: "url(#dropshadow)", fill: "#4C8CA7", ease: Power1.easeOut});
    // itinTimeline.staggerTo('#Group-7, #Group-5, #Group-4, #Group-5-Copy', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itinAnim+=2.2');
    // itinTimeline.to('#itinerary-path-7, #Line-Copy-3, #itinerary-path-22, #Line-Copy-4, .itinerary-date', 1, { opacity: 0 }, 'itinAnim+=2.2');
    // itinTimeline.to('#Rectangle-2, #BookNow', 1, { opacity: 0, backgroundColor: "#00FFFF", ease: Power1.easeOut, y: 300 }, 'itinAnim+=2.2');
    

    // masterTimeline.to('#iPhone', .7, { opacity: 1, ease: Power1.easeOut, y: -700 });
    // masterTimeline.staggerFrom('.phone-mock-text', 0.5, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.05);
    // masterTimeline.to('#iPhone', 1, { opacity: 0, ease: Power1.easeOut, x: 700 }, '+=1');
    // masterTimeline.from('#slack', 0.7, { opacity: 0, ease: Power1.easeIn, y: 400 }, '+=3.8');
    // masterTimeline.staggerFrom('.slack-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeOut }, 0.02);    
    // masterTimeline.to('#slack', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1.3');  
    // masterTimeline.from('#email', 0.5, { opacity: 0, ease: Power1.easeIn, y: 300 }, '+=3.8');
    // masterTimeline.staggerFrom('#TravelAgent, #TravelReservations', 0.2, { opacity: 0, ease: Power1.easeIn }, 0.1);
    // masterTimeline.staggerFrom('.email-mock-text', 0.15, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.03);
    // masterTimeline.from('#send-btn', 0.2, { opacity: 0, ease: Power1.easeIn });
    // masterTimeline.to('#email', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1');
    // masterTimeline.to('#quinn-delay-hack', 4.5, {opacity: 0, ease: Power1.easeOut});



    document.getElementById('animPause').addEventListener('click', function () {
        masterTimeline.pause();
        itinTimeline.pause(); 
    });

    document.getElementById('animResume').addEventListener('click', function () {
        masterTimeline.resume();
        itinTimeline.resume();
    });

    typer('text')
        .line('helloGbye');
}
