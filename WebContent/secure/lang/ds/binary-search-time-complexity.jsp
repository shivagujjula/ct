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

.ct-green {
	color: green;
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

.index-div {
	border: 1px solid;
	margin-top: 15px;
	padding: 6px;
	border-radius: 8px;
	background: papayawhip;
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
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 index-div" id="indexDiv">
			<ul>
				<li id="listLine1" class="opacity00"><span class="ct-green">Binary search</span> can be solved by using iteration process or 
					recursion process.</li>
				<li id="listLine2" class="opacity00"><span class="ct-green">Binary search</span> uses <b>divide and conquer</b> technique and it 
					works on the sorted list either in ascending or descending order.</li>
				<li id="listLine3" class="opacity00"><span class="ct-green">Binary search</span> (or) <span class="ct-green">Half-interval search</span> (or) 
					<span class="ct-green">Logarithmic search</span> is a search algorithm that finds the position of a <b>key element</b>
					 within a sorted array.</li>
				<li id="listLine4" class="opacity00"><span class="ct-green">Binary search</span> compares the <b>key element</b> to the 
					<b>middle element</b> of the array. If they are <b>unequal</b>, the half in which the <b>key element</b>
					 cannot lie is eliminated and the search continues on the remaining half until it is successful.</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-5">
<pre class="creamPreTab4 opacity00" id="preCode1" style="font-size: 12px;">
<span id="line1"><span class="color-green">int</span> binarySearchIteration(<span class="color-green">int</span> a[], <span class="color-green">int</span> n, <span class="color-green">int</span> key) {</span>
	<span class="color-green">int</span> low, high, mid, flag = -<span class="color-deeppink">1</span>;
	low = <span class="color-deeppink">0</span>, high = n - <span class="color-deeppink">1</span>;
	<span class="color-maroon">while</span> (flag == -<span class="color-deeppink">1</span> && low <= high) {
		<span id="line5">mid = (low + high) / <span class="color-deeppink">2</span>;			</span>
		<span class="color-maroon">if</span> (<span id="line6">a[mid] == key</span>) {
			<span id="line7">flag = mid;</span>								<span id="timeCtPre1" class="opacity00">//	T(1)</span>
			<span class="color-maroon" id="line8">break</span>;
		<span id="line9">} <span class="color-maroon">else if</span> (<span id="lessThanid">key < a[mid]</span>) {</span>
			high = mid - <span class="color-deeppink">1</span>;						<span id="timeCtPre2" class="opacity00">//	T(n/2)</span>
		<span id="line10">} <span class="color-maroon">else if</span> (<span id="greaterThanid">key > a[mid]</span>){</span>
			low = mid + <span class="color-deeppink">1</span>;							<span id="timeCtPre3" class="opacity00">//	T(n/2)</span>
		}
	}
	<span class="color-maroon">return</span> flag;
}
</pre>		
		</div>
		<div class="col-xs-5 col-xs-offset-1">
<pre class="creamPreTab4 opacity00" id="preCode2">
<span class="color-green">int</span> binarySearchRecursion(<span class="color-green">int</span> a[], <span class="color-green">int</span> low, <span class="color-green">int</span> high, <span class="color-green">int</span> key){
	<span class="color-green">int</span> mid;
	<span class="color-maroon">if</span> (low <= high) {
		mid = (low + high) / <span class="color-deeppink">2</span>;
		<span id="recLine4"><span class="color-maroon">if</span> (a[mid] == key) {</span>
			<span id="recLine5"><span class="color-maroon">return</span> mid;</span>												<span id="timeC1" class="opacity00">T(1)</span>
		} <span class="color-maroon">else if</span> (key < a[mid]) {
			<span id="recLine7">binarySearchRecursion(a, low, mid - <span class="color-deeppink">1</span>, key);</span>		<span id="timeC2" class="opacity00">T(n/2)</span>
		} <span class="color-maroon">else if</span> (key > a[mid]) {
			<span id="recLine9">binarySearchRecursion(a, mid + <span class="color-deeppink">1</span>, high, key);</span>		<span id="timeC3" class="opacity00">T(n/2)</span>
		}
	} <span class="color-maroon">else</span> {
		<span class="color-maroon">return</span> -<span class="color-deeppink">1</span>;
	}
}
</pre>
		</div>
	</div>
	<div class="col-xs-12 margin-top-3">
		<div class="col-xs-6 col-xs-offset-3 explanation-div opacity00" id="explanationDiv">
			<div class="col-xs-offset-">
				<span>We have : </span>
					<ul>
						<li>if (a[mid] < key) --> T(n/2) + 1</li>
						<li>if (a[mid] > key) --> T(n/2) + 1</li>
					</ul>
				<span>For simplification assume n = 2<sup>k</sup></span>
			</div>
			<div class="col-xs-offset-4">
				<span>T(n) = T(n/2) + c</span><br>
				<span>T(n) = T(n/2) + 2</span><br>
				<span>T(n) = T((n/2)/2) + (2 + 2)</span><br>
				<span>T(n) = T(n/4) + (2 * 2)</span><br>
				<span>T(n) = T(n/8) + (2 * 2 * 2)</span><br>
				<span>T(n) = T(n/2<sup>3</sup>) + (4 * 2)</span><br>
				...<br>
				...<br>
				<span>T(n) = T(n/2<sup>k</sup>) + (k * 2)</span><br>
				<span>T(n) = T(n/n) + 2k</span><br>
				<span>T(n) = T(1) + 2k</span><br>
				<span>T(n) = c + 2 log<sup>n</sup><sub>2</sub></span><br>
				<span>Time Complexity : O(log<sup>n</sup><sub>2</sub>)</span>
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
			element : '#indexDiv',
			intro : '',
			tooltipClass : 'hide'
		}, {
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
		case 'indexDiv':
			$("#listLine1").fadeTo(500, 1, function() {
				$("#listLine2").fadeTo(500, 1, function() {
					$("#listLine3").fadeTo(500, 1, function() {
						$("#listLine4").fadeTo(500, 1, function() {
							$("#listLine4").after('<span class="introjs-button user-btn">Next &#8594;</span>');
							introjs.refresh();
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								introjs.nextStep();
							});
						});
					});
				});
			});
			break;
		case 'preCode1':
			$('.introjs-helperLayer').one('transitionend', function() {
				TweenMax.to($("#preCode1"), 1, {opacity: 1, onComplete: function() {
					var text = 'This is the iterative code for binary search.';
					typing('.introjs-tooltiptext', text, function() {
						buttonAppendFunction(".introjs-tooltipbuttons", function() {
							$(".user-btn").remove();
							$(".introjs-tooltip").hide();
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
																		secondStep();
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
				}});
			});
			break;
		case 'preCode2':
			$('.introjs-helperLayer').one('transitionend', function() {
			//	$("#preCode1").addClass("z-index9999999");
				var text = '<span id="tooltiptextId">This is the recursive code for binary search.</span>';
				typing('.introjs-tooltiptext', text, function() {
					buttonAppendFunction(".introjs-tooltipbuttons", function() {
						$("#tooltiptextId").append("<ul id='ulTextId'><li>If key element found at middle position then the Time Complexity is "+
						"<span class='ct-code-b-yellow'>T(n)</span></li>"+
						"<li>If the key element is less than middle element then search the key element in the first half. Then the "+
						"Time Complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li>"+
						"<li>If the key element is greater than middle element then search the key element in the second half. In this type of cases the "+
						"Time Complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>");
						typing("#ulTextId", $("#ulTextId").html(), function() {
							$("#recLine5").effect('highlight',{color:'#da5805'}, 1500, function() {
								TweenMax.to($("#timeC1"), 1, {opacity : 1, onComplete: function() {
									$("#recLine7").effect('highlight',{color:'#da5805'}, 1500, function() {
										TweenMax.to($("#timeC2"), 1, {opacity : 1, onComplete: function() {
											$("#recLine9").effect('highlight',{color:'#da5805'}, 1500, function() {
												TweenMax.to($("#timeC3"), 1, {opacity : 1, onComplete: function() {
													$('.introjs-nextbutton').show();
												}});
											});
										}});
									});
								}});
							});
						});
					});
					//$('.introjs-nextbutton').show();
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
	$(selector).append('<div class="introjs-tooltipbuttons popover-btn-css"><span class="introjs-button user-btn">Next &#8594;</span></div>');
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		console.log("button removed");
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



function secondStep() {
	$("#line5").popover('hide');
	TweenMax.to($("#timeCtPre1"), 1, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#line9", 9);
		var text = "If the key element is less than middle element then search the key element in the first half. In this type of cases the "+
			"Time Complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.";
		typing("#popover9", text, function() {
			$("#lessThanid").effect('highlight',{color:'#da5805'}, 1500);
			buttonAppendFunction("#popover9", function() {
				thirdStep();
			});
		});
	}});
}

function thirdStep() {
	$("#line9").popover('hide');
	TweenMax.to($("#timeCtPre2"), 1, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#line10", 10);
		var text = "If the key element is greater than middle element then search the key element in the second half. In this type of cases the "+
			"Time Complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.";
		typing("#popover10", text, function() {
			$("#greaterThanid").effect('highlight',{color:'#da5805'}, 1500);
			buttonAppendFunction("#popover10", function() {
				$("#line10").popover('hide');
				TweenMax.to($("#timeCtPre3"), 1, {opacity: 1, onComplete:function() {
					introjs.nextStep();
				}});
			});
		});
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