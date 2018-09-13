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


function group35_animation_seek(time) {
        
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
    
    timeline = anime.timeline({ 
        targets: ['#Group-41', '#Group-80', '#Group-43', '#Group-48', '#Group-44', '#Group-46', '#Group-79', '#Group-47', '#Group-49', '#Group-81', '#Group-50'],
        loop: false, autoplay: true, })
    .add({
        offset: 0, duration: 1, opacity: 1,
        translateX: function(el, i) { return [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 240][i]; },
        translateY: function(el, i) { return [250, 250, 250, 250, 250, 250, 250, 150, 250, 240, 300][i]; },
        scale: function(el, i) { return [1/2, 1/20, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4][i]; },
        rotate: function(el, i) { return [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80][i]; }, })
    .add({
        offset: 1, duration: 3000,
        translateX: function(el, i) { return [51, 22, 0, 88, 31, 191, 231, 293, 260, 268, 302][i]; },
        translateY: function(el, i) { return [10, 46, 112, 203, 234, 0, 89, 40, 97, 201, 222][i]; },
        scale: 1, rotate: 0, easing: 'easeOutExpo',})
    .add({
        offset: 3000, duration: 2500,
        translateX: function(el, i) { return [160, 160, 160, 160, 160, 160, 160, 180, 260, 240, 240][i]; },
        translateY: function(el, i) { return [250, 250, 250, 250, 250, 250, 250, 150, 250, 240, 300][i]; },
        scale: function(el, i) { return [1/2, 1/20, 1/2, 1/10, 1/2, 1/2, 1/10, 1/8, 1/4, 1/10, 1/4][i]; },
        rotate: function(el, i) { return [-60, 0, -50, 0, 50, 90, 0, -100, 150, 0, -80][i]; },
        easing: 'easeInExpo'
    });

    timelineS = anime.timeline({ targets: '#Group-3', loop: false, autoplay: true })
    .add({ offset: 0, duration: 2, opacity: 0 })
    .add({ offset: 2, duration: 1, opacity: 1, translateX: 20, translateY: 120, })
    .add({ offset: 3, duration: 800, translateX: 20, translateY: 10, easing: 'easeOutExpo', })
    .add({ offset: 803, duration: 1200, translateX: 20, translateY: 30, easing: 'linear', })
    .add({ offset: 2500, duration: 500, opacity: 1, translateX: 20, translateY: 10, easing: 'linear', })
    .add({ offset: 3000, duration: 1800, opacity: 1, translateX: 20, translateY: 180, easing: 'easeInQuart', })
    .add({ offset: 4800, duration: 200, opacity: 0, easing: 'easeOutExpo', });

    timelineB = anime.timeline({ targets: '#Group-59', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, scaleY: 0, translateX: 44, translateY: 171, transformOrigin: "0px center", })
    .add({ offset: 1, duration: 3000, scaleY: 1, translateX: 44, translateY: 171, transformOrigin: "0px center", easing: 'easeOutExpo', })
    .add({ offset: 3500, duration: 1500, scaleY: 0, translateX: 44, translateY: 171, transformOrigin: "0px center", easing: 'easeInExpo', });
    

    timelineT1 = anime.timeline({ targets: '#Group-55', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, scaleY: 0, translateX: 101, translateY: 182, transformOrigin: "0px center" })
    .add({ offset: 800, duration: 2200, scaleY: 1, translateX: 101, translateY: 182, transformOrigin: "0px center", easing: 'easeOutExpo', })
    .add({ offset: 3300, duration: 1700, scaleY: 0, translateX: 101, translateY: 182, transformOrigin: "0px center", easing: 'linear', });

    timelineT2 = anime.timeline({ targets: '#Group-52', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, scaleY: 0, translateX: 138, translateY: 91, transformOrigin: "0px center", })
    .add({ offset: 1400, duration: 1600, scaleY: 1, translateX: 138, translateY: 91, transformOrigin: "0px center", easing: 'easeOutExpo', })
    .add({ offset: 3800, duration: 1200, scaleY: 0, translateX: 138, translateY: 91, transformOrigin: "0px center", easing: 'linear', });

    timelineT3 = anime.timeline({ targets: '#Group-53', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, scaleY: 0, translateX: 365, translateY: 142, transformOrigin: "0px center", })
    .add({ offset: 1100, duration: 1900, scaleY: 1, translateX: 365, translateY: 142, transformOrigin: "0px center", easing: 'easeOutExpo', })
    .add({ offset: 3600, duration: 1400, scaleY: 0, translateX: 365, translateY: 142, transformOrigin: "0px center", easing: 'linear', });

    timelineT4 = anime.timeline({ targets: '#Group-56', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, scaleY: 0, translateX: 402, translateY: 111, transformOrigin: "0px center", })
    .add({ offset: 800, duration: 2200, scaleY: 1, translateX: 402, translateY: 111, transformOrigin: "0px center", easing: 'easeOutExpo', })
    .add({ offset: 3400, duration: 1600, scaleY: 0, translateX: 402, translateY: 111, transformOrigin: "0px center", easing: 'linear', });

    timelineC = anime.timeline({ targets: '#Group-58', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, translateX: 185, translateY: 120, scaleX: 1/2})
    .add({ offset: 1, duration: 3000, translateX: 30, translateY: 120, scaleX: 1, easing: 'easeOutExpo', })
    .add({ offset: 3800, duration: 1200, translateX: 185, translateY: 120, scale: 1/2, easing: 'easeInExpo', });

    timelineC1 = anime.timeline({ targets: '#Group-60', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, translateX: 280, translateY: 190, })
    .add({ offset: 1, duration: 3000, translateX: 480, translateY: 190, easing: 'easeOutExpo', })
    .add({ offset: 3800, duration: 1200, translateX: 280, translateY: 190, easing: 'easeInExpo', });



}

function group35_text_animation() {

    t35_lineTextH = anime.timeline({ targets: '#text-content-group-35 .text_title', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, translateX: 0, translateY: -20, opacity: 0, })
    .add({ offset: 1, duration: 1000, translateX: 0, translateY: 0, opacity: 1, easing: 'easeOutExpo', });

    t35_lineTextB = anime.timeline({ targets: '#text-content-group-35 .text_body', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, translateX: 0, translateY: 50, opacity: 0, })
    .add({ offset: 1, duration: 2000, translateX: 0, translateY: 0, opacity: 1, easing: 'easeOutExpo', });

    t35_lineTextF = anime.timeline({ targets: '#text-content-group-35 .text_bottom', loop: false, autoplay: true })
    .add({ offset: 0, duration: 1, translateX: 0, translateY: 20, opacity: 0, })
    .add({ offset: 500, duration: 800, translateX: 0, translateY: 0, opacity: 1, easing: 'easeOutExpo', });


}
