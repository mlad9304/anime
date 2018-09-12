group35_animation();
// group35_animation_with_offset(2500);
group35_text_animation();
// group35_text_animation_with_offset(2500);
init_group();
group37_animation();
group37_text_animation();
group35_37_color_animation();

function init_group() {
    anime.timeline({ loop: false, autoplay: true })
    .add({
        targets: ['#Group-69', '#Group-64', '#Group-61', '#Group-72', '#Group-66', '#Group-63', '#Group-75', '#Group-74', '#Group-68', '#Group-78'],
        offset: 0, duration: 0, opacity: 0 })
    anime.timeline({ loop: false, autoplay: true })
    .add({
        targets: ['#Group-85', '#Group-87', '#Group-16', '#Group-86', '#Group-89', '#Group-90', '#Group-88', '#Group-5'],
        offset: 0, duration: 0, opacity: 0 });
    anime.timeline({ loop: false, autoplay: true })
    .add({
        targets: '#text-content-group-37',
        offset: 0, duration: 0, opacity: 0
    }) 
}


var isAnimationStart = false;
var isAnimationEnd = false;
var isLockDown = false;
var isLockUp = false;


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


    if(pageNumber < 1) {
        return;
    }

    console.log('Page: ', pageNumber, ' Seek:', seekTime);

    if(pageNumber === 0 || pageNumber === 1)
        group35_animation_seek(seekTime);

    if(seekTime === 1 && pageNumber === 2) {
        group35_animation_seek(seekTime);
    }
    if(seekTime === 1 && pageNumber === 1 ){
        group37_animation_seek(seekTime);
        
    }

    if(pageNumber === 2 || pageNumber === 3) {
        group37_animation_seek(seekTime);
        group35_37_color_animation_seek(seekTime);
    }

    if(seekTime === 1 && pageNumber === 4) {
        group37_animation_seek(seekTime);
    }



}

var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);