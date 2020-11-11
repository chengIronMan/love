/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);




var iYear = parseInt(2019)
	var iMonth = parseInt(4)
	var iDay = parseInt(29)
	var iHour = parseInt(0)
	var iMinute = parseInt(0)
	var iSecond = parseInt(0)
	//获取页面中h1标签
	var h1 = document.querySelector('h1')



function timeElapse(date){
  var now = new Date();//现在时间，获取时间戳
	    //以前的时间（以前的时间戳）
	    var ago = new Date(iYear,iMonth-1,iDay,iHour,iMinute,iSecond);
	    //计算时差
	    var ms = now - ago;
	    //计算天数
	    var day = parseInt(ms/(24 * 60 * 60 * 1000));
	    //计算小时
	    var hours = parseInt(ms % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
	    //计算分钟
    	var min = parseInt(ms % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000));
    	//计算秒
    	var s = parseInt(ms % (24 * 60 * 60 * 1000) % (60 * 60 * 1000)%(60 * 1000) / 1000);
    	//把结果反到<h1></h1>里
	    // h1.innerHTML = '你认识ta已经有' + day + '天' + hours + '小时' + min + '分' + s + '秒了！';
	var result = "第 <span class=\"digit\">" + day + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + min + "</span> 分钟 <span class=\"digit\">" + s + "</span> 秒"; 
	$("#clock").html(result);
}

