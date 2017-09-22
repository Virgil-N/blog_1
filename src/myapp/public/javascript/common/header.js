!function($){!function(){$("body").on("mouseenter","nav a",function(){var index=$(this).closest("li").index(),imgNow=$(this).closest("nav").find("img").eq(index);if(imgNow.css("opacity")>0&&imgNow.css("opacity")<1)return!1;$("nav img").hide().eq(index).fadeIn()})}()}(jQuery);
//# sourceMappingURL=header.js.map
