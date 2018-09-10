var t37_lineTextH; // Text Header
var t37_lineTextB; // Text Body
var t37_lineTextF; // Text Footer
var t37_lineText; // Text area expand
var t37_lineText2; // Text area reduce

var t37_line; // Group 7
var t37_line2;
var t37_lineB; // background(Rock) expand timeline
var t37_lineB2; // background(Rock) reduce timeline
var t37_lineT1; // Tree 1
var t37_lineT12;
var t37_lineT2; // Tree 2
var t37_lineT22;
var t37_lineT3; // Tree 3
var t37_lineT32;
var t37_lineBri; // Bridge 
var t37_lineBri2;
var t37_lineC; // Cloud
var t37_lineC2;
var t37_lineBird; // Birds
var t37_lineBird2;
var t37_lineBear; // Bear
var t37_lineBear2;

function group37_animation() {

    var init_transX = [160, 110, 150, 140, 120, 160, 180, 220, 260, 184];
    var init_transY = [180, 240, 240, 220, 220, 240, 200, 220, 220, 120];
    var transX = [99, 26, 30, 113, 36, 216, 239, 265, 302, 184];
    var transY = [8, 52, 100, 148, 207, 0, 103, 194, 204, 56];
    var init_scale = [1/4, 1/4, 1/3, 1/4, 1/4, 1/3, 1/4, 1/4, 1/4, 1/4];
    var init_rotate = [150, 150, 100, 0, 60, -50, -100, 0, -120, 0];
    var rotate = [0, 0, 45, 0, 0, 0, 0, 0, 0, 0];
    var duration = [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000];

    t37_line = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        translateX: function(el, i) { return init_transX[i]; },
        translateY: function(el, i) { return init_transY[i]; },
        scale: function(el, i) { return init_scale[i]; },
        rotate: function(el, i) { return init_rotate[i]; },
        opacity: 0,
        duration: 0
    }).add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        translateX: function(el, i) { return transX[i]; },
        translateY: function(el, i) { return transY[i]; },
        scale: 1,
        opacity: 1,
        rotate: function(el, i) { return rotate[i]; },
        easing: 'easeOutExpo',
        duration: function(el, i) { return duration[i]; },
        offset: 2500
    });

    var init_transX2 = [99, 26, 30, 113, 36, 216, 239, 265, 302, 184];
    var init_transY2 = [8, 52, 100, 148, 207, 0, 103, 194, 204, 56];
    var transX2 = [160, 110, 150, 140, 120, 160, 180, 220, 260, 184];
    var transY2 = [180, 240, 240, 220, 220, 240, 200, 220, 220, 120];
    var scale = [1/4, 1/4, 1/3, 1/4, 1/4, 1/3, 1/4, 1/4, 1/4, 1/4];
    var init_rotate = [0, 0, 45, 0, 0, 0, 0, 0, 0, 0];
    var rotate = [150, 150, 100, 0, 60, -50, -100, 0, -120, 0];
    var duration = [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500];
    
    t37_line2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        opacity: 0,
        duration: 0
    }).add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        translateX: function(el, i) { return init_transX2[i]; },
        translateY: function(el, i) { return init_transY2[i]; },
        rotate: function(el, i) { return init_rotate[i]; },
        opacity: 1,
        duration: 0
    }).add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        translateX: function(el, i) { return transX2[i]; },
        translateY: function(el, i) { return transY2[i]; },
        scale: function(el, i) { return scale[i]; },
        rotate: function(el, i) { return rotate[i]; },
        opacity: 0,
        easing: 'easeInExpo',
        duration: function(el, i) { return duration[i]; },
    });



    t37_lineB = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-85',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-85',
        scaleY: 0,
        opacity: 1,
        translateX: 0,
        translateY: 134,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-85',
        scaleY: 1,
        translateX: 0,
        translateY: 134,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 2500
    });

    t37_lineB2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-85',
        scaleY: 1,
        translateX: 0,
        translateY: 134,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-85',
        scaleY: 0,
        translateX: 0,
        translateY: 134,
        transformOrigin: "0px center",
        duration: 1100,
        easing: 'easeInExpo',
        offset: 1400
    });

    t37_lineT1 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-87',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-87',
        scaleY: 0,
        opacity: 1,
        translateX: 74,
        translateY: 98,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-87',
        scaleY: 1,
        translateX: 74,
        translateY: 98,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 2700
    });

    t37_lineT12 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-87',
        scaleY: 1,
        translateX: 74,
        translateY: 98,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-87',
        scaleY: 0,
        translateX: 74,
        translateY: 98,
        transformOrigin: "0px center",
        duration: 1300,
        easing: 'linear',
        offset: 1200
    });

    t37_lineT2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-16',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-16',
        scaleY: 0,
        opacity: 1,
        translateX: 116,
        translateY: 0,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-16',
        scaleY: 1,
        translateX: 116,
        translateY: 0,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 2900
    });

    t37_lineT22 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-16',
        scaleY: 1,
        translateX: 116,
        translateY: 0,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-16',
        scaleY: 0,
        translateX: 116,
        translateY: 0,
        transformOrigin: "0px center",
        duration: 1400,
        easing: 'linear',
        offset: 1100
    });

    t37_lineT3 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-86',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-86',
        scaleY: 0,
        opacity: 1,
        translateX: 446,
        translateY: 56,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-86',
        scaleY: 1,
        translateX: 446,
        translateY: 56,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 3000
    });

    t37_lineT32 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-86',
        scaleY: 1,
        translateX: 446,
        translateY: 56,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-86',
        scaleY: 0,
        translateX: 446,
        translateY: 56,
        transformOrigin: "0px center",
        duration: 1600,
        easing: 'linear',
        offset: 900
    });

    t37_lineBri = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-89',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-89',
        scaleY: 0,
        opacity: 1,
        translateX: 265,
        translateY: 12,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-89',
        scaleY: 1,
        opacity: 1,
        translateX: 265,
        translateY: 12,
        transformOrigin: "0px center",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 3200
    });

    t37_lineBri2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-89',
        scaleY: 1,
        translateX: 265,
        translateY: 12,
        transformOrigin: "0px center",
        duration: 0
    }).add({
        targets: '#Group-89',
        scaleY: 0,
        translateX: 265,
        translateY: 12,
        transformOrigin: "0px center",
        duration: 1800,
        easing: 'linear',
        offset: 700
    });

    t37_lineC = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-90',
        opacity: 0,
        translateX: 0,
        translateY: 81,
        duration: 0
    }).add({
        targets: '#Group-90',
        opacity: 1,
        translateX: 15,
        translateY: 81,
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 2500
    });

    t37_lineC2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-90',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-90',
        opacity: 1,
        translateX: 15,
        translateY: 81,
        duration: 0
    }).add({
        targets: '#Group-90',
        opacity: 0,
        translateX: 0,
        translateY: 81,
        duration: 2500,
        easing: 'easeOutExpo'
    });

    t37_lineBird = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-88',
        opacity: 0,
        translateX: 52,
        translateY: 31,
        duration: 0
    }).add({
        targets: '#Group-88',
        opacity: 1,
        translateX: 62,
        translateY: 41,
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 2500
    });

    t37_lineBird2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-88',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-88',
        opacity: 1,
        translateX: 62,
        translateY: 41,
        duration: 0
    }).add({
        targets: '#Group-88',
        opacity: 0,
        translateX: 52,
        translateY: 31,
        duration: 3000,
        easing: 'easeOutExpo',
    });

    t37_lineBear = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-5',
        opacity: 0,
        duration: 0
    }).add({
        targets: '#Group-5',
        scaleY: 0,
        opacity: 1,
        translateX: 80.8,
        translateY: 457,
        transformOrigin: "0px bottom",
        duration: 0
    }).add({
        targets: '#Group-5',
        scaleY: 1,
        translateX: 80.8,
        translateY: 457,
        transformOrigin: "0px bottom",
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 2500
    });

    t37_lineBear2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-5',
        scaleY: 1,
        translateX: 80.8,
        translateY: 457,
        transformOrigin: "0px bottom",
        duration: 0
    }).add({
        targets: '#Group-5',
        scaleY: 0,
        translateX: 80.8,
        translateY: 457,
        transformOrigin: "0px bottom",
        duration: 2000,
        easing: 'linear',
        offset: 500
    });
    
}

