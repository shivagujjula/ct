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

<script type="text/javascript" src="/secure/ct-utilities.js"></script>

<title>factorial recursion time complexity</title>

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

.margin-top-3 {
	margin-top: 3%;
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
	border: 1px solid #0bf30b;
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
}

.display {
	display: inline-block;
}

span {
	position: relative;
}

.margin-left82 {
	margin-left: 82px;
}

.color-darkgreen {
	color: darkgreen;
	opacity: 0;
}

.heading-css {
	color: blue;
	text-decoration: underline;
	opacity: 0;
}

</style>
</head>
<body>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of factorial( ) using recursion</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-3">
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
							&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine1">int fact(int n) {</span>
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
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine2">
							if (<span id="ifCondition">n <span id="operator1"><=</span> 1</span>) {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd2">
							<span id="unitFirstLineText2" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd2">
							<span id="unitSecondLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo3">3.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine3">return 1;</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd3">
							<span id="unitFirstLineText3" style="padding: 2px 42px;">1</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd3">
							<span id="unitSecondLineText3" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo4">4.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine4">}</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd4">
							<span id="unitFirstLineText4" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd4">
							<span id="unitSecondLineText4" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo5">5.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine5"><span id="elseCondition">else</span> {</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd5">
							<span id="unitFirstLineText5" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd5">
							<span id="unitSecondLineText5" style="padding: 2px 42px;">-</span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo6">6.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine6">return (n <span id="asteriskOperator">*</span> <span id="factOperator">fact(n-1)</span>);</span> 
						</td>
						<td class="opacity00" id="unitFirstLineTd6">
							<span id="unitFirstLineText6" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd6">
							<span id="unitSecondLineText6" style="padding: 2px 42px;">
							<span id="unitSecondLineTdText1">1</span> + <span id="unitSecondLineTdText2">fact(n-1)</span></span>
						</td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo7">7.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="opacity00" id="codeLine7">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd7">
							<span id="unitFirstLineText7" style="padding: 2px 42px;">-</span>
						</td>
						<td class="opacity00" id="unitSecondLineTd7">
							<span id="unitSecondLineText7" style="padding: 2px 2px;">-</span></td>
					</tr>
					
					<tr>
						<td class="opacity00" id="stepNo8">8.</td>
						<td class="td-code-text">
							&emsp;&emsp;&emsp;&emsp;&emsp;<span class="opacity00" id="codeLine8">}</span>
						</td>
						<td class="opacity00" id="unitFirstLineTd8">
							<span id="unitFirstLineText8" style="padding: 2px 42px;">-</span></td>
						<td class="opacity00" id="unitSecondLineTd8">
							<span id="unitSecondLineText8" style="padding: 2px 42px;">-</span></td>
					</tr>
					<tr>
						<td class="opacity00" id="stepNo9"></td>
						<td class="td-code-text">
							<span class="opacity00" id="codeLine9" style="float: right;">Total = </span>
						</td>
						<td class="opacity00" id="unitFirstLineTd9">
							<span id="unitFirstLineText9" style="padding: 2px 42px; background: aquamarine">2</span></td>
						<td class="opacity00" id="unitSecondLineTd9">
							<span id="unitSecondLineText9" style="padding: 2px 42px; background: aquamarine">
							2 + fact(n-1)</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-6 col-xs-offset-3 opacity00" id="explanationDiv" style="font-family: monospace; border: 1px solid;">
			<div class="col-xs-offset-3">
				<span id="lessThanResult" class="color-darkgreen">
					<span id="lessThanResultSpan">fact(n) = 2</span>, if n <= 1
				</span><br>
				<span id="greaterThanResult" class="color-darkgreen">
					<span id="greaterThanResultSpan">fact(n) = <span id="mainResult" class="position">2 + fact(n-1)</span></span>, if n > 1
				</span><br>
				<span class="heading-css">Now simplify the fact(n-1)</span><br>
				<span id="line1" class="opacity00" style="padding-right: 68px;">
					fact(n) = <span id="line1Span">2 + fact(n-1)</span>
				</span><br>
				<span id="line2" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line2Span" class="opacity00">2(2) + fact(n - 2)</span>
				</span><br>
				<span id="line3" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line3Span" class="opacity00">3(2) + fact(n - 3)</span>
				</span><br>
				<span id="line4" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line4Span" class="opacity00">4(2) + fact(n - 4)</span>
				</span><br>
				<span id="line5" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line5Span" class="opacity00">5(2) + fact(n - 5)</span>
				</span><br>
				<span id="line6" class="opacity00 margin-left82">...</span><br>
				<span id="line7" class="opacity00 margin-left82">...</span><br>
				<span id="line8" class="opacity00 margin-left82">...</span><br>
				<span id="line9" class="opacity00 margin-left82">...</span><br>
				<span id="line10" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line10Span" class="opacity00">n(2) + fact(n - n)</span>
				</span><br>
				<span id="line11" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line11Span" class="opacity00">2n + fact(0)</span>
				</span><br>
				<span id="line12" class="opacity00"><span class="opacity00">fact(n)</span> = 
					<span id="line12Span" class="opacity00">2<span id="alphabetN1">n</span> + 2</span>
				</span><br>
				<span id="finalLine" class="opacity00">&#10003;The time complexity of factorial() = <span style="font-family: monospace; color: #0849a0;">
				big O(<span id="alphabetN2" class="opacity00 position">n</span>)</span>.</span>
			</div>
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
		},  {
			element : '#divTable',
			intro : '',
			animateStep : 'explanationOfUnits',
			tooltipClass : 'hide'
		}, {
			element : '#explanationDiv',
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
							$('#popover1').append('<div class="popover-height">'+
									'<span class="introjs-button user-btn" onclick="secondStepAnimation()">Next &#8594;</span></div>');
						});
					}});
				});
				
				break;
			}
			break;
		case 'explanationDiv':
			$("#unitSecondLineText9").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#explanationDiv").removeClass("opacity00");
				TweenMax.to($("#lessThanResult"), 1.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#greaterThanResult"), 1.5, {opacity: 1, onComplete: function() {
						TweenMax.to($(".heading-css"), 1.5, {opacity: 1, onComplete: function() {
							line1CalculationAnimation();
						}});
					}});
				}});
			});
			break;
		case 'finalDiv':
			$("#unitSecondLineText15").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#finalDiv"), 1.5, {opacity: 1, onComplete: function() {
					$("#finalDiv").addClass("z-index9999999");
					TweenMax.to($("#finalLine1"), 1.5, {opacity: 1, onComplete: function() {
						$("#unitSecondLineText15").effect('highlight',{color:'#da5805'}, 1500, function() {
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

function line1CalculationAnimation() {
	tweenmaxAnimation("#greaterThanResultSpan", "#line1", function() {	
		popoverAppendFunction("#line1", 1);
		var text = "<span id='popoverTextSpan1'>Now calculate value of <span class='ct-code-b-yellow'>fact(n-1)</span><br>" +
		"<ul><li id='Line1FirstLi'><span class='ct-code-b-yellow'>n-1</span> is substitute in "+
		"<span class='ct-code-b-yellow'>fact(n)</span>.</li><ul>";
		typing("#popover1", text, function() {
			$("#Line1FirstLi").after("<li id='Line1SecondLi'><span class='ct-code-b-yellow opacity00 position' id='Line1SecondLiSpan'>"+
					"2 + <span id='Line1SecondLiSpanChild' class='display'>fact(n-1)</span></span>.</li>");
			firstAnimation("#line1Span", "#Line1SecondLiSpan", "#mainResult", "#Line1SecondLiSpanChild", "2 + fact(n-1-1)", function() {				
				$("#Line1SecondLi").after("<li id='Line1ThirdLi'><span class='ct-code-b-yellow opacity00 position' id='Line1ThirdLiSpan'>"+
				"<span id='numericalId1' class='display'>2 + 2</span> + fact(<span id='value1' class='display'>n-1-1</span>)</span>."+
				"</li>");
				secondAnimation("#Line1SecondLi", "#Line1ThirdLiSpan", "#numericalId1", "2(2)", "#value1", "n - 2", "#line2", "#line2Span", function() {
					$('#popover1').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<span class="introjs-button user-btn" onclick="line2CalculationAnimation()">Next &#8594;</span></div>');
				});
			});
		});
	});
}

function line2CalculationAnimation() {
	$("#line1").popover('hide');	
	popoverAppendFunction("#line2", 2);
	var text = "<span id='popoverTextSpan2'>Now calculate value of <span class='ct-code-b-yellow'>fact(n - 2)</span><br>" +
	"<ul><li id='Line2FirstLi'><span class='ct-code-b-yellow'>n - 2</span> is substitute in "+
	"<span class='ct-code-b-yellow'>fact(n)</span>.</li><ul>";
	typing("#popover2", text, function() {
		$("#Line2FirstLi").after("<li id='Line2SecondLi'><span class='ct-code-b-yellow opacity00 position' id='Line2SecondLiSpan'>"+
				"2(2) + <span id='Line2SecondLiSpanChild' class='display'>fact(n - 2)</span></span>.</li>");
		firstAnimation("#line2Span", "#Line2SecondLiSpan", "#mainResult", "#Line2SecondLiSpanChild", "2 + fact(n - 2 - 1)", function() {
						$("#Line2SecondLi").after("<li id='Line2ThirdLi'><span class='ct-code-b-yellow opacity00 position' id='Line2ThirdLiSpan'>"+
						"<span id='numericalId2' class='display'>2(2) + 2</span> + fact(<span id='value2' class='display'>n - 2 - 1</span>)</span>."+
						"</li>");
			secondAnimation("#Line2SecondLi", "#Line2ThirdLiSpan", "#numericalId2", "3(2)", "#value2", "n - 3", "#line3", "#line3Span", function() {
				$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
			'<span class="introjs-button user-btn" onclick="line3CalculationAnimation()">Next &#8594;</span></div>');
			});
		});
	});
}

function line3CalculationAnimation() {
	$("#line2").popover('hide');	
	popoverAppendFunction("#line3", 3);
	var text = "<span id='popoverTextSpan3'>Now calculate value of <span class='ct-code-b-yellow'>fact(n - 3)</span><br>" +
	"<ul><li id='Line3FirstLi'><span class='ct-code-b-yellow'>n - 3</span> is substitute in "+
	"<span class='ct-code-b-yellow'>fact(n)</span>.</li><ul>";
	typing("#popover3", text, function() {
		$("#Line3FirstLi").after("<li id='Line3SecondLi'><span class='ct-code-b-yellow opacity00 position' id='Line3SecondLiSpan'>"+
				"3(2) + <span id='Line3SecondLiSpanChild' class='display'>fact(n - 3)</span></span>.</li>");
		firstAnimation("#line3Span", "#Line3SecondLiSpan", "#mainResult", "#Line3SecondLiSpanChild", "2 + fact(n - 3 - 1)", function() {
						$("#Line3SecondLi").after("<li id='Line3ThirdLi'><span class='ct-code-b-yellow opacity00 position' id='Line3ThirdLiSpan'>"+
						"<span id='numericalId3' class='display'>3(2) + 2</span> + fact(<span id='value3' class='display'>n - 3 - 1</span>)</span>."+
						"</li>");
			secondAnimation("#Line3SecondLi", "#Line3ThirdLiSpan", "#numericalId3", "4(2)", "#value3", "n - 4", "#line4", "#line4Span", function() {
				$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
			'<span class="introjs-button user-btn" onclick="line4CalculationAnimation()">Next &#8594;</span></div>');
			});
		});
	});
}

function line4CalculationAnimation() {
	$("#line3").popover('hide');	
	popoverAppendFunction("#line4", 4);
	var text = "<span id='popoverTextSpan4'>Now calculate value of <span class='ct-code-b-yellow'>fact(n - 4)</span><br>" +
	"<ul><li id='Line4FirstLi'><span class='ct-code-b-yellow'>n - 4</span> is substitute in "+
	"<span class='ct-code-b-yellow'>fact(n)</span>.</li><ul>";
	typing("#popover4", text, function() {
		$("#Line4FirstLi").after("<li id='Line4SecondLi'><span class='ct-code-b-yellow opacity00 position' id='Line4SecondLiSpan'>"+
				"4(2) + <span id='Line4SecondLiSpanChild' class='display'>fact(n - 4)</span></span>.</li>");
		firstAnimation("#line4Span", "#Line4SecondLiSpan", "#mainResult", "#Line4SecondLiSpanChild", "2 + fact(n - 4 - 1)", function() {
						$("#Line4SecondLi").after("<li id='Line4ThirdLi'><span class='ct-code-b-yellow opacity00 position' id='Line4ThirdLiSpan'>"+
						"<span id='numericalId4' class='display'>4(2) + 2</span> + fact(<span id='value4' class='display'>n - 4 - 1</span>)</span>."+
						"</li>");
			secondAnimation("#Line4SecondLi", "#Line4ThirdLiSpan", "#numericalId4", "5(2)", "#value4", "n - 5", "#line5", "#line5Span", function() {
				$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
			'<span class="introjs-button user-btn" onclick="line10CalculationAnimation()">Next &#8594;</span></div>');
			});
		});
	});
}

function line10CalculationAnimation() {
	$("#line4").popover('hide');
	TweenMax.to($("#line6"), 1, {opacity: 1, onComplete: function() {
	$("#line6").effect( "highlight", {color:"#FFD700"}, 1000);
		TweenMax.to($("#line7"), 1, {opacity: 1, onComplete: function() {
		$("#line7").effect( "highlight", {color:"#FFD700"}, 1000);
			TweenMax.to($("#line8"), 1, {opacity: 1, onComplete: function() {
			$("#line8").effect( "highlight", {color:"#FFD700"}, 1000);
				TweenMax.to($("#line9"), 1, {opacity: 1, onComplete: function() {
					$("#line9").effect( "highlight", {color:"#FFD700"}, 1000);
					TweenMax.to($("#line10, #line10Span"), 1, {opacity: 1, onComplete: function() {
						popoverAppendFunction("#line10", 10);
						var text = "<span id='popoverTextSpan10'>For <span class='ct-code-b-yellow'>n<sup>th</sup></span> number the "+
						"<span class='ct-code-b-yellow'>fact(n)</span> is<br></span>";
						typing("#popover10", text, function() {
							$("#popoverTextSpan10").after("<ul><li id='Line10FirstLi'><span class='ct-code-b-yellow opacity00' id='Line10FirstLiSpan'>"+
								"n(2) + fact(n - n)</span></li></ul>");
							tweenmaxAnimation("#line10", "#Line10FirstLiSpan", function() {
								$("#Line10FirstLi").after("<li><span class='ct-code-b-yellow opacity00' id='Line10SecondLiSpan'>"+
								"<span id='numericalId10' class='display'>n(2)</span> + fact(<span id='value10' class='display'>n - n</span>)"+
								"</span></li>");
								secondAnimation("#Line10FirstLiSpan", "#Line10SecondLiSpan", "#numericalId10", "2n", 
										"#value10", "0", "#line11", "#line11Span", function() {
									$('#popover10').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<span class="introjs-button user-btn" onclick="line11CalculationAnimation()">Next &#8594;</span></div>');
								});
							});
						});
					}});
				}});
			}});
		}});
	}});
}

function line11CalculationAnimation() {
	$("#line10").popover('hide');
	popoverAppendFunction("#line11", 11);
	var text = "<span id='popoverTextSpan11'><ul><li id='Line11FirstLi'>Here <span class='ct-code-b-yellow'>"+
	"fact(0)</span> value is 2.</li></ul></span>";
	typing("#popover11", text, function() {
		$("#Line11FirstLi").after("<li id='Line11SecondLi'><span class='ct-code-b-yellow opacity00' id='Line11SecondLiSpan'>"+
				"n(2) + fact(0)</span></li>");
		tweenmaxAnimation("#line11Span", "#Line11SecondLiSpan", function() {
			$("#Line11SecondLi").after("<li id='Line11ThirdLi'><span class='ct-code-b-yellow opacity00' id='Line11ThirdLiSpan'>"+
			"n(2) + <span id='value11' class='display'>fact(0)</span></span></li>");
			tweenmaxAnimation("#Line11SecondLiSpan", "#Line11ThirdLiSpan", function() {
				$("#lessThanResult").effect( "highlight", {color:"#FFD700"}, 1000);
				transferEffectFunction("#lessThanResult", "#value11", function() {
					flipEffect("#value11", "2", function() {
						$("#line12").removeClass("opacity00");
						transferEffectFunction("#Line11ThirdLiSpan", "#line12Span", function() {
							$('#popover11').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="finalCalculationAnimation()">Next &#8594;</span></div>');
						});
					});
				});
			});
		});
	});
}

function finalCalculationAnimation() {
	$("#line11").popover('hide');
	TweenMax.to($("#finalLine"), 1.5, {opacity: 1, onComplete: function() {
		$("#line12Span").effect('highlight',{color:'#da5805'}, 1500, function() {
			$("#alphabetN1").effect('highlight',{color:'#da5805'}, 1500, function() {
				tweenmaxAnimation("#alphabetN1", "#alphabetN2", function() {
					setTimeoutFunction();
				});
			});
		});
	}});
}

function firstAnimation(selector1, selector2, selector3, selector4, value, callBackFunction) {
	$(selector1).effect('highlight',{color:'#da5805'}, 1500, function() {
		tweenmaxAnimation(selector1, selector2, function() {
			transferEffectFunction(selector3, selector4, function() {
				$(selector4).effect( "highlight", {color:"#FFD700"}, 2000);
				flipEffect(selector4, value, function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function secondAnimation(id1, id2, id3, value1, id4, value2, id5, id6, callBackFunction) {
	tweenmaxAnimation(id1, id2, function() {
		$(id3).effect( "highlight", {color:"#FFD700"}, 2000);
			flipEffect(id3, value1, function() {
			$(id4).effect( "highlight", {color:"#FFD700"}, 2000);
			flipEffect(id4, value2, function() {
				$(id5).removeClass("opacity00");
				transferEffectFunction(id2, id6, function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function codeLinesReveledFunction(i) {
	$("#stepNo" + i).fadeTo("0.1", 1);
	$("#codeLine" + i).fadeTo("0.1", 1, function() {
		if (i < ($("tr td:nth-child(2)").length - 1)) {
			codeLinesReveledFunction(++i);
		} else {
			$(".introjs-tooltip").show();
			var text = "This is the recursive code to find the factorial of a given number using recursion.<b/>" + 
			"<ul><li>Now find the <span class='ct-code-b-yellow'>time complexity</span> of this function.</li>"+
			"<li>The total number of units is measured depending upon the number of <span class='ct-code-b-yellow'>operations</span> "+
			"done in the code.</li><li>Here the code contains if-else statement. So we have to calculate "+
			"<span class='ct-code-b-yellow'>time complexity</span> for two conditions.</li></ul>";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
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
		$("#operator1").addClass("blinking").one('animationend', function() {
			$("#operator1").removeClass("blinking").off();
			TweenMax.to($("#unitFirstLineTd2, #unitSecondLineTd2"), 1, {opacity: 1, onComplete: function() {
				$("#unitSecondLineText2").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover2"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span id='textTooptipForIf'><span class='step-color-css'>step-2 :</span> Only one operator "+
				"<span class='ct-code-b-yellow'><=</span> is used in this statement, it takes "+
				"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.</span>";
				typing("#popover2", text, function() {
					$('#popover2').append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#textTooptipForIf").after("<br><span id='textForNote'>Note: If <span class='ct-code-b-yellow'>if</span> condition "+
							"evaluates <span class='ct-code-teal'>true</span> then control enters into <span class='ct-code-b-yellow'>if</span> "+
							"statement otherwise enters into <span class='ct-code-b-yellow'>else</span> statement.");
						typing("#textForNote", $("#textForNote").html(), function() {
							$('#popover2').append('<div class="popover-height">'+
									'<span class="introjs-button user-btn" onclick="thirdStepAnimation()">Next &#8594;</span></div>');
						});
					});
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
			popoverAppendFunction("#unitSecondLineText3", 3);
			var text = "<span class='step-color-css'>step-3 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
			"<span class='ct-code-b-yellow'>1</span> unit of time.";
			typing("#popover3", text, function() {
				$('#popover3').append('<div class="popover-height"><span class="introjs-button user-btn" onclick="fourthStepAnimation()">Next &#8594;</span></div>');
			});
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
			var text = "<span class='step-color-css'>step-4 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover4", text, function() {
				$('#popover4').append('<div class="popover-height"><span class="introjs-button user-btn" onclick="fifthStepAnimation()">Next &#8594;</span></div>');
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
			var text = "<span class='step-color-css'>step-5 :</span> No operation is involved in <span class='ct-code-b-yellow'>else</span> "+
			"statement. So the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover5", text, function() {
				$('#popover5').append('<div class="popover-height"><span class="introjs-button user-btn" onclick="sixthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function sixthStepAnimation() {
//	$("#codeLine5").css("background-color","");
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitSecondLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitFirstLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd6, #unitSecondLineTd6"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText6", 6);
			var text = "<ul><li id='popover6Text1'>The <span class='ct-code-b-yellow'>*</span> operator takes "+
			"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.</li></ul>";
			typing("#popover6", text, function() {
				$("#asteriskOperator").addClass("blinking").one('animationend', function() {
					$("#asteriskOperator").removeClass("blinking").off();
					transferEffectFunction("#asteriskOperator", "#unitSecondLineTdText1", function() {
						$("#unitSecondLineTdText1").effect('highlight',{color:'#da5805'}, 1000, function() {
							$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								$("#popover6Text1").after("<li id='popover6Text2'>We could not define the <span class='ct-code-b-yellow'>fact(n-1)</span> of unit count."+
									" So the <span class='ct-code-teal'>unit count</span> return as <span class='ct-code-b-yellow'>fact(n-1)</span>.</li>");
								typing("#popover6Text2", $("#popover6Text2").html(), function() {
									$("#factOperator").addClass("blinking").one('animationend', function() {
										$("#factOperator").removeClass("blinking").off();
										transferEffectFunction("#factOperator", "#unitSecondLineTdText2", function() {
											$("#unitSecondLineTdText2").effect('highlight',{color:'#da5805'}, 1000, function() {
												$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
														'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
												$(".user-btn").click(function() {
													$(".user-btn").remove();
													$("#popover6Text2").after("<li id='popover6Text3'>The <span class='ct-code-b-yellow'>return</span> statement "+
														"is not defined without knowing the <span class='ct-code-teal'>unit count</span> of "+
														"<span class='ct-code-b-yellow'>fact(n-1)</span>.</li>");
													typing("#popover6Text3", $("#popover6Text3").html(), function() {
														$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
															'<span class="introjs-button user-btn" onclick="seventhStepAnimation()">Next &#8594;</span></div>');
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
		}});
	});
}

function seventhStepAnimation() {
//	$("#codeLine6").css("background-color","");
	$("#codeLine7").css("background", "#c0e1fb");
	$("#unitSecondLineText6").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine7', '#unitFirstLineText7', '#svg', 'svgLine7', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd7, #unitSecondLineTd7"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText7", 7);
			$("#popover7").append("<span id='popover7Text1'><span class='step-color-css'>step-7 :</span> No operation is involved in closed brace."+
				"So the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.");
			$('#popover7').append('<div class="popover-height"><span class="introjs-button user-btn"  onclick="eighthStepAnimation()">Next &#8594;</span></div>');
		}});
	});
}


function eighthStepAnimation() {
//	$("#codeLine7").css("background-color","");
	$("#codeLine8").css("background", "#c0e1fb");
	$("#unitSecondLineText7").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine8', '#unitFirstLineText8', '#svg', 'svgLine8', 'marker', function() {	
			TweenMax.to($("#unitFirstLineTd8, #unitSecondLineTd8"), 1, {opacity: 1, onComplete: function() {
				$("#equalOperator, #plusOperator").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText8", 8);
				$("#popover8").append("<span id='popover7Text1'><span class='step-color-css'>step-7 :</span> No operation is involved in closed brace."+
				"So the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.");
				$('#popover8').append('<div class="popover-height"><span class="introjs-button user-btn" onclick="ninenthStepAnimation()">Next &#8594;</span></div>');
			}});
	});
}

function ninenthStepAnimation() {
	$("#unitSecondLineText8").popover('hide');
	TweenMax.to($("#unitFirstLineTd9, #unitSecondLineTd9"), 1.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitSecondLineText9", 9);
		var text = "The total unit count for <span class='ct-code-b-yellow'>fact(n)</span> : "+
		"<ul><li><span class='ct-code-teal'>n <= 1</span> is <span class='ct-code-b-yellow'>2</span>.</li>"+
		"<li><span class='ct-code-teal'>n > 1</span> is <span class='ct-code-b-yellow'>1 + fact(n-1)</span>.</li></ul>";
		typing("#popover9", text, function() {
			$('#popover9').append('<div class="popover-height"><span class="introjs-button user-btn">Next &#8594;</span></div>');
			$(".user-btn").click(function() {
				$("#unitLineText9").popover('hide');
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
	});
}

function transferEffectFunction(selector1, selector2, callBackFunction) {
	$(selector1).effect("transfer", { to: $(selector2)}, 1000).addClass(".ui-effects-transfer", function() {
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

/* function tweenmaxAnimation(selector1, selector2, callBackFunction) {
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
} */

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.6, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.6, {css: {top : 0, rotationX : 0}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function bounceFromEffextWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
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