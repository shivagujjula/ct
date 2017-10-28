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
	padding: 4px 6px;
	border: 2px solid gray;
	min-width: 65px !important;
	min-height: 30px !important;
	text-align: center !important;
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
		<div class="col-xs-6">
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
		<div class="col-xs-6">
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
		}
	});
	introjs.start();
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
				$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
				$('.introjs-duplicate-nextbutton').click(function() {
					$('.introjs-duplicate-nextbutton').remove();
					introNextSteps("#printArr", "printArr", 'bottom');
					introcode.nextStep();
				});
			});
		}
 	}
}
</script>
</html>