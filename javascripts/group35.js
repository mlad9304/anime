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

var timeline_with_offset; // group 7 expand timeline
var timelineS_with_offset; // Sun expand timeline
var timelineB_with_offset; // background(Rock) expand timeline
var timelineT1_with_offset; // Tree1 expand
var timelineT2_with_offset; // Tree2 expand
var timelineT3_with_offset; // Tree3 expand
var timelineT4_with_offset; // Tree4 expand
var timelineC_with_offset; // cloud
var timelineC1_with_offset; // cloud1


var t35_lineTextH; // Text Header
var t35_lineTextB; // Text Body
var t35_lineTextF; // Text Footer
var t35_lineTextH_WithOffset; // Text Header
var t35_lineTextB_WithOffset; // Text Body
var t35_lineTextF_WithOffset; // Text Footer
var t35_lineText; // Text area
var t35_lineText2; // Text area reduce



function group35_animation_seek(time) {
    if(time <= 0) 
        time = 1;
    
    timeline.seek(time);
    timelineS.seek(time);;
    timelineB.seek(time);
    timelineT1.seek(time);
    timelineT2.seek(time);
    timelineT3.seek(time);
    timelineT4.seek(time);
    timelineC.seek(time);
    timelineC1.seek(time);

    console.log(time);
}

