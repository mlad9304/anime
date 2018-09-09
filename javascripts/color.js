var t35_37_lineBgC; // Backgroud Color
var t35_37_lineBgC2;

t35_37_lineBgC = anime.timeline({
    loop: false,
    autoplay: false
}).add({
    targets: '.container',
    background: '#f0f4f8',
    duration: 0
}).add({
    targets: '.container',
    background: '#fff1f1',
    duration: 3000,
    easing: 'easeInExpo',
});

t35_37_lineBgC2 = anime.timeline({
    loop: false,
    autoplay: false
}).add({
    targets: '.container',
    background: '#f0f4f8',
    duration: 0
}).add({
    targets: '.container',
    background: '#fff1f1',
    duration: 0
}).add({
    targets: '.container',
    background: '#f0f4f8',
    duration: 3000,
    easing: 'easeInExpo',
});

function group35_37_color_animation_start() {
    t35_37_lineBgC.restart();
}

function group35_37_color_animation_end() {
    t35_37_lineBgC2.restart();
}