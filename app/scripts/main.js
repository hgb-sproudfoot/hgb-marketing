

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

timelineMain.to('#iPhone', 1, {opacity: 1, ease: Power1.easeOut, y: -700 });
timelineMain.to('#iPhone', 1, {opacity: 0, ease: Power1.easeOut, x: 500}, 2);

document.getElementById('animStart').addEventListener('click', function() {
    timelineMain.restart()
})