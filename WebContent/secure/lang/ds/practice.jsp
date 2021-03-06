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

<title>Bubble sort time complexity</title>
<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
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
	overflow: initial;
}

td {
	padding: 3px 6px;
	border: 2px solid gray;
	min-width: 65px !important;
	min-height: 30px !important;
	/* text-align: center !important; */
}

#tableCode {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 650px;
}

/* #tableCode > tbody > tr > td {
    padding: 2px 8px;
} */

.td-code-text {
	font-family: monospace;
	border : none;
}

.td-border {
	border : none;
	padding: 0;
}

.ifConditionFontSize, #outerArrow, #innerArrow {
	font-size: 12px;
}

.margin-top {
	margin-top: 20px;
}

div, span {
	position: relative;
}

#arrDec > div {
	display: inline-block;
}

[contenteditable="true"] {
	outline: medium none;
}

.user-btn {
	background: green;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.arrTable {
	border: 1px solid;
	border-radius: 9px;
	background: #fefcd4;
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

.ui-effects-transfer {
	border: 1px solid #0bf30b;
	 z-index: 9999999 !important;
}

.for-loop-li-css {
	color: #00ff8d;
	font-weight: bold;
	font-size: 14px;
}

.ct-code-teal {
	color: #54f309;
	font-weight: bold;
} 

.ct-color-boolean {
	color: #4ce8fb;
}

#finalDiv {
	border: 1px solid;
	border-radius: 6px;
	padding: 4px;
	margin-left: 29%;
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

.inner-loop-color {
	font-weight: bold;
	color: green !important;
	font-family: monospace;
}

.outer-loop-color {
	font-weight: bold;
	color: #38e5d8 !important;
	font-family: monospace; 
}

.index-div {
	border: 1px solid;
	margin-top: 15px;
	padding: 6px;
	border-radius: 8px;
	background: papayawhip;
	font-size: 13px;
}

.ct-blue {
	color: blue;
}

a {
	color: #09ff4d;
	text-decoration: none;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.eleAtInnerIdx {
	padding: 5px;
}

.eleAtInnerIdxDiv {
	margin-top: 12px;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of Bubble Sort</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 index-div" id="indexDiv">
			<ul>
				<li id="listLine1" class="opacity00"><span class="ct-blue">Bubble sort</span> is an internal sorting technique in which <b>adjacent 
				elements</b> are compared and exchanged if necessary.</li>
				<li id="listLine2" class="opacity00">The working procedure for <span class="ct-blue">Bubble sort</span> is as follows:</li>
				<ol>
					<li id="listLine3" class="opacity00">Let us consider an array of <b>n</b> elements (i.e., <b>a[n]</b>) to be sorted.</li>
					<li id="listLine4" class="opacity00">Compare the first two elements in the array i.e., <b>a[0]</b> and <b>a[1]</b>, if <b>a[1]</b> is less than <b>a[0]</b> 
						then interchange the two values.</li>
					<li id="listLine5" class="opacity00">Next compare <b>a[1]</b> and <b>a[2]</b>, if <b>a[2]</b> is less than <b>a[1]</b> then interchange the values.</li>
					<li id="listLine6" class="opacity00">Continue this process till the last two elements are <b>compared</b> and <b>interchanged</b>.</li>
					<li id="listLine7" class="opacity00">Repeat the above steps for <b>n - 1</b> passes.</li>
				</ol>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-6 hide" id="divTable" style="background: antiquewhite;">
			<table align="center" id="tableCode">
				<tbody>
					<tr>
						<th class="code-heading-css" style="text-align: center;">Code</th>
						<th class="units-heading-css">Units</th>
					</tr>
					<tr>
						<td class="td-code-text" id="tdCodeLine0">
							<span class="" id="codeLine0">
							<span class="color-green">void</span> bubbleSort(<span class="color-green">int</span> a[], <span class="color-green">int</span> n) {</span>
						</td>
						<td class="td-border" id="unitLine0">
							<span id="unitLineText0" style="padding: 1px 10px;"></span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text" id="">&emsp;&emsp;
							<span class="color-green">int</span> i, j, temp;
						</td>
						<td class="td-border" id="">
							<span id="" style="padding: 1px 10px;"></span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text" id="tdCodeLine1">&emsp;&emsp;
							<span class="" id="codeLine1">
							<span class="color-maroon">for</span> (<span class="color-green">int</span> <span id="initilizationId1">i <span id="equalOperator1">=</span> <span class="color-deeppink">0</span>;</span> 
							<span id="conditionId1">i <span id="lessOperator1"><</span> n - <span class="color-deeppink">1</span>;</span> 
							<span id="incrementId1">i<span id="incrementOperator1">++</span></span>) {</span>
						</td>
						<td class="td-border" id="unitLine1">
							<span id="unitLineText1" style="padding: 1px 10px;">
							<span class="opacity00" id="firstUnitValue1">1</span> <span id="plusOp1" class="opacity00">+</span> 
							<span class="opacity00" id="firstUnitValue2">(n - 1) + 1</span>
							 <span id="plusOp2" class="opacity00">+</span> <span class="opacity00" id="firstUnitValue3">(n - 1)</span></span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="" id="codeLine2">
							<span class="color-maroon">for</span> (<span class="color-green">int</span> <span id="initilizationId2">j <span id="equalOperator2">=</span> <span class="color-deeppink">0</span>;</span> 
							<span id="conditionId2">j <span id="lessOperator2"><</span> n - i - <span class="color-deeppink">1</span>;</span> 
							<span id="incrementId2">j<span id="incrementOperator2">++</span></span>) {</span>
						</td>
						<td class="td-border" id="unitLine2">
								<span id="unitLineText2" style="padding: 1px 10px;">
								<span id="nMultiplyId1" class="opacity00">n * (</span>
								<span class="opacity00" id="secondUnitValue1">1</span> <span id="plusOp3" class="opacity00">+</span> 
								<span class="opacity00" id="secondUnitValue2">(n - i - 1) + 1</span>
								 <span id="plusOp4" class="opacity00">+</span> <span class="opacity00" id="secondUnitValue3">n - i - 1</span>
								 <span id="nMultiplyId2" class="opacity00">)</span>
							 </span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span id="ifSpan">	
								<span class="" id="codeLine3span1"><span class="color-maroon">if</span> (a[j] > a[j+<span class="color-deeppink">1</span>]) {</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span2">temp = a[j];</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span3" style="padding: 0px 34px 0px 0px;">a[j] = a[j+<span class="color-deeppink">1</span>];</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span4">a[j+<span class="color-deeppink">1</span>] = temp;</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span5">}</span>
							</span>
						</td>
						<td class="td-border" id="unitLine3">
							<span class="opacity00" id="unitLineText3" style="padding: 2px 12px;">n - i - 1</span>
						</td>
					</tr>
					<!-- <tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="" id="codeLine2">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine2">
							<span id="unitLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr> -->
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;
							<span class="" id="codeLine4">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine4">
							<span id="unitLineText4" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;
							<span class="" id="codeLine5">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine5">
							<span id="unitLineText5" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">
							<span class="" id="codeLine7">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine7">
							<span id="unitLineText7" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text" style="text-align: right;">
							<span class="opacity00" id="codeLine6"><b>Total = </b></span>
						</td>
						<td class="td-border" id="unitLine6">
							<span id="unitLineText6" class="opacity00" style="padding: 2px 42px;">2<span id="nValue1">n<sup>2</sup></span> + 3n - 2ni - i + 1</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="col-xs-6" id="preCodeDiv">
			<pre class="creamPreTab4 opacity00" id="preCode1">
<span id="preCodeLine1"><span class="color-green">void</span> bubbleSort(<span class="color-green">int</span> a[], <span class="color-green">int</span> n) {</span>
	<span id="preCodeLine2"><span class="color-green">int</span> i, j, temp;</span>
	<span id="preCodeLine3"><span class="color-maroon">for</span> (i = <span class="color-deeppink">0</span>; i < n - <span class="color-deeppink">1</span>; i++) {</span>
		<span id="preCodeLine4"><span class="color-maroon">for</span> (j = <span class="color-deeppink">0</span>; j < n - i - <span class="color-deeppink">1</span>; j++) {</span>
			<span id="preCodeLine5"><span class="color-maroon">if</span> (a[j] > a[j+<span class="color-deeppink">1</span>]) {</span>
				temp = a[j];
				a[j] = a[j+<span class="color-deeppink">1</span>];
				a[j+<span class="color-deeppink">1</span>] = temp;
			}
		}
	}
}
			</pre>
		</div>
		<div class="col-xs-5">
			<div class="arrTable margin-top col-xs-12" id="arrTable">
				<div class="col-xs-12 text-center"><div id="eleAtInnerText">temp</div></div>
				<div class="col-xs-12 text-center eleAtInnerIdxDiv"><span class="box-border eleAtInnerIdx">
							<span id="eleAtInnerIdxVal">0</span>
						</span></div>
				<div class="col-xs-12">
					<table style="width:100%" class="opacity00" id="arrElements">
			  			<tbody>
			  				<tr id="outerArrow"></tr>
			  				<tr id="innerArrow"></tr>
				  			<tr border="2px" id="values">
						    	<td class="text-center"><span class="element" arrayvalue="0" id="sortEle0">1</span></td>
						   		<td class="text-center"><span class="element" arrayvalue="1" id="sortEle1">23</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="2" id="sortEle2">5</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="3" id="sortEle3">13</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="4" id="sortEle4">12</span></td>
						    	<!-- <td class="text-center"><span class="element" arrayvalue="5" id="sortEle5">39</span></td> -->
						  		<!-- <td class="text-center"><span class="element" arrayvalue="6" id="sortEle6">33</span></td>
						    	<td class="text-center"><span class="element" arrayvalue="7" id="sortEle7">6</span></td> -->
						 	</tr>
						 	<tr id="arrayIndices"></tr>
						</tbody>
					</table>
				</div>
				<div class="col-xs-12" style="margin-top: 35px;">
					<span>
						<span id="arrDec" style="font-family: monospace;">
							int a[] = {<div class="arr-ele" id="number0" arrayvalue="0">1</div>,<div class="arr-ele" id="number1" arrayvalue="1">23</div>,<div class="arr-ele" id="number2" arrayvalue="2">5</div>,<div class="arr-ele" id="number3" arrayvalue="3">13</div>,<div class="arr-ele" id="number4" arrayvalue="4">12</div>};
						</span>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div id="finalDiv" class="col-xs-5 col-xs-offset-5 text-center opacity00">
			<span id="finalDivText" style="font-family: monospace;">The time complexity of bubble sort : bigO(<span class="opacity00" id="nValue2">n<sup>2</sup></span>)</span>
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
	appendTds();
});

var staringPoint = 1;
var endingPoint = 5;
var flag = true;
var outerIdx = 0;
var len = 6, elementAtInnerIdx;
var arr = [];

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
			tooltipClass : 'hide',
		}, {
			element : '#preCode1',
			intro : '',
		}, {
			element : '#arrTable',
			intro : '',
			animateStep : 'sortingInAction'
		}, {
			element : '#divTable',
			intro : '',
			animateStep : 'firstStep',
		}, {
			element : '#finalDiv',
			intro : '',
		}, {
			element : '#divTable',
			intro : '',
			animateStep : 'secondStep',
			position : 'right',
		}, {
			element : '#arrTable',
			intro : '',
			animateStep : 'sortingExample'
		}, {
			element : '#divTable',
			intro : '',
			animateStep : 'thirdStep',
			position : 'right',
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
			for (var i = 1; i <= 7; i++) {
				$("#listLine" + i).fadeTo(1000, 1, function() {
				});
			}
			$("#listLine7").after('<span class="introjs-button user-btn">Next &#8594;</span>');
			introjs.refresh();
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				introjs.nextStep();
			});
			break;
		case 'preCode1':
			$(".introjs-helperLayer").one("transitionend", function() {	
				var text = "Here we will learn time complexity of <span class='ct-code-b-yellow'>bubble sort</span> function.";
				typing(".introjs-tooltiptext", text, function() {
				TweenMax.to($("#preCode1"), 1, {opacity: 1, onComplete:function() {
					buttonAppendFunction(".introjs-tooltiptext", function() {
							$(".introjs-tooltip").hide();
							preCodeExplanation();
						});
					}});
				});
			});
			break;
		case 'arrTable':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'sortingInAction':
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.arr-ele').attr('maxlength',2);
				    $('.arr-ele').attr('contenteditable','true');
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer array with 5 elements : '
							+ '<span class="ct-code-b-yellow element" arrayvalue="0">'+ parseInt($("#number0").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="1">'+ parseInt($("#number1").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="2">'+ parseInt($("#number2").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="3">'+ parseInt($("#number3").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="4">'+ parseInt($("#number4").text()) +'</span>';
					typing(".introjs-tooltiptext", text, function() {
						$('#number0').focus();
						changeValue();
						buttonAppendFunction(".introjs-tooltiptext", function() {
							zoomingEffect("#arrElements", function() {
								buttonAppendFunction(".introjs-tooltiptext", function() {
								//	outerLoopInitializationText();	
									//outerLoopConditionChecking();
									bubbleSort();
								});
							})
						})
					});
				});
				break;
			case 'sortingExample':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "From the above <span class='ct-code-b-yellow'>a[]</span> length is 5. So the total number of comparison will be : "+
					"<ul><li>1st Phase - 5 time</li><li>2nd Phase - 4 time</li><li>3rd Phase - 3 time</li><li>4th Phase - 2 time</li>"+
					"<li>5th Phase - 1 time</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			}
			break;
		case 'divTable':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$(".introjs-tooltip").css("min-width", "250px");
			switch(animateStep) {
			case 'firstStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now find the time complexity for the bubble sort function.";
					typing(".introjs-tooltiptext", text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$(".introjs-tooltip").hide();
							firstStepAnimation();
						});
					});
				});
				break;
			case 'secondStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<span id='tooltipTextId'>We can calculate <span class='ct-code-b-yellow'>time complexity</span> in "+
					"another scenario.</span>";
					typing('.introjs-tooltiptext', text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$("#tooltipTextId").append("<ul><li id='liTooltipTextId'>We can observe that in first phase inner loop run "+
							"<span class='ct-code-b-yellow'>"+
							"n</span> time then in second phase <span class='ct-code-b-yellow'>n-1</span>, and <span class='ct-code-b-yellow'>"+
							"n-2</span> and so on. That means in every iteration its value goes down.</li></ul>");
							typing('#liTooltipTextId', $('#liTooltipTextId').html(), function() {
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
				break;
			case 'thirdStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li id='liFinalText1'>So we've noticed that the total number of comparisons done is <br>"+
					"<span class='ct-code-b-yellow'>n+(n-1)+...+2+1</span>.</li></ul>"
					typing(".introjs-tooltiptext", text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$("#liFinalText1").after("<li id='liFinalText2'>This sum is equal to <span class='ct-code-b-yellow' id='liFinalText1Span'>"+
							"n*(n+1)/2</span><br>(see <a href='https://en.wikipedia.org/wiki/Triangular_number' target='_blank'>Triangular Numbers</a>).</li>");
							typing("#liFinalText2", $("#liFinalText2").html(), function() {
								buttonAppendFunction(".introjs-tooltiptext", function() {
									$("#liFinalText2").append("<li><span class='ct-code-b-yellow opacity00' id='liFinalText2Span'>"+
										"(<span id='nValue3'>n<sup>2</sup></span>*n)/2</span></li>");
									$("#liFinalText1Span").effect('highlight',{color:'#da5805'}, 1000);
									transferEffectFunction("#liFinalText1Span", "#liFinalText2Span", function() {
										buttonAppendFunction(".introjs-tooltiptext", function() {
											$("#finalDiv").addClass("z-index");
											$("#nValue3").effect('highlight',{color:'#da5805'}, 1000, function() {
												tweenmaxAnimation("#nValue3", "#nValue2", function() {
													$("#nValue2").effect('highlight',{color:'#da5805'}, 1000, function() {
														$(".introjs-nextbutton").show();
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
			}
			break;
		case 'finalDiv':
			$(".introjs-helperLayer").one("transitionend", function() {
				TweenMax.to($("#finalDiv"), 1, {opacity: 1, onComplete:function() {
					var text = "The most significant term to represent the time complexity of an algorithm.";
					typing(".introjs-tooltiptext", text, function() {
						$("#nValue1").effect('highlight',{color:'#da5805'}, 1000, function() {
							tweenmaxAnimation("#nValue1", "#nValue2", function() {
								$("#nValue2").effect('highlight',{color:'#da5805'}, 1000, function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				}});
			});
			break;
		case "restart":
			$('.introjs-nextbutton').hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
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
	}, 1500);
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn").off();
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

function outerLoopInitializationText() {
//	$('.introjs-duplicate-nextbutton, .popover').remove();
//	$('#explanationDiv1').removeClass('opacity00'); 
//	arrow('#outerForLoop', '#outerForLoop');
	text = '<span class="ct-code-b-yellow">i</span> value Intialize to '
			+ '<span class="outer-loop-color">0</span>.</span>'
			+ ' <span id="appendButton"></span>';
	typing('.introjs-tooltiptext', text, function() {
		$('#appendButton').append("<a class='introjs-button user-btn'" 
			 	+ "onclick=outerLoopInitialization()>Next &#8594;</a>");
	});
}

	function outerLoopInitialization() {
		$('.user-btn').remove();
	//	$('#explanationDiv').removeClass('opacity00'); 
	//	$('#outerInti').effect( "highlight",{color: 'blue'}, 800, function() {
			zoomingEffect('#outerArrow' + outerIdx, function() {
				setTimeout(function() {
					outerLoopConditionChecking();
				},500);
			});
	//	});
	} 
	
	
	function outerLoopConditionChecking() {
		if (outerIdx < (len - 1)) {
			text = '<span class="ct-code-b-black"><span class="ct-code-b-blue">outer</span>Idx &lt; len - 1</span>'
				+ ' evaluates <span class="ct-code-b-green">true</span>.&nbsp;'
				+ ' <span id="appendButton"></span>';
			typing('.introjs-tooltiptext', text, function() {
			//	$('#outerLoop').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button user-btn'" 
						 		+ "onclick=innerLoopInitializationText()>Next &#8594;</a>");						
					} else {
						setTimeout(function() {
							innerLoopInitializationText();
						},500);
					}
			//	});	
			});
		} else {
			text = '<span class="ct-code-b-black"><span class="outer-loop-color">outer</span>Idx &lt; len - 1</span>'
				+ ' evaluates <span class="ct-code-b-red">false</span>.&nbsp;'
				+ ' <span id="appendButton"></span><br><span id="elementText"></span>';
			typing('.introjs-tooltiptext', text, function() {
			//	$('#outerLoop').effect( "highlight",{color: 'lightgreen'}, 800, function() {
					$('#appendButton').append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$('.user-btn').click(function() {
						$('.user-btn, #appendButton').remove();
						text = 'Largest element <span class="outer-loop-color">'+ $('#sortEle0').text() +'</span> will be places at '
								+ '<span class="outer-loop-color">0</span> location. <br/>'
								+ 'All elements are sorted successfully. <span id="appendButton"></span>';
						typing('.introjs-tooltiptext', text, function() {
							$('#sortEle0').parent().css('background', 'orange').addClass("completed");
							endingPoint = 5 - $(".completed").length;
							$('.introjs-duplicate-skipbutton').remove();
							/* $('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
								 	+ "onclick=bubbleSort()>Auto Complete &#8594;</a>"); */
							$('#appendButton').append("<a class='introjs-button user-btn'>Next &#8594;</a>");
							$('.user-btn').click(function() {
								$('.user-btn').remove();
							//	introNextSteps("#printArr", "printArr", 'bottom');
							//	introcode.nextStep();
							})
						});
					});
			//	});
			});
		}
	}
	
	function outerLoopConditionChecking() {
		if (outerIdx < (len - 1)) {
			console.log("outerIdx < ");
			setTimeout(function() {
				innerLoopInitializationText();
			},500);
		}
	}
	
	function innerLoopInitializationText() {
		var innerIdx = 0;
		if(innerIdx < (len - outerIdx - 1)) {
			console.log("innerIdx < ");
			setTimeout(function() {
				innerLoopInitialization(innerIdx);
			},500);
		}
	}
	
	function innerLoopInitialization(innerIdx) {
		zoomingEffect('#innerArrow' + innerIdx, function() {
				$('#innerArrow' + innerIdx).css({'opacity' : '1'});
				setTimeout(function() {
					innerLoopConditionChecking(innerIdx);
				},500);
			});
	}
	
	function innerLoopConditionChecking(innerIdx) {
		if(innerIdx < (len - outerIdx - 1)) {
			text = '<span class="ct-code-b-yellow">j &lt; n - i - 1</span>'
				+ ' evaluates <span class="ct-code-b-green">true</span>.&nbsp;'
				+ ' <span id="appendButton"></span>';
			typing('.introjs-tooltiptext', text, function() {
				if (flag) {
					$('#appendButton').append("<a class='introjs-button user-btn'" 
					 		+ "onclick=checkIfCondition(" + innerIdx + ")>Next &#8594;</a>");	
				} else {
					setTimeout(function() {
						checkIfCondition(innerIdx);
					},500)
				}
			});
		} else {
			text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx &lt; len - outerIdx - 1</span>'
				+ ' evaluates <span class="ct-code-b-red">false</span>.&nbsp;'
				+ ' <br/><span id="appendedText"></span> <span id="appendButton"></span>';
			typing('.introjs-tooltiptext', text, function() {
			//	$('#innerLoop').effect( "highlight",{color: 'lightgreen'}, 800, function() {
					text = 'The largest element <span class="outer-loop-color">'+ parseInt($('#sortEle' + innerIdx).text()) 
							+ '</span> will be places at <span class="outer-loop-color">'+ innerIdx 
							+ '</span> location.<span id="appendButton"></span>';
					typing('.introjs-tooltiptext', text, function() {
						$('#sortEle' + innerIdx).parent().css('background', 'orange').addClass("completed");
						
						endingPoint = 5 - $(".completed").length;
							$('.introjs-duplicate-skipbutton').remove();
							$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
								 	+ "onclick=bubbleSort()>Auto complete &#8594;</a>");
						$('#appendButton').append("<a class='introjs-button user-btn'" 
						 		+ "onclick=outerIdxIncerementText(" + innerIdx + ")>Next &#8594;</a>");
					});
				});
		//	});
		}
	}
	
	function checkIfCondition(innerIdx) {
		$('.user-btn').remove();
		console.log("checkIfCondition");
//console.log("");		
	//	$('#innerLoop').css('background', '');
	//	arrow('#innerForLoop', '#ifConditionCheck', function() {
		//	$('#ifCondition').effect( "highlight",{color: 'blue'}, 500, function() {
				arr[innerIdx] = parseInt($('#sortEle' + innerIdx).text());
				console.log("arr[innerIdx] : " + arr[innerIdx]);
				arr[innerIdx + 1] = parseInt($('#sortEle' + (innerIdx + 1)).text());
				console.log("arr[innerIdx + 1] : " + arr[innerIdx + 1]);
				if (arr[innerIdx] > arr[innerIdx + 1]) {
					text = '<span class="ct-code-b-yellow">a[j] &gt; a['
					        + 'j+1]</span> evaluates '
							+ '<span class="inner-loop-color">true</span>.</span>'
							+ ' <span id="appendButton"></span>';
					typing('.introjs-tooltiptext', text, function() {
						setTimeout(function() {
							swapElements(innerIdx);
						},500);
					});
				} else {
					text = '<span class="ct-code-b-yellow">a[j] &gt; a['
				        + 'j+1]</span> evaluates '
						+ '<span class="inner-loop-color">false</span>.</span>'
						+ ' <span id="appendButton"></span>';
					typing('.introjs-tooltiptext', text, function() {
						if (flag) {
							$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
							 		+ "onclick=innerIdxIncerementText(" + innerIdx + ")>Next &#8594;</a>");	
						} else {
							setTimeout(function() {
								innerIdxIncerementText(innerIdx);
							},500);
						}
					});
				}
		//	});
	//	});
	}
	
	function innerIdxIncerementText(innerIdx) {
		$('.user-btn').remove();
	//	arrow('#ifConditionCheck', '#innerForLoop', function() {
			text = '<span class="ct-code-b-yellow">j++</span> increment by one'
					+ ' <span id="appendButton"></span>';
			typing('.introjs-tooltiptext', text, function() {
				if (flag) {
					$('#appendButton').append("<a class='introjs-button user-btn'" 
					 		+ "onclick=innerIdxIncerement(" + innerIdx + ")>Next &#8594;</a>");
				} else {
					setTimeout(function() {
						innerIdxIncerement(innerIdx);
					},500);
				}
			});
	//	});
	}
	
	function innerIdxIncerement(innerIdx) {
	//	$('#storeValueInOuterIdx, #storeArrInnerIdxPlusVal, #storeEleOuterIdxVal').css('background', '');
		$('.user-btn').remove();
	//	$('#innerInc').effect( "highlight",{color: 'blue'}, 500, function() {
			++innerIdx;
			toEffectWithTweenMax('#innerArrow' + (innerIdx - 1) , '#innerArrow' + innerIdx , function() {
				flag = false;
				setTimeout(function() {
					innerLoopConditionChecking(innerIdx);
				},500);
			});
	//	});
	}
	
	function swapElements(innerIdx) {
	//	arrow('#ifConditionCheck', '#storeArrInnerIdxPlusVal', function() {
			text = 'Now swap the elements.'
					+ ' <span id="appendButton"></span>';
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-duplicate-skipbutton').removeClass('opacity00');
				$('#appendButton').append("<a class='introjs-button user-btn'>Next &#8594;</a>");
				$('.user-btn').click(function() {
					$('.user-btn').remove();
				//	$('#storeValueInOuterIdx, #storeArrInnerIdxPlusVal, #storeEleOuterIdxVal').css('background', 'lightgreen');
				//	$('#storeValueInOuterIdx').effect( "highlight",{color: 'blue'});
				//	$('#storeArrInnerIdxPlusVal').effect( "highlight",{color: 'blue'});
				//	$('#storeEleOuterIdxVal').effect( "highlight",{color: 'blue'}, 800, function() {
						fadeInFromEffectWithTimelineMax('#sortEle' + innerIdx, '#eleAtInnerIdxVal', function() {
							fadeInFromEffectWithTimelineMax('#sortEle' + (innerIdx + 1), '#sortEle' + innerIdx, function() {
								fadeInFromEffectWithTimelineMax('#eleAtInnerIdxVal', '#sortEle' + (innerIdx + 1), function() {
									setTimeout(function() {
										innerIdxIncerementText(innerIdx);
									},500);
								});
							});
						});
				//	});
				});				
			});
	//	});
	}
	
	function outerIdxIncerementText(innerIdx) {
		//$('#sortEle0').parent().css('background', 'orange').addClass("completed");
		$('.introjs-duplicate-skipbutton').addClass('opacity00');
		$('#innerArrow' +innerIdx ).css('opacity', '0');
		$('.introjs-duplicate-nextbutton').remove();
		arrow('#innerForLoop', '#outerForLoop', function() {
			text = '<span class="ct-code-b-black"><span class="ct-code-b-blue">outer</span>Idx++</span> increment by one'
					+ ' <span id="appendButton"></span>';
			typing('#explanationDiv', text, function() {
				if (flag) {
					$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 		+ "onclick=outerIdxIncerement()>Next &#8594;</a>");
				} else {
					setTimeout(function() {
						outerIdxIncerement();
					},500);
				}
			});
		});
	}
	
	function outerIdxIncerement() {
		$('#storeValueInOuterIdx, #storeArrInnerIdxPlusVal, #storeEleOuterIdxVal').css('background', '');
		$('.introjs-duplicate-nextbutton').remove();
		$('#outerInc').effect( "highlight",{color: 'blue'}, 500, function() {
			toEffectWithTweenMax('#outerArrow' + outerIdx , '#outerArrow' + (outerIdx + 1) , function() {
				flag = false;
				++outerIdx;
				
				setTimeout(function() {
					outerLoopConditionChecking();
				},500);
			});
		});
	}
	
	function toEffectWithTweenMax(selector1, selector2, callBackFunction) {
		var l1 = $(selector1).offset();
		$(selector2).offset({top: l1.top, left: l1.left});
		$(selector1).addClass("opacity00").removeAttr("style")
		TweenMax.to($(selector2), 0.3, {opacity: 1, top: 0, left: 0, onComplete: function() {
			$(selector2).removeAttr("style").removeClass("opacity00");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}
	
	function fadeInFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
		var timelineMax = new TimelineMax();
		$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
			$(selector1).removeClass('z-index1000000');
			var l1 = $(selector1).offset();
			var l2 = $(selector2).offset();
			var topLength = l1.top - l2.top;
			var leftLength = l1.left - l2.left;
			$("#programDiv").append("<span id='dummy' style='position: relative;color: black;'>" 
				+ $(selector2).text() + "</span>");
			$('#dummy').offset({
				"top": l2.top, 
				"left": l2.left
			});
			$(selector2).text($(selector1).text());
			timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}}).to('#dummy', 0.5, {opacity: 0, onComplete: function() {
				$("#animationDiv").removeAttr("style").addClass("introjs-showElement");			
				$('#dummy').remove();
			}}, "-=0.5");
		});
	}



function preCodeExplanation() {
	popoverAppendFunction("#preCodeLine1", 1);
	$("#preCodeLine1").effect('highlight',{color:'#da5805'}, 1000);
	var text = "<span class='ct-code-b-yellow'>Bubble Sort</span> is the simplest sorting algorithm that works by repeatedly swapping "+
		"the adjacent elements if they are in wrong order.";
	typing("#popover1", text, function() {
		buttonAppendFunction("#popover1", function() {
			$("#preCodeLine1").popover('hide');
			popoverAppendFunction("#preCodeLine3", 3);
			$("#preCodeLine3").effect('highlight',{color:'#da5805'}, 1000);
			var text = "This <span class='ct-code-b-yellow'>for</span> loop represents number of passes for sorting.<br>"+
				"Here we are taking <span class='ct-code-b-yellow'>n-1</span> number of passes because last index of element is "+
				"already sorted at first pass."
			typing("#popover3", text, function() {
				buttonAppendFunction("#popover3", function() {
					$("#preCodeLine3").popover('hide');
					popoverAppendFunction("#preCodeLine4", 4);
					$("#preCodeLine4").effect('highlight',{color:'#da5805'}, 1000);
					var text = "This <span class='ct-code-b-yellow'>for</span> loop represents number of comparisons.<br>"+
					"Here <span class='ct-code-b-yellow'>n-i-1</span> comparisons are done."
					typing("#popover4", text, function() {
						buttonAppendFunction("#popover4", function() {
							$("#preCodeLine4").popover('hide');
							popoverAppendFunction("#preCodeLine5", 5);
							$("#preCodeLine5").effect('highlight',{color:'#da5805'}, 1000);
							var text = "This <span class='ct-code-b-yellow'>if</span> condition <span class='ct-code-b-yellow'>swapping</span> "+
								"the elements in required order."
							typing("#popover5", text, function() {
								buttonAppendFunction("#popover5", function() {
									$("#preCodeLine5").popover('hide');
									setTimeoutFunction();
								});
							});
						});
					});
				});
			});
		});
	});
}

function firstStepAnimation() {
	svgAppend($('#divTable'), 'svg');
	svgMarkerAppend($('#svg'), 'marker');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine1', '#unitLineText1', '#svg', 'svgLine1', 'marker', function() {
		popoverAppendFunction("#unitLine1", 1);
		var text = "<span id='popover1Text1'>This for loop involves three instructions which are "+
		"<span class='ct-code-b-yellow'>initialization</span>, "+
		"<span class='ct-code-b-yellow'>condition</span> and <span class='ct-code-b-yellow'>increment</span> part.</span>";
		typing("#popover1", text, function() {
			buttonAppendFunction("#popover1", function() {
				$("#popover1Text1").after("<span><ul><li id='initLine'><span class='for-loop-li-css'>i = 0</span><br/>In the "+
						"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
						" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
						"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
				typing("#initLine", $("#initLine").html(), function() {
					$("#initilizationId1").effect('highlight',{color:'#da5805'}, 1000, function() {
						transferEffectFunction("#initilizationId1", "#firstUnitValue1", function() {
							buttonAppendFunction("#popover1", function() {
								$("#plusOp1").removeClass("opacity00");
								$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>i < n - 1</span><br>In the "+
										"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
										"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
										"executes <span class='ct-code-teal'>n - 1</span> "+
										"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
										"So takes <span class='ct-code-b-yellow'>(n-1)+1</span> "+
										"<span class='ct-code-teal'>units of time</span>.</li>");
								typing("#conditionLine", $("#conditionLine").html(), function() {
									$("#conditionId1").effect('highlight',{color:'#da5805'}, 1000, function() {
										transferEffectFunction("#conditionId1", "#firstUnitValue2", function() {
											buttonAppendFunction("#popover1", function() {
												$("#plusOp2").removeClass("opacity00");
												$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>i++</span><br>In the "+
														"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
														"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
														"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-1</span>) number "+
														"of times. So it takes <span class='ct-code-b-yellow'>n-1</span> "+
														"<span class='ct-code-teal'>units of time</span>.</li>");
												typing("#incrementLine", $("#incrementLine").html(), function() {
													$("#incrementId1").effect('highlight',{color:'#da5805'}, 1000, function() {
														transferEffectFunction("#incrementId1", "#firstUnitValue3", function() {
															buttonAppendFunction("#popover1", function() {
																$("#unitLine1").popover("hide");
																secondStepAnimation();
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

/* But this loop executes <span class='ct-code-b-yellow'>n</span> times because of "+
"the inner for loop. So it takes <span class='ct-code-b-yellow'>n*1 = n</span> <span class='ct-code-teal'>units of time</span>. */
function secondStepAnimation() {
	/* svgAppend($('#divTable'), 'svg');
	svgMarkerAppend($('#svg'), 'marker'); */
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitLineText2', '#svg', 'svgLine2', 'marker', function() {
		popoverAppendFunction("#unitLine2", 2);
		var text = "<ul><li id='initLine2'><span class='for-loop-li-css'>j = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul>";
		typing("#popover2", text, function() {
			$("#initilizationId2").effect('highlight',{color:'#da5805'}, 1000, function() {
				transferEffectFunction("#initilizationId2", "#secondUnitValue1", function() {
					buttonAppendFunction("#popover2", function() {
						$("#plusOp3").removeClass("opacity00");
						$("#initLine2").after("<li id='conditionLine2'><span class='for-loop-li-css'>j < n - i - 1</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n - i - 1</span> "+
								"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>(n-i-1)+1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine2", $("#conditionLine2").html(), function() {
							$("#conditionId2").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#conditionId2", "#secondUnitValue2", function() {
									buttonAppendFunction("#popover2", function() {
										$("#plusOp4").removeClass("opacity00");
										$("#conditionLine2").after("<li id='incrementLine2'><span class='for-loop-li-css'>j++</span><br>In the "+
												"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
												"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
												"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-i-1</span>) number "+
												"of times. So it takes <span class='ct-code-b-yellow'>n-i-1</span> "+
												"<span class='ct-code-teal'>units of time</span>.</li>");
										typing("#incrementLine2", $("#incrementLine2").html(), function() {
											$("#incrementId2").effect('highlight',{color:'#da5805'}, 1000, function() {
												transferEffectFunction("#incrementId2", "#secondUnitValue3", function() {
													buttonAppendFunction("#popover2", function() {
														$("#incrementLine2").append("<li id='nMultiplyText'>But this inner for loop executes "+
															"<span class='ct-code-b-yellow'>n</span> times because of "+
															"the outer for loop. So we have to multiply with <span class='ct-code-b-yellow'>n</span>"+
															" to the inner for loop of <span class='ct-code-teal'>units of time</span>.</li>");
														typing("#nMultiplyText", $("#nMultiplyText").html(), function() {
															$("#codeLine1").effect('highlight',{color:'#da5805'}, 1000, function() {
																$("#codeLine2").effect('highlight',{color:'#da5805'}, 1000, function() {
																	transferEffectFunction("#codeLine2", "#unitLineText2", function() {
																		$("#nMultiplyId1, #nMultiplyId2").removeClass("opacity00");
																		buttonAppendFunction("#popover2", function() {
																			$("#unitLine2").popover("hide");
																			thirdStepAnimation();
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
			});
		});
	});
}

function thirdStepAnimation() {
	$("#ifSpan").effect('highlight',{color:'#da5805'}, 2000, function() {
		svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3span3', '#unitLineText3', '#svg', 'svgLine3', 'marker', function() {
			$("#unitLineText3").fadeTo(500, 1);
			$("#unitLineText3").effect('highlight',{color:'#da5805'}, 1500, function() {
				popoverAppendFunction("#unitLineText3", 3);
				var text = "The <span class='ct-code-b-yellow'>swap</span> method executes <span class='ct-code-b-yellow'>n-i-1</span> "+
					"<span class='ct-code-teal'>units of time</span>.</li>";
				typing("#popover3", text, function() {
					buttonAppendFunction("#popover3", function() {
						$("#unitLineText3").popover("hide");
						TweenMax.to($("#codeLine6"), 1, {opacity: 1, onComplete:function() {
							TweenMax.to($("#unitLineText6"), 1, {opacity: 1, onComplete:function() {
								setTimeoutFunction();
							}});
						}});
					});
				});
			});
		});
	});
}

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

function popoverAppendFunction(selector, divIdNum) {
	$(selector).popover({
		placement: 'right',
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
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

function appendTds() {
	for(var i = 0; i < 5; i++) {
		$('#arrayIndices').append('<th class="text-center"><span id="sortIndex'+ i +'">'+ i +'</span></th>')
		$('#outerArrow').append('<th><div class="text-center opacity00" id="outerArrow'+ i + '">'
				+ '<div id="outerIdxText'+ i +'"><span class="outer-loop-color">i</span></div>'
				+ '<i class="fa fa-arrow-down" id="outerarrow'+ i + '"></i></div></th>');
		$('#innerArrow').append('<th><div class="text-center opacity00" id="innerArrow'+ i + '">'
				+ '<div id="innerIdxText'+ i +'"><span class="inner-loop-color">j</span></div>'
				+ '<i class="fa fa-arrow-down" id="innerarrow'+ i + '"></i></div></th>'); 
	}
}

function changeValue() {
	$(".arr-ele").keypress(function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});
	$('.arr-ele').keydown(function(e) {
		$(".length-error-text").remove();
		if (e.which === 13) {
			e.preventDefault();
		}
		var max = $(this).attr("maxlength");
		if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
		    e.preventDefault();
		}
	});	
	
	$(".arr-ele").keyup(function(e) {
		$(".length-error-text").remove();
		var arrayvalue = $(this).attr("arrayvalue");
		$(".arr-ele").each(function(index){
			if (index == arrayvalue) {
				if ($(this).text() == '') {
					$(this).addClass("empty");
					$(".user-btn").hide(); 
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter a number.</span>");
					$(".element[arrayvalue=" + index + "]").text('');
				} else {
					$(".length-error-text").remove();
					$(this).removeClass("empty");
					$(".element[arrayvalue=" + index + "]").text($(this).text());
				}
				if ($(".empty").length == 0) {
					  $(".user-btn").show(); 
				} 
			}
		});
	});
}

function bubbleSort() {
	$(".introjs-duplicate-skipbutton").remove();
	$('.introjs-duplicate-nextbutton').remove();
	$("#outerArrow" + outerIdx).addClass("opacity00");
	$("#innerArrow th i").parent().not(".opacity00").addClass("opacity00");
	if (staringPoint <= endingPoint) {
		$("#arrElements tr:nth-child(3) td").eq(staringPoint - 1).effect("highlight", {color: 'pink'}, 100, function() {
			var val1 = parseInt($("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint - 1) + ") span").text());
			var val2 = parseInt($("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint) + ") span").text());
			if (val1 > val2) {
				var elmt1 = $("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint - 1) + ") span");
				var elmt2 = $("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint) + ") span");
				var l1 = elmt1.text(val2).offset();
				var l2 = elmt2.text(val1).offset();
				$("#eleAtInnerIdxVal").text(val1);
				var leftLength = l2.left - l1.left;
				TweenMax.from(elmt1, 0.2, {"left" : leftLength});
				TweenMax.from(elmt2, 0.2, {"left" : -leftLength, onComplete:function() {
					staringPoint++;
					bubbleSort();
				}});
			} else if (staringPoint <= endingPoint) {
				$("#eleAtInnerIdxVal").text(val2);
				staringPoint++;
				bubbleSort();
			}
		});
	} else if (staringPoint == 1) {
		$("#arrElements tr:nth-child(3) td").eq(staringPoint - 1).effect("highlight", {color: 'pink'}, 100, function() {
			if (staringPoint < endingPoint) {
				staringPoint++;
				bubbleSort();
			}
		});
	} else {
		$("#arrElements tr:nth-child(3) td").eq(staringPoint - 2).css("background-color", "orange").addClass("completed");
			staringPoint = 1;
			endingPoint--;
			if (staringPoint <= endingPoint) {
				setTimeout(function() {
					bubbleSort();
				}, 200);
			} else {
				$(".introjs-duplicate-skipbutton").remove();
				$('.introjs-duplicate-nextbutton').remove();
				text = 'All elements are sorted successfully.'
						+ ' <span id="appendButton"></span>';
				typing('.introjs-tooltiptext', text, function() {
				/* $('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
				$('.introjs-duplicate-nextbutton').click(function() {
					$('.introjs-duplicate-nextbutton').remove();
				//	introNextSteps("#printArr", "printArr", 'bottom');
					introjs.nextStep();
				}); */
				buttonAppendFunction(".introjs-tooltiptext", function() {
					$("#divTable").removeClass("hide");
					$("#preCodeDiv").hide();
					introjs.nextStep();
				});
			});
		}
 	}
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