function group35_animation() {
    
    timeline = anime.timeline({ loop: false, autoplay: true, })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 0, duration: 0.0001, opacity: 0 })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 0.0001, duration: 0.0009, opacity: 1,
        translateX: function(el, i) { return [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 240][i]; },
        translateY: function(el, i) { return [250, 250, 250, 250, 250, 250, 250, 150, 250, 240, 300][i]; },
        scale: function(el, i) { return [1/2, 1/20, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4][i]; },
        rotate: function(el, i) { return [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80][i]; }, })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 0.001, duration: 3000,
        translateX: function(el, i) { return [50, 10, 0, 90, 30, 190, 230, 290, 260, 270, 310][i]; },
        translateY: function(el, i) { return [10, 40, 120, 200, 230, 0, 90, 40, 100, 200, 230][i]; },
        scale: 1, rotate: 0, easing: 'easeOutExpo',
    });
    
    timeline2 = anime.timeline({ loop: false, autoplay: false })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 0, duration: 0.0001, opacity: 0 })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 0.0001, duration: 0.0009, opacity: 1,
        translateX: function(el, i) { return [50, 10, 0, 90, 30, 190, 230, 290, 260, 270, 310][i]; },
        translateY: function(el, i) { return [10, 40, 120, 200, 230, 0, 90, 40, 100, 200, 230][i]; },
        rotate: 0, })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 0.001, duration: 2500,
        translateX: function(el, i) { return [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 240][i]; },
        translateY: function(el, i) { return [250, 250, 250, 250, 250, 250, 250, 150, 250, 240, 300][i]; },
        scale: function(el, i) { return [1/2, 1/10, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4][i]; },
        rotate: function(el, i) { return [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80][i]; },
        easing: 'easeInExpo',
    });

    timelineS = anime.timeline({ targets: '#Group-3', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, opacity: 0 })
    .add({ offset: 2, duration: 1, opacity: 1, translateX: 20, translateY: 120, })
    .add({ offset: 3, duration: 800, translateX: 20, translateY: 10, easing: 'easeOutExpo', })
    .add({ offset: 803, duration: 1200, translateX: 20, translateY: 30, easing: 'linear', });

    timelineB = anime.timeline({ targets: '#Group-59', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, scaleY: 0, translateX: 44, translateY: 171, transformOrigin: "0px center", })
    .add({ offset: 2, duration: 3000, scaleY: 1, translateX: 44, translateY: 171, transformOrigin: "0px center", easing: 'easeOutExpo', });

    timelineT1 = anime.timeline({ targets: '#Group-55', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, scaleY: 0, translateX: 101, translateY: 182, transformOrigin: "0px center" })
    .add({ offset: 800, duration: 2200, scaleY: 1, translateX: 101, translateY: 182, transformOrigin: "0px center", easing: 'easeOutExpo', });

    timelineT2 = anime.timeline({ targets: '#Group-52', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, scaleY: 0, translateX: 138, translateY: 91, transformOrigin: "0px center", })
    .add({ offset: 1400, duration: 1600, scaleY: 1, translateX: 138, translateY: 91, transformOrigin: "0px center", easing: 'easeOutExpo', });

    timelineT3 = anime.timeline({ targets: '#Group-53', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, scaleY: 0, translateX: 365, translateY: 142, transformOrigin: "0px center", })
    .add({ offset: 1100, duration: 1900, scaleY: 1, translateX: 365, translateY: 142, transformOrigin: "0px center", easing: 'easeOutExpo', });

    timelineT4 = anime.timeline({ targets: '#Group-56', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, scaleY: 0, translateX: 402, translateY: 111, transformOrigin: "0px center", })
    .add({ offset: 800, duration: 2200, scaleY: 1, translateX: 402, translateY: 111, transformOrigin: "0px center", easing: 'easeOutExpo', });

    timelineC = anime.timeline({ targets: '#Group-58', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, translateX: 185, translateY: 120, })
    .add({ offset: 2, duration: 3000, translateX: 30, translateY: 120, easing: 'easeOutExpo', });

    timelineC1 = anime.timeline({ targets: '#Group-60', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, translateX: 280, translateY: 190, })
    .add({ offset: 2, duration: 3000, translateX: 480, translateY: 190, easing: 'easeOutExpo', });



    

    timelineS2 = anime.timeline({ targets: '#Group-3', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, opacity: 0 })
    .add({ offset: 2, duration: 1, opacity: 1, translateX: 20, translateY: 30 })
    .add({ offset: 3, duration: 500, opacity: 1, translateX: 20, translateY: 10, easing: 'linear', })
    .add({ offset: 503, duration: 1500, opacity: 1, translateX: 20, translateY: 180, easing: 'easeInQuart', })
    .add({ offset: 2003, duration: 500, opacity: 0, easing: 'easeOutExpo', });

    timelineB2 = anime.timeline({ targets: '#Group-59', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, scaleY: 1, translateX: 44, translateY: 171, transformOrigin: "0px center", })
    .add({ offset: 1000, duration: 1500, scaleY: 0, translateX: 44, translateY: 171, transformOrigin: "0px center", easing: 'easeInExpo', });

    timelineT12 = anime.timeline({ targets: '#Group-55', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, scaleY: 1, translateX: 101, translateY: 182, transformOrigin: "0px center", })
    .add({ offset: 800, duration: 1700, scaleY: 0, translateX: 101, translateY: 182, transformOrigin: "0px center", easing: 'linear', });

    timelineT22 = anime.timeline({ targets: '#Group-52', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, scaleY: 1, translateX: 138, translateY: 91, transformOrigin: "0px center", })
    .add({ offset: 1300, duration: 1200, scaleY: 0, translateX: 138, translateY: 91, transformOrigin: "0px center", easing: 'linear', });

    timelineT32 = anime.timeline({ targets: '#Group-53', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, scaleY: 1, translateX: 365, translateY: 142, transformOrigin: "0px center" })
    .add({ offset: 1100, duration: 1400, scaleY: 0, translateX: 365, translateY: 142, transformOrigin: "0px center", easing: 'linear', });

    timelineT42 = anime.timeline({ targets: '#Group-56', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, scaleY: 1, translateX: 402, translateY: 111, transformOrigin: "0px center", })
    .add({ offset: 900, duration: 1600, scaleY: 0, translateX: 402, translateY: 111, transformOrigin: "0px center", easing: 'linear', });

    timelineC2 = anime.timeline({ targets: '#Group-58', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, translateX: 30, translateY: 120, })
    .add({ offset: 1300, duration: 1200, translateX: 185, translateY: 120, scale: 1/2, easing: 'easeInExpo', });

    timelineC12 = anime.timeline({ targets: '#Group-60', loop: false, autoplay: false })
    .add({ offset: 0, duration: 2, translateX: 480, translateY: 190, })
    .add({ offset: 1300, duration: 1200, translateX: 280, translateY: 190, easing: 'easeInExpo', });
}

