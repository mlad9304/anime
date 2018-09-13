var t37_lineTextH; // Text Header
var t37_lineTextB; // Text Body
var t37_lineTextF; // Text Footer
var t37_lineText; // Text area expand
var t37_lineText2; // Text area reduce

var t37_line; // Group 7
var t37_lineB; // background(Rock) expand timeline
var t37_lineT1; // Tree 1
var t37_lineT2; // Tree 2
var t37_lineT3; // Tree 3
var t37_lineBri; // Bridge 
var t37_lineC; // Cloud
var t37_lineBird; // Birds
var t37_lineBear; // Bear

function group37_animation_seek(time) {
    
    if(time <= 0) 
        time = 1;

    t37_line.seek(time);
    t37_lineB.seek(time);
    t37_lineT1.seek(time);
    t37_lineT2.seek(time);
    t37_lineT3.seek(time);
    t37_lineBri.seek(time);
    t37_lineC.seek(time);
    t37_lineBird.seek(time);
    t37_lineBear.seek(time);

    t37_lineText.seek(time);
}

function group37_animation() {

    t37_line = anime.timeline({ loop: false, autoplay: true })
    .add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        offset: 5200, duration: 1, opacity: 0,
        translateX: function(el, i) { return [160, 110, 150, 140, 120, 160, 180, 220, 260, 184][i]; },
        translateY: function(el, i) { return [180, 240, 240, 220, 220, 240, 200, 220, 220, 120][i]; },
        scale: function(el, i) { return [1/4, 1/4, 1/3, 1/4, 1/4, 1/3, 1/4, 1/4, 1/4, 1/4][i]; },
        rotate: function(el, i) { return [150, 150, 100, 0, 60, -50, -100, 0, -120, 0][i]; },
    }).add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        offset: 5201, duration: 3000,
        translateX: function(el, i) { return [99, 26, 30, 113, 36, 216, 239, 265, 302, 184][i]; },
        translateY: function(el, i) { return [8, 52, 100, 148, 207, 0, 103, 194, 204, 56][i]; },
        rotate: function(el, i) { return [0, 0, 45, 0, 0, 0, 0, 0, 0, 0][i]; },
        scale: 1, opacity: 1, easing: 'easeOutExpo',
    });

    t37_lineB = anime.timeline({ targets: '#Group-85', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, scaleY: 0, translateX: 0, translateY: 134, transformOrigin: "0px center", opacity: 1})
    .add({ offset: 5001, duration: 3000, scaleY: 1, translateX: 0, translateY: 134, transformOrigin: "0px center", easing: 'easeOutExpo', });

    t37_lineT1 = anime.timeline({ targets: '#Group-87', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, scaleY: 0, translateX: 74, translateY: 98, transformOrigin: "0px center", opacity: 1})
    .add({ offset: 5200, duration: 3000, scaleY: 1, translateX: 74, translateY: 98, transformOrigin: "0px center", easing: 'easeOutExpo', });

    t37_lineT2 = anime.timeline({ targets: '#Group-16', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, scaleY: 0, translateX: 116, translateY: 0, transformOrigin: "0px center", opacity: 1})
    .add({ offset: 5400, duration: 3000, scaleY: 1, translateX: 116, translateY: 0, transformOrigin: "0px center", easing: 'easeOutExpo', });

    t37_lineT3 = anime.timeline({ targets: '#Group-86', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, scaleY: 0, translateX: 446, translateY: 56, transformOrigin: "0px center", opacity: 1})
    .add({ offset: 5500, duration: 3000, scaleY: 1, translateX: 446, translateY: 56, transformOrigin: "0px center", easing: 'easeOutExpo', });

    t37_lineBri = anime.timeline({ targets: '#Group-89', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, scaleY: 0, translateX: 265, translateY: 12, transformOrigin: "0px center", opacity: 1})
    .add({ offset: 5700, duration: 3000, scaleY: 1, translateX: 265, translateY: 12, transformOrigin: "0px center", easing: 'easeOutExpo', });

    t37_lineC = anime.timeline({ targets: '#Group-90', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, opacity: 0, translateX: 0, translateY: 81 })
    .add({ offset: 5001, duration: 3000, opacity: 1, translateX: 15, translateY: 81, easing: 'easeOutExpo', });

    t37_lineBird = anime.timeline({ targets: '#Group-88', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, opacity: 0, translateX: 52, translateY: 31})
    .add({ offset: 5001, duration: 3000, opacity: 1, translateX: 62, translateY: 41, easing: 'easeOutExpo', });

    t37_lineBear = anime.timeline({ targets: '#Group-5', loop: false, autoplay: true })
    .add({ offset: 5000, duration: 1, scaleY: 0, translateX: 80.8, translateY: 457, transformOrigin: "0px bottom", opacity: 1})
    .add({ offset: 5001, duration: 3000, scaleY: 1, translateX: 80.8, translateY: 457, transformOrigin: "0px bottom", easing: 'easeOutExpo', });

}

function group37_text_animation() {



}
