(function($) {

    function init() {

    }

    function bindEvent() {

        $('body')
        // 尝试过使用animate做动画，但是会有复杂的队列，多次未成功后放弃了
        .on('mouseenter', 'nav a', function() {
            
            var index  = $(this).closest('li').index();
            var imgNow = $(this).closest('nav').find('img').eq(index);

            if (imgNow.css('opacity') > 0 && imgNow.css('opacity') < 1) {
                return false;
            }

            $('nav img').hide().eq(index).fadeIn();

        });
        
    }

    init();
    bindEvent();
})(jQuery);