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
	
	var threadsStopDemoReady = function() {

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
			heightOfMainMethodBox = (sliderValue == 4) ? 435 : (sliderValue == 3) ? 410 : (sliderValue == 2) ? 444 : 418;
			$("#mainMethodThreadbox").css('height', heightOfMainMethodBox);
			$("#mainMethodThreadbox").removeClass('hidden');
			$('#outputPre').empty();
			introJsFunction();
			
			if (id == 1) {
				$_bs("#for1").attr({'data-original-title': 'Entering into the <b>for</b> loop', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#ifStopCalled1").attr({'data-original-title': '<b>stopCalled</b> is <span class=" code-b-red">false</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#return1").attr({'data-original-title': 'returning from the <b>run()</b> method', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
				$_bs("#stopCalled1").attr({'data-original-title': '<b>stopCalled</b> is changed to <span class=" code-b-green">true</span>', 'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
			}
		});
		
		$('body').keydown(function(e) {
			if (e.which == 13) {
				e.preventDefault();
			}
		});
		
		$("#resetMainMethodButton").click(function() {
			location.reload();
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
		
		$(".stopBtn").click(function() {
			if ($(this).hasClass('disabled')) {
				return;
			}
			$(this).addClass('disabled').addClass('opacity40');
			var threadId = $(this).attr("threadId");
			if ($(this).hasClass('stop')) {
				if (id == 1) {
					$("#thread" + threadId + "Message").text("Thread is stopped").removeClass('loading');
				} else {
					$("#thread" + threadId + "Message").text("Thread " + threadId + " is stopped").removeClass('loading');
				}
				stopCalledArr[threadId] = true;
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
					element : "#threadStopDemo",
					intro : "The <span class='ct-code-b-yellow'>ThreadStopDemo</span> class demonstrates "
							+ "how to write code to <span class='ct-code-b-yellow'>stop</span> a running thread.",
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
							+ "<span class='ct-code-b-yellow'>stop</span> functionality implementation in the "
							+ "<span class='ct-code-b-yellow'>stopExecution()</span>"
							+ "  method.",
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
					element : "#stopExectionMethod",
					intro : "The <span class='ct-code-b-yellow'>stopExecution()</span> method sets the value of "
							+ "<span class='ct-code-b-yellow'>stopCalled</span> to <span class='ct-code-b-yellow'>true</span>.",
					position : "right"
				},
				{
					element : "#runMethod",
					intro : "The <span class='ct-code-b-yellow'>run()</span> method performs the below tasks : <ol><li>prints numbers from 1 to 10</li>"
							+ "<li>verifies if <span class='ct-code-b-yellow'>stopCalled</span> is "
							+ "<span class='ct-code-b-yellow'>true</span> and </li>"
							+ "<li>if <span class='ct-code-b-yellow'>stopCalled</span> is <span class='ct-code-b-yellow'>true</span>"
							+ " it <span class='ct-code-b-yellow'>exits</span> from the <span class='ct-code-b-yellow'>run()</span>"
							+ " method and the thread stops execution</li><li>if <span class='ct-code-b-yellow'>stopCalled</span> "
							+ "is not <span class='ct-code-b-yellow'>true</span>, it prints the thread <span class='ct-code-b-yellow'>id</span> "
							+ "and value of <span class='ct-code-b-yellow'>i</span></li></ol>",
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
				case "threadStopDemo":
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
				case "stopCalledLine":
				case "stopExectionMethod":
				case "runMethod":
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
				introjs.goToStep(7);
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
						offsetIf(threadIndex);
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
										l1[threadIndex] = $("#sop" + threadIndex).offset();
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
										offsetIf(threadIndex);
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
																	$("#stopThread" + threadIndex + "Button").addClass('disabled').addClass('opacity40');
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
			$(".stopBtn").addClass('disabled opacity40');
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
			} else if (executeLineIndex <= sliderValue) {
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
		
		function offsetIf(threadIndex) {
			arrow[threadIndex] = $("#ifStopCalled" + threadIndex).offset();
			$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
		}
		
		function offsetSop(threadIndex) {
			arrow[threadIndex] = $("#sop" + threadIndex).offset();
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
	}