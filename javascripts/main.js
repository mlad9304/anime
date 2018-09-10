group35_animation();
group35_animation_with_offset(2500);
group35_text_animation();
group35_text_animation_with_offset(2500);
group37_animation();
group37_text_animation();

var isAnimationStart = false;
var isAnimationEnd = false;
var isLockDown = false;
var isLockUp = false;

window.addEventListener('scroll', function (e){
    console.log(e);

});

document.body.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
        console.log('scrolling up');
        if(isLockDown)
            return;
        if(!isAnimationEnd) {

            isLockUp = true;
            setTimeout(() => {
                isLockUp = false;
            }, 3000);

            group37_animation_end();
            group35_animation_start_with_offset();
            group35_37_color_animation_end();
            group37_text_animation_end();
            group35_text_animation_start_with_offset();
        }

        isAnimationEnd = true;
        isAnimationStart = false;
    }
    if (e.deltaY > 0) {
        console.log('scrolling down');
        if(isLockUp)
            return;
        if(!isAnimationStart) {

            isLockDown = true;
            setTimeout(() => {
                isLockDown = false;
            }, 3000);

            group35_animation_end();
            group37_animation_start();
            group35_37_color_animation_start();
            group37_text_animation_start();
            group35_text_animation_end();            
        }
        
        isAnimationStart = true;
        isAnimationEnd = false;

    }
})