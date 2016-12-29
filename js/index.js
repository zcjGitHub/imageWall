$(function() {
	var imgCount = $(".main").find('img').length;
	var count = 1;

	window.timer = setInterval(start,2000);


	function start(){
		//console.log(count);
		if(count <= imgCount){
			$('img').eq(count-1).css(transform());
			count++;
		}else {
			window.clearInterval(timer);
		}
	}

	function transform(){

		var mainWidth = $(".main").width() - $(".main").find("img").eq(0).width();/*图片左边最远距离*/
		var mainHeight = $(".main").height() - $(".main").find("img").eq(0).height();/*图片右边最远距离*/

		var translateX = parseInt(mainWidth * Math.random());
		var translateY = parseInt(mainHeight * Math.random());

		var res = {
			"transform"  : 'translate(' + translateX + 'px,' + translateY + 'px)',
			"transition" : "all 2s",
			"zIndex"     : "1"
		}

		return res;

	}
}); 
