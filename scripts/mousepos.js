// all this does is mouse tracking.
// please let me know if you find this usefull or could make use of it :D


var intervalID = window.setInterval(myCallback, 5000);

function myCallback() {
	$(".iris").css("background-image", "url(images/faceblink.png");
	setTimeout(
	  function() 
	  	{
	    	$(".iris").css("background-image", "url(images/face.png");
	  	}, 300);

}

var followArea = $(".cityBackground, .header");

var eye = {};
var n_eye = document.querySelector(".eye");
var n_iris = n_eye.querySelector(".iris");
var size = n_eye.clientWidth;

(window.onresize = function () {
	eye.x = n_eye.offsetLeft + size / 2;
	eye.y = n_eye.offsetTop + size / 2;
})();

followArea.mouseleave(function () {
	$(".iris").css("transform", "rotateX(0deg) rotateY(0deg) translateZ(0px) scale(0.59)")
});

followArea.mousemove (function (e) {
	n_iris.setAttribute("class", "iris");
	var m = {
		x: e.clientX - eye.x,
		y: e.clientY - eye.y };

	var dist = Math.min(50, Math.max(-50, Math.sqrt(Math.pow(m.x, 2) + Math.pow(m.y, 2)) / 6));
	var dir = Math.atan2(m.x, m.y);
	m.rx = dist * -Math.cos(dir);
	m.ry = dist * Math.sin(dir);
	n_iris.style.transform = "rotateX(" + m.rx + "deg) rotateY(" + m.ry + "deg) translateZ(40px) scale(0.59)";
});

