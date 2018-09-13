$(document).ready(function() {

    const MAX_SCROLL_TOP = $(document).height() - $(window).height();
    var AUTO_SCROLLING = true;
    const MAX_SEEK_TIME = 8700;
    const MIN_SEEK_TIME = 3000;

    console.log(MAX_SCROLL_TOP)

    $(document).scroll(function() {
        if(!AUTO_SCROLLING) {
            
            var scrollTop = $(document).scrollTop();
            var seekTime = parseInt(MIN_SEEK_TIME + (MAX_SEEK_TIME-MIN_SEEK_TIME) * scrollTop / MAX_SCROLL_TOP);
            group35_animation_seek(seekTime);
            group37_animation_seek(seekTime);

        }
    });

    $('html, body').animate({ scrollTop: 0 }, 0)
    .delay(5000)
    .animate({ scrollTop: MAX_SCROLL_TOP }, 3000, 'easeOutQuart', function() {
        AUTO_SCROLLING = false;
    });

});