function group37_animation_start() {
    t37_line.restart();
    t37_lineB.restart();
    t37_lineT1.restart();
    t37_lineT2.restart();
    t37_lineT3.restart();
    t37_lineBri.restart();
    t37_lineC.restart();
    t37_lineBird.restart();
    t37_lineBear.restart();
}

function group37_animation_end() {
    t37_line2.restart();
    t37_lineB2.restart();
    t37_lineT12.restart();
    t37_lineT22.restart();
    t37_lineT32.restart();
    t37_lineBri2.restart();
    t37_lineC2.restart();
    t37_lineBird2.restart();
    t37_lineBear2.restart();
}

function group37_text_animation() {

    t37_lineText = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#text-content-group-37',
        translateX: 0,
        translateY: 500,
        duration: 0
    }).add({
        targets: '#text-content-group-37',
        translateX: 0,
        translateY: -470,
        duration: 3000,
        easing: 'easeOutExpo',
        offset: 2000
    });

    t37_lineText2 = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#text-content-group-37',
        translateX: 0,
        translateY: 500,
        duration: 0
    }).add({
        targets: '#text-content-group-37',
        translateX: 0,
        translateY: -470,
        duration: 0
    }).add({
        targets: '#text-content-group-37',
        translateX: 0,
        translateY: 500,
        duration: 2500,
        easing: 'easeInExpo',
    });

}

function group37_text_animation_start() {
    t37_lineText.restart();
}

function group37_text_animation_end() {
    t37_lineText2.restart();
}