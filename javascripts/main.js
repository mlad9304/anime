var timeline = anime.timeline({
    loop: false,
    autoplay: true
});

var timeline1 = anime.timeline({
    loop: false,
    autoplay: false
});

timeline.add({
    targets: '#Group-41',
    translateX: 160,
    translateY: 250,
    scale: 1/2,
    rotate: -60,
    duration: 0
}).add({
    targets: '#Group-41',
    translateX: 50,
    translateY: 10,
    scale: {
        value: 1,
        duration: 2500
    },
    rotate: {
        value: 0,
        duration: 2500
    },
    easing: 'easeOutExpo',
    duration: 2500
});

timeline1.add({
    targets: '#Group-41',
    translateX: 50,
    translateY: 10,
    rotate: 0,
    duration: 0
}).add({
    targets: '#Group-41',
    translateX: 160,
    translateY: 250,
    scale: 1/2,
    rotate: {
        value: -60,
        duration: 2500
    },
    easing: 'easeInExpo',
    duration: 2500
});

document.getElementById("play1").onclick = function() {
    timeline.restart();
};

document.getElementById("play2").onclick = function() {
    
    timeline1.restart();
};
