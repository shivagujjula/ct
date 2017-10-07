<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<title>sum time complexity</title>
<style type="text/css">
#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 20.5%;
	margin-top: 2%;
}

.user-btn {
	background: green;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
}

td, th {
    padding: 2px 8px;
}

.td-code-text {
	font-family: monospace;
}

th, td:nth-child(1), td:nth-child(3) {
	text-align: center;
}

th:nth-child(3) {
	width: 30%;
}

td:nth-child(4) {
	text-align: center;
}

.popover {
	z-index: 9999999;
	width: 400px;
}

.popover-content {
    background-color: #003399;
    color: white;
    min-height: 30px;
    letter-spacing: 1px;
}

.arrow {
	top: 20px !important;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.step-color-css {
	color: #eac807;
	font-size: 14px;
	font-weight: bold;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.4s;
	animation-iteration-count: 3;
}

@keyframes blink {
	50% {
		background: #da5805;
	}
}

.ui-effects-transfer {
	border: 1px solid green;
	 z-index: 9999999 !important;
}

.ct-color-green {
	color: green;
	font-weight: bold;
}

.steps-heading-css {
	text-decoration: underline;
	color: #820202;
}

.code-heading-css {
	text-decoration: underline;
	color: #026302;
}

.units-heading-css {
	text-decoration: underline;
	color: darkmagenta;
}

.for-loop-li-css {
	color: #00ff8d;
	font-weight: bold;
	font-size: 14px;
}

.z-index9999999 {
	z-index: 9999999;
	background: white;
}

#finalDiv {
	border: 1px solid;
	border-radius: 6px;
	padding: 4px;
	margin-left: 29%;
}

.ct-code-teal {
	color: #54f309;
	font-weight: bold;
} 

.ct-color-boolean {
	color: #4ce8fb;
}

.ct-color-yellow {
	color: yellow;
}

.position {
	position: relative;
}

.popover-btn-css {
	text-align: right;
	padding: 0;
}

.color-green {
	color: green;
	font-weight: bold;
}

.color-maroon {
	color: maroon;
	font-weight: bold;
}

