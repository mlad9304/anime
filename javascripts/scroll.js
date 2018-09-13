$(document).ready(function() {

    const MAX_SCROLL_TOP = $(document).height() - $(window).height();
    var AUTO_SCROLLING = true;
    const MAX_SEEK_TIME = 8700;
    const MIN_SEEK_TIME = 3000;

    console.log(MAX_SCROLL_TOP)

    $(document).scroll(function() {
        
        var scrollTop = $(document).scrollTop();

        console.log(scrollTop);

        if(scrollTop < MAX_SCROLL_TOP/10) {
            $('.container').css('background', '#f0f4f8');
        } else if(scrollTop >= MAX_SCROLL_TOP/10 && scrollTop < MAX_SCROLL_TOP * 0.9) {
            $('.container').css('background', 'linear-gradient(to bottom, #f0f4f8 0%, #fff1f1 100%)');
        } else if(scrollTop > MAX_SCROLL_TOP * 0.9) {
            $('.container').css('background', '#fff1f1');
        }

        if(!AUTO_SCROLLING) {

            var seekTime = parseInt(MIN_SEEK_TIME + (MAX_SEEK_TIME-MIN_SEEK_TIME) * scrollTop / MAX_SCROLL_TOP);
            group35_animation_seek(seekTime);
            group37_animation_seek(seekTime);

        }
    });

    $('html, body').animate({ scrollTop: 0 }, 0)
    .delay(5000)
    .animate({ scrollTop: MAX_SCROLL_TOP }, 3000, 'easeOutQuart', function() {
        AUTO_SCROLLING = false;
        $('body').removeClass('scr-show');
    });

});