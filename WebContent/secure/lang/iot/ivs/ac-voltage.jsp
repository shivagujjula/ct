<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Insert title here</title>
<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.path {
	stroke-dasharray: 1000;
	stroke-dashoffset: 1000;
	animation: dash 5s linear alternate 1;
}

@keyframes dash {
	from {
		stroke-dashoffset: 1000;
	}
	to {
		stroke-dashoffset: 0;
	}
}


#infoDiv {
	/* min-height: 88px; */
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 20.5%;
	margin-top: 2%;
}

.user-btn {
	background: green;
}

.z-index9999999 {
	z-index: 9999999 !important;
}

.hidden {
	visibility: hidden;
}

.popover-btn-css {
	text-align: right;
	padding: 0;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>AC Voltage</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-7 col-xs-offset-2">
			<div id="infoDiv" class="font-size-14 margin-top-1">
				<ul>
					<li id="line1" class="opacity00">AC (Alternating Current) voltage describes the flow of charge that changes direction periodically.
					</li>
					<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-6 opacity00" style="height: 390px; margin-top: 5%;" id="dcCircuitDiv">
		<svg style="height: 100%; width: 100%;" id="bulb-svg">
				<!-- <svg id="bulb-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="196px"
	 height="196px" viewBox="0 0 196 196" enable-background="new 0 0 196 196" xml:space="preserve">  --> 
<g transform="rotate(-1 313 -9650)" id="bulb">      
	<path id="bulb_body" fill="#FFFFFF" stroke="#3D3D3D" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M138,86.465
		c0-22.284-18.131-40.348-40.5-40.348c-22.367,0-40.5,18.064-40.5,40.348c0,13.2,6.363,24.918,16.201,32.279v12.91
		c0,1.781,1.449,3.229,3.238,3.229h42.12c1.789,0,3.24-1.445,3.24-3.229v-12.91C131.637,111.384,138,99.665,138,86.465z"/>
	<g id="sockel">
		<path fill="#96BF1F" stroke="#3D3D3D" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M119.013,139.598
			c0,1.803-1.468,3.266-3.276,3.266H79.689c-1.81,0-3.276-1.463-3.276-3.266l0,0c0-1.805,1.468-3.267,3.276-3.267h36.046
			C117.545,136.331,119.013,137.793,119.013,139.598L119.013,139.598z"/>
		<path fill="#96BF1F" stroke="#3D3D3D" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M119.013,146.128
			c0,1.804-1.468,3.267-3.276,3.267H79.689c-1.81,0-3.276-1.463-3.276-3.267l0,0c0-1.804,1.468-3.267,3.276-3.267h36.046
			C117.545,142.861,119.013,144.324,119.013,146.128L119.013,146.128z"/>
		<path fill="#96BF1F" stroke="#3D3D3D" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M119.013,152.659
			c0,1.804-1.468,3.267-3.276,3.267H79.689c-1.81,0-3.276-1.463-3.276-3.267l0,0c0-1.804,1.468-3.267,3.276-3.267h36.046
			C117.545,149.395,119.013,150.855,119.013,152.659L119.013,152.659z"/>
		<path fill="#96BF1F" stroke="#3D3D3D" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M119.013,159.191
			c0,1.803-1.468,3.266-3.276,3.266H79.689c-1.81,0-3.276-1.463-3.276-3.266l0,0c0-1.805,1.468-3.267,3.276-3.267h36.046
			C117.545,155.926,119.013,157.389,119.013,159.191L119.013,159.191z"/>
		<path fill="none" stroke="#3D3D3D" stroke-width="3" stroke-miterlimit="10" d="M89.111,168.988c0,4.093,3.851,7.41,8.602,7.41
			c4.75,0,8.603-3.317,8.603-7.41"/>
		<path fill="none" stroke="#3D3D3D" stroke-width="3" stroke-miterlimit="10" d="M81.116,162.457v3.266
			c0,1.805,1.467,3.267,3.275,3.267h4.72h17.203h4.293c1.809,0,3.275-1.464,3.275-3.267v-3.266"/>
	</g>
	<path fill="none" stroke="#3D3D3D" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M75,89.781v2.427v6.953
		l13,12.769v22.75"/>
	<path fill="none" stroke="#3D3D3D" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M107,134.68v-22.75
		l13-12.769v-6.953v-2.427"/>  
  
	<path id="glow" fill="black" stroke="#FFFFFF" stroke-width="0" stroke-linecap="square" stroke-miterlimit="10" d="M120,89.802
		c0,3.003-2.52,5.438-5.625,5.438c-3.107,0-5.625-2.435-5.625-5.438c0,3.003-2.52,5.438-5.625,5.438
		c-3.107,0-5.625-2.435-5.625-5.438c0,3.003-2.519,5.438-5.625,5.438s-5.625-2.435-5.625-5.438c0,3.003-2.519,5.438-5.625,5.438
		c-3.105,0-5.625-2.435-5.625-5.438"/>  
  	
</g> 
<g id="licht" style="opacity: 0;"> 
		
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="315.088" y1="90.5" x2="335" y2="90.5"/>   
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="197" y1="90.5" x2="217.912" y2="90.5"/>
		
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="300.392" y1="128.327" x2="313.765" y2="135.677"/>
		
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="213.234" y1="40.322" x2="231.607" y2="52.673"/>
		
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" stroke-opacity="0" x1="267.5" y1="143.996" x2="267.5" y2="162.876"/>
		
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="267.5" y1="20.124" x2="267.5" y2="40.004"/>
		
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="229.607" y1="126.327" x2="213.234" y2="133.677"/>
		
			<line fill="none" stroke="#96BF1F" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="319.765" y1="44.322" x2="303.392" y2="53.672"/>

</g>

				
				<g>
  					<circle fill="white" stroke-width="2" stroke="#00376f" r="19" cy="358" cx="268"/>
					<text x="259" y="365" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;">AC</text>
  				</g>
				<g>
					<path fill="none" stroke-width="2.5" stroke="#00376f" 
						d="M 250 358 l -134 0 M 117 358 v -203 0 M 116 156 l 132 0 M 258.5 138 v -23 0 M259 116 244 102 M 245 92 l 44 0 
						M277 115 290 100 M 277.2 138 v -23 0  M 270 171 v 29 0 M 269 200 l 152 0  M 421 199 v 159 0 M 422 358 l -136 0" 
						class="" id="path"/>
				</g>
				
				<g id="circlesAnimation" class="opacity00">
					<%
					int i;
					double j;
					for (i = 1, j = 0.3; i <= 10; i++, j+= 0.3) {	
					%>
					<circle id="circle<%=i%>" r="8" cx="0" cy="0" fill="tomato" />
					
					<animateMotion id='animateMotion<%=i%>' xlink:href="#circle<%=i%>" dur="3s" begin="<%=j%>s"
						fill="freeze" repeatCount="indefinite">
						<mpath xlink:href="#path" />
					</animateMotion>
					<%
					}
					%>
				
				</g>
			</svg>
		</div>
		<div class="col-xs-6" style="margin-top: 5%; height: 390px;" id="cycleGraphDiv">
			<svg height="100%" width="100%" class="hide" id="svgCycle">
				<line style="stroke-width: 2; stroke: red;" y2="210" x2="541" y1="210" x1="24"/>
				<text x="-28" y="-20" fill="green" transform="rotate(-92 97,71)">Amplitude</text>
				<line x1="23" y1="19" x2="23" y2="489" style="stroke-width: 2; stroke: red;"/>		
				<path id="path" class="path" d="M 26 209 q 62 -142 120 0 q 62 142 120 0 q 62 -142 120 0 q 62 142 120 0" 
					stroke="blue" stroke-width="3" fill="none"/>
				<text fill="green" y="324" x="60">Wavelength</text>
			</svg>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>

</body>

<script type="text/javascript">
$(document).ready(function () {
	introGuide();
});


function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element : '#infoDiv',
			intro : "",
			tooltipClass : 'hide'
		}, {
			element : "#dcCircuitDiv",
			intro : "",
		}, {
			element : '#cycleGraphDiv',
			intro : "",
		}, {
			element : "#restart",
			intro : '',
			position : 'right'
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
				$("#line1").fadeTo(1000, 1, function() {
				//	$("#line2").fadeTo(1000, 1, function() {
						$("#infoDiv").addClass('z-index9999999');
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							$('.user-btn').remove();
								introjs.nextStep();
						});
				//	});
				});
			break;
		case 'dcCircuitDiv':
		//	$(".path").one("animationend", function() {
		//		$(".path").css({"stroke-dasharray": "0"});
			$('.introjs-helperLayer ').one('transitionend', function() {
				TweenMax.to($('#dcCircuitDiv'), 1, {opacity: 1, onComplete: function() {
					var text = "Let us consider a AC circuit connected to a bulb.";
					typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-btn">Next &#8594;</a>');
						$('.user-btn').click(function() {
							$('.user-btn').remove();
							TweenMax.to($('#circlesAnimation'), 1, {opacity: 1, onComplete: function() {
								bulbAnimationLight(function() {
									blubAnimationRecursion();
									var text = "Notice how current flow in one dircetion and as voltage increases the light bulb gets brighter "+
									"once the voltage reacch its peak current flow stays the same but the voltage begins to drop and the light blub "+
									"gets dimmer once we reach zero volts the voltages polarity changes causing current to flow in the opposite "+
									"direction and again as the voltage gets closer to its peak the bulb gets brighter then dims back down.";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-nextbutton").show();
									});
								});
							}});
						});
					});
				}});
			});
			break;
		case 'cycleGraphDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				TweenMax.to($('#cycleGraphDiv'), 1, {opacity: 1, onComplete: function() {
					var text = "Let us consider AC sine wave. Here we can observe the different voltage variations of the AC circuit.";
					typing(".introjs-tooltiptext", text, function() {
						$("#svgCycle").removeAttr("class");
						$(".path").one("animationend", function() {
							$(".path").css({"stroke-dasharray": "0"});
							$(".introjs-nextbutton").show();
						});
					});
				}});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltiptext").text("Click to restart.");
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}
	
