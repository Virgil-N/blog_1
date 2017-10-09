(function($) {

    var home = {

        init: function() {

        },

        insertArticles: function(results) {
            var str = '';
            for (var i = 0; i < results.length; i++) {
                str += '<article class="normal-article" data-article-id="' + results[i].articleId + '">' +
                            '<div class="normal-article-wrap clearfix">' +
                                '<div class="normal-banner">' +
                                    '<a href="/getArticle?articleId=' + results[i].articleId + '">' +
                                        '<img src="' + results[i].bannerUrl + '">' +
                                    '</a>' +
                                '</div>' +
                                '<div class="normal-text-wrap">' +
                                    '<h1>' +
                                        '<a href="/getArticle?articleId=' + results[i].articleId + '" class="title">' + results[i].title + '</a>' +
                                    '</h1>' +
                                    '<div class="article-meta">' +
                                        '<i class="fa fa-user" aria-hidden="true"></i>' +
                                        '<span class="author-name">' + results[i].authorName + '</span>' +
                                        '<i class="fa fa-tag" aria-hidden="true"></i>' +
                                        '<span class="category">' + results[i].category + '</span>' +
                                        '<i class="fa fa-calendar" aria-hidden="true"></i>' +
                                        '<time>' + results[i].created + '</time>' +
                                    '</div>' +
                                    '<div class="text">' +
                                        '<p>' + results[i].content + '</p>' +
                                    '</div>' +
                                    '<div class="continue-reading">' +
                                        '<a href="/getArticle?articleId=' + results[i].articleId + '">继续阅读</a>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</article>';
            }
            $('.articles').append(str);
        },

        bindEvent: function() {
            // 滚动加载
            var status = true;
            $(window).on('scroll', function() {
                var scrollTopHeightAfter = parseFloat($(window).scrollTop());
                var browserHeight= parseFloat($(window).height());
                var documentHeight = parseFloat($(document).height());
                
                if (documentHeight - browserHeight - scrollTopHeightAfter <= 100 && status) {

                    // 获取现在和1970年1月1日之间的毫秒数，再获取时间戳(格林威治时间1970年01月01日00时00分00秒起至现在的总秒数)
                    var timeStr = $('article').last().find('time').text();
                    var timeArr = timeStr.split('-');
                    var year = timeArr[0];
                    var month = timeArr[1] - 1;
                    var date = timeArr[2].split(' ')[0];
                    var hour = timeArr[2].split(' ')[1].split(':')[0];
                    var minite = timeArr[2].split(' ')[1].split(':')[1];
                    var second = timeArr[2].split(' ')[1].split(':')[2];
                    var created = (new Date(year, month, date, hour, minite, second)).getTime() / 1000;

                    $.ajax({
                        type: 'get',
                        url: '/getMoreArticles?created=' + created,
                        async: false,
                        contentType: 'application/json;charset=utf-8',
                        error: function(err) {
                            alert(err);
                        },
                        success: function(msg){
                            if (msg === 'null') {
                                status = false;
                                return false;
                            }
                            home.insertArticles(JSON.parse(msg));
                        }
                    });

                }

            });
        }

    };

    // function insertArticles(results) {
    //     var str = '';
    //     for (var i = 0; i < results.length; i++) {
    //         str += '<article class="normal-article" data-article-id=' + results[i].id + '>' +
    //                     '<div class="normal-article-wrap clearfix">' +
    //                         '<div class="normal-banner">' +
    //                             '<a href="/getArticle?articleId="' + results[i].id + '>' +
    //                                 '<img src=' + results[i].bannerUrl + '>' +
    //                             '</a>' +
    //                         '</div>' +
    //                         '<div class="normal-text-wrap">' +
    //                             '<h1>' +
    //                                 '<a href="/getArticle?articleId="' + results[i].id + 'class="title">' + results[i].title + '</a>' +
    //                             '</h1>' +
    //                             '<div class="article-meta">' +
    //                                 '<i class="fa fa-user" aria-hidden="true"></i>' +
    //                                 '<span class="author-name">' + results[i].name + '</span>' +
    //                                 '<i class="fa fa-tag" aria-hidden="true"></i>' +
    //                                 '<span class="category">' + results[i].category + '</span>' +
    //                                 '<i class="fa fa-calendar" aria-hidden="true"></i>' +
    //                                 '<time>' + results[i].created + '</time>' +
    //                             '</div>' +
    //                             '<div class="text">' +
    //                                 '<p>' + results[i].content + '</p>' +
    //                             '</div>' +
    //                             '<div class="continue-reading">' +
    //                                 '<a href="/getArticle?articleId="' + results[i].id + '>继续阅读</a>' +
    //                             '</div>' +
    //                         '</div>' +
    //                     '</div>' +
    //                 '</article>';
    //     }
    //     $('.articles').append(str);
        
    // }

    // function bindEvent() {
    //     $(window).scroll(function() {
    //         var created = (new Date($('article').last().find('time').text())).getTime() / 1000;

    //         console.log(created);
            
    //         $.ajax({
    //             type: 'get',
    //             url: '/getMoreArticles?created=' + created,
    //             success: function(msg){
    //                 console.log(msg);
    //                 insertArticles(msg);

    //             }
    //         });

    //     });
    // }

    home.init();
    home.bindEvent();
})(jQuery);