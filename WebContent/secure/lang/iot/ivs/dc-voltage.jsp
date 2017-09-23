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

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line-css {
	position: relative;
	stroke: red;
	stroke-width: 2;
	marker-end: url("#arrowEnd");
	opacity: 1;
}

#infoDiv {
	/* min-height: 88px; */
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 20.5%;
	margin-top: 2%;
}

.font-size-14 {
	font-size: 14px;
}

.z-index9999999 {
	z-index: 9999999 !important;
}

.user-btn {
	background: green;
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
			<span>DC Voltage</span>
		</h3>
	</div>
	<div class="col-xs-7 col-xs-offset-2">
		<div id="infoDiv" class="font-size-14 margin-top-1">
			<ul>
				<li id="line1" class="opacity00">DC (Direct Current) Voltage represents a voltage that 
					does not vary over time.
				</li>
				<li id="line2" class="opacity00">DC is the unidirectional flow of electric charge.
				<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-6 opacity00" style="height: 390px;" id="dcCircuitDiv">
			<svg style="height: 100%; width: 100%;"> 
				<g>
  					<circle fill="white" stroke-width="2" stroke="#00376f" r="19" cy="224" cx="118"/>
					<text x="108" y="231" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;">DC</text>
					<text style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;" y="199" x="94">+</text>
					<text style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;" y="262" x="94">-</text>
  				</g>
				<g>
					<path id="path" class="path" d="M 117 204 v -104 0 M 117 101 l 304 0 M 420 100 v 92 0 
					M 420 267 v 92 0 M 420 358 l -304 0 M 117 358 v -114 0" stroke="#00376f" stroke-width="2.5" fill="none"/>
				</g>
				<g>
					<circle cx="420" cy="230" r="37" stroke="#00376f" stroke-width="3" fill="white" />
				</g>
				<g id="fanSymbol">
					<circle fill="white" stroke-width="3" stroke="black" r="6" cy="230" cx="420"/>
					<line style="stroke: black; stroke-width: 7;" y2="235" x2="421" y1="260" x1="432"/>
					<line style="stroke: black; stroke-width: 7;" y2="226" x2="423" y1="206" x1="443"/>
					<line style="stroke: black; stroke-width: 7;" y2="230" x2="415" y1="223" x1="387"/>
					<animateTransform id="transformDuration" repeatCount="indefinite" 
						dur="0s" 
						from="0 420.6 229.6" 
						to="360 420.6 229.6" 
						type="rotate" 
						attributeType="XML" 
						attributeName="transform"
					/>
				</g>
				
				<!-- <circle id="circle1" r="10" cx="0" cy="0" fill="tomato" />
				<animateMotion id='animateMotion1' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
				</animateMotion>
				<circle id="circle2" r="10" cx="0" cy="0" fill="tomato" />
				<animateMotion id='animateMotion2' xlink:href="" dur="3s" begin="0.1s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
				</animateMotion>
				<circle id="circle3" r="10" cx="0" cy="0" fill="tomato" />
				<animateMotion id='animateMotion3' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
				</animateMotion> -->
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

		<div class="col-xs-6 opacity00" style="height: 390px;" id="mainDiv">
			<svg height="100%" width="100%" style="">
				<line id="svgLine" x1="24" y1="133" x2="24" y2="133" style="stroke-width: 2; stroke: blue;"/>
				<text x="-28" y="-14" fill="green" transform="rotate(-92 97,71)">Voltage</text>
				<marker style="fill: red;" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2.5" id="arrowEnd">
					<path d="M0,0 L5,2.5 L0,5 Z"/>
				</marker>
				<line class="svg-line-css svg-line1" x1="24" y1="218" x2="336" y2="218"/>
				<line x1="23" y1="97" x2="23" y2="358" style="stroke-width: 2; stroke: red;"/>
				<text x="303" y="244" fill="green">Time</text>
				
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
})

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#circle1, #circle2, #circle3").hide();
	
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
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#dcCircuitDiv',
			intro : "",
		}, {
			element : "#mainDiv",
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
			setTimeout(function () {
				$("#line1").fadeTo(1000, 1, function() {
					$("#line2").fadeTo(1000, 1, function() {
						$("#infoDiv").addClass('z-index9999999');
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							$('.user-btn').remove();
								introjs.nextStep();
						});
					});
				});
			});
			break;
		case 'dcCircuitDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Let us consider a DC supply circuit and observe the flow of electrons direction.";
				typing(".introjs-tooltiptext", text, function() {
					zoomingEffect("#dcCircuitDiv", function() {
						$('.introjs-tooltiptext').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
								'<span class="introjs-button user-btn">Next &#8594;</span>');
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							setTimeout(function() {
								for (i = 1; i <= 3; i++) {
									$("#circle" + i).show();
									$("#animateMotion" + i).attr("xlink:href", "#circle" + i);
								}
								$("#transformDuration").attr("dur", "0.5s");
							}, 1500);
							var text = "When we start the supply the current begins to flow in a single direction and turning the motor.";
							typing(".introjs-tooltiptext", text, function() {
								TweenMax.to($('#circlesAnimation'), 1.5, {opacity: 1, onComplete: function() {
									$(".introjs-nextbutton").show();
								}});
							});
						});
					});
				});
			});
			break;
		case 'mainDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				TweenMax.to($('#mainDiv'), 1.5, {opacity: 1, onComplete: function() {
					TweenMax.to($('#svgLine'), 2, {attr: {x2: '336'}, onComplete: function() {
						var text = "The plot of a dc voltage or current would be a straight horizontal line over time.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					}});
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

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
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
		
</script>
</html>