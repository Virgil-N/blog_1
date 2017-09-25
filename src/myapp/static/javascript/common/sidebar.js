(function($) {

    function init() {

    }


    function bindEvent() {
        $('body')
        // 点击页面上的空白区域隐藏sidebar
        .on('click', '#main-content', function() {
            var $sidebar = $('#sidebar');
            var $sidebarLeft = $sidebar.css('left');
            var $pageWidth = parseInt($('body').css('width'));

            if ($pageWidth > 767) {
                return false;
            }
            
            if ($sidebarLeft == '0px') {

                $('#sidebar').animate({
                    left: -250
                }, 'normal');

                $('#main-content').animate({
                    marginLeft: 0,
                    width: $pageWidth
                }, 'normal');

                $('#header').animate({
                    marginLeft: 0
                }, 'normal');

            } else {
                return false;
            }
        })
        // 显示隐藏sidebar
        .on('click', '#btn-open-sidebar', function() {
            var $sidebar = $('#sidebar');
            var $sidebarLeft = $sidebar.css('left');
            var $pageWidth = parseInt($('body').css('width'));
            console.log($pageWidth);

            if ($pageWidth > 767) {
                return false;
            }
            
            if ($sidebarLeft == '-250px') {

                $('#sidebar').animate({
                    left: 0
                }, 'normal');

                $('#main-content').animate({
                    marginLeft: 250
                }, 'normal');

                $('#header').animate({
                    marginLeft: 250
                }, 'normal');

            } else if ($sidebarLeft == '0px') {

                $('#sidebar').animate({
                    left: -250
                }, 'normal');

                $('#main-content').animate({
                    marginLeft: 0
                }, 'normal');

                $('#header').animate({
                    marginLeft: 0
                }, 'normal');

            } else {
                return false;
            }
            
        });
    }

    init();
    bindEvent();
})(jQuery);