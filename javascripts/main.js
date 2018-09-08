group35_animation();
group35_text_animation();
group37_animation();

var isAnimationStart = false;

window.addEventListener('scroll', function (e){
    console.log(e);

});

document.body.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
        console.log('scrolling up');
    }
    if (e.deltaY > 0) {
        console.log('scrolling down');
        if(!isAnimationStart) {
            group35_animation_end();
            group37_animation_start();
        }
        
        isAnimationStart = true;

    }
})