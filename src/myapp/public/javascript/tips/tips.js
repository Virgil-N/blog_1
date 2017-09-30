var agent=navigator.userAgent.toLowerCase();/firefox/i.test(agent)?document.addEventListener("DOMMouseScroll",function(e){e=e||window.event,e.detail>0?console.log("鼠标向下滚动"):console.warn("鼠标向上滚动")}):document.onmousewheel=function(e){e=e||window.event,e.wheelDelta>0?console.log("鼠标向上滚动"):console.warn("鼠标向下滚动")};
//# sourceMappingURL=tips.js.map
