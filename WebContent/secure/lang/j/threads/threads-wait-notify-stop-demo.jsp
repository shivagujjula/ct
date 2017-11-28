<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script>var $_bs = jQuery.noConflict(true);</script>
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/gs/TweenMax.min.js"></script>
 
 <title>Wait Notify Stop Threads Demo</title>

<style>

.ui-effects-transfer {
	border: 1px solid blue;
}
  
#slider-range-max label {
    position: absolute;
    width: 20px;
    margin-left: -10px;
    text-align: center;
    margin-top: 15px;
}

.button-div-css {
	margin-top: 15px;
    text-align: center;
}

.threadbox {
	border: 1px solid lightgray;
	border-radius: 8px;
	padding: 0 10px;
	margin: 10px 10px 10px 10px;
	height: 698px;
	width: auto;
}

.opacity40 {
	opacity: 0.4 !important;
}

p {
	font-size: 90%;
	margin: 0 0 5px;
}

#sliderDiv {
	margin-left: 10px;
}

.vertical-thread {
	margin-top: 40px;
	margin-bottom: 40px;
	display: inline-block;
	width: 100px;
	height: 26px;
	-webkit-transform: rotate(+90deg);
	transform: rotate(+90deg);
}

.progress-bar-striped {
	-webkit-transform: rotate(+180deg);
	transform: rotate(+180deg);
}

.vertical-thread {
	box-shadow: inset 0px 4px 6px #ccc;
}

.progress-bar {
	box-shadow: inset 0px 4px 6px rgba(100, 100, 100, 0.6);
}

.creamPreTab4 {
	font-size: 8.5px;
	border: 1px dashed #ccc;
    background-color: #fffae6;
    white-space: pre;
    -moz-tab-size: 2;
    padding: 6px 2px;
}

.main-method-arrow {
	color: #CE9717 !important;
}

.thread-arrow {
	color: #337ab7 !important;
}

.output-console {  
    border-radius: 8px !important;
    overflow: auto;
    margin: 30px 10px 10px 10px;
}

.output-console-title-bar {
    background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
    padding: 2px 0;
    text-align: center;
}

.output-console-body {
    background-color: black;
    padding-left: 20px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 10px;
	white-space: pre;
    height: 500px;
	overflow-y: auto;
	overflow-x: hidden;
}

.btn-execute {
	border-radius: 6px;
	font-size: 9px;
	line-height: 1;
	padding: 0 5px;
}

#outputBox {
	display: none;
}

.popover-content {
	background-color: #003399;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    margin: 4px;
    padding: 5px;
}

.popover {
	width: -moz-max-content;
}

.tooltip {
	font-size: 10px;
	width: -moz-max-content;
}

.tooltip-inner {
	padding: 0 8px;
}

@keyframes ellipsis {
    from {
        width: 0;
        margin-right: 0;
    }
    to {
        width: 40px;
        margin-right: -40px;
    }
}

.loading::after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    text-align: left;
    animation: ellipsis 1s infinite steps(4);
    content: "…";
}

.pauseResumeStopBtn {
	font-family: monospace;
}

.thread-message-div-css {
	height: 23px;
}

.temp-status-css {
	font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
	font-size: 8.5px;
}

.position-relative {
	position: relative;
}

.thread-message-div-css > p {
	margin: 0;
}

.comments {
	font-style: italic;
	color: green;
}

