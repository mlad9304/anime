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
var timelineC; // cloud
var timelineC2; // cloud
var timelineC1; // cloud1
var timelineC12; // cloud1


var t35_lineTextH; // Text Header
var t35_lineTextB; // Text Body
var t35_lineTextF; // Text Footer
var t35_lineTextH_WithOffset; // Text Header
var t35_lineTextB_WithOffset; // Text Body
var t35_lineTextF_WithOffset; // Text Footer
var t35_lineText; // Text area
var t35_lineText2; // Text area reduce


function group35_animation() {
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
    }).add({
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

    timelineB2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
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
        duration: 1500,
        easing: 'easeInExpo',
        offset: 1000
    });

    timelineT1 = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
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
        duration: 2200,
        easing: 'easeOutExpo',
        offset: 800
    });

    timelineT12 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
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
        duration: 1700,
        easing: 'easeOutExpo',
        offset: 800
    });


    timelineT2 = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
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
        duration: 1600,
        easing: 'easeOutExpo',
        offset: 1400
    });

    timelineT22 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
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
        duration: 1200,
        easing: 'easeOutExpo',
        offset: 1300
    });

    timelineT3 = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
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
        duration: 1900,
        easing: 'easeOutExpo',
        offset: 1100
    });

    timelineT32 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
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
        duration: 1400,
        easing: 'easeOutExpo',
        offset: 1100
    });

    timelineT4 = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
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
        duration: 2200,
        easing: 'easeOutExpo',
        offset: 800
    });

    timelineT42 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
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
        duration: 1600,
        easing: 'easeOutExpo',
        offset: 900
    });

    timelineC = anime.timeline({
        loop: false,
        autoplay: true
    });

    timelineC2 = anime.timeline({
        loop: false,
        autoplay: false
    });

    timelineC1 = anime.timeline({
        loop: false,
        autoplay: true
    });

    timelineC12 = anime.timeline({
        loop: false,
        autoplay: false
    });
    
    var init_transX = [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 250];
    var init_transY = [250, 250, 250, 250, 250, 250, 250, 140, 250, 240, 300];
    var transX = [50, 10, 0, 90, 30, 190, 230, 290, 260, 270, 310];
    var transY = [10, 40, 120, 200, 230, 0, 90, 40, 100, 200, 230];
    var init_scale = [1/2, 1/20, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4];
    var init_rotate = [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80];
    var duration = [3000, 1800, 3000, 1800, 3000, 3000, 3000, 3000, 3000, 3000, 3000];
    
    timeline.add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        translateX: function(el, i) { return init_transX[i]; },
        translateY: function(el, i) { return init_transY[i]; },
        scale: function(el, i) { return init_scale[i]; },
        rotate: function(el, i) { return init_rotate[i]; },
        duration: 0
    }).add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        translateX: function(el, i) { return transX[i]; },
        translateY: function(el, i) { return transY[i]; },
        scale: 1,
        rotate: 0,
        easing: 'easeOutExpo',
        duration: function(el, i) { return duration[i]; },
    });
    
    var init_transX2 = [50, 10, 0, 90, 30, 190, 230, 290, 260, 270, 310];
    var init_transY2 = [10, 40, 120, 200, 230, 0, 90, 40, 100, 200, 230];
    var transX2 = [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 240];
    var transY2 = [250, 250, 250, 250, 250, 250, 250, 150, 250, 240, 300];
    var scale = [1/2, 1/10, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4];
    var rotate = [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80];
    var duration = [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500];
    
    timeline2.add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        translateX: function(el, i) { return init_transX2[i]; },
        translateY: function(el, i) { return init_transY2[i]; },
        rotate: 0,
        duration: 0
    }).add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        translateX: function(el, i) { return transX2[i]; },
        translateY: function(el, i) { return transY2[i]; },
        scale: function(el, i) { return scale[i]; },
        rotate: function(el, i) { return rotate[i]; },
        easing: 'easeInExpo',
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
        duration: 1200,
        easing: 'linear',
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
        duration: 500,
        easing: 'linear',
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 300,
        duration: 2000,
        easing: 'linear',
    });

    timelineC.add({
        targets: '#Group-58',
        translateX: 160,
        translateY: 120,
        duration: 0
    }).add({
        targets: '#Group-58',
        translateX: 30,
        translateY: 120,
        duration: 3000,
        easing: 'easeOutExpo',
    });

    timelineC2.add({
        targets: '#Group-58',
        translateX: 30,
        translateY: 120,
        duration: 0
    }).add({
        targets: '#Group-58',
        translateX: 185,
        translateY: 120,
        scale: 1/2,
        duration: 1200,
        easing: 'easeOutExpo',
        offset: 1300
    });

    timelineC1.add({
        targets: '#Group-60',
        translateX: 280,
        translateY: 190,
        duration: 0
    }).add({
        targets: '#Group-60',
        translateX: 480,
        translateY: 190,
        duration: 3000,
        easing: 'easeOutExpo',
    });

    timelineC12.add({
        targets: '#Group-60',
        translateX: 480,
        translateY: 190,
        duration: 0
    }).add({
        targets: '#Group-60',
        translateX: 280,
        translateY: 190,
        duration: 1200,
        easing: 'easeOutExpo',
        offset: 1300
    });
}