.color-deeppink {
	color: deeppink;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of sum( )</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-5">
		<div class="col-xs-8 col-xs-offset-2 opacity00" id="divTable" style="background: antiquewhite;">
			<table align="center">
				<tbody>
					<tr>
						<th class="steps-heading-css">Steps</th>
						<th class="code-heading-css">Code</th>
						<th class="units-heading-css">Units</th>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo1">1.</td>
						<td class="td-code-text" id="tdCodeLine1">&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine1">
						<span class="color-green">int</span> sum(<span class="color-green">int</span> n) {</span>
						</td>
						<td class="opacity00" id="unitLine1">
							<span id="unitLineText1" style="padding: 2px 42px;">0</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo2">2.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine2">
						<span class="color-green">int</span> i, j, total <span id="operator1">=</span> <span class="color-deeppink">0</span>;</span>
						</td>
						<td class="opacity00" id="unitLine2">
							<span id="unitLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo3">3.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine3">
							<span class="color-maroon">for</span>(<span id="forInit">i = <span class="color-deeppink">0</span>;</span>
							 <span id="forCondition">i < n;</span> <span id="forIncrement">i++</span>) {</span>
						</td>
						<td class="opacity00" id="unitLine3">
							<span id="unitLineText3" style="padding: 2px 2px;"><span id="initUnitNo">1</span> + <span id="conditionUnitNo">(n + 1)</span> 
							+ <span id="incrementUnitNo">n</span></span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo4">4.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine4">
							<span class="color-maroon">for</span>(<span id="forInit2">j = <span class="color-deeppink">0</span>;</span>
							 <span id="forCondition2">j < n;</span> <span id="forIncrement2">j++</span>) {</span>
						</td>
						<td class="opacity00" id="unitLine4">
							<span id="unitLineText4" style="padding: 2px 2px;"><span id="initUnitNo2">n</span> + <span id="conditionUnitNo2">n * (n + 1)</span> 
							+ <span id="incrementUnitNo2">n<sup>2</sup></span></span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo5">5.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine5">
								total<span id="incrementOperator">++</span>;</span>
						</td>
						<td class="opacity00" id="unitLine5">
							<span id="unitLineText5" style="padding: 2px 32px;">n<sup>2</sup></span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine6">}</span>
						</td>
						<td class="opacity00" id="unitLine6">
							<span id="unitLineText6" style="padding: 2px 42px;">0</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo7">7.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine7">}</span>
						</td>
						<td class="opacity00" id="unitLine7">
							<span id="unitLineText7" style="padding: 2px 42px;">0</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo8">8.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine8">
							<span id="returnOperator" class="color-maroon">return</span> total;</span>
						</td>
						<td class="opacity00" id="unitLine8">
							<span id="unitLineText8" style="padding: 2px 42px;">1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo9">9.</td>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine9">}</span>
						</td>
						<td class="opacity00" id="unitLine9">
							<span id="unitLineText9" style="padding: 2px 42px;">0</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo10">10.</td>
						<td class="td-code-text">
							<span class="opacity00" id="codeLine10" style="float: right;">Total = </span>
						</td>
						<td class="opacity00" id="unitLine10">
							<span id="unitLineText10" style="padding: 2px 42px; background: aquamarine">3n<sup>2</sup> + 4n + 3</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5 col-xs-offset-4 opacity00" id="finalDiv">
			<span id="finalLine1" class="opacity00">&#10003;The total number of units taken for the sum( ) = 
				<span id="conclusionId">3<span id="alphabetN1">n<sup>2</sup></span> + 4n + 3</span></span><br>
			<span id="finalLine2" class="opacity00">&#10003;The time complexity of sum( ) = <span style="font-family: monospace; color: #0849a0;">
				big O(<span id="alphabetN2" class="opacity00 position">n<sup>2</sup></span>)</span>.</span>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
//	$(".opacity00").removeClass("opacity00");
	introGuide();
});

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if(e.keyCode == 13) {
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
		steps :[/* {
			element : '#infoDiv',
			intro : "",
			tooltipClass : 'hide'
		},  */{
			element : '#divTable',
			intro : '',
			animateStep : 'codeReveledAction'
		}, {
			element : '#divTable',
			intro : '',
			animateStep : 'explanationOfUnits',
			tooltipClass : 'hide'
		}, {
			element : '#finalDiv',
			intro : '',
			tooltipClass : 'hide'
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
					$("#line2").fadeTo(1000, 1, function() {
						$("#infoDiv").addClass('z-index9999999');
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							$('.user-btn').remove();
								introjs.nextStep();
						});
					});
				});
			break;
		case 'divTable':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'codeReveledAction':
			//	$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-tooltip").hide();	
				TweenMax.to($("#divTable"), 1, {opacity: 1, onComplete: function() {
					codeLinesReveledFunction(1);
				}});
			//	});
				break;
			case 'explanationOfUnits':
				$("#codeLine1").css("background", "#c0e1fb");
				svgAppend($('#divTable'), 'svg');
				svgMarkerAppend($('#svg'), 'marker');
				svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine1', '#unitLineText1', '#svg', 'svgLine1', 'marker', function() {	
					TweenMax.to($("#unitLine1"), 1, {opacity: 1, onComplete: function() {
						$("#unitLineText1").popover({
							placement: 'right',
							html: true,
							trigger: 'focus',
							content: '<div id="popover1"></div>',
						}).popover('show');
						$(".popover").css({"top" : "0px;"});
						var text = "<span class='step-color-css'>Step 1 :</span> This is the function header and no operation is involved so "+
						"the <span class='ct-code-teal'>unit of time</span> count is <span class='ct-code-b-yellow'>0</span>.";
						typing("#popover1", text, function() {
							$('#popover1').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<span class="introjs-button user-btn" onclick="secondStepAnimation()">Next &#8594;</span></div>');
						});
					}});
				});
				
				break;
			}
			break;
		case 'finalDiv':
			$("#unitLineText10").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#finalDiv"), 1, {opacity: 1, onComplete: function() {
					$("#finalDiv").addClass("z-index9999999");
					TweenMax.to($("#finalLine1"), 1, {opacity: 1, onComplete: function() {
						TweenMax.to($("#finalLine2"), 1, {opacity: 1, onComplete: function() {
							$("#conclusionId").effect('highlight',{color:'#da5805'}, 1500, function() {
								$("#alphabetN1").effect('highlight',{color:'#da5805'}, 1500, function() {
									tweenmaxAnimation("#alphabetN1", "#alphabetN2", function() {
										setTimeoutFunction();
									});
								});
							});
						}});
					}});
				}});
			});
			break;
		case "restart":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					});
				});
			break;
		}
	});
	introjs.start();
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	}, 2000);
}

function codeLinesReveledFunction(i) {
	$("#stepNo" + i).fadeTo("slow", 1);
	$("#codeLine" + i).fadeTo("slow", 1, function() {
		if (i < ($("tr td:nth-child(2)").length - 1)) {
			codeLinesReveledFunction(++i);
		} else {
			$(".introjs-tooltip").show();
			var text = "This is the iterative code to find the sum of a given number.<b/>" + 
			"<ul><li>Now find the <span class='ct-code-b-yellow'>time complexity</span> of this function.</li>"+
			"<li>The total number of units is measured depending upon the number of <span class='ct-code-b-yellow'>operations</span> "+
			"done in the code.</li></ul>"
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		}
	});
}

