var timeline = anime.timeline({
    loop: false,
    autoplay: true
});

var timeline2 = anime.timeline({
    loop: false,
    autoplay: false
});

var translateX = [50, 0];
var translateY = [10, 0];
var scale = [1/2, 1/20];
var init_rotate = [-60, 0];
var rotate = [0, 0];
var duration = [3000, 1800];

timeline.add({
    targets: ['#Group-41', '#Fill-49'],
    translateX: 160,
    translateY: 250,
    scale: function(el, i) { return scale[i]; },
    rotate: function(el, i) { return init_rotate[i]; },
    duration: 0
}).add({
    targets: ['#Group-41', '#Fill-49'],
    translateX: function(el, i) { return translateX[i]; },
    translateY: function(el, i) { return translateY[i]; },
    scale: 1,
    rotate: function(el, i) { return rotate[i]; },
    easing: 'easeOutExpo',
    duration: function(el, i) { return duration[i]; },
});

var init_translateX2 = [50, 0];
var init_translateY2 = [10, 0];
var translateX2 = [160, 160];
var translateY2 = [250, 250];
var scale = [1/2, 1/10];
var rotate = [-60, 0];
var duration = [2500, 3000];

timeline2.add({
    targets: ['#Group-41', '#Fill-49'],
    translateX: function(el, i) { return init_translateX2[i]; },
    translateY: function(el, i) { return init_translateY2[i]; },
    rotate: 0,
    duration: 0
}).add({
    targets: ['#Group-41', '#Fill-49'],
    translateX: function(el, i) { return translateX2[i]; },
    translateY: function(el, i) { return translateY2[i]; },
    scale: function(el, i) { return scale[i]; },
    rotate: function(el, i) { return rotate[i]; },
    easing: 'easeInExpo',
    duration: function(el, i) { return duration[i]; },
});

document.getElementById("play1").onclick = function() {
    timeline.restart();
};

document.getElementById("play2").onclick = function() {
    
    timeline2.restart();
};
