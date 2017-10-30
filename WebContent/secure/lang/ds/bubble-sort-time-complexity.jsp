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
	border: 1px solid green;
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

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of Bubble Sort</span>
		</h3>
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
						<td class="td-code-text" id="tdCodeLine1">&emsp;&emsp;
							<span class="" id="codeLine1">
							for (<span id="initilizationId1">i <span id="equalOperator1">=</span> 0;</span> 
							<span id="conditionId1">i <span id="lessOperator1"><</span> n - 1;</span> 
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
							for (<span id="initilizationId2">j <span id="equalOperator2">=</span> 0;</span> 
							<span id="conditionId2">j <span id="lessOperator2"><</span> n - i - 1;</span> 
							<span id="incrementId2">j<span id="incrementOperator2">++</span></span>) {</span>
						</td>
						<td class="td-border" id="unitLine2">
							<span id="unitLineText2" style="padding: 1px 10px;">
							<span class="opacity00" id="secondUnitValue1">1</span> <span id="plusOp3" class="opacity00">+</span> 
							<span class="opacity00" id="secondUnitValue2">(n - i - 1) + 1</span>
							 <span id="plusOp4" class="opacity00">+</span> <span class="opacity00" id="secondUnitValue3">(n - i - 1)</span></span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
							<span id="ifSpan">	
								<span class="" id="codeLine3span1">if (a[j] > a[j+1]) {</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span2">temp = a[j];</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span3" style="padding: 0px 34px 0px 0px;">a[j] = a[j+1];</span><br>
								&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
								<span class="" id="codeLine3span4">a[j+1] = temp;</span><br>
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
							<span class="" id="codeLine2">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine2">
							<span id="unitLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
					<tr>
						<td class="td-code-text">&emsp;&emsp;&emsp;
							<span class="" id="codeLine2">}</span>
						</td>
						<td class="opacity00 td-border" id="unitLine2">
							<span id="unitLineText2" style="padding: 2px 42px;">1</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="col-xs-6" id="preCodeDiv">
			<pre class="creamPreTab4" id="preCode1">
for (i = 0; i < n - 1; i++) {
	for (j = 0; j < n - i - 1; j++) {		
		if (a[j] > a[j+1]) {
			temp = a[j];
			a[j] = a[j+1];
			a[j+1] = temp;
		}
	}
}
			</pre>
		</div>
		<div class="col-xs-5">
			<div class="arrTable margin-top col-xs-12" id="arrTable">
				<table style="width:100%" class="" id="arrElements">
		  			<tbody>
		  				<tr id="outerArrow"></tr>
		  				<tr id="innerArrow"></tr>
			  			<tr border="2px" id="values">
					    	<td class="text-center"><span class="element" arrayvalue="0" id="sortEle0">1</span></td>
					   		<td class="text-center"><span class="element" arrayvalue="1" id="sortEle1">23</span></td>
					    	<td class="text-center"><span class="element" arrayvalue="2" id="sortEle2">5</span></td>
					    	<td class="text-center"><span class="element" arrayvalue="3" id="sortEle3">13</span></td>
					    	<td class="text-center"><span class="element" arrayvalue="4" id="sortEle4">12</span></td>
					    	<td class="text-center"><span class="element" arrayvalue="5" id="sortEle5">39</span></td>
					  		<!-- <td class="text-center"><span class="element" arrayvalue="6" id="sortEle6">33</span></td>
					    	<td class="text-center"><span class="element" arrayvalue="7" id="sortEle7">6</span></td> -->
					 	</tr>
					 	<tr id="arrayIndices"></tr>
					</tbody>
				</table>
				<div style="margin-top: 45px;">
					<span>
						<span id="arrDec" style="font-family: monospace;">
							int arr[] = {<div class="arr-ele" id="number0" arrayvalue="0">1</div>,<div class="arr-ele" id="number1" arrayvalue="1">23</div>,<div class="arr-ele" id="number2" arrayvalue="2">5</div>,<div class="arr-ele" id="number3" arrayvalue="3">13</div>,<div class="arr-ele" id="number4" arrayvalue="4">12</div>};
						</span>
					</span>
				</div>
			</div>
		</div>
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
var endingPoint = 6;
var flag = true;
var outerIdx = 0;

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
			element : '#arrTable',
			intro : '',
		}, {
			element : '#divTable',
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
		case 'preCode1':
				var text = "Let us consider a bubble sort function.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			break;
		case 'arrTable':
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.arr-ele').attr('maxlength',2);
			    $('.arr-ele').attr('contenteditable','true');
				$('.introjs-tooltip').removeClass('hide');
				text = 'Here, we are declaring and initializing an integer array with 8 elements : '
						+ '<span class="ct-code-b-yellow element" arrayvalue="0">'+ parseInt($("#number0").text()) +'</span>,'
						+ '<span class="ct-code-b-yellow element" arrayvalue="1">'+ parseInt($("#number1").text()) +'</span>,'
						+ '<span class="ct-code-b-yellow element" arrayvalue="2">'+ parseInt($("#number2").text()) +'</span>,'
						+ '<span class="ct-code-b-yellow element" arrayvalue="3">'+ parseInt($("#number3").text()) +'</span>,'
						+ '<span class="ct-code-b-yellow element" arrayvalue="4">'+ parseInt($("#number4").text()) +'</span>';
				typing(".introjs-tooltiptext", text, function() {
					$('#number0').focus();
					changeValue();
					buttonAppendFunction(".introjs-tooltiptext", function() {
						bubbleSort();
					})
				});
			});
			break;
		case 'divTable':
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
		}
	});
	introjs.start();
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

