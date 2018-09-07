group7_animation();
var timeline;
var timeline2;

function group7_animation() {
    timeline = anime.timeline({
        loop: false,
        autoplay: true
    });
    
    timeline2 = anime.timeline({
        loop: false,
        autoplay: false
    });
    
    var transX = [50, 0, 0, 90, 30, 190];
    var transY = [10, 0, 120, 200, 230, 0];
    var init_scale = [1/2, 1/20, 1/2, 1/10, 1/2, 1/2];
    var init_rotate = [-60, 0, -50, 0, 50, 50];
    var duration = [3000, 1800, 3000, 1800, 3000, 3000];
    
    timeline.add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46'],
        translateX: 160,
        translateY: 250,
        scale: function(el, i) { return init_scale[i]; },
        rotate: function(el, i) { return init_rotate[i]; },
        duration: 0
    }).add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46'],
        translateX: function(el, i) { return transX[i]; },
        translateY: function(el, i) { return transY[i]; },
        scale: 1,
        rotate: 0,
        easing: 'easeOutExpo',
        duration: function(el, i) { return duration[i]; },
    });
    
    var init_transX2 = [50, 0, 0, 90, 30, 190];
    var init_transY2 = [10, 0, 120, 200, 230, 0];
    var scale = [1/2, 1/10, 1/2, 1/10, 1/2, 1/2];
    var rotate = [-60, 0, -50, 0, 50, 50];
    var duration = [2500, 3000, 2500, 3000, 2500, 2500];
    
    timeline2.add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46'],
        translateX: function(el, i) { return init_transX2[i]; },
        translateY: function(el, i) { return init_transY2[i]; },
        rotate: 0,
        duration: 0
    }).add({
        targets: ['#Group-41', '#Fill-49', '#Group-43', '#Group-48', '#Group-44', '#Group-46'],
        translateX: 160,
        translateY: 250,
        scale: function(el, i) { return scale[i]; },
        rotate: function(el, i) { return rotate[i]; },
        easing: 'easeInExpo',
        duration: function(el, i) { return duration[i]; },
    });
}

document.getElementById("play1").onclick = function() {
    timeline.restart();
};

document.getElementById("play2").onclick = function() {
    
    timeline2.restart();
};