function secondStepAnimation() {
	$("#codeLine2").css("background", "#c0e1fb");
	$("#unitLineText1").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitLineText2', '#svg', 'svgLine2', 'marker', function() {	
		TweenMax.to($("#unitLine2"), 1, {opacity: 1, onComplete: function() {
			$("#operator1").addClass("blinking").one('animationend', function() {
				$("#operator1").removeClass("blinking");
				$("#unitLineText2").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover2"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
			//	$("#operator1").effect('highlight',{color:'#da5805'}, 2000, function() {
				var text = "<span class='step-color-css'>Step 2 :</span> Only one operator "+
				"<span class='ct-code-b-yellow'>=</span> is used in this statement, it takes "+
				"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.";
				typing("#popover2", text, function() {
					$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="thirdStepAnimation()">Next &#8594;</span></div>');
				});
			});
		}});
	});
}

function thirdStepAnimation() {
	$("#codeLine3").css("background", "#c0e1fb");
	$("#unitLineText2").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3', '#unitLineText3', '#svg', 'svgLine3', 'marker', function() {	
		TweenMax.to($("#unitLine3"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText3").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover3"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span id='popover3Text1'><span class='step-color-css'>Step 3 :</span><br/>This for loop involves three instructions which are "+
			"<span class='ct-code-b-yellow'>initialization</span>, "+
			"<span class='ct-code-b-yellow'>condition</span> and <span class='ct-code-b-yellow'>increment</span> part.</span>"
			typing("#popover3", text, function() {
				$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					thirdStepAnimationSecondStep();
				});
			});
		}});
	});
}

