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
<title>DC Regulator</title>
<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

#mainDiv {
	padding: 34px;
	border: 1px solid;
}

.border {
	border: 1px solid gray;
	padding: 4px;
	opacity: 0;
}

/* .svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line-css {
	position: relative;
	stroke: gray;
	stroke-width: 2;
	marker-end: url("#arrowEnd");
	opacity: 1;
} */

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2; 
	position: relative;
	z-index: 10000000 !important;
	marker-end: url("#arrowEnd"); 
}

.position {
	position: relative;
}

#outputId, #inputId {
	border: 1px solid gray;
	/* background-color: #FFC300; */
	border-radius: 5px;
	width: 30px;
	height: 30px;
	position: relative;
	display: inline-block;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
	border-radius: 2px;
	margin-left: 10px;
	line-height: 32px;
	text-align: center;
}

.popover {
	z-index: 9999999;
	width: 200px;
}

.popover-content {
	background-color: #003399;
	color: white;
	min-height: 30px;
	letter-spacing: 1px;
}

.user-next-btn {
	background-color: green;
}

.user-skip-btn {
	background-color: orange;
	margin-right: 15px;
}

.popover-btn-css {
	text-align: right;
}

.regulator-text {
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
	background: white;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.5s;
	animation-iteration-count: 4;
}

@keyframes blink {
	50% {
		background: #9fbff2;
	}
}

.custom-btn {
	background-color: green;
	/* float: right;
	margin: 0 !important; */
}

