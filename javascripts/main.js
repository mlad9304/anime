// var cssSelector = anime({
//     targets: '#Group-41',
//     translateX: {
//         value: 50,
//         duration: 3800
//     },
//     translateY: {
//         value: 20,
//         duration: 3800,
//     },
//     // rotate: {
//     //     value: -50,
//     //     duration: 2200,
//     // },
//     // scale: {
//     //     value: 1/2,
//     //     duration: 2200,
//     // },

    
// });
document.getElementById('Group-41').setAttribute('transform', 'translate(151.000000, 110.000000)');

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
    translateY: 120,
    duration: 0,
    delay: 1000
}).add({
    targets: '#Group-41',
    translateX: 10,
    translateY: 20,
    easing: 'easeOutExpo',
    duration: 1000
});

timeline1.add({
    targets: '#Group-41',
    translateX: 10,
    translateY: 20,
    duration: 0
}).add({
    targets: '#Group-41',
    translateX: 150,
    translateY: 120,
    easing: 'easeInExpo',
    duration: 1000
});

document.getElementById("play1").onclick = function() {
    timeline.restart();
};

document.getElementById("play2").onclick = function() {
    
    timeline1.restart();
};
