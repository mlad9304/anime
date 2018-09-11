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


// document.body.addEventListener('wheel', function(e) {
//     if (e.deltaY < 0) {
//         console.log('scrolling up');
//         if(isLockDown)
//             return;
//         if(!isAnimationEnd) {

//             isLockUp = true;
//             setTimeout(() => {
//                 isLockUp = false;
//             }, 3000);

//             group37_animation_end();
//             group35_animation_start_with_offset();
//             group35_37_color_animation_end();
//             group37_text_animation_end();
//             group35_text_animation_start_with_offset();
//         }

//         isAnimationEnd = true;
//         isAnimationStart = false;
//     }
//     if (e.deltaY > 0) {
//         console.log('scrolling down');
//         if(isLockUp)
//             return;
//         if(!isAnimationStart) {

//             isLockDown = true;
//             setTimeout(() => {
//                 isLockDown = false;
//             }, 3000);

//             group35_animation_end();
//             group37_animation_start();
//             group35_37_color_animation_start();
//             group37_text_animation_start();

//             group35_text_animation_end();            
//         }
        
//         isAnimationStart = true;
//         isAnimationEnd = false;

//     }
// })

var scrollSensitivitySetting = 30;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var maxSeekTime = 3001;
var minSeekTime = 1;
var pageNumber = 1;

var seekTime = maxSeekTime;

function parallaxScroll(evt) {
    if (isFirefox) {
      //Set delta for Firefox
      delta = evt.detail * (-120);
    } else if (isIe) {
      //Set delta for IE
      delta = -evt.deltaY;
    } else {
      //Set delta for all other browsers
      delta = evt.wheelDelta;
    }

    if (delta <= -scrollSensitivitySetting) { // Down
        if(pageNumber % 2 === 0)
            seekTime += Math.abs(delta);
        else
            seekTime -= Math.abs(delta);
        
    }
    if (delta >= scrollSensitivitySetting) { // Up
        if(pageNumber % 2 === 0)
            seekTime -= delta;
        else
            seekTime += delta;

    }

    if(seekTime <= minSeekTime) {
        if(pageNumber % 2 === 0) {
            pageNumber--;
            seekTime = minSeekTime 
            
        } else {
            pageNumber++;
            seekTime = minSeekTime 
            
        }
    } else if(seekTime >= maxSeekTime) {
        if(pageNumber % 2 === 0) {
            pageNumber++;
            seekTime = maxSeekTime 
        } else {
            
            pageNumber--;
            seekTime = maxSeekTime 
        }

    }


    if(pageNumber<0) {
        pageNumber = 0;
        return;
    }

    if(pageNumber === 0 || pageNumber === 1)
        group35_animation_seek(seekTime);

    if(seekTime === 1 && pageNumber === 2) {
        group35_animation_seek(seekTime);
    }



}

var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);