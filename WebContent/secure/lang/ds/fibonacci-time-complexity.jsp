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

<title>fibonacci time complexity</title>

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
   /*  border: 1px solid #dddddd; */
    /* text-align: left; */
    padding: 2px 8px;
}

.td-code-text {
	font-family: monospace;
	/* font-style: italic; */
	font-weight: bold;
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
	animation-duration: 0.8s;
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

/* .td-code-text {
	background: #c0e1fb;
} */

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

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of fibonacci( )</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-5">
		<div class="col-xs-8 col-xs-offset-2 opacity00" id="divTable" style="background: antiquewhite;">
			<table align="center">
				<tbody>
					<tr>
						<th class="steps-heading-css">Steps</th>
						<th class="code-heading-css">Code</th>
						<th class="units-heading-css" style="text-align: end;">Units</th>
					</tr>
					<tr>
						<th class="steps-heading-css"></th>
						<th class="code-heading-css"></th>
						<th><span class="opacity00" id="unitsForLessThanOne">n <= 1</span></th>
						<th><span class="opacity00" id="unitsForGreaterThanOne">n > 1</span></th>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo1">1.</td>
						<td class="td-code-text" id="tdCodeLine1">
							&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine1">int fibonacci(int n) {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd1">
							<span id="unitFirstLineText1" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd1">
							<span id="unitSecondLineText1" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo2">2.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine2">int f1 
							<span id="operator1">=</span> 1, f2 <span id="operator2">=</span> 1, f3;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd2">
							<span id="unitFirstLineText2" style="padding: 2px 42px;">2</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd2">
							<span id="unitSecondLineText2" style="padding: 2px 42px;">2</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo3">3.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine3">if (<span id="ifCondition">n <= 1</span>) {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd3">
							<span id="unitFirstLineText3" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd3">
							<span id="unitSecondLineText3" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo4">4.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine4">return n;</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd4">
							<span id="unitFirstLineText4" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd4">
							<span id="unitSecondLineText4" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo5">5.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine5">} <span id="elseCondition">else</span> {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd5">
							<span id="unitFirstLineText5" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd5">
							<span id="unitSecondLineText5" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<!-- <tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine6"><span id="elseCondition">else</span> {</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd6">
							<span id="unitFirstLineText6" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd6">
							<span id="unitSecondLineText6" style="padding: 2px 42px;">-</span>
						</td>
					</tr> -->
					<tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine6">
							for(<span id="forInit">i = 2;</span> <span id="forCondition">i <= n;</span> <span id="forIncrement">i++</span>) {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd6">
							<span id="unitFirstLineText6" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd6">
							<span id="unitSecondLineText6" style="padding: 2px 2px;"><span id="initUnitNo">1</span> + <span id="conditionUnitNo">n - 1 + 1 </span> 
							+ <span id="incrementUnitNo">n - 1</span></span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo7">7.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine7">
								f3 <span id="equalOperator">=</span> f1 <span id="plusOperator">+</span> f2;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd7">
							<span id="unitFirstLineText7" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd7">
							<span id="unitSecondLineText7" style="padding: 2px 42px;">2n - 2</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo8">8.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine8">
								f1 <span id="equalOperator2">=</span> f2;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd8">
							<span id="unitFirstLineText8" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd8">
							<span id="unitSecondLineText8" style="padding: 2px 42px;">n - 1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo9">9.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine9">
								f2 <span id="equalOperator3">=</span> f3;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd9">
							<span id="unitFirstLineText9" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd9">
							<span id="unitSecondLineText9" style="padding: 2px 42px;">n - 1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo10">10.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine10">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd10">
							<span id="unitFirstLineText10" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd10">
							<span id="unitSecondLineText10" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo11">11.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine11">
							<span id="returnOperator">return</span> f3;</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd11">
							<span id="unitFirstLineText11" style="padding: 2px 42px;">1</span></td>
						<td class="opacity00" id="unitSecondLineTd11">
							<span id="unitSecondLineText11" style="padding: 2px 42px;">1</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo12">12.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine12">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd12">
							<span id="unitFirstLineText12" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd12">
							<span id="unitSecondLineText12" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo13">13.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine13">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd13">
							<span id="unitFirstLineText13" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd13">
							<span id="unitSecondLineText13" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo14"></td>
						<td class="td-code-text">
							<span class="opacity00" id="codeLine14" style="float: right;">Total = </span>
						</td>
						<td class="opacity00" id="unitFirstLineTd14">
							<span id="unitFirstLineText14" style="padding: 2px 42px; background: aquamarine">4</span></td>
						<td class="opacity00" id="unitSecondLineTd14">
							<span id="unitSecondLineText14" style="padding: 2px 42px; background: aquamarine">
							6<span id="alphabetN1">n</span></span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5 col-xs-offset-4 opacity00" id="finalDiv">
<!-- 			<span id="finalLine1" class="opacity00">&#10003;The total number of units taken for the sum() = 
				<span id="conclusionId">4<span id="alphabetN1">n</span> + 4</span></span><br> -->
			<span id="finalLine1" class="opacity00">The time complexity of fibonacci() = <span style="font-family: monospace; color: #0849a0;">
				big O(<span id="alphabetN2" class="opacity00 position">n</span>)</span>.</span>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script>
$(document).ready(function() {
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
				TweenMax.to($("#divTable"), 1.5, {opacity: 1, onComplete: function() {
					codeLinesReveledFunction(1);
				}});
			//	});
				break;
			case 'explanationOfUnits':
				$("#codeLine1").css("background", "#c0e1fb");
				svgAppend($('#divTable'), 'svg');
				svgMarkerAppend($('#svg'), 'marker');
				svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine1', '#unitFirstLineText1', '#svg', 'svgLine1', 'marker', function() {	
					TweenMax.to($("#unitFirstLineTd1, #unitSecondLineTd1"), 1, {opacity: 1, onComplete: function() {
						$("#unitSecondLineText1").popover({
							placement: 'right',
							html: true,
							trigger: 'focus',
							content: '<div id="popover1"></div>',
						}).popover('show');
						$(".popover").css({"top" : "0px;"});
						var text = "<span class='step-color-css'>step-1 :</span> This is the function header and no operation is involved so "+
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
			$("#unitSecondLineText14").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#finalDiv"), 1.5, {opacity: 1, onComplete: function() {
					$("#finalDiv").addClass("z-index9999999");
					TweenMax.to($("#finalLine1"), 1.5, {opacity: 1, onComplete: function() {
						$("#unitSecondLineText14").effect('highlight',{color:'#da5805'}, 1500, function() {
							$("#alphabetN1").effect('highlight',{color:'#da5805'}, 1500, function() {
								tweenmaxAnimation("#alphabetN1", "#alphabetN2", function() {
									setTimeoutFunction();
								});
							});
						});
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

function popoverAppendFunction(selector, divIdNum) {
	$(selector).popover({
		placement: 'right',
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
}

function codeLinesReveledFunction(i) {
	$("#stepNo" + i).fadeTo("1", 1);
	$("#codeLine" + i).fadeTo("1", 1, function() {
		if (i < ($("tr td:nth-child(2)").length - 1)) {
			codeLinesReveledFunction(++i);
		} else {
			$(".introjs-tooltip").show();
			var text = "This is the iterative code to find the fibanocci series of a given number.<b/>" + 
			"<ul><li>Now find the <span class='ct-code-b-yellow'>time complexity</span> of this function.</li>"+
			"<li>The total number of units is measured depending upon the number of <span class='ct-code-b-yellow'>operations</span> "+
			"done in the code.</li><li>Here the code contains if-else statement. So we have to calculate "+
			"<span class='ct-code-b-yellow'>time complexity</span> for two conditions.</li></ul>";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-btn">Next &#8594;</a>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					$("#ifCondition").effect('highlight', {color: '#da5805'}, 1000);
					transferEffectFunction("#ifCondition", "#unitsForLessThanOne", function() {
						$("#unitsForLessThanOne").removeClass("opacity00");
						$("#elseCondition").effect('highlight', {color: '#da5805'}, 1000);
						transferEffectFunction("#elseCondition", "#unitsForGreaterThanOne", function() {
							$("#unitsForGreaterThanOne").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		}
	});
}

function secondStepAnimation() {
//	$("#codeLine1").css("background-color","");
	$("#codeLine2").css("background", "#c0e1fb");
	$("#unitSecondLineText1").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitFirstLineText2', '#svg', 'svgLine2', 'marker', function() {	
		$("#operator1, #operator2").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd2, #unitSecondLineTd2"), 1, {opacity: 1, onComplete: function() {
				$("#operator1, #operator2").removeClass("blinking");
				$("#unitSecondLineText2").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover2"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span class='step-color-css'>step-2 :</span> <span class='ct-code-teal'>Two</span> "+
				"<span class='ct-code-b-yellow'>=</span> operators are used in this statement, so it takes "+
				"<span class='ct-code-b-yellow'>2</span> <span class='ct-code-teal'>unit of time</span>.";
				typing("#popover2", text, function() {
					$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="thirdStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function thirdStepAnimation() {
//	$("#codeLine2").css("background-color","");
	$("#codeLine3").css("background", "#c0e1fb");
	$("#unitSecondLineText2").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3', '#unitFirstLineText3', '#svg', 'svgLine3', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd3, #unitSecondLineTd3"), 1, {opacity: 1, onComplete: function() {
			/* $("#operator1").addClass("blinking").one('animationend', function() {
				$("#operator1").removeClass("blinking"); */
				popoverAppendFunction("#unitSecondLineText3", 3);
				var text = "<span id='textTooptipForIf'><span class='step-color-css'>step-2 :</span> Only one operator "+
				"<span class='ct-code-b-yellow'><=</span> is used in this statement, it takes "+
				"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.</span>";
				typing("#popover3", text, function() {
					$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-btn">Next &#8594;</a>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#textTooptipForIf").after("<br><span id='textForNote'>Note: If <span class='ct-code-b-yellow'>if</span> condition "+
							"evaluates <span class='ct-code-teal'>true</span> then control enters into <span class='ct-code-b-yellow'>if</span> "+
							"statement otherwise enters into <span class='ct-code-b-yellow'>else</span> statement.");
						typing("#textForNote", $("#textForNote").html(), function() {
							$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<span class="introjs-button user-btn" onclick="fourthStepAnimation()">Next &#8594;</span></div>');
						});
					});
				});
		//	});
		}});
	});
}

function fourthStepAnimation() {
//	$("#codeLine3").css("background-color","");
	$("#codeLine4").css("background", "#c0e1fb");
	$("#unitSecondLineText3").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine4', '#unitFirstLineText4', '#svg', 'svgLine4', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd4, #unitSecondLineTd4"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText4", 4);
			var text = "<span class='step-color-css'>step-4 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
			"<span class='ct-code-b-yellow'>1</span> unit of time.";
			typing("#popover4", text, function() {
				$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="fifthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function fifthStepAnimation() {
//	$("#codeLine4").css("background-color","");
	$("#codeLine5").css("background", "#c0e1fb");
	$("#unitSecondLineText4").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine5', '#unitFirstLineText5', '#svg', 'svgLine5', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd5, #unitSecondLineTd5"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText5", 5);
			var text = "<span class='step-color-css'>step-5 :</span> No operation is involved in this statement. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover5", text, function() {
				$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="sixthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

/* function sixthStepAnimation() {
//	$("#codeLine5").css("background-color","");
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitSecondLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitFirstLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd6, #unitSecondLineTd6"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText6", 6);
			var text = "<span class='step-color-css'>step-6 :</span> No operation is involved in <span class='ct-code-b-yellow'>else</span> "+
			"statement. So the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover6", text, function() {
				$('#popover6').append('<div class="popover-height"><span class="introjs-button user-btn" onclick="seventhStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
} */

function sixthStepAnimation() {
//	$("#codeLine6").css("background-color","");
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitSecondLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitFirstLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd6, #unitSecondLineTd6"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText6", 6);
			var text = "<span id='popover6Text1'><span class='step-color-css'>step-6 :</span><br/>This for loop involves three instructions which are "+
			"<span class='ct-code-b-yellow'>initialization</span>, "+
			"<span class='ct-code-b-yellow'>condition</span> and <span class='ct-code-b-yellow'>increment</span> part.</span>"
			typing("#popover6", text, function() {
				$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					sixthStepAnimationSecondStep();
				});
			});
		}});
	});
}

function sixthStepAnimationSecondStep() {
	$("#popover6Text1").after("<span><ul><li id='initLine'><span class='for-loop-li-css'>i = 2</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
	typing("#initLine", $("#initLine").html(), function() {
		$("#forInit").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit", "#initUnitNo", function() {
				$("#initUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
					$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>i <= n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><=</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n - 1</span> "+
								"time as <span class='ct-color-boolean'>true</span> (because the <span class='ct-color-yellow'>initialization</span> "+
								"part starts from <span class='ct-color-boolean'>i = 2</span>) and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>n - 1 + 1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine", $("#conditionLine").html(), function() {
							$("#forCondition").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition", "#conditionUnitNo", function() {
									$("#conditionUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
										$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
												'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>i++</span><br>In the "+
													"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
													"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
													"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n - 1</span>) number "+
													"of times. So it takes <span class='ct-code-b-yellow'>n</span> "+
													"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine", $("#incrementLine").html(), function() {
												$("#forIncrement").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement", "#incrementUnitNo", function() {
														$("#incrementUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
																	'<span class="introjs-button user-btn" '+
																	'onclick="seventhStepAnimation()">Next &#8594;</span></div>');
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

function seventhStepAnimation() {
//	$("#codeLine7").css("background-color","");
	$("#codeLine7").css("background", "#c0e1fb");
	$("#unitSecondLineText6").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine7', '#unitFirstLineText7', '#svg', 'svgLine7', 'marker', function() {	
		$("#equalOperator, #plusOperator").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd7, #unitSecondLineTd7"), 1, {opacity: 1, onComplete: function() {
				$("#equalOperator, #plusOperator").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText7", 7);
				var text = "<span class='step-color-css'>step-7 :</span> <br/><ul><li> This statement is involved in the for loop which contains" +
						" two operators <span class='ct-code-b-yellow'>=</span> and <span class='ct-code-b-yellow'>+</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n - 1</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>2 * (n - 1) = 2n - 2</span> "+
				"number of <span class='ct-code-teal'>units of time</span>.</li></ul>";
				typing("#popover7", text, function() {
					$('#popover7').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="eighthStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function eighthStepAnimation() {
//	$("#codeLine8").css("background-color","");
	$("#codeLine8").css("background", "#c0e1fb");
	$("#unitSecondLineText7").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine8', '#unitFirstLineText8', '#svg', 'svgLine8', 'marker', function() {	
		$("#equalOperator2").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd8, #unitSecondLineTd8"), 1, {opacity: 1, onComplete: function() {
				$("#equalOperator2").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText8", 8);
				var text = "<span class='step-color-css'>step-8 :</span> <br/><ul><li> This statement is involved in the for loop which contains" +
				" only one operator <span class='ct-code-b-yellow'>=</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n - 1</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>n - 1</span> "+
				"number of <span class='ct-code-teal'>units of time</span>.</li></ul>";
				typing("#popover8", text, function() {
					$('#popover8').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="ninthStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function ninthStepAnimation() {
//	$("#codeLine9").css("background-color","");
	$("#codeLine9").css("background", "#c0e1fb");
	$("#unitSecondLineText8").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine9', '#unitFirstLineText9', '#svg', 'svgLine9', 'marker', function() {	
		$("#equalOperator3").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd9, #unitSecondLineTd9"), 1, {opacity: 1, onComplete: function() {
				$("#equalOperator3").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText9", 9);
				var text = "<span class='step-color-css'>step-9 :</span> <br/><ul><li> This statement is involved in the for loop which contains" +
				" only one operator <span class='ct-code-b-yellow'>=</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n - 1</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>n - 1</span> "+
				"number of <span class='ct-code-teal'>units of time</span>.</li></ul>";
				typing("#popover9", text, function() {
					$('#popover9').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="tenthStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function tenthStepAnimation() {
//	$("#codeLine10").css("background-color","");
	$("#codeLine10").css("background", "#c0e1fb");
	$("#unitSecondLineText9").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine10', '#unitFirstLineText10', '#svg', 'svgLine10', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd10, #unitSecondLineTd10"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText10", 10);
			var text = "<span class='step-color-css'>step-10 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover10", text, function() {
				$('#popover10').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="eleventhStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function eleventhStepAnimation() {
//	$("#codeLine11").css("background-color","");
	$("#codeLine11").css("background", "#c0e1fb");
	$("#unitSecondLineText10").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine11', '#unitFirstLineText11', '#svg', 'svgLine11', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd11, #unitSecondLineTd11"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText11", 11);
			var text = "<span class='step-color-css'>step-11 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
			"<span class='ct-code-b-yellow'>1</span> unit of time.";
			typing("#popover11", text, function() {
				$('#popover11').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="twelfthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function twelfthStepAnimation() {
//	$("#codeLine12").css("background-color","");
	$("#codeLine12").css("background", "#c0e1fb");
	$("#unitSecondLineText11").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine12', '#unitFirstLineText12', '#svg', 'svgLine12', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd12, #unitSecondLineTd12"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText12", 12);
			var text = "<span class='step-color-css'>step-12 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover12", text, function() {
				$('#popover12').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="thirteenthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function thirteenthStepAnimation() {
//	$("#codeLine13").css("background-color","");
	$("#codeLine13").css("background", "#c0e1fb");
	$("#unitSecondLineText12").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine13', '#unitFirstLineText13', '#svg', 'svgLine13', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd13, #unitSecondLineTd13"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText13", 13);
			var text = "<span class='step-color-css'>step-13 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover13", text, function() {
				$('#popover13').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="fourteenthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}
// fifteenthStepAnimation
function fourteenthStepAnimation() {
	$("#unitSecondLineText13").popover('hide');
	TweenMax.to($("#unitFirstLineTd14, #unitSecondLineTd14"), 1.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitSecondLineText14", 14);
		var text = "The total unit count for <ul><li><span class='ct-code-teal'>n <= 1</span> is <span class='ct-code-b-yellow'>4</span>.</li>"+
			"<li><span class='ct-code-teal'>n > 1</span> is <span class='ct-code-b-yellow'>6n</span>.</li></ul>";
		typing("#popover14", text, function() {
			$('#popover14').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<span class="introjs-button user-btn">Next &#8594;</span></div>');
			$(".user-btn").click(function() {
				$("#unitLineText8").popover('hide');
				introjs.nextStep();
			});
		});
	}});
}
//$("#operator1").effect('highlight',{color:'#da5805'}, 2000, function() {

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.05;
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
	TweenMax.to($('#' + svgLineId).show(),0.5, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
</script>
</html>