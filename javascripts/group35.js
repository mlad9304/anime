var timeline; // group 7 expand timeline
var timelineS; // Sun expand timeline
var timelineB; // background(Rock) expand timeline
var timelineT1; // Tree1 expand
var timelineT2; // Tree2 expand
var timelineT3; // Tree3 expand
var timelineT4; // Tree4 expand
var timelineC; // cloud
var timelineC1; // cloud1

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

}

function group35_animation() {
    
    timeline = anime.timeline({ loop: false, autoplay: true, })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 0, duration: 1, opacity: 1,
        translateX: function(el, i) { return [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 240][i]; },
        translateY: function(el, i) { return [250, 250, 250, 250, 250, 250, 250, 150, 250, 240, 300][i]; },
        scale: function(el, i) { return [1/2, 1/20, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4][i]; },
        rotate: function(el, i) { return [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80][i]; }, })
    .add({
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        offset: 1, duration: 3000,
        translateX: function(el, i) { return [50, 10, 0, 90, 30, 190, 230, 290, 260, 270, 310][i]; },
        translateY: function(el, i) { return [10, 40, 120, 200, 230, 0, 90, 40, 100, 200, 230][i]; },
        scale: 1, rotate: 0, easing: 'easeOutExpo',
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
    .add({ offset: 0, duration: 2, translateX: 185, translateY: 120, scaleX: 1/2})
    .add({ offset: 2, duration: 3000, translateX: 30, translateY: 120, scaleX: 1, easing: 'easeOutExpo', });

    timelineC1 = anime.timeline({ targets: '#Group-60', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, translateX: 280, translateY: 190, })
    .add({ offset: 2, duration: 3000, translateX: 480, translateY: 190, easing: 'easeOutExpo', });

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