.line-css {
	position: relative;
	stroke: black;
	stroke-width: 2;
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

.buttonSpan1 {
	top: 150px;
	position: relative;
	z-index: 1;
	left: 518px;
}

.buttonSpan2 {
	top: 145px;
	position: relative;
	z-index: 1;
	left: -79px;
	float: right;
}

.margin10 {
	margin: 10px 0;
}

.button-css {
	height: 25px;
	cursor: pointer;
	display: inline-block;
	position: relative;
	width: 45px;
}

.z-index9999999 {
	z-index: 9999999 !important;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.8s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {
		background: #9fbff2;
	}
}

.popover-btn-css {
	text-align: right;
	padding: 0;
}

/* span.credits {
    background: url(https://songhay.blob.core.windows.net/shared-styles-svg/akyinkyin.svg) no-repeat top left;
    background-size: contain;
    cursor: pointer;
    display: inline-block;
    height: 52px;
    width: 40px;
}
 */
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>DC Regulator</span>
		</h3>
	</div>
	<div class="col-xs-7 col-xs-offset-2">
		<div id="infoDiv" class="font-size-14 margin-top-1">
			<ul>
				<li id="line1" class="opacity00">A voltage regulator is such a device that maintains constant output voltage, instead of any kind of fluctuations 
					in the input voltage being applied or any variations in current, drawn by the load.
				</li>
			<li id="mainLine" class="opacity00">Basically, there are two types of Voltage regulators:</li>
				
				</ul>
						<ol><li id="linearLine" class="opacity00">Linear voltage regulator</li>
						<li id="switchingLine" class="opacity00">Switching voltage regulator</li>
					</ol>
				</div>
			
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-6 col-xs-offset-3" style="margin-top: 3%;" id="dcRegulatorDiv">
			<div class="col-xs-12 text-center">
				<img alt="" src="../images/voltage-regulator.png" width="40%" id="imageId">
			</div>
			<div class="col-xs-12 opacity00" id="calculationDiv" style="margin-top: 3%;">
				<div class="col-xs-4 text-center">
					<span>Input Voltage</span>
					<input id="inputId" type="text" maxlength="3">
					<!-- <select id="drowdownId" class="position">
						<option value="nineV">9v</option>
						<option value="tenV">10v</option>
						<option value="elevenV">11v</option>
						<option value="twevelV">12v</option>
					</select> -->
				</div>
				<div class="col-xs-4 text-center" style="padding: 5px 15px;">
					<span style="padding: 10px; border: 1px solid; padding: 6px;" id="regulatorId" class="position regulator-text">Regulator</span>
				</div>
				<div class="col-xs-4 text-center">
					<span id="outputId" class="position"><span id="outputIdValue" class="opacity00">5v</span></span>
					<span>Output Voltage</span>
				</div>
			</div>
		</div>
	</div>
		<div class="col-xs-12">
			<div id="linearCircuitDiv" style="margin-top: 3%;" class="col-xs-6">
				<div class="center opacity00" style="height: 300px; width: 660px; padding: 0px;" id="innerDivLinear">
					<svg style="position: absolute; height: 100%; width: 600px;"> 
						<!-- <g> 
							<marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
								<path id="arrowPath" d="M0,0 L0,6 L9,3 z" fill="#f00"/>
							</marker>
							<line id="upArrowSvg" x1="585" y1="147" x2="585" y2="117" stroke="#000" stroke-width="2" marker-end="url(#arrow)"/>
							<line id="downArrowSvg" x1="585" y1="194" x2="585" y2="223" stroke="#000" stroke-width="2" marker-end="url(#arrow)"/>
						</g> -->
						<g>
							<text x="274" y="36" style="font-family: monospace; fill: navy; font-size: 15px;">Linear Regulator</text>
							<path id="path1" class="path"
								d="M 47 158 v -58 0 M 48 101 l 183 0 M 291 100 l166 1 M 456 100 v 80 0"
								stroke="black" stroke-width="2.5" fill="none" />
						</g>
						<g>
							<line y2="140" x2="140" y1="102" x1="140" class="line-css"/>
							<line y2="141" x2="127" y1="141" x1="151" class="line-css"/>
							<line y2="149" x2="127" y1="149" x1="151" class="line-css"/> 
							<line y2="150" x2="140" y1="183" x1="140" class="line-css"/>
							<path style="stroke: black; fill: gray;" d="M 126,171 141,190.5 155,171 z"/>
						</g>
						
						<g>
							<line y2="140" x2="350" y1="102" x1="350" class="line-css"/>
							<line y2="141" x2="339" y1="141" x1="362" class="line-css"/>
							<line y2="149" x2="339" y1="149" x1="362" class="line-css"/> 
							<line y2="150" x2="350" y1="183" x1="350" class="line-css"/>
							<path style="stroke: black; fill: gray;" d="M 336,169 350,188.5 364,169 z"/>
						</g>
						
						<g>
							<rect stroke-width="3" stroke="gray" fill="white" y="79" x="223" height="40px" width="80px"/>
							<text style="font-family: monospace; font-size: 13px;" y="93" x="230">IN</text>
							<text style="font-family: monospace; font-size: 13px;" y="93" x="269">OUT</text>
							<text style="font-family: monospace; font-size: 13px;" y="112" x="251">GND</text>
						</g>
						
						<g>
							<text x="6" y="176" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;">9v</text>
							<circle fill="white" stroke-width="2" stroke="black" r="18" cy="170" cx="47"/>
							<text x="38" y="176" style="font-family: monospace; font-size: 17px; fill: green; font-weight: bold;">DC</text>
						</g>
			
						<g>
							<rect width="35px" height="61px" x="438" y="150" fill="white" stroke="gray" stroke-width="3"/>
							<text x="455" y="164" style="font-family: monospace; font-size: 13px; writing-mode: vertical-rl;">LOAD</text>
		  					<line y2="232" x2="457" y1="210" x1="457" class="line-css"/>
							<line y2="233" x2="437" y1="233" x1="478" class="line-css"/>
							<line y2="243" x2="441" y1="243" x1="474" class="line-css"/>
							<line y2="253" x2="444" y1="253" x1="470" class="line-css"/>
							<text x="408" y="190" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;">5v</text>
							<text x="482" y="190" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;" id="currentValueInLR">2A</text>
							<!-- <text id="ampsSymbol" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;" y="170" x="609">A</text> -->
						</g>
						
						<circle id="circle1" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion1' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path1" />
						</animateMotion>
			
						<circle id="circle2" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion2' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path1" />
						</animateMotion>
				</svg>
				<span class="buttonSpan1">
						<div class="margin10">
						<button id="linearUpButton" class="button-css">
							<i aria-hidden="true" class="fa fa-arrow-up"></i>
	  					</button>
		  				</div>
		  				<div class="margin10">
							<button id="linearDownButton" class="button-css">
								<i aria-hidden="true" class="fa fa-arrow-down"></i>
		  					</button>
		  				</div>
		  			</span>
				<!-- <div class="col-xs-4" style="position: relative; left: 45%; top: 106%;">
					<span>Load Current : </span>
					<input id="inputVal" min="0.1" max="2" step="0.1" value="0.1" style="position: relative; width: 60px;" type="number">
				</div> -->
				</div>
				
			</div>
			
			<div id="switchingCircuitDiv" style="margin-top: 3%;" class="col-xs-6">
				<div class="center opacity00" style="height: 300px; width: 660px; padding: 0px;" id="innerDivSwitch">
					<svg style="position: absolute; height: 100%; width: 600px;">
						<text x="257" y="36" style="font-family: monospace; fill: navy; font-size: 15px;">Switching Regulator</text>
						<path id="path2" class="path"
							d="M 47 158 v -58 0 M 48 101 l 183 0 M 291 100 l166 1 M 456 100 v 80 0"
								stroke="black" stroke-width="2.5" fill="none" />
						</g>
						<g>
							<line y2="140" x2="140" y1="102" x1="140" class="line-css"/>
							<line y2="141" x2="127" y1="141" x1="151" class="line-css"/>
							<line y2="149" x2="127" y1="149" x1="151" class="line-css"/> 
							<line y2="150" x2="140" y1="183" x1="140" class="line-css"/>
							<path style="stroke: black; fill: gray;" d="M 126,171 141,190.5 155,171 z"/>
						</g>
						
						<g>
							<line y2="140" x2="350" y1="102" x1="350" class="line-css"/>
							<line y2="141" x2="339" y1="141" x1="362" class="line-css"/>
							<line y2="149" x2="339" y1="149" x1="362" class="line-css"/> 
							<line y2="150" x2="350" y1="183" x1="350" class="line-css"/>
							<path style="stroke: black; fill: gray;" d="M 336,169 350,188.5 364,169 z"/>
						</g>
						
						<g>
							<rect stroke-width="3" stroke="gray" fill="white" y="79" x="223" height="40px" width="80px"/>
							<text style="font-family: monospace; font-size: 13px;" y="93" x="230">IN</text>
							<text style="font-family: monospace; font-size: 13px;" y="93" x="269">OUT</text>
							<text style="font-family: monospace; font-size: 13px;" y="112" x="251">GND</text>
						</g>
						
						<g>
							<text x="6" y="176" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;">9v</text>
							<circle fill="white" stroke-width="2" stroke="black" r="18" cy="170" cx="47"/>
							<text x="38" y="176" style="font-family: monospace; font-size: 17px; fill: green; font-weight: bold;">DC</text>
						</g>
			
						<g>
							<rect width="35px" height="61px" x="438" y="150" fill="white" stroke="gray" stroke-width="3"/>
							<text x="455" y="164" style="font-family: monospace; font-size: 13px; writing-mode: vertical-rl;">LOAD</text>
		  					<line y2="232" x2="457" y1="210" x1="457" class="line-css"/>
							<line y2="233" x2="437" y1="233" x1="478" class="line-css"/>
							<line y2="243" x2="441" y1="243" x1="474" class="line-css"/>
							<line y2="253" x2="444" y1="253" x1="470" class="line-css"/>
							<text x="408" y="190" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;">5v</text>
							<text id="currentValueInSWR" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;" x="482" y="190">0.5</text>
							<text id="symbolA" style="font-family: monospace; font-size: 17px; fill: ; font-weight: bold;" y="190" x="514">A</text>
						</g>
						
						<circle id="circle3" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion3' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path2" />
						</animateMotion>
			
						<circle id="circle4" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion4' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path2" />
						</animateMotion>
				</svg>
					<span class="buttonSpan2">
						<div class="margin10">
						<button id="upButton" class="button-css">
							<i aria-hidden="true" class="fa fa-arrow-up"></i>
	  					</button>
		  				</div>
		  				<div class="margin10">
							<button id="downButton" class="button-css">
								<i aria-hidden="true" class="fa fa-arrow-down"></i>
		  					</button>
		  				</div>
		  			</span>
				</div>
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
var typingInterval = 10;
$(document).ready(function () {
	introGuide();
	$("#circle1, #circle2, #circle3, #circle4").hide();
	$("#linearUpButton, #linearDownButton, #upButton, #downButton").hide();
	/* $("#buttonId").click(function() {
		console.log("clicked");
	}); */
});


function passingVoltageLinear() {
	setTimeout(function() {
		$("#circle1, #circle2").show()
		$("#animateMotion1").attr("xlink:href", "#circle1");
		$("#animateMotion2").attr("xlink:href", "#circle2");
	//	$(".introjs-nextbutton").show();
	}, 1500);
}

function passingVoltageSwitch() {
	setTimeout(function() {
		$("#circle3, #circle4").show()
		$("#animateMotion3").attr("xlink:href", "#circle3");
		$("#animateMotion4").attr("xlink:href", "#circle4");
	//	$(".introjs-nextbutton").show();
	}, 1500);
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("body").on('hide.bs.popover', function() {
		return false;
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
		steps :[/*  {
			element : "#mainDiv",
			intro : "",
			tooltipClass : 'hide'
		}, */ {
			element : '#infoDiv',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#imageId',
			intro : '',
			position : 'right'
		}, {
			element : "#dcRegulatorDiv",
			intro : '',
			position : 'right'
			/* tooltipClass : 'hide'  */
		}, {
			element : "#linearCircuitDiv",
			intro : '',
		}, {
			element : "#switchingCircuitDiv",
			intro : '',
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
		//	$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			setTimeout(function () {
				$("#line1").fadeTo(1000, 1, function() {
					$("#mainLine").fadeTo(1000, 1, function() {
						$("#linearLine").fadeTo(1000, 1, function() {
							$("#switchingLine").fadeTo(1000, 1, function() {
						//	$("#switchingLine").addClass('z-index9999999');
								setTimeout(function () {
									introjs.nextStep();
								}, 100);
							});
						});
					});
				});
			});
			break;
		case 'mainDiv':
			svgAppend("#mainDiv", "svg");
			svgMarkerAppend("#svg", "arrow");
			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#mainDiv", "#firstDivChildSpan", "#controllerSpan", "#svg", "line1", "arrow", function() {
				TweenMax.to($("#controllerSpan"), 1.5, {opacity: 1, onComplete: function() {
					svgAnimatingLineSelector1RightSideToSelector2LeftSide("#mainDiv", "#controllerSpan", "#firstDivChildSpanSecond", "#svg", "line2", "arrow", function() {
						TweenMax.to($("#text2"), 1.5, {opacity: 1, onComplete: function() {
							svgAnimatingLinetopToBottom("#mainDiv", "#firstDivChildSpanSecond", "#sampleCircuitSpan", "#svg", "line7", "arrow", function() {
								TweenMax.to($("#sampleCircuitSpan"), 1.5, {opacity: 1, onComplete: function() {
									svgAnimatingLineSelector1BottomSideToSelector2TopSide("#mainDiv", "#sampleCircuitSpan", "#thirdDivChildSpan", "#svg", "line3", "", function() {
										svgAnimatingLineSelector1LeftSideToSelector2RightSide("#mainDiv", "#thirdDivChildSpan", "#comparatorSpan", "#svg", "line4", "arrow", function() {
											TweenMax.to($("#text4"), 1.5, {opacity: 1, onComplete: function() {
												TweenMax.to($("#comparatorSpan"), 1.5, {opacity: 1, onComplete: function() {
													TweenMax.to($("#referenceSpan"), 1.5, {opacity: 1, onComplete: function() {
														svgAnimatingLineSelector1RightSideToSelector2LeftSide("#mainDiv", "#referenceSpan", "#comparatorSpan", "#svg", "line5", "arrow", function() {
															svgAnimatingLineSelector1TopSideToSelector2BottomSide("#mainDiv", "#comparatorSpan", "#controllerSpan", "#svg", "line6", "arrow", function() {
																TweenMax.to($("#text3"), 1.5, {opacity: 1, onComplete: function() {
																	setTimeout(function() {
																		introjs.nextStep();
																	}, 1000);
																}});
															});
														});
													}});
												}});
											}});
										});
									});
								}});
							});
						}});
					});
				}});
			});
											
			break;
		case 'imageId':
			var text = "Let us consider the voltage regulator circut."
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'dcRegulatorDiv':
			$(".introjs-helperLayer").one("transitionend", function() {
				regulatorOperation();
			});
			break;
		case 'linearCircuitDiv':
			$(".introjs-helperLayer").one("transitionend", function() {
				zoomingEffect("#innerDivLinear", function() {
					passingVoltageLinear();
					var text = "Let us consider a linear regulator circuit. In this linear regulator the current does not "+
					"vary when the load incresed or decreased.";
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$(".introjs-tooltipbuttons").append('<div class="introjs-tooltipbuttons popover-btn-css">'+
								'<a class="introjs-button custom-btn">Next &#8594;</a>');
						$(".custom-btn").click(function() {
							$(".custom-btn").remove();
							$("#linearUpButton, #linearDownButton").fadeIn("slow", function() {
								var text = "Click on up and down arrows to increase or decrease the load.";
								typing(".introjs-tooltiptext", text, typingInterval, function() {
									$("#linearUpButton").on("click", function() {
										$(".introjs-nextbutton").show();
									});
									$("#linearDownButton").on("click", function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
			});
			break;
		case 'switchingCircuitDiv':
			$(".introjs-helperLayer").one("transitionend", function() {
				zoomingEffect("#innerDivSwitch", function() {
					passingVoltageSwitch();
					var text = "Let us consider a switching regulator circuit. In this switching regulator the current may vary"+
					" when the load incresed or decreased.";
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$('.introjs-tooltipbuttons').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
								'<span class="introjs-button custom-btn">Next &#8594;</span>');
						$(".custom-btn").click(function() {
							$(".custom-btn").remove();
							$("#upButton, #downButton").fadeIn("slow", function() {
								var text = "Click on up and down arrows to increase or decrease the load.";
								typing(".introjs-tooltiptext", text, typingInterval, function() {
									$("#upButton").on("click", function() {
										increment();
										$(".introjs-nextbutton").show();
									});
									$("#downButton").on("click", function() {
										decrement();
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
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

/* function increment() {
	if($("#upButton").hasClass("clicked")) {
	  return;
	}
	$("#upButton").addClass("clicked");
	$("symbolA").remove();
	$("#currentValueInSWR").text(parseFloat($("#currentValueInSWR").text()) + 0.1 + "A");
	$("#upButton").removeClass("clicked");
} */

function increment() {
	//$("#symbolA").remove();
	
	if (parseFloat($("#currentValueInSWR").text()) < 2) {
		$("#currentValueInSWR").text((parseFloat($("#currentValueInSWR").text()) + 0.1).toFixed(1));
		if ($("#currentValueInSWR").text().length == 1) {
			$("#symbolA").attr("x", "587");
		}
	}
}

function decrement() {
	//$("#symbolA").remove();
	if (parseFloat($("#currentValueInSWR").text()) > 0.1) {
		$("#currentValueInSWR").text((parseFloat($("#currentValueInSWR").text()) - 0.1).toFixed(1));
		if ($("#currentValueInSWR").text().length == 1) {
			$("#symbolA").attr("x", "587");
		}
	}
}

function regulatorOperation(callBackFunction) {
	$('.introjs-tooltip').addClass("hide");
	$("#calculationDiv").removeClass("opacity00");
	$("#inputId").popover({
		placement: 'bottom',
		toggle: 'true',
		/* viewport: $("#firstId"), */
		html: true,
		trigger: 'focus',
		content: '<div id="popover1"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
	var text = "Enter an input voltage between 9v to 12v.";
	typing("#popover1", text, typingInterval, function() {
		$('#popover1').append('<div class="introjs-tooltipbuttons popover-btn-css"><span class="introjs-button custom-btn">Next &#8594;</span></div>');
		$(".custom-btn").hide();
		$("#inputId").focus();
		$("#inputId").keyup(function() {
			var inputText = $("#inputId").val();
			var inputNumber = inputText.substring(0, inputText.length - 1);
			if (inputNumber >= 9 && inputNumber <= 12 && (inputText.endsWith("v") || inputText.endsWith("V"))) {
				$(".custom-btn").show();
				$(".custom-btn").on("click", function() {
					$('.popover').hide();
					$(".custom-btn").remove();
					svgAppend("#dcRegulatorDiv", "svg1");
					svgMarkerAppend("#svg1", "arrow1");
					svgAnimatingLineSelector1RightSideToSelector2LeftSide("#dcRegulatorDiv", "#inputId", "#regulatorId", "#svg1", "lineA", "arrow1", function() {
						$("#regulatorId").addClass("blinking").one('animationend', function() {
							svgAnimatingLineSelector1RightSideToSelector2LeftSide("#dcRegulatorDiv", "#regulatorId", "#outputId", "#svg1", "lineB", "arrow1", function() {
								$("#outputIdValue").html("5v");
								$("#regulatorId").removeClass("blinking");
								zoomingEffect("#outputIdValue", function() {
									$('.introjs-tooltip').removeClass("hide");
									var text = "The voltage regulator is to automatically maintain a constant voltage level."
									typing(".introjs-tooltiptext", text, typingInterval, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
			} else {
				$(".custom-btn").hide();
			}
		});
	});
}

function dynamicSteps(stepName, animatedStep, tooltipClass, position) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : tooltipClass,
			animateStep: animatedStep,
			position : position
	}
	introjs.insertOption(introjs._currentStep + 1, options);
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function typing(typingId, text, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = ($(selector1).offset().left - parentOffset.left) + 6;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1BottomSideToSelector2TopSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = ($(selector2).offset().top - parentOffset.top) + 14.5;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLinetopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = '76%';
	var y1 = '20%';
	var x2 = '76%';
	var y2 = '43%';
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
</script>
</html>