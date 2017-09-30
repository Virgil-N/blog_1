(function($) {

    var home = {

        init: function() {

        },

        insertArticles: function(results) {

            console.log(results, results.length);

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
            $(window).on('scroll', function() {
                var scrollTopHeightAfter = parseFloat($(window).scrollTop());
                var browserHeight= parseFloat($(window).height());
                var documentHeight = parseFloat($(document).height());
                if (documentHeight - browserHeight - scrollTopHeightAfter <= 300) {

                    var created = (new Date($('article').last().find('time').text())).getTime() / 1000;

                    $.ajax({
                        type: 'get',
                        url: '/getMoreArticles?created=' + created,
                        async: false,
                        success: function(msg){
                            if (msg === 'null') {
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