function group35_text_animation() {

    t35_lineTextH = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
        targets: '#text-content-group-35 .text-title',
        translateX: 0,
        translateY: -20,
        opacity: 0,
        duration: 0
    }).add({
        targets: '#text-content-group-35 .text-title',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo',
    });

    t35_lineTextB = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
        targets: '#text-content-group-35 .text-body',
        translateX: 0,
        translateY: 50,
        opacity: 0,
        duration: 0
    }).add({
        targets: '#text-content-group-35 .text-body',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 2000,
        easing: 'easeOutExpo',
    });

    t35_lineTextF = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
        targets: '#text-content-group-35 .text-bottom',
        translateX: 0,
        translateY: 20,
        opacity: 0,
        duration: 0
    }).add({
        targets: '#text-content-group-35 .text-bottom',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 800,
        easing: 'easeOutExpo',
        offset: 500
    });

    t35_lineTextH_WithOffset = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
        targets: '#text-content-group-35 .text-title',
        translateX: 0,
        translateY: -20,
        opacity: 0,
        duration: 0
    }).add({
        targets: '#text-content-group-35 .text-title',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo',
        offset: 1300,
    });

    t35_lineTextB_WithOffset = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
        targets: '#text-content-group-35 .text-body',
        translateX: 0,
        translateY: 50,
        opacity: 0,
        duration: 0
    }).add({
        targets: '#text-content-group-35 .text-body',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 2000,
        easing: 'easeOutExpo',
        offset: 1300,
    });

    t35_lineTextF_WithOffset = anime.timeline({
        loop: false,
        autoplay: true
    }).add({
        targets: '#text-content-group-35 .text-bottom',
        translateX: 0,
        translateY: 20,
        opacity: 0,
        duration: 0
    }).add({
        targets: '#text-content-group-35 .text-bottom',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 800,
        easing: 'easeOutExpo',
        offset: 1800
    });

    t35_lineText = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#text-content-group-35',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 0
    });

    t35_lineText2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#text-content-group-35',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 0
    }).add({
        targets: '#text-content-group-35',
        translateX: 0,
        translateY: -500,
        opacity: 0,
        duration: 2000,
        easing: 'easeInExpo',
    });
}

function group35_text_animation_start() {

    t35_lineText.restart();
    t35_lineTextH.restart();
    t35_lineTextB.restart();
    t35_lineTextF.restart();

}

function group35_text_animation_start_with_offset() {

    t35_lineText.restart();
    t35_lineTextH_WithOffset.restart();
    t35_lineTextB_WithOffset.restart();
    t35_lineTextF_WithOffset.restart();

}

function group35_text_animation_end() {
    t35_lineText2.restart();
}

function group35_animation_start() {
    timeline.restart();
    timelineS.restart();
    timelineB.restart();
    timelineT1.restart();
    timelineT2.restart();
    timelineT3.restart();
    timelineT4.restart();
    timelineC.restart();
    timelineC1.restart();
    
}

function group35_animation_end() {
    timeline2.restart();
    timelineS2.restart();
    timelineB2.restart();
    timelineT12.restart();
    timelineT22.restart();
    timelineT32.restart();
    timelineT42.restart();
    timelineC2.restart();
    timelineC12.restart();
    
}
