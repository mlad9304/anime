group7_animation();
var timeline; // group 7 expand timeline
var timeline2; // group 7 reduce timeline
var timelineS; // Sun expand timeline
var timelineS2; // Sun reduce timeline
var timelineB; // background timeline

function group7_animation() {
    timeline = anime.timeline({
        loop: false,
        autoplay: true
    });
    
    timeline2 = anime.timeline({
        loop: false,
        autoplay: false
    });

    timelineS = anime.timeline({
        loop: false,
        autoplay: true
    });

    timelineS2 = anime.timeline({
        loop: false,
        autoplay: false
    });

    timelineB = anime.timeline({
        loop: false,
        autoplay: true
    });
    
    var init_transX = [160, 160, 160, 160, 160, 160, 160, 180, 260, 200, 250];
    var init_transY = [250, 250, 250, 250, 250, 250, 250, 140, 250, 250, 300];
    var transX = [50, 0, 0, 90, 30, 190, 230, 290, 260, 10, 310];
    var transY = [10, 0, 120, 200, 230, 0, 90, 40, 100, 5, 230];
    var init_scale = [1/2, 1/20, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4];
    var init_rotate = [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80];
    var duration = [3000, 1800, 3000, 1800, 3000, 3000, 3000, 3000, 3000, 3000, 3000];
    
    timeline.add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Fill-43', '#Group-50'],
        translateX: function(el, i) { return init_transX[i]; },
        translateY: function(el, i) { return init_transY[i]; },
        scale: function(el, i) { return init_scale[i]; },
        rotate: function(el, i) { return init_rotate[i]; },
        duration: 0
    }).add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Fill-43', '#Group-50'],
        translateX: function(el, i) { return transX[i]; },
        translateY: function(el, i) { return transY[i]; },
        scale: 1,
        rotate: 0,
        easing: 'easeOutExpo',
        duration: function(el, i) { return duration[i]; },
    });

    timelineS.add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 120,
        duration: 0
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 10,
        duration: 800,
        easing: 'easeOutExpo',
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 60,
        duration: 1000,
        easing: 'linear',
    });


    
    var init_transX2 = [50, 0, 0, 90, 30, 190, 230, 290, 260, 10, 310];
    var init_transY2 = [10, 0, 120, 200, 230, 0, 90, 40, 100, 5, 230];
    var transX2 = [160, 160, 160, 160, 160, 160, 160, 180, 260, 200, 250];
    var transY2 = [250, 250, 250, 250, 250, 250, 250, 140, 250, 250, 300];
    var scale = [1/2, 1/10, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4];
    var rotate = [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80];
    var duration = [2500, 3000, 2500, 3000, 2500, 2500, 2500, 2500, 2500, 2500, 2500];
    
    timeline2.add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Fill-43', '#Group-50'],
        translateX: function(el, i) { return init_transX2[i]; },
        translateY: function(el, i) { return init_transY2[i]; },
        rotate: 0,
        duration: 0
    }).add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Fill-43', '#Group-50'],
        translateX: function(el, i) { return transX2[i]; },
        translateY: function(el, i) { return transY2[i]; },
        scale: function(el, i) { return scale[i]; },
        rotate: function(el, i) { return rotate[i]; },
        easing: 'easeInExpo',
        duration: function(el, i) { return duration[i]; },
    });

    timelineS2.add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 60,
        duration: 0
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 10,
        duration: 1800,
        easing: 'linear',
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 120,
        duration: 1200,
        easing: 'easeOutExpo',
    });
}

document.getElementById("play1").onclick = function() {
    timeline.restart();
    timelineS.restart();
};

document.getElementById("play2").onclick = function() {
    timeline2.restart();
    timelineS2.restart();
};