function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function bulbAnimationLight(callBackFunction) {
	$('#bulb-svg').on("load", function() {
		var licht_init = new TimelineLite();
		TweenMax.set($("#licht"), {
			opacity: 0,
			scale: 0.6,
			transformOrigin: "50% 50%"
		});
		TweenMax.set($("#glow"), {
			opacity: 1,
			transformOrigin: "50% 50%",
			stroke: "#3D3D3D"
		});
	});

//	$('#bulb-svg').on('mouseenter',function(i) {
		TweenMax.to($("#bulb_body"), 0.3, {opacity: 1, fill: "#96BF1F"});
		TweenMax.to($("#licht"), 0.3, {opacity: 1, scale: 1}),
		TweenMax.to($("#glow"), 0.3, {opacity: 1,stroke: "#FFFFFF"});
		TweenMax.fromTo($("#licht"), 1, {
			scale: 1,
		}, {
			scale: 1.1,
			repeat: -1,
			yoyo: true
		});
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
//	});
}

function blubAnimationRecursion() {
	TweenMax.to($("#licht > line"), 2, {opacity: 1, repeat: 1, stroke: "#d6ec94"});
	TweenMax.to($("#bulb_body"), 2, {opacity: 1, repeat: 3, fill: "#d6ec94", onComplete: function() {
		$("#path").attr("d", "M 288 358 l 133 0 M 421 359 v -159 0 M 421 200 l -152 0  M 270 200 v -30 0 "+
				"M 277.2 137 v -23 0 M278 113 291 100 M 290 92 l -44 0 M245 101 259 116 M 258.5 114 v 23 0 "+
				"M 248 156 l -132 0 M 117 155 v 203 0 M 116 358 l 134 0 ");
		TweenMax.to($("#licht > line"), 2, {opacity: 1, repeat: 1, stroke: "#96BF1F"});
		TweenMax.to($("#bulb_body"), 2, {opacity: 1, repeat: 3, fill: "#96BF1F", onComplete: function() {
			$("#path").attr("d", "M 250 358 l -134 0 M 117 358 v -203 0 M 116 156 l 132 0 M 258.5 138 v -23 0 M259 116 244 102 M 245 92 l 44 0 "+
					"M277 115 290 100 M 277.2 138 v -23 0  M 270 171 v 29 0 M 269 200 l 152 0  M 421 199 v 159 0 M 422 358 l -136 0");
		}});
	}});
}

</script>
</html>