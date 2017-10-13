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

<title>binary search time complexity</title>

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
    /* max-width: 800px; */
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

/* th:nth-child(3) {
	width: 30%;
} */

td:nth-child(4), td:nth-child(5) {
	text-align: center;
}

.popover {
	z-index: 9999999 !important;
	width: 260px;
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
	width: 50%;
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

.display {
	display: inline-block;
}

span {
	position: relative;
	display: inline-block;
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

.explanation-div {
	border: 1px solid #3a15f7;
	border-radius: 10px;
	font-family: monospace;
	border: 1px solid;
}

.user-back-btn {
	background: #5bc0de !important;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	font-family: monospace;
	overflow: initial;
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

td {
	border: 1px solid;
}

</style>
</head>
<body>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of Binary Search</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-5">
<pre class="creamPreTab4" id="preCode1" style="font-size: 12px;">
<span id="line1"><span class="color-green">int</span> binary_search_itr(<span class="color-green">int</span> a[], <span class="color-green">int</span> n, <span class="color-green">int</span> key) {</span>
	<span class="color-green">int</span> low, high, mid, flag = -<span class="color-deeppink">1</span>;
	low = <span class="color-deeppink">0</span>, high = n - <span class="color-deeppink">1</span>;
	<span class="color-maroon">while</span> (flag == -<span class="color-deeppink">1</span> && low <= high) {
		<span id="line5">mid = (low + high) / <span class="color-deeppink">2</span>;			</span>
		<span class="color-maroon">if</span> (<span id="line6">a[mid] == key</span>) {
			<span id="line7">flag = mid;</span>
			<span class="color-maroon" id="line8">break</span>;
		<span id="line9">} <span class="color-maroon">else if</span> (<span id="line9SubSpan">key < a[mid]</span>) {</span>
			high = mid - <span class="color-deeppink">1</span>;
		} <span class="color-maroon">else if</span> (<span id="line10">key > a[mid]</span>){
			low = mid + <span class="color-deeppink">1</span>;
		}
	}
	<span class="color-maroon">return</span> flag;
}
</pre>		
		</div>
		<div class="col-xs-5 col-xs-offset-1">
<pre class="creamPreTab4" id="preCode2">
<span class="color-green">int</span> binary_search_rec(<span class="color-green">int</span> a[], <span class="color-green">int</span> low, <span class="color-green">int</span> high, <span class="color-green">int</span> key) {
	<span class="color-green">int</span> mid;
	<span class="color-maroon">if</span> (low <= high) {
		mid = (low + high) / <span class="color-deeppink">2</span>;
		<span class="color-maroon">if</span> (a[mid] == key) {
			<span class="color-maroon">return</span> mid;
		} <span class="color-maroon">else if</span> (key < a[mid]) {
			binary_search_rec(a, low, mid - <span class="color-deeppink">1</span>, key);
		} <span class="color-maroon">else if</span> (key > a[mid]) {
			binary_search_rec(a, mid + <span class="color-deeppink">1</span>, high, key);
		}
	} <span class="color-maroon">else</span> {
		<span class="color-maroon">return</span> -<span class="color-deeppink">1</span>;
	}
}
</pre>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-6 col-xs-offset-3 margin-top-3" style="border: 1px solid; height: 300px;" id="binaryAnalysisDiv">
			<div class="col-xs-12">
				<div class="col-xs-9 col-xs-offset-1 margin-top-3">
					<table>
						<tr>
							<td><span class="opacity00">1</span></td>
							<td><span class="opacity00">2</span></td>
						</tr>
					</table>
				</div>
				<div class="col-xs-7 col-xs-offset-2 margin-top-3">
					<table>
						<tr>
							<td><span class="opacity00">1</span></td>
							<td><span class="opacity00">2</span></td>
						</tr>
					</table>
				</div>
				<div class="col-xs-5 col-xs-offset-3 margin-top-3">
					<table>
						<tr>
							<td><span class="opacity00">1</span></td>
							<td><span class="opacity00">2</span></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-6 col-xs-offset-3 explanation-div opacity00" id="explanationDiv">
			<div class="col-xs-offset-">
				<span>We have  three cases to analyze an algorithm:</span>
				<ul>
					<li id="line1" class="opacity00">
						Best Case : <span id="firstCase" class="opacity00">5</span>
						<span id="firstCaseComplexity" class="opacity00"> - Time complexity is <b>big O(<span id="result1" class="opacity00">1</span>)</b></span>
					</li>
					<li id="line2" class="opacity00">
						Average Case : <span id="secondCase" class="opacity00">2<span id="valueN1">n</span> + 2</span>
						<span id="secondCaseComplexity" class="opacity00"> - Time complexity is <b>big O(<span id="result2" class="opacity00">n</span>)</b></span>
					</li>
					<li id="line3" class="opacity00">
						Worst Case : <span id="thirdCase" class="opacity00">4<span id="valueN2">n</span> + 3</span>
						<span id="thirdCaseComplexity" class="opacity00"> - Time complexity is <b>big O(<span id="result3" class="opacity00">n</span>)</b></span>
					</li>
				</ul>
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
		steps :[{
			element : '#preCode1',
			intro : '',
		}, {
			element : '#preCode2',
			intro : '',
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
		case 'preCode1':
			var text = 'This is the iterative code for binary search.';
			typing('.introjs-tooltiptext', text, function() {
				popoverAppendFunction("#line1", 1);
				var text = "Let us assume time complexity is T(n);";
				typing("#popover1", text, function() {
					$("#popover1").append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-btn">Next &#8594;</a></div>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#line1").popover('hide');
						popoverAppendFunction("#line5", 5);
						var text = "<ul><li id='liLine1'>The main principle of binary search is to divide the given list into two halfs.</li></ul>";
						typing("#popover5", text, function() {
							$("#line5").effect('highlight',{color:'#da5805'}, 1500);
							buttonAppendFunction("#liLine1", function() {
								$("#liLine1").append("<li id='liLine2'>Compare the key element with the middle element.</li>");
								typing("#liLine2", $("#liLine2").html(), function() {
									$("#line6").effect('highlight',{color:'#da5805'}, 1500);
									buttonAppendFunction("#liLine2", function() {
										$("#liLine2").append("<li id='liLine3'>If the comparision result is true then print's its position.</li>");
										typing("#liLine3", $("#liLine3").html(), function() {
											$("#line7").effect('highlight',{color:'#da5805'}, 1500);
											buttonAppendFunction("#liLine3", function() {
												$("#liLine3").append("<li id='liLine4'>If key element is found at middle element then the break "+
														"statement terminate the loop.</li>");
												typing("#liLine4", $("#liLine4").html(), function() {
													$("#line8").effect('highlight',{color:'#da5805'}, 1500);
													$("#liLine4").append("<li id='liLine5'>In this type of cases the time complexity is "+
															"<span class='ct-code-b-yellow'>T(1)</span>.</li>");
													typing("#liLine5", $("#liLine5").html(), function() {
														buttonAppendFunction("#liLine5", function() {
															
														});
													});
												});
											});
										});
									});
								});
							});
							/* <li>If the comparision result is true then print's "+
							"its position.</li>
							"<li>If key element is found at middle element then the break statement terminate the loop.</li>"+
							"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(1)</span>.</li></ul>" */
						});
						
					});
				//	$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preCode2':
			$('.introjs-helperLayer').one('transitionend', function() {
			//	$("#preCode1").addClass("z-index9999999");
				var text = 'This is the recursive code for binary search.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
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
				$(".introjs-tooltip").hide();
				TweenMax.to($("#divTable"), 1.5, {opacity: 1, onComplete: function() {
					codeLinesReveledFunction(1);
				}});
				break;
			case 'explanationOfUnits':
				firstStepAnimation();
				break;
			}
			break;
		case 'explanationDiv':
			$("#unitSecondLineText8").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#explanationDiv").removeClass("opacity00");
				$("#line1").fadeTo(1000, 1, function() {
					tweenMaxAnimation("#unitFirstLineText10", "#firstCase", function() {
						$("#line2").fadeTo(1000, 1, function() {
							tweenMaxAnimation("#unitSecondLineText10", "#secondCase", function() {
								$("#line3").fadeTo(1000, 1, function() {
									tweenMaxAnimation("#unitThirdLineText10", "#thirdCase", function() {
										fadeToAndTransferAction("#firstCaseComplexity", "#firstCase", "#result1", function() {
											fadeToAndTransferAction("#secondCaseComplexity", "#valueN1", "#result2", function() {
												fadeToAndTransferAction("#thirdCaseComplexity", "#valueN2", "#result3", function() {
													setTimeoutFunction();
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
			break;
		case 'finalDiv':
			$("#unitSecondLineText15").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#finalDiv"), 1.5, {opacity: 1, onComplete: function() {
					$("#finalDiv").addClass("z-index9999999");
					TweenMax.to($("#finalLine1"), 1.5, {opacity: 1, onComplete: function() {
						$("#unitSecondLineText15").effect('highlight',{color:'#da5805'}, 1500, function() {
							$("#alphabetN1").effect('highlight',{color:'#da5805'}, 1500, function() {
								tweenMaxAnimation("#alphabetN1", "#alphabetN2", function() {
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

function previousStepFunction() {
	introjs.previousStep();
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	}, 2000);
}

function buttonAppendFunction(selector, callBackFunction) {
	$(selector).append('<div class="introjs-tooltipbuttons popover-btn-css"><span class="introjs-button user-btn" >Next &#8594;</span></div>');
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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

function popoverLeftSideAppendFunction(selector, divIdNum) {
	$(selector).popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
}

function fadeToAndTransferAction(selector1, selector2, selector3, callBackFunction) {
	$(selector1).fadeTo(1000, 1, function() {
		$(selector2).effect('highlight',{color:'#da5805'}, 800, function() {
			transferEffectFunction(selector2, selector3, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
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
			var text = "This is the code  to search the given element from a list of elements with <span class='ct-code-b-yellow'>linear search"+
			"</span>.<b/>" + 
			"<ul><li>Now find the <span class='ct-code-b-yellow'>time complexity</span> of this function.</li>"+
			"<li>The total number of units is measured depending upon the number of <span class='ct-code-b-yellow'>operations</span> "+
			"done in the code.</li><li>Here we have three different types of cases.</li></ul>";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn">Next &#8594;</a>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
				//	$("#unitsForLeast").effect('highlight', {color: '#da5805'}, 1000);
					TweenMax.to($("#unitsForLeast"), 1, {opacity: 1, onComplete: function() {
						$("#unitsForLeast").effect('highlight', {color: '#da5805'}, 500);
						//		$("#unitsForMiddle").effect('highlight', {color: '#da5805'}, 1000);
						TweenMax.to($("#unitsForMiddle"), 1, {opacity: 1, onComplete: function() {
				//			$("#unitsForHigher").effect('highlight', {color: '#da5805'}, 1000);
							$("#unitsForMiddle").effect('highlight', {color: '#da5805'}, 500);
							TweenMax.to($("#unitsForHigher"), 1, {opacity: 1, onComplete: function() {
								$("#unitsForHigher").effect('highlight', {color: '#da5805'}, 500);
								$('.introjs-nextbutton').show();
							}});
						}});
					}});
				});
			});
		}
	});
}

function secondStep() {
	popoverAppendFunction("#line9", 9);
	
}

/* function firstAnimation(selector1, selector2, selector3, selector4, value, callBackFunction) {
	$(selector1).effect('highlight',{color:'#da5805'}, 1500, function() {
		tweenMaxAnimation(selector1, selector2, function() {
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
	tweenMaxAnimation(id1, id2, function() {
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
} */

function firstStepAnimation() {
	$("#codeLine1").css("background", "#c0e1fb");
	$("#unitThirdLineText2").popover('hide');
	svgAppend($('#divTable'), 'svg');
	svgMarkerAppend($('#svg'), 'marker');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine1', '#unitFirstLineText1', '#svg', 'svgLine1', 'marker', function() {
		TweenMax.to($("#unitFirstLineTd1, #unitSecondLineTd1, #unitThirdLineTd1"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitThirdLineText1", 1);
			var text = "<span class='step-color-css'>step-1 :</span> This is the function header and no operation is involved so "+
			"the <span class='ct-code-teal'>unit of time</span> count is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover1", text, function() {
				$('#popover1').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-btn" onclick="secondStepAnimation()">Next &#8594;</a></div>');
			});
		}});
	});
}

function secondStepAnimation() {
	$("#codeLine2").css("background", "#c0e1fb");
	$("#unitThirdLineText1, #unitFirstLineText3").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitFirstLineText2', '#svg', 'svgLine2', 'marker', function() {	
		$("#operator1").addClass("blinking").one('animationend', function() {
			$("#operator1").removeClass("blinking").off();
			TweenMax.to($("#unitFirstLineTd2, #unitSecondLineTd2, #unitThirdLineTd2"), 1, {opacity: 1, onComplete: function() {
				popoverAppendFunction("#unitThirdLineText2", 2);
				var text = "<span id='textTooltipForIf'><span class='step-color-css'>step-2 :</span> Only one operator "+
				"<span class='ct-code-b-yellow'>=</span> is used in this statement, it takes "+
				"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.</span>";
				typing("#popover2", text, function() {
					$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-back-btn" tabindex="-1" onclick="firstStepAnimation()">&#8592; Back</a>'+
						'<a class="introjs-button user-btn" onclick="thirdStepFirstCaseAnimation()">Next &#8594;</a></div>');
				});
			}});
		});
	});
}



function thirdStepFirstCaseAnimation() {
	$("#codeLine3").css("background", "#c0e1fb");
	$("#unitThirdLineText2, #unitSecondLineText3").popover('hide');
//	$("#unitSecondLineText4").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3', '#unitFirstLineText3', '#svg', 'svgLine3', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd3"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitFirstLineText3", 3);
			var text = "<span id='popover3Text1'><span class='step-color-css'>step-3 :</span><br/>This for loop involves three instructions which are "+
			"<span class='ct-code-b-yellow'>initialization</span>, "+
			"<span class='ct-code-b-yellow'>condition</span> and <span class='ct-code-b-yellow'>increment</span> part.</span>"
			typing("#popover3", text, function() {
				$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						/* '<a class="introjs-button user-back-btn" tabindex="-1" onclick="secondStepAnimation()">&#8592; Back</a>'+ */
						'<a class="introjs-button user-btn" onclick="thirdStepFirstCaseSecondAnimation()">Next &#8594;</a></div>');
			});
		}});
	});
}

function thirdStepFirstCaseSecondAnimation() {
	$(".user-btn").remove();
	$("#popover3Text1").after("<span><ul><li id='initLine'><span class='for-loop-li-css'>i = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
	typing("#initLine", $("#initLine").html(), function() {
		$("#forInit").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit", "#initUnitNo1", function() {
				$("#initUnitNo1").effect('highlight',{color:'#da5805'}, 1000, function() {
					buttonAppendFunction("#popover3", function() {
						$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>i < n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>1</span> "+
								"time as <span class='ct-color-boolean'>true</span> because the key element is first element itself. "+
								"So it takes <span class='ct-code-b-yellow'>1</span> "+
								"<span class='ct-code-teal'>unit of time</span>.</li>");
						typing("#conditionLine", $("#conditionLine").html(), function() {
							$("#forCondition").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition", "#conditionUnitNo1", function() {
									$("#conditionUnitNo1").effect('highlight',{color:'#da5805'}, 1000, function() {
										buttonAppendFunction("#popover3", function() {
											$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>i++</span><br>The "+
													"<span class='ct-code-b-yellow'>increment</span> part doesn't executed because the key element "+
													"is found at first element then the <span class='ct-code-b-yellow'>break</span> statement "+
													"terminate the for loop. So it takes <span class='ct-code-b-yellow'>0</span> "+
													"<span class='ct-code-teal'>unit of time</span>.</li>");
											typing("#incrementLine", $("#incrementLine").html(), function() {
												$("#forIncrement").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement", "#incrementUnitNo1", function() {
														$("#incrementUnitNo1").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
															'<a class="introjs-button user-back-btn" tabindex="-1" onclick="secondStepAnimation()">&#8592; Back</a>'+
															'<a class="introjs-button user-btn" onclick="thirdStepSecondCaseAnimation()">Next &#8594;</a></div>');
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

function thirdStepSecondCaseAnimation() {
	$("#unitFirstLineText3, #unitThirdLineText3").popover('hide');
	popoverAppendFunction("#unitSecondLineText3", 32);
	var text = "<span id='popover3Text2'><span class='step-color-css'>step-3 :</span><br/>If element is at the middile position then.</span>"
		typing("#popover32", text, function() {
			TweenMax.to($("#unitSecondLineTd3"), 0.5, {opacity: 1, onComplete: function() {
			$('#popover32').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
				'<a class="introjs-button user-btn" onclick="thirdStepSecondCaseSecondAnimation()">Next &#8594;</a></div>');
		}});
	});
}

function thirdStepSecondCaseSecondAnimation() {
	$(".user-btn").remove();
	$("#popover3Text2").after("<span><ul><li id='initLine2'><span class='for-loop-li-css'>i = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
	typing("#initLine2", $("#initLine2").html(), function() {
		$("#forInit").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit", "#initUnitNo2", function() {
				$("#initUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
					buttonAppendFunction("#popover32", function() {
						$("#initLine2").after("<li id='conditionLine2'><span class='for-loop-li-css'>i < n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n/2</span> "+
								"times as <span class='ct-color-boolean'>true</span> because the key element is at the middle position. "+
								"So it takes <span class='ct-code-b-yellow'>n/2</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine2", $("#conditionLine2").html(), function() {
							$("#forCondition").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition", "#conditionUnitNo2", function() {
									$("#conditionUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
										buttonAppendFunction("#popover32", function() {	
											$("#conditionLine2").after("<li id='incrementLine2'><span class='for-loop-li-css'>i++</span><br>The "+
												"<span class='ct-code-b-yellow'>increment</span> part also only one operator "+
												"<span class='ct-code-b-yellow'>++</span> is used and the <span class='ct-code-b-yellow'>"+
												"increment</span> part executes <span class='ct-code-teal'>n/2</span> "+
												"times as <span class='ct-color-boolean'>true</span> because the key element is at the middle position. "+
												"So it takes <span class='ct-code-b-yellow'>n/2</span> "+
												"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine2", $("#incrementLine2").html(), function() {
												$("#forIncrement").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement", "#incrementUnitNo2", function() {
														$("#incrementUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover32').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
															'<a class="introjs-button user-back-btn" tabindex="-1" onclick="thirdStepFirstCaseAnimation()">&#8592; Back</a>'+
															'<a class="introjs-button user-btn" onclick="thirdStepThirdCaseAnimation()">Next &#8594;</a></div>');
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


function thirdStepThirdCaseAnimation() {
	$("#unitSecondLineText3, #unitFirstLineText4").popover('hide');
	popoverAppendFunction("#unitThirdLineText3", 33);
	var text = "<span id='popover3Text3'><span class='step-color-css'>step-3 :</span><br/>If element is not found.</span>"
		typing("#popover33", text, function() {
			TweenMax.to($("#unitThirdLineTd3"), 0.5, {opacity: 1, onComplete: function() {
			$('#popover33').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
				'<span class="introjs-button user-btn" onclick="thirdStepThirdCaseSecondAnimation()">Next &#8594;</span></div>');
		}});
	});
}

function thirdStepThirdCaseSecondAnimation() {
	$(".user-btn").remove();
	$("#popover3Text3").after("<span><ul><li id='initLine3'><span class='for-loop-li-css'>i = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
	typing("#initLine3", $("#initLine3").html(), function() {
		$("#forInit").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit", "#initUnitNo3", function() {
				$("#initUnitNo3").effect('highlight',{color:'#da5805'}, 1000, function() {
					buttonAppendFunction("#popover33", function() {
						$("#initLine3").after("<li id='conditionLine3'><span class='for-loop-li-css'>i < n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n</span> times as <span class='ct-color-boolean'>true</span> and "+
								"<span class='ct-code-teal'>1</span> time as <span class='ct-color-boolean'>false</span>. "+
								"So it takes <span class='ct-code-b-yellow'>n+1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine3", $("#conditionLine3").html(), function() {
							$("#forCondition").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition", "#conditionUnitNo3", function() {
									$("#conditionUnitNo3").effect('highlight',{color:'#da5805'}, 1000, function() {
										buttonAppendFunction("#popover33", function() {
											$("#conditionLine3").after("<li id='incrementLine3'><span class='for-loop-li-css'>i++</span><br>The "+
													"<span class='ct-code-b-yellow'>increment</span> part also only one operator "+
													"<span class='ct-code-b-yellow'>++</span> is used and the <span class='ct-code-b-yellow'>"+
													"increment</span> part executes <span class='ct-code-teal'>n</span> "+
													"times as <span class='ct-color-boolean'>true</span>. "+
													"So it takes <span class='ct-code-b-yellow'>n</span> "+
													"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine3", $("#incrementLine3").html(), function() {
												$("#forIncrement").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement", "#incrementUnitNo3", function() {
														$("#incrementUnitNo3").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover33').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
															'<a class="introjs-button user-back-btn" tabindex="-1" onclick="thirdStepSecondCaseAnimation()">&#8592; Back</a>'+
															'<a class="introjs-button user-btn" onclick="fourthStepFirstCaseAnimation()">Next &#8594;</a></div>');
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

function fourthStepFirstCaseAnimation() {
	$("#unitThirdLineText3, #unitSecondLineText4").popover('hide');
	$("#codeLine4").css("background", "#c0e1fb");
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine4', '#unitFirstLineText4', '#svg', 'svgLine4', 'marker', function() {
		TweenMax.to($("#unitFirstLineTd4"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitFirstLineText4", 4);
			var text = "If key element is first element itself then the <span class='ct-code-b-yellow'>==</span> operator executes only "+
			"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.";
			typing("#popover4", text, function() {
				$("#doubleEqualOperator").effect('highlight',{color:'#da5805'}, 1000, function() {
					transferEffectFunction("#doubleEqualOperator", "#unitFirstLineText4", function() {
						$("#unitFirstLineText4").effect('highlight',{color:'#da5805'}, 1000, function() {
							$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
								'<a class="introjs-button user-back-btn" tabindex="-1" onclick="thirdStepThirdCaseAnimation()">&#8592; Back</a>'+
								'<a class="introjs-button user-btn" onclick="fourthStepSecondCaseAnimation()">Next &#8594;</a></div>');
						});
					});
				});
			});
		}});
	});
}

function fourthStepSecondCaseAnimation() {
	$("#unitFirstLineText4, #unitThirdLineText4").popover('hide');
	TweenMax.to($("#unitSecondLineTd4"), 0.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitSecondLineText4", 4);
		var text = "If key element is at middle position then the <span class='ct-code-b-yellow'>==</span> operator executes "+
		"<span class='ct-code-b-yellow'>n/2</span> <span class='ct-code-teal'>units of time</span>.";
		typing("#popover4", text, function() {
			$("#doubleEqualOperator").effect('highlight',{color:'#da5805'}, 1000, function() {
				transferEffectFunction("#doubleEqualOperator", "#unitSecondLineText4", function() {
					$("#unitSecondLineText4").effect('highlight',{color:'#da5805'}, 1000, function() {
						$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fourthStepFirstCaseAnimation()">&#8592; Back</a>'+
							'<a class="introjs-button user-btn" onclick="fourthStepThirdCaseAnimation()">Next &#8594;</a></div>');
					});
				});
			});
		});
	}});
}

function fourthStepThirdCaseAnimation() {
	$("#unitSecondLineText4, #unitFirstLineText5").popover('hide');
	TweenMax.to($("#unitThirdLineTd4"), 0.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitThirdLineText4", 4);
		var text = "If element is not found then the <span class='ct-code-b-yellow'>==</span> operator executes "+
		"<span class='ct-code-b-yellow'>n</span> <span class='ct-code-teal'>units of time</span>.";
		typing("#popover4", text, function() {
			$("#doubleEqualOperator").effect('highlight',{color:'#da5805'}, 1000, function() {
				transferEffectFunction("#doubleEqualOperator", "#unitThirdLineText4", function() {
					$("#unitThirdLineText4").effect('highlight',{color:'#da5805'}, 1000, function() {
						$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fourthStepSecondCaseAnimation()">&#8592; Back</a>'+
							'<a class="introjs-button user-btn" onclick="fifthStepFirstCaseAnimation()">Next &#8594;</a></div>');
					});
				});
			});
		});
	}});
}

function fifthStepFirstCaseAnimation() {
	$("#unitThirdLineText4, #unitSecondLineText5").popover('hide');
	$("#codeLine5").css("background", "#c0e1fb");
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine5', '#unitFirstLineText5', '#svg', 'svgLine5', 'marker', function() {
		TweenMax.to($("#unitFirstLineTd5"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitFirstLineText5", 5);
			var text = "If key element is first element itself then the <span class='ct-code-b-yellow'>=</span> operator executes only "+
			"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.";
			typing("#popover5", text, function() {
				$("#equalOperator").effect('highlight',{color:'#da5805'}, 1000, function() {
					transferEffectFunction("#equalOperator", "#unitFirstLineText5", function() {
						$("#unitFirstLineText5").effect('highlight',{color:'#da5805'}, 1000, function() {
							$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
								'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fourthStepThirdCaseAnimation()">&#8592; Back</a>'+
								'<a class="introjs-button user-btn" onclick="fifthStepSecondCaseAnimation()">Next &#8594;</a></div>');
						});
					});
				});
			});
		}});
	});
}

function fifthStepSecondCaseAnimation() {
	$("#unitFirstLineText5, #unitThirdLineText5").popover('hide');
	TweenMax.to($("#unitSecondLineTd5"), 0.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitSecondLineText5", 5);
		var text = "If key element is at middle position then the <span class='ct-code-b-yellow'>=</span> operator executes "+
		"<span class='ct-code-b-yellow'>n/2</span> <span class='ct-code-teal'>units of time</span>.";
		typing("#popover5", text, function() {
			$("#equalOperator").effect('highlight',{color:'#da5805'}, 1000, function() {
				transferEffectFunction("#equalOperator", "#unitSecondLineText5", function() {
					$("#unitSecondLineText5").effect('highlight',{color:'#da5805'}, 1000, function() {
						$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fifthStepFirstCaseAnimation()">&#8592; Back</a>'+
							'<a class="introjs-button user-btn" onclick="fifthStepThirdCaseAnimation()">Next &#8594;</a></div>');
					});
				});
			});
		});
	}});
}

function fifthStepThirdCaseAnimation() {
	$("#unitSecondLineText5, #unitThirdLineText6").popover('hide');
	TweenMax.to($("#unitThirdLineTd5"), 0.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitThirdLineText5", 5);
		var text = "If element is not found then the <span class='ct-code-b-yellow'>=</span> operator executes "+
		"<span class='ct-code-b-yellow'>n</span> <span class='ct-code-teal'>units of time</span>.";
		typing("#popover5", text, function() {
			$("#equalOperator").effect('highlight',{color:'#da5805'}, 1000, function() {
				transferEffectFunction("#equalOperator", "#unitThirdLineText5", function() {
					$("#unitThirdLineText5").effect('highlight',{color:'#da5805'}, 1000, function() {
						$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fifthStepSecondCaseAnimation()">&#8592; Back</a>'+
							'<a class="introjs-button user-btn" onclick="sixthStepAnimation()">Next &#8594;</a></div>');
					});
				});
			});
		});
	}});
}

function sixthStepAnimation() {
	$("#unitThirdLineText5, #unitThirdLineText8").popover('hide');
	$("#codeLine6").css("background", "#c0e1fb");
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitFirstLineText6', '#svg', 'svgLine6', 'marker', function() {
		TweenMax.to($("#unitFirstLineTd6, #unitSecondLineTd6, #unitThirdLineTd6"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitThirdLineText6", 6);
			$('#popover6').append("The <span class='ct-code-b-yellow'>break</span> statement didn't take any "+
					"<span class='ct-code-teal'>unit of time</span>.");
			$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
				'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fifthStepThirdCaseAnimation()">&#8592; Back</a>'+
				'<a class="introjs-button user-btn" onclick="seventhStepAnimation()">Next &#8594;</a></div>');
		}});
	});
}

function seventhStepAnimation() {
	$("#unitThirdLineText6").popover('hide');
	$("#codeLine7, #codeLine8, #codeLine9").css("background", "#c0e1fb");
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine7', '#unitFirstLineText7', '#svg', 'svgLine7', 'marker');
	TweenMax.to($("#unitFirstLineTd7, #unitSecondLineTd7, #unitThirdLineTd7"), 0.5, {opacity: 1});
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine8', '#unitFirstLineText8', '#svg', 'svgLine8', 'marker');
	TweenMax.to($("#unitFirstLineTd8, #unitSecondLineTd8, #unitThirdLineTd8"), 0.5, {opacity: 1});
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine9', '#unitFirstLineText9', '#svg', 'svgLine9', 'marker', function() {
		TweenMax.to($("#unitFirstLineTd9, #unitSecondLineTd9, #unitThirdLineTd9"), 0.5, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#unitThirdLineText8", 8);
			$('#popover8').append("No operation is involved in closed braces. So "+
					"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.");
			$('#popover8').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<a class="introjs-button user-back-btn" tabindex="-1" onclick="sixthStepAnimation()">&#8592; Back</a>'+
					'<a class="introjs-button user-btn" onclick="eighthStepAnimation()">Next &#8594;</a></div>');
		}});
	});
}

function eighthStepAnimation() {
	$("#unitThirdLineText8").popover('hide');
	TweenMax.to($("#codeLine10"), 0.5, {opacity: 1, onComplete:function() {
		TweenMax.to($("#unitFirstLineTd10"), 0.5, {opacity: 1, onComplete:function() {
			TweenMax.to($("#unitSecondLineTd10"), 0.5, {opacity: 1, onComplete:function() {
				TweenMax.to($("#unitThirdLineTd10"), 0.5, {opacity: 1, onComplete:function() {
					setTimeoutFunction();
				}});
			}});
		}});
	}});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.01;
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

function tweenMaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 0.8, {top: topLength, left: leftLength, onComplete: function() {	//	1
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

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
	TweenMax.to($('#' + svgLineId).show(),0.4, {attr: {x2: x2, y2: y2}, onComplete: function() {	//	0.5
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

</script>
</html>