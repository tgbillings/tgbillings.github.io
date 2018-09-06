
var xi;
var yi;
var newposX;
var newposY

$(document).ready(function() {
	$selector = $("#face");
	xi = $selector.offset().left;
	yi = $selector.offset().top;
	xi = xi - $selector.height()/2;
	yi = yi - $selector.width()/2;
} )


// Will execute myCallback every 0.5 seconds 
var intervalID = window.setInterval(myCallback, 7000);

function myCallback() {
	$("#face").attr("src","images/faceblink.png");
	setTimeout(
	  function() 
	  	{
	    	$("#face").attr("src","images/face.png");
	  	}, 200);

}

$(document).on("click mousemove","body",function(e){ 

	var p1 = {
		x: xi,
		y: yi
	};

	var p2 = {
		x: e.pageX,
		y: e.pageY
	};

	var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);

	var ax = xi + 14 * Math.cos(angleRadians)
	var ay = yi + 14 * Math.sin(angleRadians)
	newposX = ax - xi;
	newposY = ay - yi;

	//$("#face").css("transform","translate("+newposX+"px,"+ newposY+"px)");
});



var p2 = {
	x: 40,
	y: 40
};

$(function(){
		boxRollovers();
	});
	
	function boxRollovers()
	{
		$selector = $(".cityBackground, .header");
		XAngle = 0;
		YAngle = 0;
		Z = 50;
		
		$selector.on("mousemove",function(e){
			var $this = $("#face");
			var XRel = e.pageX - $this.offset().left;
			var YRel = e.pageY - $this.offset().top;
			var width = $this.width();
		
			YAngle = -(0.5 - (XRel / width)) * 1; 
			XAngle = (0.5 - (YRel / width)) * 1;
			updateView($this);
		});
		
		$selector.on("mouseleave",function(){
			oLayer = $("#face");
			oLayer.css({"transform":"perspective(2500px) translate(0px, 0px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
		});
	}
	
	function updateView(oLayer)
	{
		oLayer.css({"transform":"perspective(2500px) translate("+newposX+"px,"+ newposY+"px) translateZ(" + Z + "px) rotateX(" + (XAngle) + "deg) rotateY(" + (YAngle) + "deg)"});
	}