.introjs-tooltip {
	min-width: 310px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.code-b-green {
	font-weight: bold;
	color: green;
}

.code-b-red {
	font-weight: bold;
	color: rgb(252, 66, 66);
}

</style>

<script>

Array.prototype.equals = function (array) {
	// if the other array is a falsy value, return
	if (!array)
		return false;
	
	// compare lengths - can save a lot of time 
	if (this.length != array.length)
		return false;
	
	for (var i = 0, l=this.length; i < l; i++) {
		// Check if we have nested arrays
		if (this[i] instanceof Array && array[i] instanceof Array) {
			
			// recurse into the nested arrays
			if (!this[i].equals(array[i]))
				return false;       
		} else if (this[i] != array[i]) {
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;
		}
	}
	return true;
}
	
	var sliderValue = 2;
	var executeLineIndex;
	
	var threadProgressBarWidth;
	var threadProgressBarSetInterval = [];

	var pauseCalledArr = [];
	var stopCalledArr = [];

	var heightOfMainMethodBox;
	
	var id;
	var arrow = [];
	
	var l1 = [];
	var l2 = [];
	var topLength = [];
	var leftLength = [];
	
	var executeButton;
	
	var mainMethodArrowWidth;
	var executeLineWidth;
	
	var introjs;
	
	$(document).ready(function() {
		
		function getURLParameter(sParam) {
		    var sPageURL = window.location.search.substring(1);
		    var sURLVariables = sPageURL.split('&');
		    for (var i = 0; i < sURLVariables.length; i++) {
		        var sParameterName = sURLVariables[i].split('=');
		        if (sParameterName[0] == sParam) {
		            return sParameterName[1];
		        }
		    }
		}
		
		id = getURLParameter('id');
		$("#sliderDiv").hide();
		if (id == 1) {
			sliderValue = parseInt(id);
			$("#thread1Label").text("Thread T");
		} else {
			//$(".button-div-css").addClass('col-sm-2');
		}
		
		$(function() {
			$("#slider-range-max").slider({
				range : "max",
				min : 1,
				max : 4,
				value : 2,
				slide : function(event, ui) {
					$("#numOfThreads").val(ui.value);
					sliderValue = parseInt($("#numOfThreads").val());
				}
			});
			var per = 0; 
			for (var i = 1; i <= 4; i++) {
				var el = $('<label>'+ i +'</label>').css('left', per + '%');
			  	per = per + (100 / 3);
			    $( "#slider-range-max" ).append(el);
			  }
			$("#numOfThreads").val($("#slider-range-max").slider("value"));
		});
		
		$_bs("#startMainMethodButton").attr('data-content', 
				(id == 1)? 'Click to start the demo with a single thread.' : 'Click to start the demo with multiple threads.');
		$_bs("#startMainMethodButton").popover('show');
		$_bs("#resetMainMethodButton").attr('data-content', 'Click to restart the demo.');
		
		$("#startMainMethodButton").click(function() {
			$_bs(this).popover('hide');
			$(this).addClass('hidden');
			$("#resetMainMethodButton").removeClass('hidden');
			$('#numOfObjects').empty();
			for (var next = 1; next <= (sliderValue * 2); next++) {
				if (next < (sliderValue + 1)) {
					if (id == 1) {
						$('#numOfObjects').append("\t\t<span id='line" + next + "'>Counter t = <span id='objectT" + next + "'>new Counter(" + next + ")</span>;</span>\n");
					} else {
						$('#numOfObjects').append("\t\t<span id='line" + next + "'>Counter t" + next + " = <span id='objectT" + next + "'>new Counter(" + next + ")</span>;</span>\n");
					}
				} else {
					if (id == 1) {
						$('#numOfObjects').append("\t\t<span id='line" + next + "'>new Thread(t).start();</span>");
					} else {
						$('#numOfObjects').append("\t\t<span id='line" + next + "'>new Thread(t" + (next- sliderValue) + ").start();</span>");
						if (next != (sliderValue * 2)) {
							$('#numOfObjects').append("\n");
						}
					}
				}
			}
			$('#slider-range-max').slider('disable');
			threadProgressBarWidth = [ 0, 0, 0, 0, 0];
			executeLineIndex = 1;
			heightOfMainMethodBox = (sliderValue == 4) ? 686 : (sliderValue == 3) ? 664 : (sliderValue == 2) ? 666 : 642;
			$("#mainMethodThreadbox").css('height', heightOfMainMethodBox);
			$("#mainMethodThreadbox").removeClass('hidden');
			$('#outputPre').empty();
			introJsFunction();
			
			if (id == 1) {
				$_bs("#for1").attr({'data-original-title': 'Entering into the <b>for</b> loop', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#ifStopCalled1").attr({'data-original-title': '<b>stopCalled</b> is <span class=" code-b-red">false</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#return1").attr({'data-original-title': 'returning from the <b>run()</b> method', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#ifPauseCalled1").attr({'data-original-title': '<b>pauseCalled</b> is <span class=" code-b-red">false</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#wait1").attr({'data-original-title': '<b>run()</b> method is <b>paused</b>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#pauseCalled1").attr({'data-original-title': '<b>pauseCalled</b> is changed to <span class="code-b-green">true</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#resumeCalled1").attr({'data-original-title': '<b>pauseCalled</b> is changed to <span class="code-b-red">false</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#stopCalled1").attr({'data-original-title': '<b>stopCalled</b> is changed to <span class=" code-b-green">true</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#notify1").attr({'data-original-title': '<b>notifies</b> lock from <b>wait<b>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
			}
		});
		
		$("#resetMainMethodButton").click(function() {
			location.reload();
		});
		
		$('body').keydown(function(e) {
			if (e.which == 13) {
				e.preventDefault();
			}
		});
		
		$("#executeButton").click(function() {
			if ($(this).hasClass('disabled')) {
				return;
			}
			$(this).addClass('disabled').addClass('opacity40');
			if (executeLineIndex == (sliderValue + 1)) {
				$("#outputBox").slideDown(3000);
			}
			$_bs("#executeButton").tooltip('hide');
			if (executeLineIndex < (sliderValue + 1)) {
				$("#line" + executeLineIndex).effect("highlight", {color: '#DCB458'}, 1000);
				$("#threadbox" + executeLineIndex).removeClass('hidden');
				$("#threadbox" + executeLineIndex).css({"opacity": "0"});
				$("#counterT" + executeLineIndex).css({"opacity": "0"});
				$("#threadbox" + executeLineIndex).fadeTo(2000, 1);
				$("#objectT" + executeLineIndex).effect( "transfer", { to: $("#threadbox" + executeLineIndex), className: "ui-effects-transfer" }, 2000, function() {
					$("#counterT" + executeLineIndex).fadeTo(2000, 1);
					$_bs("#counterT" + executeLineIndex).attr('data-content', 'Thread code');
					$_bs("#counterT" + executeLineIndex).popover('show');
					$("#counterClassSpan").effect( "transfer", { to: $("#counterT" + executeLineIndex), className: "ui-effects-transfer" }, 2000, function() {
						$_bs("#counterT" + executeLineIndex).popover('hide');
						executeLineIndex++;
						animatingArrowAndExecuteButton(executeLineIndex);
					});
				});
			} else {
				$( "#line" + executeLineIndex).effect("highlight", {color: '#DCB458'}, 1000);
				$( "#line" + executeLineIndex).effect( "transfer", { to: $( "#thread" + (executeLineIndex - sliderValue) + "Label" ), className: "ui-effects-transfer" }, 1000, function() {
					threadStart(executeLineIndex - sliderValue);
					executeLineIndex++;
					animatingArrowAndExecuteButton(executeLineIndex);
				} );
			}
		});
		
		$(".pauseResumeStopBtn").click(function() {
			if ($(this).hasClass('disabled')) {
				return;
				}
			var threadId = $(this).attr("threadId");
			$(".pauseResumeStopBtn[threadId=" + threadId + "]").addClass('disabled').addClass('opacity40');
			if ($(this).hasClass('stop')) {
				if (id == 1) {
					$("#thread" + threadId + "Message").text("Thread is stopped").removeClass('loading');
				} else {
					$("#thread" + threadId + "Message").text("Thread " + threadId + " is stopped").removeClass('loading');
				}
				stopCalledArr[threadId] = true;
			} else if ($(this).hasClass('pause')) {
				if (id == 1) {
					$("#thread" + threadId + "Message").text("Thread is paused");
				} else {
					$("#thread" + threadId + "Message").text("Thread " + threadId + " is paused");
				}
				pauseCalledArr[threadId] = true;
			} else {
				if (id == 1) {
					$("#thread" + threadId + "Message").text("Thread is executing");
				} else {
					$("#thread" + threadId + "Message").text("Thread " + threadId + " is executing");
				}
				pauseCalledArr[threadId] = false;
				resumeCalled(threadId);
			}
		});
		
		function introJsFunction() {
			introjs = introJs();
			introjs.setOptions({
				showStepNumbers: false,
				exitOnOverlayClick: false,
				showBullets: false,
				exitOnEsc: false,
				keyboardNavigation: false,
				steps : [ {
					element : "#threadWaitNotifyStopDemoClass",
					intro : "The <span class='ct-code-b-yellow'>ThreadWaitNotifyStopDemo</span> class demonstrates how to write code to "
							+ "<span class='ct-code-b-yellow'>pause</span>, <span class='ct-code-b-yellow'>resume</span> " + 
							" and <span class='ct-code-b-yellow'>stop</span> a running thread.",
					position : "right"
				},
				{
					element : "#mainMethod",
					intro : "",
					position : "right"
				},
				{
					element : "#counterClassSpan",
					intro : "The <span class='ct-code-b-yellow'>Counter</span> class demonstrates the "
							+ "<span class='ct-code-b-yellow'>pause</span>, <span class='ct-code-b-yellow'>resume</span>"
							+ " and <span class='ct-code-b-yellow'>stop</span> functionality implementation in the "
							+ "<span class='ct-code-b-yellow'>pause()</span>, <span class='ct-code-b-yellow'>resume()</span> and "
							+ "<span class='ct-code-b-yellow'>stopExecution()</span> methods.",
					position : "right"
				},
				{
					element : "#pauseCalledLine",
					intro : "The <span class='ct-code-b-yellow'>pauseCalled</span> flag is used to determine"
							+ " if the user has called <span class='ct-code-b-yellow'>pause()</span> or <span class='ct-code-b-yellow'>resume()</span>"
							+ " on a running thread.<br/><br/>The <span class='ct-code-b-yellow'>pauseCalled</span>"
							+ " flag is initialized to <span class='ct-code-b-yellow'>false</span>.",
					position : "right"
				},
				{
					element : "#stopCalledLine",
					intro : "The <span class='ct-code-b-yellow'>stopCalled</span> flag is used to determine"
							+ " if the user has called <span class='ct-code-b-yellow'>stopExecution()</span>"
							+ " on a running thread.<br/><br/>The <span class='ct-code-b-yellow'>stopCalled</span>"
							+ " flag is initialized to <span class='ct-code-b-yellow'>false</span>.",
					position : "right"
				},
				{
					element : "#pauseMethod",
					intro : "The <span class='ct-code-b-yellow'>pause()</span> method sets the value of "
							+ "<span class='ct-code-b-yellow'>pauseCalled</span> to <span class='ct-code-b-yellow'>true</span>.",
					position : "right"
				},
				{
					element : "#resumeMethod",
					intro : "The <span class='ct-code-b-yellow'>resume()</span> method sets the value of "
							+ "<span class='ct-code-b-yellow'>pauseCalled</span> to <span class='ct-code-b-yellow'>false</span>.<br/><br/>"
							+ "It also calls <span class='ct-code-b-yellow'>lock.notify()</span> so that the thread which is waiting "
							+ " on the <span class='ct-code-b-yellow'>lock</span> object comes out of wait and resumes.",
					position : "right"
				},
				{
					element : "#stopExectionMethod",
					intro : "The <span class='ct-code-b-yellow'>stopExection()</span> method sets the value of "
							+ "<span class='ct-code-b-yellow'>stopCalled</span> to <span class='ct-code-b-yellow'>true</span>.",
					position : "right"
				},
				{
					element : "#runMethod",
					intro : "The <span class='ct-code-b-yellow'>run()</span> method performs the below tasks : " 
							+ "<ol><li>prints numbers from 1 to 10</li>"
							+ "<li>verifies if <span class='ct-code-b-yellow'>pauseCalled</span> is "
							+ "<span class='ct-code-b-yellow'>true</span> and </li>"
							+ "<li>if <span class='ct-code-b-yellow'>pauseCalled</span> is <span class='ct-code-b-yellow'>true</span>"
							+ " it calls <span class='ct-code-b-yellow'>lock.wait()</span> so that the thread waits till"
							+ " <span class='ct-code-b-yellow'>notify()</span> is called on the <span class='ct-code-b-yellow'>lock</span> object and also</li>"
							+ "<li>verifies if <span class='ct-code-b-yellow'>stopCalled</span> is "
							+ "<span class='ct-code-b-yellow'>true</span> and </li>"
							+ "<li>if <span class='ct-code-b-yellow'>stopCalled</span> is <span class='ct-code-b-yellow'>true</span>"
							+ " it <span class='ct-code-b-yellow'>returns</span> so that the thread is stopped.</li></ol>",
					position : "right"
				},
				{
					element : "#mainMethodThreadbox",
					intro : "",
					position : "right"
				}
				]});
			
			introjs.onafterchange(function(targetElement) {
				var elementId = targetElement.id;
				switch (elementId) {
				case "threadWaitNotifyStopDemoClass":
					introjs.refresh();
					$('#mainMethod').css('opacity', 0.5);
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-skipbutton, .introjs-nextbutton').show();
					break;
				case "mainMethod":
					if (id == 1) {
						introjs._introItems[introjs._currentStep].intro = "A single instance of <span class='ct-code-b-yellow'>Counter</span> class is created and started in a thread.";
					} else {
						introjs._introItems[introjs._currentStep].intro = "Two instances of <span class='ct-code-b-yellow'>Counter</span> class are created and started in two separate threads.";
					}
					introjs.refresh();
					$('#mainMethod').css('opacity', 1);
					$('.mainMethodBoundaries').css('opacity', 0.5);
					$('#numOfObjects').css('opacity', 1);
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function () {
						$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').show();
					});
					break;
				case "counterClassSpan":
				case "pauseCalledLine":
				case "stopCalledLine":
				case "runMethod":
				case "pauseMethod":
				case "resumeMethod":
				case "stopExectionMethod":
					if (elementId == 'counterClassSpan'){
						$('#counterClassBoundaries').css('opacity', 0.5);
					} else {
						$('.introjs-fixParent').removeClass('introjs-fixParent');
						$('#counterClassBoundaries').css('opacity', 1);
					}
					introjs.refresh();
					$('#mainMethod').css('opacity', 1);
					$('.mainMethodBoundaries').css('opacity', 1);
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function () {
						$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').show();
					});
					break;
				case "mainMethodThreadbox":
					introjs.refresh();
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					introjs.exit();
					$("#mainMethodArrow").removeClass('hidden');
					$("#mainMethodArrow").show();
					$("#executeButton").removeClass('hidden');
					offsetArrowAndExecuteButton(executeLineIndex);
					$_bs("#executeButton").tooltip('show');
					break;
				}
			});
			
			introjs.start();
			
			$('.introjs-skipbutton').click(function() {
				$('#mainMethod').css('opacity', 1);
				$('.mainMethodBoundaries').css('opacity', 1);
				$('#numOfObjects').css('opacity', 1);
				$('#counterClassBoundaries').css('opacity', 1);
				introjs.goToStep(10);
			});
			
		}
		
		function threadStart(threadIndex) {
			$("#progressBarThread" + threadIndex).css("width", "0%");
			$("#thread" + threadIndex + "Label").removeClass("label-default")
					.addClass("label-primary");
			$("#t" + threadIndex + "Label").removeClass("label-default").addClass(
					"label-primary");
			$("#progressBarThread" + threadIndex).addClass("progress-bar-striped");
			if (id == 1) {
				$("#thread" + threadIndex + "Message").text(
						"Thread is executing").addClass('loading');
			} else {
				$("#thread" + threadIndex + "Message").text(
						"Thread " + threadIndex + " is executing").addClass('loading');
			}
			$("#pauseThread" + threadIndex + "Button").removeClass('disabled')
					.removeClass('opacity40');
			$("#stopThread" + threadIndex + "Button").removeClass('disabled')
			.removeClass('opacity40');
			$("#thread" + threadIndex + "Arrow").removeClass('hidden');
			offsetFor(threadIndex);
			threadInterval(threadIndex);
		}
		
		function threadInterval(threadIndex) {
			threadProgressBarWidth[threadIndex] += 10;
			if (id == 1) {
				$('.tooltip').css('opacity', 0.3);
				$_bs("#for1").tooltip('show').next().css('opacity', 1);
			}
			$("#for" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
				if (!stopCalledArr[threadIndex]) {
					l1[threadIndex] = $("#for" + threadIndex).offset();
					l2[threadIndex] = $("#ifStopCalled" + threadIndex).offset();
					topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
					leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
					TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
						offsetIfStopCalled(threadIndex);
						if (id == 1) {
							$('.tooltip').css('opacity', 0.3);
							$_bs("#ifStopCalled1").tooltip('show').next().css('opacity', 1);
						}
						$("#ifStopCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
							TweenMax.fromTo($('#ifStopCalledElement' + threadIndex + ', #stopCalledStatus' + threadIndex), 0.5, {ease: Sine.easeInOut, backgroundColor: 'yellow'}, {ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 1, onComplete: function() {
								l1[threadIndex] = $("#ifStopCalled" + threadIndex).offset();
								l2[threadIndex] = $("#sop" + threadIndex).offset();
								topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
								leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
								TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
									offsetSop(threadIndex);
									$("#progressBarThread" + threadIndex).css("width", threadProgressBarWidth[threadIndex] + "%");
									$('#outputPre').append("t[" + threadIndex + "] : " + ((threadProgressBarWidth[threadIndex]/10)) + "\n");
									$( "#sop" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
										if (!pauseCalledArr[threadIndex]) {	
											l1[threadIndex] = $("#sop" + threadIndex).offset();
											l2[threadIndex] = $("#ifPauseCalled" + threadIndex).offset();
											topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
											leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
											TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
												offsetIfPauseCalled(threadIndex);
												if (id == 1) {
													$('.tooltip').css('opacity', 0.3);
													$_bs("#ifPauseCalled1").attr({'data-original-title': '<b>pauseCalled</b> is <span class=" code-b-red">false</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
													$_bs("#ifPauseCalled1").tooltip('show').next().css('opacity', 1);
												}
												$("#ifPauseCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
													TweenMax.fromTo($('#ifPauseCalledElement' + threadIndex + ', #pauseCalledStatus' + threadIndex), 0.5, {ease: Sine.easeInOut, backgroundColor: 'yellow'}, {ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 1, onComplete: function() {
														l1[threadIndex] = $("#ifPauseCalled" + threadIndex).offset();
														l2[threadIndex] = $("#for" + threadIndex).offset();
														topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
														leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
														TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
															offsetFor(threadIndex);
															if (threadProgressBarWidth[threadIndex] == 100) {
																if (id == 1) {
																	$('.tooltip').css('opacity', 0.3);
																	$_bs("#for1").attr({'data-original-title': 'Exits from the <b>for</b> loop', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
																	$_bs("#for1").tooltip('show').next().css('opacity', 1);
																}
																$("#for" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
																	l1[threadIndex] = $("#for" + threadIndex).offset();
																	l2[threadIndex] = $("#runMethodEndT" + threadIndex).offset();
																	topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
																	leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
																	TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
																		offsetRunMethodEndT(threadIndex);
																		$("#runMethodEndT" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
																			threadEnd(threadIndex);
																			checkAllThreadsEnded();
																		});
																	}});
																});
															} else {
																threadInterval(threadIndex);
															}
														}});
													}});
												});
											}});
										} else {
											pauseCalled(threadIndex);
										}
									});
								}});
							}});
						});
					}});
				} else {
					stopCalled(threadIndex);
				}
			});
		}
		
		function pauseCalled(threadIndex) {
			$('#pauseThread' + threadIndex + 'Button').effect( "transfer", { to: $("#pauseMethodT" + threadIndex), className: "ui-effects-transfer" }, 1000, function() {
				l1[threadIndex] = $("#sop" + threadIndex).offset();
				l2[threadIndex] = $("#pauseCalled" + threadIndex).offset();
				topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
				leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
				TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
					offsetPauseCalled(threadIndex);
					if (id == 1) {
						$('.tooltip').css('opacity', 0.3);
						$_bs("#pauseCalled1").tooltip('show').next().css('opacity', 1);
					}
					$("#pauseCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
						$('#threadbox' + threadIndex).append('<span id="tempStatus' + threadIndex + '" class="temp-status-css code-b-red">' + $('#pauseCalledStatus' + threadIndex).text() + '</span>');
						$('#tempStatus' + threadIndex).offset({top: $('#pauseCalledStatus' + threadIndex).offset().top, left: $('#pauseCalledStatus' + threadIndex).offset().left});
						l1[threadIndex] = $("#pauseCalledTrue" + threadIndex).offset();
						l2[threadIndex] = $("#pauseCalledStatus" + threadIndex).offset();
						topLength[threadIndex] = l1[threadIndex].top - l2[threadIndex].top;
						leftLength[threadIndex] = l1[threadIndex].left - l2[threadIndex].left;
						$('#pauseCalledStatus' + threadIndex).removeClass('code-b-red').addClass('code-b-green').text($("#pauseCalledTrue" + threadIndex).text());
						TweenLite.from('#pauseCalledStatus' + threadIndex, 3, {ease:  Bounce.easeOut, top: topLength[threadIndex], left: leftLength[threadIndex], onComplete: function() {
							l1[threadIndex] = $("#pauseCalled" + threadIndex).offset();
							l2[threadIndex] = $("#pauseCalledSop" + threadIndex).offset();
							topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
							leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
							TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
								offsetPauseCalledSop(threadIndex);
								$('#outputPre').append("t["  + threadIndex + "] pause called..." + "\n");
								$("#pauseCalledSop" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
									l1[threadIndex] = $("#pauseCalledSop" + threadIndex).offset();
									l2[threadIndex] = $("#ifPauseCalled" + threadIndex).offset();
									topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
									leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
									TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
										offsetIfPauseCalled(threadIndex);
										if (id == 1) {
											$('.tooltip').css('opacity', 0.3);
											$_bs("#ifPauseCalled1").attr({'data-original-title': '<b>pauseCalled</b> is <span class=" code-b-green">true</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
											$_bs("#ifPauseCalled1").tooltip('show').next().css('opacity', 1);
										}
										$("#ifPauseCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
											TweenMax.fromTo($('#ifPauseCalledElement' + threadIndex + ', #pauseCalledStatus' + threadIndex), 0.5, {ease: Sine.easeInOut, backgroundColor: 'yellow'}, {ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 1, onComplete: function() {
												l1[threadIndex] = $("#ifPauseCalled" + threadIndex).offset();
												l2[threadIndex] = $("#wait" + threadIndex).offset();
												topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
												leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
												TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
													offsetWait(threadIndex);
													if (id == 1) {
														$('.tooltip').css('opacity', 0.3);
														$_bs("#wait1").tooltip('show').next().css('opacity', 1);
													}
													$("#wait" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
														$(".resume[threadId=" + threadIndex + "]").removeClass('disabled').removeClass('opacity40');
													});
												}});
											}});
										});
									}});
								});
							}});
						}});
						TweenLite.to('#tempStatus' + threadIndex, 1, { ease: Sine.easeOut, delay: 1, top: "-=100", opacity: 0, onComplete: function() {
							$('#tempStatus' + threadIndex).remove();
						}});
					});
				}});
			});
		}
		
		function resumeCalled(threadIndex) {
			$('#resumeThread' + threadIndex + 'Button').effect( "transfer", { to: $("#resumeMethodT" + threadIndex), className: "ui-effects-transfer" }, 1000, function() {
				l1[threadIndex] = $("#wait" + threadIndex).offset();
				l2[threadIndex] = $("#resumeCalled" + threadIndex).offset();
				topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
				leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
				TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
					offsetResumeCalled(threadIndex);
					if (id == 1) {
						$('.tooltip').css('opacity', 0.3);
						$_bs("#resumeCalled1").tooltip('show').next().css('opacity', 1);
					}
					$("#resumeCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
						$('#threadbox' + threadIndex).append('<span id="tempStatus' + threadIndex + '" class="temp-status-css code-b-green">' + $('#pauseCalledStatus' + threadIndex).text() + '</span>');
						$('#tempStatus' + threadIndex).offset({top: $('#pauseCalledStatus' + threadIndex).offset().top, left: $('#pauseCalledStatus' + threadIndex).offset().left});
						l1[threadIndex] = $("#pauseCalledFalse" + threadIndex).offset();
						l2[threadIndex] = $("#pauseCalledStatus" + threadIndex).offset();
						topLength[threadIndex] = l1[threadIndex].top - l2[threadIndex].top;
						leftLength[threadIndex] = l1[threadIndex].left - l2[threadIndex].left;
						$('#pauseCalledStatus' + threadIndex).removeClass('code-b-green').addClass('code-b-red').text($("#pauseCalledFalse" + threadIndex).text());
						TweenLite.from('#pauseCalledStatus' + threadIndex, 3, {ease:  Bounce.easeOut, top: topLength[threadIndex], left: leftLength[threadIndex], onComplete: function() {
							l1[threadIndex] = $("#resumeCalled" + threadIndex).offset();
							l2[threadIndex] = $("#resumeCalledSop" + threadIndex).offset();
							topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
							leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
							TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
								offsetResumeCalledSop(threadIndex);
								$('#outputPre').append("t["  + threadIndex + "] resume called...\n");
								$("#resumeCalledSop" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
									l1[threadIndex] = $("#resumeCalledSop" + threadIndex).offset();
									l2[threadIndex] = $("#notify" + threadIndex).offset();
									topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
									leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
									TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
										offsetNotify(threadIndex);
										if (id == 1) {
											$('.tooltip').css('opacity', 0.3);
											$_bs("#notify1").tooltip('show').next().css('opacity', 1);
										}
										$("#notify" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
											l1[threadIndex] = $("#notify" + threadIndex).offset();
											l2[threadIndex] = $("#wait" + threadIndex).offset();
											topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
											leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
											TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
												offsetWait(threadIndex);
												if (id == 1) {
													$('.tooltip').css('opacity', 0.3);
													$_bs("#wait1").attr({'data-original-title': '<b>run()</b> method is <b>resumed</b>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
													$_bs("#wait1").tooltip('show').next().css('opacity', 1);
												}
												$("#wait" + threadIndex).css({'background-color' : 'yellow'});
												TweenMax.fromTo($('#wait' + threadIndex), 0.1, {marginLeft: 2}, {marginLeft: 0, repeat: 5, onComplete: function() {
													$("#wait" + threadIndex).css({'background-color' : 'transparent'});
													l1[threadIndex] = $("#wait" + threadIndex).offset();
													l2[threadIndex] = $("#waitSynchronized" + threadIndex).offset();
													topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
													leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
													TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
														offsetWaitSynchronized(threadIndex);
														$("#waitSynchronized" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
															l1[threadIndex] = $("#waitSynchronized" + threadIndex).offset();
															l2[threadIndex] = $("#for" + threadIndex).offset();
															topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
															leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
															TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
																offsetFor(threadIndex);
																if (threadProgressBarWidth[threadIndex] == 100) {
																	if (id == 1) {
																		$('.tooltip').css('opacity', 0.3);
																		$_bs("#for1").attr({'data-original-title': 'Exits from the <b>for</b> loop', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
																		$_bs("#for1").tooltip('show').next().css('opacity', 1);
																	}
																	$("#for" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
																		l1[threadIndex] = $("#for" + threadIndex).offset();
																		l2[threadIndex] = $("#runMethodEndT" + threadIndex).offset();
																		topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
																		leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
																		TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
																			offsetRunMethodEndT(threadIndex);
																			$("#runMethodEndT" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
																				threadEnd(threadIndex);
																				checkAllThreadsEnded();
																			});
																		}});
																	});
																} else {
																	threadInterval(threadIndex);
																	$(".pause[threadId=" + threadIndex + "]").removeClass('disabled').removeClass('opacity40');
																	$(".stop[threadId=" + threadIndex + "]").removeClass('disabled').removeClass('opacity40');
																}
															}});
														});
													}});
												}});
											}});
										});
									}});
								});
							}});
						}});
						TweenLite.to('#tempStatus' + threadIndex, 1, { ease: Sine.easeOut, delay: 1, top: "-=100", opacity: 0, onComplete: function() {
							$('#tempStatus' + threadIndex).remove();
						}});
					});
				}});
			});
		}
		
		
		function stopCalled(threadIndex) {
			$('#stopThread' + threadIndex + 'Button').effect( "transfer", { to: $("#stopMethodT" + threadIndex), className: "ui-effects-transfer" }, 1000, function() {
				l1[threadIndex] = $("#for" + threadIndex).offset();
				l2[threadIndex] = $("#stopCalled" + threadIndex).offset();
				topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
				leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
				TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
					offsetStopCalled(threadIndex);
					if (id == 1) {
						$('.tooltip').css('opacity', 0.3);
						$_bs("#stopCalled1").tooltip('show').next().css('opacity', 1);
					}
					$("#stopCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
						$('#threadbox' + threadIndex).append('<span id="tempStatus' + threadIndex + '" class="temp-status-css code-b-red">' + $('#stopCalledStatus' + threadIndex).text() + '</span>');
						$('#tempStatus' + threadIndex).offset({top: $('#stopCalledStatus' + threadIndex).offset().top, left: $('#stopCalledStatus' + threadIndex).offset().left});
						l1[threadIndex] = $("#stopCalledTrue" + threadIndex).offset();
						l2[threadIndex] = $("#stopCalledStatus" + threadIndex).offset();
						topLength[threadIndex] = l1[threadIndex].top - l2[threadIndex].top;
						leftLength[threadIndex] = l1[threadIndex].left - l2[threadIndex].left;
						$('#stopCalledStatus' + threadIndex).removeClass('code-b-red').addClass('code-b-green').text($("#stopCalledTrue" + threadIndex).text());
						TweenLite.from('#stopCalledStatus' + threadIndex, 3, {ease:  Bounce.easeOut, top: topLength[threadIndex], left: leftLength[threadIndex], onComplete: function() {
							l1[threadIndex] = $("#stopCalled" + threadIndex).offset();
							l2[threadIndex] = $("#stopCalledSop" + threadIndex).offset();
							topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
							leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
							TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
								offsetStopCalledSop(threadIndex);
								$('#outputPre').append("t["  + threadIndex + "] stop called...\n");
								$("#stopCalledSop" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
									l1[threadIndex] = $("#stopCalledSop" + threadIndex).offset();
									l2[threadIndex] = $("#ifStopCalled" + threadIndex).offset();
									topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
									leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
									TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
										offsetIfStopCalled(threadIndex);
										if (id == 1) {
											$('.tooltip').css('opacity', 0.3);
											$_bs("#ifStopCalled1").attr({'data-original-title': '<b>stopCalled</b> is <span class=" code-b-green">true</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
											$_bs("#ifStopCalled1").tooltip('show').next().css('opacity', 1);
										}
										$("#ifStopCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
											TweenMax.fromTo($('#ifStopCalledElement' + threadIndex + ', #stopCalledStatus' + threadIndex), 0.5, {ease: Sine.easeInOut, backgroundColor: 'yellow'}, {ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 1, onComplete: function() {
												l1[threadIndex] = $("#ifStopCalled" + threadIndex).offset();
												l2[threadIndex] = $("#return" + threadIndex).offset();
												topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
												leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
												TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
													offsetReturn(threadIndex);
													if (id == 1) {
														$('.tooltip').css('opacity', 0.3);
														$_bs("#return1").tooltip('show').next().css('opacity', 1);
													}
													$("#return" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
														l1[threadIndex] = $("#return" + threadIndex).offset();
														l2[threadIndex] = $("#runMethodEndT" + threadIndex).offset();
														topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
														leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
														TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: function() {
															offsetRunMethodEndT(threadIndex);
															$("#runMethodEndT" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
																TweenLite.to('#runMethodT' + threadIndex, 0.5, { opacity: 0.5, onComplete: function() {
																	$("#progressBarThread" + threadIndex).removeClass("progress-bar-striped");
																	$(".pauseResumeStopBtn[threadId=" + threadIndex + "]").addClass('disabled').addClass('opacity40');
																	$("#thread" + threadIndex + "Arrow").addClass('hidden');
																	threadProgressBarWidth[threadIndex] = 100;
																	checkAllThreadsEnded();
																}});
															});
														}});
													});
												}});	
											}});
										});
									}});	
								});
							}});
						}});
						TweenLite.to('#tempStatus' + threadIndex, 1, { ease: Sine.easeOut, delay: 1, top: "-=100", opacity: 0, onComplete: function() {
							$('#tempStatus' + threadIndex).remove();
						}});
					});
				}});
			});
		}
		
		function threadEnd(threadIndex) {
			$("#progressBarThread" + threadIndex).removeClass("progress-bar-striped");
			$(".pauseResumeStopBtn[threadId=" + threadIndex + "]").addClass('disabled').addClass('opacity40');
			if (id == 1) {
				$("#thread" + threadIndex + "Message").text(
						"Thread has ended").removeClass('loading');
			} else {
				$("#thread" + threadIndex + "Message").text(
						"Thread " + threadIndex + " has ended").removeClass('loading');
			}
			$("#thread" + threadIndex + "Arrow").addClass('hidden');
		}
		
		function checkAllThreadsEnded() {
			var arr = [0, 0, 0, 0, 0]
			for (var end = 1; end <= sliderValue; end++) {
				arr[end] = 100;
			}
			if (threadProgressBarWidth.equals(arr)) {
				if (id == 1) {
					$_bs("#mainMethodCloseBrace").attr("data-content", 'Main method and child thread have completed execution');
				} else {
					$_bs("#mainMethodCloseBrace").attr("data-content", 'Main method and child threads have completed execution');
				}
				$_bs("#mainMethodCloseBrace").popover('show');
				$_bs("#resetMainMethodButton").popover('show');
			}
		}
		
		function offsetArrowAndExecuteButton(executeLineIndex) {
			if (executeLineIndex == 1) {
				$_bs("#executeButton").attr('data-original-title', 'Click to Execute');
				arrow[0] = $("#line" + executeLineIndex).offset();
				mainMethodArrowWidth = $("#mainMethodArrow").width();
				$("#mainMethodArrow").offset({top: arrow[0].top, left: arrow[0].left - mainMethodArrowWidth});//9
				executeButton = $("#line" + executeLineIndex).offset();
				executeLineWidth = $("#line" + executeLineIndex).width();
				$("#executeButton").offset({top: executeButton.top,left: executeButton.left + executeLineWidth + 4});//9
				$("#executeButton").removeClass('disabled').removeClass('opacity40');
				$_bs("#executeButton").tooltip('show');
			}
			else if (executeLineIndex <= sliderValue) {
				$_bs("#executeButton").attr('data-original-title', 'Click to Execute');
				arrow[0] = $("#line" + executeLineIndex).offset();
				mainMethodArrowWidth = $("#mainMethodArrow").width();
				$("#mainMethodArrow").offset({top: arrow[0].top - 3, left: arrow[0].left - mainMethodArrowWidth});
				executeButton = $("#line" + executeLineIndex).offset();
				executeLineWidth = $("#line" + executeLineIndex).width();
				$("#executeButton").offset({top: executeButton.top,left: executeButton.left + executeLineWidth + 4});
				$("#executeButton").removeClass('disabled').removeClass('opacity40');
				$_bs("#executeButton").tooltip('show');
			} else {
				setTimeout(function() {
					$_bs("#executeButton").attr('data-original-title', 'Click to Start');
					arrow[0] = $("#line" + executeLineIndex).offset();
					mainMethodArrowWidth = $("#mainMethodArrow").width();
					$("#mainMethodArrow").offset({top: arrow[0].top - 3, left: arrow[0].left - mainMethodArrowWidth});
					executeButton = $("#line" + executeLineIndex).offset();
					executeLineWidth = $("#line" + executeLineIndex).width();
					$("#executeButton").offset({top: executeButton.top,left: executeButton.left + executeLineWidth + 4});
					$("#executeButton").removeClass('disabled').removeClass('opacity40');
					$_bs("#executeButton").tooltip('show');
				}, 1000);
			}
		}
		
		function animatingArrowAndExecuteButton(executeLineIndex) {
			if ((executeLineIndex -1) == sliderValue * 2) {
				$_bs("#executeButton").tooltip('hide');
				$("#executeButton").addClass('hidden');
				setTimeout(function() {
					l1[0] = $("#line" + (executeLineIndex - 1)).offset();
					l2[0] = $("#mainMethodCloseBrace").offset();
					topLength[0] = l2[0].top-l1[0].top;
					leftLength[0] = l2[0].left-l1[0].left;
					TweenLite.to($("#mainMethodArrow"), 1, {top: "+=" + topLength[0], left: "+=" + leftLength[0]});
					if (id == 1) {
						$_bs("#mainMethodCloseBrace").attr("data-content", 'Waiting for child thread to complete...');
					} else {
						$_bs("#mainMethodCloseBrace").attr("data-content", 'Waiting for child threads to complete...');
					}
					$_bs("#mainMethodCloseBrace").popover('show');
				}, 3000);
				return;
			}
			l1[0] = $("#line" + (executeLineIndex - 1)).offset();
			l2[0] = $("#line" + executeLineIndex).offset();
			topLength[0] = l2[0].top - l1[0].top;
			var tLite = new TimelineLite({ onComplete: offsetArrowAndExecuteButton, onCompleteParams: [executeLineIndex] } );
			if (executeLineIndex == (sliderValue + 1)) {
				tLite.to($("#mainMethodArrow"), 1, {top: "+=" + topLength[0]}).to($("#executeButton"), 1, {top: "+=" + topLength[0], left: "-=" + (executeLineWidth - $("#line" + executeLineIndex).width())}, "-=1");
			} else {
				tLite.to($("#mainMethodArrow"), 1, {top: "+=" + topLength[0]}).to($("#executeButton"), 1, {top: "+=" + topLength[0]}, "-=1");
			}
		}
		
		function offsetFor(threadIndex) {
			arrow[threadIndex] = $("#for" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetSop(threadIndex) {
			arrow[threadIndex] = $("#sop" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetIfPauseCalled(threadIndex) {
			arrow[threadIndex] = $("#ifPauseCalled" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetPauseCalled(threadIndex) {
			arrow[threadIndex] = $("#pauseCalled" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetPauseCalledSop(threadIndex) {
			arrow[threadIndex] = $("#pauseCalledSop" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetWait(threadIndex) {
			arrow[threadIndex] = $("#wait" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetResumeCalled(threadIndex) {
			arrow[threadIndex] = $("#resumeCalled" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetResumeCalledSop(threadIndex) {
			arrow[threadIndex] = $("#resumeCalledSop" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetNotify(threadIndex) {
			arrow[threadIndex] = $("#notify" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetWaitSynchronized(threadIndex) {
			arrow[threadIndex] = $("#waitSynchronized" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetIfStopCalled(threadIndex) {
			arrow[threadIndex] = $("#ifStopCalled" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetStopCalled(threadIndex) {
			arrow[threadIndex] = $("#stopCalled" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetStopCalledSop(threadIndex) {
			arrow[threadIndex] = $("#stopCalledSop" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetReturn(threadIndex) {
			arrow[threadIndex] = $("#return" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetRunMethodEndT(threadIndex) {
			arrow[threadIndex] = $("#runMethodEndT" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
	});
	

</script>

</head>
<body>

	<div class='row'>
			<div>
				<div class='col-sm-3' id='sliderDiv'>
					<p>
						<label>Number of Threads:</label> <input type="text"
							id="numOfThreads" name="numOfThreads" readonly
							style="border: 0; font-weight: bold;">
					</p>
					<div id="slider-range-max"></div>
				</div>

				<div class='button-div-css'>
					<button type="button" class="btn btn-primary btn-sm"
						id='startMainMethodButton'>Start</button>
			
					<button type="button" class="btn btn-warning btn-sm hidden"
						id='resetMainMethodButton'>Reset</button>
				</div>
				
			</div>
		</div>
	
	<div class='col-sm-12'>
		<div class='row'>
			<div class='col-sm-2 threadbox hidden' id ='mainMethodThreadbox'>
				<p><label>Wait, Notify and Stop in Action :</label></p>
<pre class="creamPreTab4">
<span id='threadWaitNotifyStopDemoClass'>public class <b>ThreadWaitNotifyStopDemo</b> {
	<span id='mainMethod'><span class='mainMethodBoundaries'>public static void main(String[] args) {</span>
<span id='numOfObjects'></span>
	<span id='mainMethodCloseBrace' class='mainMethodBoundaries' data-placement='right'>}</span></span>
}</span>

<span id='counterClassSpan'>class <b>Counter</b> implements Runnable {
	<span id='counterClassBoundaries'>private Object lock = new Object();
	<span id='pauseCalledLine'>private boolean pauseCalled = <span class='code-b-red'>false</span>;</span>
	<span id='stopCalledLine'>private boolean stopCalled = <span class='code-b-red'>false</span>;</span>
	private int id;
	public <b>Counter(int id)</b> {
		this.id = id;
	}
	<span id='runMethod'>public void <b>run()</b> {
		for (int i = 1; i <= 10; i++) {
			if (stopCalled) {
				return;
			}
			System.out.println("t[" + id + "] : " + i);
			if (pauseCalled) {
				<b>synchronized</b> (lock) {
					try {
						lock.wait();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}<span class='comments'>//if</span>
		}<span class='comments'>//for</span>
	}</span></span>
	<span id='pauseMethod'>public void <b>pause()</b> {
		pauseCalled = <span class='code-b-green'>true</span>;
		System.out.println("t[" + id + "] pause called...");
	}</span>
	<span id='resumeMethod'>public void <b>resume()</b> {
		pauseCalled = <span class='code-b-red'>false</span>;
		System.out.println("t[" + id + "] resume called...");
		<b>synchronized</b> (lock) {
			lock.notify();
		}
	}</span>
	<span id='stopExectionMethod'>public void <b>stopExecution()</b> {
		stopCalled = <span class='code-b-green'>true</span>;
		System.out.println("t[" + id + "] stop called...");
	}</span>
}</span>
</pre>
<span class='glyphicon glyphicon-arrow-right main-method-arrow hidden' id='mainMethodArrow'></span>
<button type='button' class='btn btn-success btn-execute hidden' id='executeButton' data-trigger='manual' data-toggle='tooltip' title='Click to Execute' data-placement='bottom'>Execute</button>
			</div>

				<%
					for (int i = 1; i <= 4; i++) {
				%>
				<div class='col-sm-2 threadbox hidden' id='threadbox<%=i%>'>
					<div class='text-center'>
						<div>
							<h4>
								<span class='label label-default' id='thread<%=i%>Label'>Thread
									T<sub><%=i%></sub>
								</span>
							</h4>
						</div>
						<div class="progress vertical-thread">
							<div class="progress-bar progress-bar-primary" style="width: 0%;"
								id='progressBarThread<%=i%>'></div>
						</div>
						<div class="thread-message-div-css">
							<p id='thread<%=i%>Message'></p>
						</div>
						<div>
							<button type="button"
								class="pauseResumeStopBtn pause btn btn-danger btn-xs disabled opacity30"
								threadId='<%=i%>' id='pauseThread<%=i%>Button'>pause()</button>
							&nbsp;&nbsp;
							<button type="button"
								class="pauseResumeStopBtn resume btn btn-success btn-xs disabled opacity30"
								threadId='<%=i%>' id='resumeThread<%=i%>Button'>resume()</button>
							&nbsp;&nbsp;
							<button type="button"
								class="pauseResumeStopBtn stop btn btn-warning btn-xs disabled opacity30"
								threadId='<%=i%>' id='stopThread<%=i%>Button'>stopExecution()</button>
						</div>
					</div>
					<pre class="creamPreTab4" id='counterT<%=i%>' style='margin-top: 10px'>
class <b>Counter</b> implements Runnable {
	private boolean pauseCalled = <span id='pauseCalledStatus<%=i%>' class='position-relative code-b-red'>false</span>;
	private boolean stopCalled = <span id='stopCalledStatus<%=i%>' class='position-relative code-b-red'>false</span>;
	...
	...
	<span id='runMethodT<%=i%>'>public void <b>run()</b> {
		<span id='for<%=i%>'>for (int i = 1; i <= 10; i++) {</span>
			<span id='ifStopCalled<%=i%>'>if (<span id='ifStopCalledElement<%=i%>'>stopCalled</span>) {</span>
				<span id='return<%=i%>'>return;</span>
			}
			<span id='sop<%=i%>'>System.out.println("t[" + id + "] : " + i);</span>
			<span id='ifPauseCalled<%=i%>'>if (<span id='ifPauseCalledElement<%=i%>'>pauseCalled</span>) {</span>
				<b>synchronized</b> (lock) {
					try {
						<span id='wait<%=i%>'>lock.wait();</span>
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				<span id='waitSynchronized<%=i%>'>}</span>
			}<span class='comments'>//if</span>
		}<span class='comments'>//for</span>
	<span id='runMethodEndT<%=i%>'>}</span></span>
	<span id='pauseMethodT<%=i%>'>public void <b>pause()</b> {
		<span id='pauseCalled<%=i%>'>pauseCalled = <span id='pauseCalledTrue<%=i%>' class='code-b-green'>true</span>;</span>
		<span id='pauseCalledSop<%=i%>'>System.out.println("t[" + id + "] pause called...");</span>
	}</span>
	<span id='resumeMethodT<%=i%>'>public void <b>resume()</b> {
		<span id='resumeCalled<%=i%>'>pauseCalled = <span id='pauseCalledFalse<%=i%>' class='code-b-red'>false</span>;</span>
		<span id='resumeCalledSop<%=i%>'>System.out.println("t[" + id + "] resume called...");</span>
		<b>synchronized</b> (lock) {
			<span id='notify<%=i%>'>lock.notify();</span>
		}
	}</span>
	<span id='stopMethodT<%=i%>'>public void <b>stopExecution()</b> {
		<span id='stopCalled<%=i%>'>stopCalled = <span id='stopCalledTrue<%=i%>' class='code-b-green'>true</span>;</span>
		<span id='stopCalledSop<%=i%>'>System.out.println("t[" + id + "] stop called...");</span>
	}</span>
}
</pre>
<span class='glyphicon glyphicon-arrow-right thread-arrow hidden' id='thread<%=i%>Arrow'></span>
				</div>

				<%
					}
				%>
		
		<div class="col-sm-3" id="outputBox">	
			<div class="output-console">
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
		        <div class="output-console-body">
<span id="outputPre"></span>
		        </div>
	  		</div>
  		</div>
	
		</div>
	</div>
			
</body>
</html>