function group35_animation_with_offset(offset) {
    var init_transX = [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 240];
    var init_transY = [250, 250, 250, 250, 250, 250, 250, 150, 250, 240, 300];
    var transX = [50, 10, 0, 90, 30, 190, 230, 290, 260, 270, 310];
    var transY = [10, 40, 120, 200, 230, 0, 90, 40, 100, 200, 230];
    var init_scale = [1/2, 1/20, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4];
    var init_rotate = [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80];
    var duration = [3000, 1800, 3000, 1800, 3000, 3000, 3000, 3000, 3000, 3000, 3000];
    
    timeline_with_offset = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        // targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        // translateX: function(el, i) { return init_transX[i]; },
        // translateY: function(el, i) { return init_transY[i]; },
        // scale: function(el, i) { return init_scale[i]; },
        // rotate: function(el, i) { return init_rotate[i]; },
        // duration: 0
    }).add({
        // targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        // translateX: function(el, i) { return transX[i]; },
        // translateY: function(el, i) { return transY[i]; },
        // scale: 1,
        // rotate: 0,
        // easing: 'easeOutExpo',
        // duration: function(el, i) { return duration[i]; },
        // offset: offset
    });

    timelineS_with_offset = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 180,
        opacity: 0,
        duration: 0,
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 10,
        opacity: 1,
        duration: 800,
        easing: 'easeOutExpo',
        offset: offset
    }).add({
        targets: '#Group-3',
        translateX: 20,
        translateY: 30,
        opacity: 1,
        duration: 1200,
        easing: 'linear',
        offset: offset+800
    });

    timelineB_with_offset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset
    });

    timelineT1_with_offset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset+800
    });

    timelineT2_with_offset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset+1400
    });

    timelineT3_with_offset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset+1100
    });

    timelineT4_with_offset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset+800
    });

    timelineC_with_offset = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
        targets: '#Group-58',
        translateX: 185,
        translateY: 120,
        scale: 1/2,
        duration: 0
    }).add({
        targets: '#Group-58',
        translateX: 30,
        translateY: 120,
        duration: 3000,
        scale: 1,
        easing: 'easeOutExpo',
        offset: offset
    });

    timelineC1_with_offset = anime.timeline({
        loop: false,
        autoplay: false
    }).add({
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
        offset: offset
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
        offset: 0,
    }).add({
        targets: '#text-content-group-35',
        translateX: 0,
        translateY: -500,
        opacity: 0,
        duration: 2500,
        easing: 'easeInExpo',
    });
}

function group35_text_animation_with_offset(offset) {
    t35_lineTextH_WithOffset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset,
    });

    t35_lineTextB_WithOffset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset,
    });

    t35_lineTextF_WithOffset = anime.timeline({
        loop: false,
        autoplay: false
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
        offset: offset+500
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
    // timeline.restart();
    // timelineS.restart();
    // timelineB.restart();
    // timelineT1.restart();
    // timelineT2.restart();
    // timelineT3.restart();
    // timelineT4.restart();
    // timelineC.restart();
    // timelineC1.restart();
    
}
function group35_animation_start_with_offset() {
    timeline_with_offset.restart();
    timelineS_with_offset.restart();
    timelineB_with_offset.restart();
    timelineT1_with_offset.restart();
    timelineT2_with_offset.restart();
    timelineT3_with_offset.restart();
    timelineT4_with_offset.restart();
    timelineC_with_offset.restart();
    timelineC1_with_offset.restart();
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
