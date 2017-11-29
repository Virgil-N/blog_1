(function($) {

    var isLogin = 'yes';

    var login = {

        init: function() {
            // 如果已经登录则直接跳转到home页面
            var cookieValue = getCookie('isLogin');
            if(cookieValue === isLogin) {
                window.location.href = window.location.protocol + '//' + window.location.host + '/home';
            }

        },

        // 提交表单
        submitForm: function() {
            var o = {
                username: $('#username').val(),
                password: $('#password').val()
            };

            $.ajax({
                type: 'post',
                url: '/isLogin',
                data: o,
                async: false,
                error: function(err) {
                    console.log(err);
                },
                success: function(msg){
                    if(msg === isLogin) {
                        window.location.href = window.location.protocol + '//' + window.location.host + '/home';
                    } else {
                        alert(msg);
                    }
                }
            });
        },

        bindEvent: function() {
            $('body').on('click', '.login-btn', function() {
                login.submitForm();
            })
            .on('keyup', function(e) {
                var code = e.which || e.keyCode;
                if(code === 13) {
                    login.submitForm();
                } 
            });
        }
    };

    login.init();
    login.bindEvent();
})(jQuery);