!function($){!function(){$("body").on("click","#main-content, #header",function(){var $sidebar=$("#sidebar"),$sidebarLeft=parseInt($sidebar.css("left"));return!(parseInt($("body").css("width"))>767)&&0===$sidebarLeft&&($("#sidebar").animate({left:-250},"normal"),$("#main-content").animate({marginLeft:0},"normal"),void $("#header").animate({marginLeft:0},"normal"))}).on("click","#btn-open-sidebar",function(){var $sidebar=$("#sidebar"),$sidebarLeft=parseInt($sidebar.css("left"));if(parseInt($("body").css("width"))>767)return!1;if(-250===$sidebarLeft)$("#sidebar").animate({left:0},"normal"),$("#main-content").animate({marginLeft:250},"normal"),$("#header").animate({marginLeft:250},"normal");else{if(0!==$sidebarLeft)return!1;$("#sidebar").animate({left:-250},"normal"),$("#main-content").animate({marginLeft:0},"normal"),$("#header").animate({marginLeft:0},"normal")}}),$(window).on("resize",function(){var $sidebar=$("#sidebar"),$sidebarLeft=parseInt($sidebar.css("left")),$sidebarWidth=parseInt($sidebar.css("width"));parseInt($("body").css("width"))<767&&0===$sidebarLeft&&(250===$sidebarWidth||233===$sidebarWidth)&&(console.log($sidebarWidth),$("#sidebar").animate({left:-250},"normal"),$("#main-content").animate({marginLeft:0},"normal"),$("#header").animate({marginLeft:0},"normal"))})}()}(jQuery);
//# sourceMappingURL=sidebar.js.map