function thirdStepAnimationSecondStep() {
	$("#popover3Text1").after("<span><ul><li id='initLine'><span class='for-loop-li-css'>i = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
	typing("#initLine", $("#initLine").html(), function() {
		$("#forInit").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit", "#initUnitNo", function() {
				$("#initUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
					$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>i < n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n</span> "+
								"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>n+1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine", $("#conditionLine").html(), function() {
							$("#forCondition").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition", "#conditionUnitNo", function() {
									$("#conditionUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
										$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
												'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>i++</span><br>In the "+
													"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
													"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
													"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n</span>) number "+
													"of times. So it takes <span class='ct-code-b-yellow'>n</span> "+
													"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine", $("#incrementLine").html(), function() {
												$("#forIncrement").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement", "#incrementUnitNo", function() {
														$("#incrementUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
																	'<span class="introjs-button user-btn" '+
																	'onclick="fourthStepAnimation()">Next &#8594;</span></div>');
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function fourthStepAnimation() {
	$("#codeLine4").css("background", "#c0e1fb");
	$("#unitLineText3").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine4', '#unitLineText4', '#svg', 'svgLine4', 'marker', function() {	
		TweenMax.to($("#unitLine4"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText4").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover4"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span id='popover4Text1'><span class='step-color-css'>Step 4 :</span><br/>This <span class='ct-code-b-yellow'>for</span> loop "+
			"as <span class='for-loop-li-css'>inner loop</span> of the another <span class='ct-code-b-yellow'>for</span> loop.</span>";
			typing("#popover4", text, function() {
				$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					fourthStepAnimationSecondStep();
				});
			});
		}});
	});
}

function fourthStepAnimationSecondStep() {
	$("#popover4Text1").after("<span><ul><li id='initLine2'><span class='for-loop-li-css'>j = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>. But this loop executes <span class='ct-code-b-yellow'>n</span> times because of "+
			"the inner for loop. So it takes <span class='ct-code-b-yellow'>n*1 = n</span> <span class='ct-code-teal'>units of time</span>.</li>"+
			"</ul></span>");
	typing("#initLine2", $("#initLine2").html(), function() {
		$("#forInit2").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit2", "#initUnitNo2", function() {
				$("#initUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
					$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#initLine2").after("<li id='conditionLine2'><span class='for-loop-li-css'>j < n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n</span> "+
								"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>n+1</span> "+
								"<span class='ct-code-teal'>units of time</span>. But this loop executes <span class='ct-code-b-yellow'>n</span> "+
								"times because of "+
								"the inner for loop. So it takes <span class='ct-code-b-yellow'>n*(n+1) = n<sup>2</sup>+n</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine2", $("#conditionLine2").html(), function() {
							$("#forCondition2").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition2", "#conditionUnitNo2", function() {
									$("#conditionUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
										$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
												'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$("#conditionLine2").after("<li id='incrementLine2'><span class='for-loop-li-css'>j++</span><br>In the "+
													"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
													"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
													"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n</span>) number "+
													"of times. So it takes <span class='ct-code-b-yellow'>n</span> "+
													"<span class='ct-code-teal'>units of time</span>. But this loop executes "+
													"<span class='ct-code-b-yellow'>n</span> times because of "+
													"the inner for loop. So it takes <span class='ct-code-b-yellow'>n*n = n<sup>2</sup></span> "+
													"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine2", $("#incrementLine2").html(), function() {
												$("#forIncrement2").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement2", "#incrementUnitNo2", function() {
														$("#incrementUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
																	'<span class="introjs-button user-btn" '+
																	'onclick="fifthStepAnimation()">Next &#8594;</span></div>');
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function fifthStepAnimation() {
	//$(".user-btn").remove();
	$("#codeLine5").css("background", "#c0e1fb");
	$("#unitLineText4").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine5', '#unitLineText5', '#svg', 'svgLine5', 'marker', function() {	
		TweenMax.to($("#unitLine5"), 1, {opacity: 1, onComplete: function() {
			$("#incrementOperator").addClass("blinking").one('animationend', function() {
				$("#incrementOperator").removeClass("blinking").off();
				$("#unitLineText5").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover5"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span class='step-color-css'>Step 5 :</span><br/><ul><li> Only one statement is involved in the for loop which contains" +
						" only one operator <span class='ct-code-b-yellow'>++</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>n</span> "+
				"number of <span class='ct-code-teal'>units of time</span>. But this statement involved in two inner for loops i.e. "+
				"number of <span class='ct-code-teal'>units of time</span> is <span class='ct-code-b-yellow'>n*n=n<sup>2</sup></span></li></ul>";
				typing("#popover5", text, function() {
					$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="sixthStepAnimation()">Next &#8594;</span></div>');
				});
			});
		}});
	});
}

function sixthStepAnimation() {
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitLine6"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText6").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover6"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span class='step-color-css'>Step 6 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover6", text, function() {
				$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="seventhStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function seventhStepAnimation() {
	$("#codeLine7").css("background", "#c0e1fb");
	$("#unitLineText6").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine7', '#unitLineText7', '#svg', 'svgLine7', 'marker', function() {	
		TweenMax.to($("#unitLine7"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText7").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover7"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span class='step-color-css'>Step 7 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover7", text, function() {
				$('#popover7').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="eigthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function eigthStepAnimation() {
	$("#codeLine8").css("background", "#c0e1fb");
	$("#unitLineText7").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine8', '#unitLineText8', '#svg', 'svgLine8', 'marker', function() {	
		TweenMax.to($("#unitLine8"), 1, {opacity: 1, onComplete: function() {
			$("#returnOperator").addClass("blinking").one('animationend', function() {
				$("#returnOperator").removeClass("blinking");
				$("#unitLineText8").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover8"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span class='step-color-css'>Step 8 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
					"<span class='ct-code-b-yellow'>1</span> unit of time.";
				typing("#popover8", text, function() {
					$('#popover8').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="ninenthStepAnimation()">Next &#8594;</span></div>');
				});
			});
		}});
	});
}

function ninenthStepAnimation() {
	$("#codeLine9").css("background", "#c0e1fb");
	$("#unitLineText8").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine9', '#unitLineText9', '#svg', 'svgLine9', 'marker', function() {	
		TweenMax.to($("#unitLine9"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText9").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover9"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span class='step-color-css'>Step 9 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover9", text, function() {
				$('#popover9').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="tenthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}


function tenthStepAnimation() {
	$("#unitLineText9").popover('hide');
	TweenMax.to($("#unitLine10, #codeLine10"), 1, {opacity: 1, onComplete: function() {
		$("#unitLineText10").popover({
			placement: 'right',
			html: true,
			trigger: 'focus',
			content: '<div id="popover10"></div>',
		}).popover('show');
		$(".popover").css({"top" : "0px;"});
		var text = "The total unit count is <span class='ct-code-b-yellow'>3n<sup>2</sup> + 4n + 3</span>.";
		typing("#popover10", text, function() {
			$('#popover10').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<span class="introjs-button user-btn">Next &#8594;</span></div>');
			$(".user-btn").click(function() {
			//	$("#unitLineText10").popover('hide');
				introjs.nextStep();
			})
		});
	}});
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

function transferEffectFunction(selector1, selector2, callBackFunction) {
	$(selector1).effect("transfer", { to: $(selector2)}, 1000).addClass(".ui-effects-transfer", function() {
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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
	TweenMax.to($('#' + svgLineId).show(),0.6, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
</script>
</html>