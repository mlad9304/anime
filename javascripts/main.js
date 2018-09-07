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
    translateX: 150,
    translateY: 170,
    scale: 1/2,
    rotate: -50,
    duration: 0
}).add({
    targets: '#Group-41',
    translateX: 50,
    translateY: 0,
    scale: {
        value: 1,
        duration: 2500
    },
    rotate: {
        value: 20,
        duration: 2500
    },
    easing: 'easeOutExpo',
    duration: 2500
});

timeline1.add({
    targets: '#Group-41',
    translateX: 50,
    translateY: 0,
    rotate: 20,
    duration: 0
}).add({
    targets: '#Group-41',
    translateX: 150,
    translateY: 170,
    scale: 1/2,
    rotate: -50,
    easing: 'easeInExpo',
    duration: 2500
});

document.getElementById("play1").onclick = function() {
    timeline.restart();
};

document.getElementById("play2").onclick = function() {
    
    timeline1.restart();
};
