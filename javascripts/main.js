group7_animation();
var timeline; // group 7 expand timeline
var timeline2; // group 7 reduce timeline
var timelineS; // Sun expand timeline
var timelineS2; // Sun reduce timeline
var timelineB; // background(Rock) expand timeline
var timelineB2; // background(Rock) reduce timeline
var timelineT1; // Tree1 expand
var timelineT12; // Tree1 reduce
var timelineT2; // Tree2 expand
var timelineT22; // Tree2 reduce
var timelineT3; // Tree3 expand
var timelineT32; // Tree3 reduce
var timelineT4; // Tree4 expand
var timelineT42; // Tree4 reduce

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

    timelineB2 = anime.timeline({
        loop: false,
        autoplay: false
    });

    timelineT1 = anime.timeline({
        loop: false,
        autoplay: true
    });

    timelineT12 = anime.timeline({
        loop: false,
        autoplay: false
    });

    timelineT2 = anime.timeline({
        loop: false,
        autoplay: true
    });

    timelineT22 = anime.timeline({
        loop: false,
        autoplay: false
    });

    timelineT3 = anime.timeline({
        loop: false,
        autoplay: true
    });

    timelineT32 = anime.timeline({
        loop: false,
        autoplay: false
    });

    timelineT4 = anime.timeline({
        loop: false,
        autoplay: true
    });

    timelineT42 = anime.timeline({
        loop: false,
        autoplay: false
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

    timelineB.add({
        targets: '#Group-59',
        scaleY: 0,
        translateX: 44,
        translateY: 171,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-59',
        scaleY: 1,
        translateX: 44,
        translateY: 171,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 0
    });

    timelineB2.add({
        targets: '#Group-59',
        scaleY: 1,
        translateX: 44,
        translateY: 171,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-59',
        scaleY: 0,
        translateX: 44,
        translateY: 171,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeInExpo',
        offset: 1000
    });

    timelineT1.add({
        targets: '#Group-55',
        scaleY: 0,
        translateX: 101,
        translateY: 182,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-55',
        scaleY: 1,
        translateX: 101,
        translateY: 182,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 800
    });

    timelineT12.add({
        targets: '#Group-55',
        scaleY: 1,
        translateX: 101,
        translateY: 182,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-55',
        scaleY: 0,
        translateX: 101,
        translateY: 182,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 800
    });

    timelineT2.add({
        targets: '#Group-52',
        scaleY: 0,
        translateX: 138,
        translateY: 91,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-52',
        scaleY: 1,
        translateX: 138,
        translateY: 91,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 1400
    });

    timelineT22.add({
        targets: '#Group-52',
        scaleY: 1,
        translateX: 138,
        translateY: 91,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-52',
        scaleY: 0,
        translateX: 138,
        translateY: 91,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 1300
    });

    timelineT3.add({
        targets: '#Group-53',
        scaleY: 0,
        translateX: 365,
        translateY: 142,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-53',
        scaleY: 1,
        translateX: 365,
        translateY: 142,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 1100
    });

    timelineT32.add({
        targets: '#Group-53',
        scaleY: 1,
        translateX: 365,
        translateY: 142,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-53',
        scaleY: 0,
        translateX: 365,
        translateY: 142,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 1100
    });

    timelineT4.add({
        targets: '#Group-56',
        scaleY: 0,
        translateX: 402,
        translateY: 111,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-56',
        scaleY: 1,
        translateX: 402,
        translateY: 111,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 800
    });

    timelineT42.add({
        targets: '#Group-56',
        scaleY: 1,
        translateX: 402,
        translateY: 111,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-56',
        scaleY: 0,
        translateX: 402,
        translateY: 111,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 900
    });
}

document.getElementById("play1").onclick = function() {
    timeline.restart();
    timelineS.restart();
    timelineB.restart();
    timelineT1.restart();
    timelineT2.restart();
    timelineT3.restart();
    timelineT4.restart();
};

document.getElementById("play2").onclick = function() {
    timeline2.restart();
    timelineS2.restart();
    timelineB2.restart();
    timelineT12.restart();
    timelineT22.restart();
    timelineT32.restart();
    timelineT42.restart();
};
