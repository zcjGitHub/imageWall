setTimeout(function() {

	m3D.init(

		[ 

			{ src: '1.jpg'},{ src: '2.jpg' },{ src: '3.jpg' },{ src: '4.jpg'},{ src: '5.jpg' },{ src: '6.jpg' },{ src: '7.jpg'},{ src: '8.jpg' },{ src: '9.jpg' }
			
		]

	);

}, 500);


window.timer = setInterval(start,3000);


var count = 1;
function start(){
	var canvasCount = $("#screen").find('canvas').length;
	if(count <= canvasCount){
		$("#screen").find('canvas').eq(count-1).click();
		count++;
		console.log(canvasCount,count);
	}else {
		window.clearInterval(timer);
	}
}