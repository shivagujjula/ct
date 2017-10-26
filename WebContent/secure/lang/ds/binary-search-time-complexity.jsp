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
	font-size: 12px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	overflow: initial;
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
	animation-duration: 0.6s;
	animation-iteration-count: 3;
	z-index: 9999999 !important;
	background: white;
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

.ct-color-green {
	color: green;
	font-weight: bold;
}

.z-index9999999 {
	z-index: 9999999;
	background: white;
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
	font-size: 13px;
	background: #ecf5fa;
}

.user-back-btn {
	background: #5bc0de !important;
}

.color-green {
	color: green;
	font-weight: bold;
}

.ct-blue {
	color: blue;
	/* font-weight: bold; */
}

.color-maroon {
	color: maroon;
	font-weight: bold;
}

.color-deeppink {
	color: deeppink;
}

.color-highlight {
	color: rgb(45, 255, 54);
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
	font-size: 13px;
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
				<li id="listLine1" class="opacity00"><span class="ct-blue">Binary search</span> can be solved by using <b>iteration process</b> (or) 
					<b>recursion process</b>.</li>
				<li id="listLine2" class="opacity00"><span class="ct-blue">Binary search</span> uses <b>divide and conquer</b> technique and it 
					works on the sorted list either in ascending or descending order.</li>
				<li id="listLine3" class="opacity00"><span class="ct-blue">Binary search</span> (or) <span class="ct-blue">Half-interval search</span> (or) 
					<span class="ct-blue">Logarithmic search</span> is a search algorithm that finds the position of a <b>key element</b>
					 within a sorted array.</li>
				<li id="listLine4" class="opacity00"><span class="ct-blue">Binary search</span> compares the <b>key element</b> to the 
					<b>middle element</b> of the array. If they are <b>unequal</b>, the half in which the <b>key element</b>
					 cannot lie is eliminated and the search continues on the remaining half until it is successful.</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5">
<pre class="creamPreTab4 opacity00" id="preCode1" style="font-size: 12px;">
<span id="line1"><span class="color-green">int</span> binarySearchIteration(<span class="color-green">int</span> a[], <span class="color-green">int</span> n, <span class="color-green">int</span> key) {</span>
	<span class="color-green">int</span> low, high, mid, flag = -<span class="color-deeppink">1</span>;
	low = <span class="color-deeppink">0</span>, high = n - <span class="color-deeppink">1</span>;
	<span class="color-maroon">while</span> (flag == -<span class="color-deeppink">1</span> && low <= high) {
		<span id="line5">mid = (low + high) / <span class="color-deeppink">2</span>;			</span>
		<span class="color-maroon">if</span> (<span id="line6">a[mid] == key</span>) {
			<span id="line7">flag = mid;</span>								<span id="timeCtPre1" class="opacity00">//	<span id="timeItrSpan1">T(1)</span></span>
			<span class="color-maroon" id="line8">break</span>;
		<span id="line9">} <span class="color-maroon">else if</span> (<span id="lessThanid">key < a[mid]</span>) {</span>
			high = mid - <span class="color-deeppink">1</span>;						<span id="timeCtPre2" class="opacity00">//	<span id="timeItrSpan2">T(n/2)</span></span>
		<span id="line10">} <span class="color-maroon">else if</span> (<span id="greaterThanid">key > a[mid]</span>){</span>
			low = mid + <span class="color-deeppink">1</span>;							<span id="timeCtPre3" class="opacity00">//	<span id="timeItrSpan3">T(n/2)</span></span>
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
		<span id="recLine4"><span class="color-maroon">if</span> (<span id="recEqualId">a[mid] == key</span>) {</span>
			<span id="recLine5"><span class="color-maroon">return</span> mid;</span>												<span id="timeC1" class="opacity00">//	<span id="timeRecSpan1">T(1)</span></span>
		<span id="recLine6">} <span class="color-maroon">else if</span> (<span id="recLessThanId">key < a[mid]</span>) {</span>
			<span id="recLine7">binarySearchRecursion(a, low, mid - <span class="color-deeppink">1</span>, key);</span>	<span id="timeC2" class="opacity00">//	<span id="timeRecSpan2">T(n/2)</span></span>
		<span id="recLine8">} <span class="color-maroon">else if</span> (<span id="recGreaterThanlId">key > a[mid]</span>) {</span>
			<span id="recLine9">binarySearchRecursion(a, mid + <span class="color-deeppink">1</span>, high, key);</span><span id="timeC3" class="opacity00">//	<span id="timeRecSpan3">T(n/2)</span></span>
		}
	} <span class="color-maroon">else</span> {
		<span class="color-maroon">return</span> -<span class="color-deeppink">1</span>;
	}
}
</pre>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-6 col-xs-offset-3 explanation-div opacity00" id="explanationDiv">
			<div class="col-xs-offset-">
				<span>We have : </span>
					<ul>
						<li id="caseList1" class="opacity00">if (a[mid] == key) --> T(1)</li>
						<li id="caseList2" class="opacity00">if (a[mid] < key) --> T(n/2)</li>
						<li id="caseList3" class="opacity00">if (a[mid] > key) --> T(n/2)</li>
					</ul>
			</div>
			<div class="col-xs-offset-4">
				<span class="opacity00" id="calcLine1" style="background: #bbecc3;">The time complexity formula is : </span>
				<br>
				<span id="divCalcLine1" class="opacity00">T(n) = T(n/2) + c</span><br>
				<!-- <span id="divCalcLine2" class="opacity00">T(n) = T(n/2) + <span id="cValue" class="display">c</span></span><br> -->
				<span id="divCalcLine3" class="opacity00"><span class="opacity00">T(n)</span> = 
					<span id="divCalcLine3Span"><span id="line3Span" class="display">T(n/2)</span> + c</span></span><br>
				<span id="divCalcLine4" class="opacity00"><span class="opacity00">T(n)</span> = <span id="line4Span" class="display">T(n/4)</span> + c + c</span><br>
				<span id="divCalcLine5" class="opacity00">
					<span class="opacity00">T(n)</span> = T(n/<span id="line5Span" class="display">8</span>) + <span id="line5SpanParent" class="display">(c + c + c)</span></span><br>
				<span id="divCalcLine6" class="opacity00"><span class="opacity00">T(n)</span> = T(n/2<sup>4</sup>) + (4 * c)</span><br>
				<span id="divCalcLine7" class="opacity00" style="margin-left: 65px;">...</span><br>
				<span id="divCalcLine8" class="opacity00" style="margin-left: 65px;">...</span><br>
				<span id="divCalcLine9" class="opacity00"><span class="opacity00">T(n)</span> = T(n/2<sup>k</sup>) + (k * c)</span><br>
				<span id="divCalcLine10" class="opacity00"><span class="opacity00">T(n)</span> = T(n/<span id="kPowerId" class="display">2<sup>k</sup></span>) + (c * k)</span><br>
				<span id="divCalcLine11" class="opacity00"><span class="opacity00">T(n)</span> = T(<span id="nDivisionId" class="display">n/n</span>) + (c * k)</span><br>
				<span id="divCalcLine12" class="opacity00">T(n) = <span id="finalIdC" class="display">T(1)</span> + c * <span id="finalIdK" class="display">k</span></span><br>
				<span id="divCalcLine13" class="opacity00" style="color: darkblue;">
					Time Complexity : O(<span class="opacity00" id="resultTimeCt">log<sub>2</sub>n</span>)
				</span>
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
					var text = 'This is an iterative code for <span class="ct-code-b-yellow">binary search</span>.';
					typing('.introjs-tooltiptext', text, function() {
						buttonAppendFunction(".introjs-tooltipbuttons", function() {
							$(".introjs-tooltip").hide();
							popoverAppendFunction("#line1", 1);
							var text = "Let us calculate <span class='ct-code-b-yellow'>time complexity</span> of "+
							"<span class='ct-code-b-yellow'>binarySearchIteration()</span>.";
							typing("#popover1", text, function() {
								buttonAppendFunction("#popover1", function() {
									$("#line1").popover('hide');
									popoverAppendFunction("#line5", 5);
									var text = "<ul><li id='liLine1'>The main principle of <span class='ct-code-b-yellow'>binary search</span> is "+
										"to <span class='color-highlight'>divide</span> the given list into "+
										"<span class='ct-code-b-yellow'>two halfs</span>.</li></ul>";
									typing("#popover5", text, function() {
										$("#line5").effect('highlight',{color:'#da5805'}, 1500);
										buttonAppendFunction("#liLine1", function() {
											$("#liLine1").append("<li id='liLine2'>Compare the <span class='color-highlight'>key</span> element "+
													"with the <span class='color-highlight'>middle</span> element.</li>");
											typing("#liLine2", $("#liLine2").html(), function() {
												$("#line6").effect('highlight',{color:'#da5805'}, 1500);
												buttonAppendFunction("#liLine2", function() {
													$("#liLine2").append("<li id='liLine3'>If the comparision result is <span class='color-highlight'>"+
														"true</span> then print's its position.</li>");
													typing("#liLine3", $("#liLine3").html(), function() {
														$("#line7").effect('highlight',{color:'#da5805'}, 1500);
														buttonAppendFunction("#liLine3", function() {
															$("#liLine3").append("<li id='liLine4'>If <span class='color-highlight'>key</span> "+
																"element is found at <span class='color-highlight'>middle</span> element then the "+
																"<span class='ct-code-b-yellow'>break</span> statement terminate the loop.</li>");
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
			TweenMax.to($("#preCode2"), 1, {opacity: 1, onComplete: function() {
				var text = '<span id="tooltiptextId">This is a recursive code for <span class="ct-code-b-yellow">binary search.</span>';
					typing('.introjs-tooltiptext', text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$(".introjs-tooltip").hide();
							popoverAppendFunction("#recLine4", 4);
							var text = "<span id='recSpanText1'>If <span class='color-highlight'>key</span> element found at "+
							"<span class='color-highlight'>middle</span>"+
							" position then the time complexity is <span class='ct-code-b-yellow'>T(1)</span>.</span>";
							typing("#popover4", text, function() {
								$("#recEqualId").effect('highlight',{color:'#da5805'}, 1500);
								buttonAppendFunction("#popover4", function() {
									$("#recLine4").popover('hide');
									TweenMax.to($("#timeC1"), 1, {opacity: 1, onComplete:function() {
										popoverAppendFunction("#recLine6", 6);
										var text = "<span id='recSpanText2'><ul><li>If the <span class='color-highlight'>key</span> element is "+
										"less than <span class='color-highlight'>middle</span> element then search the "+
										"<span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>first half</span>."+
										"</li> <li>Then the "+
										"time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul></span>";
										typing("#popover6", text, function() {
											$("#recLessThanId").effect('highlight',{color:'#da5805'}, 1500);
											buttonAppendFunction("#popover6", function() {
												$("#recLine6").popover('hide');
												TweenMax.to($("#timeC2"), 1, {opacity: 1, onComplete:function() {
													popoverAppendFunction("#recLine8", 8);
													var text = "<span id='recSpanText3'><ul><li>If the <span class='color-highlight'>key</span> "+
													"element is greater than <span class='color-highlight'>middle</span> element "+
													"then search the <span class='color-highlight'>key</span> element in the "+
													"<span class='ct-code-b-yellow'>second half</span>.</li> <li>In this type of cases the "+
													"time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul></span>";
													typing("#popover8", text, function() {
														$("#recGreaterThanlId").effect('highlight',{color:'#da5805'}, 1500);
														buttonAppendFunction("#popover8", function() {
															$("#recLine8").popover('hide');
															TweenMax.to($("#timeC3"), 1, {opacity: 1, onComplete:function() {
																setTimeoutFunction();
															}});
														});
													});
												}});
											});
										});
									}});
								});
							});
						}); 
					});
				}});
			});
			break;
		case 'explanationDiv':
			$("#unitSecondLineText8").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#explanationDiv"), 1, {opacity: 1, onComplete: function() {
					popoverLeftSideAppendFunction("#caseList1", 1);
					var text = "<ul><li id='text1'>The <span class='color-highlight'>best case</span> time complexity of "+
					"<span class='ct-code-b-yellow'>binary search</span> is <span class='ct-code-b-yellow'>T(1)</span>.</li></ul>";
					typing(".popover-content", text, function() {
						TweenMax.to($("#caseList1"), 1, {opacity: 1, onComplete: function() {
							$("#timeItrSpan1, #timeRecSpan1").addClass("blinking").one('animationend', function() {
								$("#timeItrSpan1, #timeRecSpan1").removeClass("blinking").off();
								buttonAppendFunction("#text1", function() {
									$("#text1").after("<li id='text2'>The <span class='color-highlight'>worst case</span> the time complexity "+
											"is <span class='ct-code-b-yellow'>T(n/2)</span>.</li>");
									typing("#text2", $("#text2").html(), function() {
										TweenMax.to($("#caseList2"), 1, {opacity: 1, onComplete: function() {
											$("#timeItrSpan2, #timeRecSpan2").addClass("blinking").one('animationend', function() {
												$("#timeItrSpan2, #timeRecSpan2").removeClass("blinking").off();
												TweenMax.to($("#caseList3"), 1, {opacity: 1, onComplete: function() {
													$("#timeItrSpan3, #timeRecSpan3").addClass("blinking").one('animationend', function() {
														$("#timeItrSpan3, #timeRecSpan3").removeClass("blinking").off();
														buttonAppendFunction("#text2", function() {
															$("#caseList1").popover('hide');
															calculationActionFunction();
														});
													});
												}});
											});
										}});
									});
								});
							});
						}});
					});
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
		var text = "<ul><li>If the <span class='color-highlight'>key</span> element is less than <span class='color-highlight'>middle</span> "+
		"element then search the <span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>first half</span>.</li> "+
		"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
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
		var text = "<ul><li>If the <span class='color-highlight'>key</span> element is greater than <span class='color-highlight'>middle</span> "+
		"element then search the <span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>second half</span>.</li> "+
		"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
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

function calculationActionFunction() {
	TweenMax.to($("#calcLine1"), 1, {opacity:1, onComplete:function() {
		TweenMax.to($("#divCalcLine1"), 1, {opacity:1, onComplete:function() {
			popoverLeftSideAppendFunction("#divCalcLine1", 1);
			var text = "<ul><li id='popoverText'><span class='ct-code-b-yellow'>T(n/2)</span> is the time taken to find the "+
					"<span class='color-highlight'>key</span> element in any one half (i.e. If the given <span class='color-highlight'>key</span> "+
					"element is not <span class='color-highlight'>middle</span> element).</li>"+
					"<li><span class='ct-code-b-yellow'>c</span> is a constant time taken to compare the <span class='color-highlight'>key</span> "+
					"element with different elements.</li></ul>";
			typing(".popover-content", text, function() {
				buttonAppendFunction(".popover-content", function() {
					line3CalculationAnimation();
				});
			});
		}});
	}});
}

function line3CalculationAnimation() {
	$("#divCalcLine1").popover("hide");
	popoverLeftSideAppendFunction("#divCalcLine3", 3);
	$("#divCalcLine3").removeClass("opacity00");
	tweenMaxAnimation("#divCalcLine1", "#divCalcLine3", function() {	
		var text = "<ul><li id='Line3FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
		typing("#popover3", text, function() {
			$("#line3Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover3", function() {
					$("#Line3FirstLi").after("<li id='Line3SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line3SecondLiSpan'>T(n) = T(n/2) + c</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line3SecondLiSpan", function() {
						buttonAppendFunction("#popover3", function() {
							$("#Line3SecondLi").after("<li id='Line3ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/2</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line3ThirdLiSpan'>T(<span id='numericalId3' class='display'>n</span>) = "+
							"<span id='value3Main' class='display'>"+
							"<span id='value3ParentSpan' class='display'>T(<span id='value3SecondParent' class='display'>"+
								"<span id='value3' class='display'>n</span>/2</span>)</span> + c</span></span></li>");
							tweenMaxAnimation("#Line3SecondLiSpan", "#Line3ThirdLiSpan", function() {
								$("#numericalId3").effect( "highlight", {color:"#FFD700"}, 2000);
								flipEffect("#numericalId3", "n/2", function() {
									$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#value3", "(n/2)", function() {
										buttonAppendFunction("#popover3", function() {
											$("#value3SecondParent").effect( "highlight", {color:"#FFD700"}, 2000);
											flipEffect("#value3SecondParent", "n/4", function() {
												buttonAppendFunction("#popover3", function() {
													transferEffectFunction("#Line3ThirdLiSpan", "#line3Span", function() {
														$("#line3Span").effect( "highlight", {color:"#FFD700"}, 2000);
														flipEffect("#line3Span", $("#value3Main").text(), function() {
															buttonAppendFunction("#popover3", function() {
																line4CalculationAnimation();
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
	});
}

function line4CalculationAnimation() {
	$("#divCalcLine3").popover("hide");
	popoverLeftSideAppendFunction("#divCalcLine4", 4);
	tweenMaxAnimation("#divCalcLine3", "#divCalcLine4", function() {	
		var text = "<ul><li id='Line4FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/4)</span>.</li></ul>";
		typing("#popover4", text, function() {
			$("#line4Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover4", function() {
					$("#Line4FirstLi").after("<li id='Line4SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line4SecondLiSpan'>T(n) = T(n/2) + c</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line4SecondLiSpan", function() {
						buttonAppendFunction("#popover4", function() {
							$("#Line4SecondLi").after("<li id='Line4ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/2</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line4ThirdLiSpan'>T(<span id='numericalId4' class='display'>n</span>) = "+
							"<span id='value4Main' class='display'>"+
							"<span id='value4ParentSpan' class='display'>T(<span id='value4SecondParent' class='display'>"+
								"<span id='value4' class='display'>n</span>/4</span>)</span> + c</span></span></li>");
							tweenMaxAnimation("#Line4SecondLiSpan", "#Line4ThirdLiSpan", function() {
								$("#numericalId4").effect( "highlight", {color:"#FFD700"}, 2000);
								flipEffect("#numericalId4", "n/2", function() {
									$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#value4", "(n/2)", function() {
										buttonAppendFunction("#popover4", function() {
											$("#value4SecondParent").effect( "highlight", {color:"#FFD700"}, 2000);
											flipEffect("#value4SecondParent", "n/8", function() {
												buttonAppendFunction("#popover4", function() {
													transferEffectFunction("#Line4ThirdLiSpan", "#line4Span", function() {
														$("#line4Span").effect( "highlight", {color:"#FFD700"}, 2000);
														flipEffect("#line4Span", $("#value4Main").text(), function() {
															buttonAppendFunction("#popover4", function() {
																line5CalculationAnimation();
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
	});
}

function line5CalculationAnimation() {
	$("#divCalcLine4").popover("hide");
	tweenMaxAnimation("#divCalcLine4", "#divCalcLine5", function() {
		popoverLeftSideAppendFunction("#divCalcLine5", 5);
		var text = "<ul><li id='Line5FirstLi'>Here <span class='ct-code-b-yellow'>8</span> can be written as "+
		"<span class='ct-code-b-yellow' id='twoPowerId'>2<sup>3</sup></span>.</li></ul>";
		typing("#popover5", text, function() {
			buttonAppendFunction("#popover5", function() {
				$("#line5Span").effect( "highlight", {color:"#FFD700"}, 2000);
				flipEffect("#line5Span", "", function() {
					$("#line5Span").append("2<sup>3</sup>");				
					buttonAppendFunction("#popover5", function() {
						$("#Line5FirstLi").after("<li id='Line5SecondLi'><span class='ct-code-b-yellow'>c+c+c</span> can be written as<br>"+
						"<span class='ct-code-b-yellow' id='Line4SecondLiSpan'>c*c*c</span> i.e. <span  class='ct-code-b-yellow'>3*c</span>.</li>");
						typing("#Line5SecondLi", $("#Line5SecondLi").html(), function() {
							buttonAppendFunction("#popover5", function() {
								$("#line5SpanParent").effect( "highlight", {color:"#FFD700"}, 2000);
								flipEffect("#line5SpanParent", "(3 * c)", function() {
									buttonAppendFunction("#popover5", function() {
										$("#divCalcLine5").popover("hide");
										line6CalculationAnimation();
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

function line6CalculationAnimation() {
	$("#divCalcLine6").fadeTo(500, 1, function() {
		$("#divCalcLine6").effect( "highlight", {color:"#FFD700"}, 1000);
		$("#divCalcLine7").fadeTo(500, 1, function() {
			$("#divCalcLine7").effect( "highlight", {color:"#FFD700"}, 1000);
			$("#divCalcLine8").fadeTo(500, 1, function() {
				$("#divCalcLine8").effect( "highlight", {color:"#FFD700"}, 1000);
				popoverLeftSideAppendFunction("#divCalcLine9", 9);
				var text = "For <span class='ct-code-b-yellow'>k<sup>th</sup></span> order the <span class='ct-code-b-yellow'>T(n)</span> written as";
				typing("#popover9", text, function() {
					TweenMax.to($("#divCalcLine9"), 1, {opacity : 1, onComplete:function() {
						buttonAppendFunction("#popover9", function() {
							$("#divCalcLine9").popover("hide");
							popoverLeftSideAppendFunction("#divCalcLine10", 10);
							tweenMaxAnimation("#divCalcLine9", "#divCalcLine10", function() {
								var text = "We do a <span class='ct-code-b-yellow'>binary search</span> (half the elements) until we found it. "+
								"So we can divide <span class='ct-code-b-yellow'>n/2</span> times until we get <span class='ct-code-b-yellow'>1</span>."+
								"<br>i.e. <span class='ct-code-b-yellow'>n/2<sup>k</sup> = 1</span><br>From above "+
								"<span class='ct-code-b-yellow' id='calcLine1Span'>n = 2<sup>k</sup></span>.";
								/* var text = "We have <span class='ct-code-b-yellow'>n = 2<sup>k</sup></span>." */
								typing("#popover10", text, function() {
									buttonAppendFunction("#popover10", function() {
										$("#calcLine1Span").effect( "highlight", {color:"#FFD700"}, 1000);
										transferEffectFunction("#calcLine1Span", "#kPowerId", function() {
											flipEffect("#kPowerId", "n", function() {
												buttonAppendFunction("#popover10", function() {
													$("#divCalcLine10").popover("hide");
													tweenMaxAnimation("#divCalcLine10", "#divCalcLine11", function() {
														flipEffect("#nDivisionId", "1", function() {
															line11CalculationAnimation();
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
			});
		});
	});
}

function line11CalculationAnimation() {
	popoverLeftSideAppendFunction("#divCalcLine11", 11);
	var text = "<ul><li><span class='ct-code-b-yellow'>T(1)</span> value is <span class='ct-code-b-yellow'>1</span>.</li>"+
	"<li id='li2Text1'>We have <span class='ct-code-b-yellow'>2<sup>k</sup> = n</span>.</li></ul>";
	typing("#popover11", text, function() {
		buttonAppendFunction("#popover11", function() {
			$("#li2Text1").after("<span id='li2Text2'>now do the <span class='ct-code-b-yellow'>log<sub>2</sub></span> on both sides.</span>");
			buttonAppendFunction("#popover11", function() {
				$("#li2Text2").after("<br><span id='li2Text3' class='ct-code-b-yellow'>log<sub>2</sub>(2<sup>k</sup>) = log<sub>2</sub>n</span>");
				buttonAppendFunction("#popover11", function() {
					$("#li2Text3").after("<br><span id='li2Text4' class='ct-code-b-yellow'>k * log<sub>2</sub>(2) = log<sub>2</sub>n</span>");
					buttonAppendFunction("#popover11", function() {
						$("#li2Text4").after("<br><span id='li2Text5' class='ct-code-b-yellow'>k * 1 = log<sub>2</sub>n</span>");
						buttonAppendFunction("#popover11", function() {
							$("#li2Text5").after("<br><span id='li2Text6' class='ct-code-b-yellow'>k = log<sub>2</sub>n</span>");
							transferEffectFunction("#divCalcLine11", "#divCalcLine12", function() {
								console.log("transferred");
								buttonAppendFunction("#popover11", function() {
									console.log("Button");
									$("#finalIdC").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#finalIdC", "1", function() {
										$("#finalIdK").effect( "highlight", {color:"#FFD700"}, 2000);
										flipEffect("#finalIdK", "", function() {
											$("#finalIdK").append("log<sub>2</sub>n");
											buttonAppendFunction("#popover11", function() {
												$("#divCalcLine11").popover("hide");
												TweenMax.to($("#divCalcLine13"), 1, {opacity : 1, onComplete: function() {
													$("#finalIdK").effect( "highlight", {color:"#FFD700"}, 2000);
													transferEffectFunction("#finalIdK", "#resultTimeCt", function() {
														setTimeoutFunction();										
													});
												}});
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