function secondStepAnimation() {
	/* svgAppend($('#divTable'), 'svg');
	svgMarkerAppend($('#svg'), 'marker'); */
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitLineText2', '#svg', 'svgLine2', 'marker', function() {
		popoverAppendFunction("#unitLine2", 2);
		var text = "<ul><li id='initLine'><span class='for-loop-li-css'>j = 0</span><br/>In the "+
				"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
				" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
				"<span class='ct-code-teal'>unit of time</span>.</li></ul>";
		typing("#popover2", text, function() {
			$("#initilizationId2").effect('highlight',{color:'#da5805'}, 1000, function() {
				transferEffectFunction("#initilizationId2", "#secondUnitValue1", function() {
					buttonAppendFunction("#popover2", function() {
						$("#plusOp3").removeClass("opacity00");
						$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>j < n - i -  1</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n - i - 1</span> "+
								"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>(n-i-1)+1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine", $("#conditionLine").html(), function() {
							$("#conditionId2").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#conditionId2", "#secondUnitValue2", function() {
									buttonAppendFunction("#popover2", function() {
										$("#plusOp4").removeClass("opacity00");
										$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>j++</span><br>In the "+
												"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
												"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
												"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-i-1</span>) number "+
												"of times. So it takes <span class='ct-code-b-yellow'>n-i-1</span> "+
												"<span class='ct-code-teal'>units of time</span>.</li>");
										typing("#incrementLine", $("#incrementLine").html(), function() {
											$("#incrementId2").effect('highlight',{color:'#da5805'}, 1000, function() {
												transferEffectFunction("#incrementId2", "#secondUnitValue3", function() {
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
}

function thirdStepAnimation() {
	$("#ifSpan").effect('highlight',{color:'#da5805'}, 2000, function() {
		svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3span3', '#unitLineText3', '#svg', 'svgLine3', 'marker', function() {
			$("#unitLineText3").fadeTo(500, 1);
			$("#unitLineText3").effect('highlight',{color:'#da5805'}, 1500, function() {
				popoverAppendFunction("#unitLineText3", 3);
				var text = ""
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
	for(var i = 0; i < 6; i++) {
		$('#arrayIndices').append('<th class="text-center"><span id="sortIndex'+ i +'">'+ i +'</span></th>')
		$('#outerArrow').append('<th><div class="text-center opacity00" id="outerArrow'+ i + '">'
				+ '<div id="outerIdxText'+ i +'"><span class="outer-loop-color">outer</span>Idx</div>'
				+ '<i class="fa fa-arrow-down" id="outerarrow'+ i + '"></i></div></th>');
		$('#innerArrow').append('<th><div class="text-center opacity00" id="innerArrow'+ i + '">'
				+ '<div id="innerIdxText'+ i +'"><span class="inner-loop-color">inner</span>Idx</div>'
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
				typing('#explanationDiv', text, function() {
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