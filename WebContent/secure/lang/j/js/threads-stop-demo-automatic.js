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
	
var id;
var sliderValue = 2;

var executeLineIndex;
var threadProgressBarWidth;

var introjs;


var threadsStopDemoAutomaticReady = function() {
	
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
	
	$("#startMainMethodButton").click(function() {
		$_bs(this).popover('hide');
		$(this).addClass('hidden');
		$("#resetMainMethodButton, #closeBtn").addClass('hidden');
		$('#numOfObjects').empty();
		for (var next = 1; next <= (sliderValue * 2); next++) {
			if (next < (sliderValue + 1)) {
				if (id == 1) {
					$('#numOfObjects').append("\t\t<span id='line" + next + "'>Counter t = <span id='objectT" + next +
												"'>new Counter(" + next + ")</span>;</span>\n");
				} else {
					$('#numOfObjects').append("\t\t<span id='line" + next + "'>Counter t" + next + " = <span id='objectT" + next +
												"'>new Counter(" + next + ")</span>;</span>\n");
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
		$("#mainMethodThreadbox").removeClass('hidden');
		$('#outputPre').empty();
		introJsFunction();
		
		if (id == 1) {
			$_bs("#for1").attr({'data-original-title': 'Entering into the <b>for</b> loop', 'data-placement': 'right',
									'data-trigger': 'manual', 'data-html': 'true'});
			$_bs("#ifStopCalled1").attr({'data-original-title': '<b>stopCalled</b> is <span class=" code-b-red">false</span>',
											'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
			$_bs("#return1").attr({'data-original-title': 'returning from the <b>run()</b> method', 'data-placement': 'right',
									'data-trigger': 'manual', 'data-html': 'true'});
			$_bs("#stopCalled1").attr({'data-original-title': '<b>stopCalled</b> is changed to <span class=" code-b-green">true</span>',
										'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
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
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
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
		if (executeLineIndex <= sliderValue) {
			$("#line" + executeLineIndex).effect("highlight", {color: '#DCB458'}, 1000);
			$("#threadbox" + executeLineIndex).removeClass('hidden');
			$("#threadbox" + executeLineIndex).css({"opacity": "0"});
			$("#counterT" + executeLineIndex).css({"opacity": "0"});
			$("#threadbox" + executeLineIndex).fadeTo(2000, 1);
			$("#objectT" + executeLineIndex).effect( "transfer", { to: $("#threadbox" + executeLineIndex),
																	className: "ui-effects-transfer" }, 2000, function() {
				$("#counterT" + executeLineIndex).fadeTo(2000, 1);
				$_bs("#counterT" + executeLineIndex).attr('data-content', 'Thread code');
				$_bs("#counterT" + executeLineIndex).popover('show');
				$("#counterClassSpan").effect( "transfer", { to: $("#counterT" + executeLineIndex),
																className: "ui-effects-transfer" }, 2000, function() {
					$_bs("#counterT" + executeLineIndex).popover('hide');
					animatingArrowAndExecuteButton(executeLineIndex);
					executeLineIndex++;
				});
			});
		} else {
			$( "#line" + executeLineIndex).effect("highlight", {color: '#DCB458'}, 1000);
			$( "#line" + executeLineIndex).effect( "transfer", { to: $( "#thread" + (executeLineIndex - sliderValue) + "Label" ),
																				className: "ui-effects-transfer" }, 1000, function() {
				threadStart(executeLineIndex - sliderValue);
				animatingArrowAndExecuteButton(executeLineIndex);
				executeLineIndex++;
			} );
		}
	});
	
	$(".stopBtn").click(function() {
		if ($(this).hasClass('disabled')) {
			return;
		}
		$(this).addClass('disabled opacity40');
		var threadId = $(this).attr("threadId");
		if ($(this).hasClass('stop')) {
			if (id == 1) {
				$("#thread" + threadId + "Message").text("Thread is stopped").removeClass('loading');
			} else {
				$("#thread" + threadId + "Message").text("Thread " + threadId + " is stopped").removeClass('loading');
			}
			stopCalled(threadId);
		}
	});
}

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
				introjs._introItems[introjs._currentStep].intro = "A single instance of <span class='ct-code-b-yellow'>Counter</span> class is "
																	+ "created and started in a thread.";
			} else {
				introjs._introItems[introjs._currentStep].intro = "Two instances of <span class='ct-code-b-yellow'>Counter</span> class are "
																	+ "created and started in two separate threads.";
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

function offsetArrowAndExecuteButton(executeLineIndex) {
	var arrowLine = $("#line" + executeLineIndex).offset();
	var mainMethodArrowWidth = $("#mainMethodArrow").width() + 2;
	$("#mainMethodArrow").offset({top: arrowLine.top - 2, left: arrowLine.left - mainMethodArrowWidth});
	var executeButton = $("#line" + executeLineIndex).offset();
	var executeLineWidth = $("#line" + executeLineIndex).width();
	$("#executeButton").offset({top: executeButton.top, left: executeButton.left + executeLineWidth + 4});
	$("#executeButton").removeClass('disabled opacity40');
	if (executeLineIndex <= sliderValue) {
		$_bs("#executeButton").attr('data-original-title', 'Click to Execute');
	} else {
		$_bs("#executeButton").attr('data-original-title', 'Click to Start');
	}
	$_bs("#executeButton").tooltip('show');
}

function animatingArrowAndExecuteButton(executeLineIndex) {
	if (executeLineIndex == sliderValue * 2) {
		$_bs("#executeButton").tooltip('hide');
		$("#executeButton").addClass('hidden');
		setTimeout(function() {
			var parentOffset = $('#mainMethodArrow').parent().offset();
			var l1 = $("#mainMethodArrow").offset();
			var arrowLine = $("#mainMethodCloseBrace").offset();
			var mainMethodArrowWidth = $("#mainMethodArrow").width() + 2;
			$("#mainMethodArrow").offset({top: arrowLine.top - 2, left: arrowLine.left - mainMethodArrowWidth});
			TweenMax.from($("#mainMethodArrow"), 1, {top: l1.top - parentOffset.top, left: l1.left - parentOffset.left});
			if (id == 1) {
				$_bs("#mainMethodCloseBrace").attr("data-content", 'Waiting for child thread to complete...');
			} else {
				$_bs("#mainMethodCloseBrace").attr("data-content", 'Waiting for child threads to complete...');
			}
			$_bs("#mainMethodCloseBrace").popover('show');
		}, 3000);
	} else {
		var parentOffset = $('#mainMethodArrow').parent().offset();
		var l1 = $("#mainMethodArrow").offset();
		var l2 = $("#executeButton").offset();
		offsetArrowAndExecuteButton(executeLineIndex + 1);
		var tMax = new TimelineMax();
		tMax.from($("#mainMethodArrow"), 1, {top: l1.top - parentOffset.top, left: l1.left - parentOffset.left})
				.from($("#executeButton"), 1,	{top: l2.top - parentOffset.top, left: l2.left - parentOffset.left}, "-=1");
	}
}

function threadStart(threadIndex) {
	$("#progressBarThread" + threadIndex).css("width", "0%");
	$("#thread" + threadIndex + "Label").removeClass("label-default").addClass("label-primary");
	$("#t" + threadIndex + "Label").removeClass("label-default").addClass("label-primary");
	$("#progressBarThread" + threadIndex).addClass("progress-bar-striped");
	if (id == 1) {
		$("#thread" + threadIndex + "Message").text("Thread is executing").addClass('loading');
	} else {
		$("#thread" + threadIndex + "Message").text("Thread " + threadIndex + " is executing").addClass('loading');
	}
	$("#stopThread" + threadIndex + "Button").removeClass('disabled opacity40');
	$("#thread" + threadIndex + "Arrow").removeClass('hidden');
	arrowAtLine($('#for' + threadIndex), $("#thread" + threadIndex + "Arrow"));
	threadInterval(threadIndex);
}

function arrowAtLine(element, arrowId) {
	var arrowLine = element.offset();
	var arrowIdWidth = arrowId.width() + 2;
	arrowId.offset({top: arrowLine.top - 2, left: arrowLine.left - arrowIdWidth});
}

function animatingArrowAtLine(element, arrowId, callBackFunction) {
	var parentOffset = arrowId.parent().offset();
	var l1 = arrowId.offset();
	arrowAtLine(element, arrowId);
	TweenMax.from(arrowId, 1, {top: l1.top - parentOffset.top, left: l1.left - parentOffset.left, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function threadInterval(threadIndex) {
	threadProgressBarWidth[threadIndex] += 10;
	if (id == 1) {
		$('.tooltip').css('opacity', 0.3);
		$_bs("#for1").tooltip('show').next().css('opacity', 1);
	}
	$("#for" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
		animatingArrowAtLine($("#ifStopCalled" + threadIndex), $("#thread" + threadIndex + "Arrow"), function() {
			if (id == 1) {
				$('.tooltip').css('opacity', 0.3);
				$_bs("#ifStopCalled1").tooltip('show').next().css('opacity', 1);
			}
			$("#ifStopCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
				TweenMax.fromTo($('#ifStopCalledElement' + threadIndex + ', #stopCalledStatus' + threadIndex), 0.5, 
									{ease: Sine.easeInOut, backgroundColor: 'yellow'}, 
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 1, onComplete: function() {
					if ($('#stopCalledStatus' + threadIndex).text() == 'false') {
						animatingArrowAtLine($("#sop" + threadIndex), $("#thread" + threadIndex + "Arrow"), function() {
							$("#progressBarThread" + threadIndex).css("width", threadProgressBarWidth[threadIndex] + "%");
							$('#outputPre').append("t[" + threadIndex + "] : " + ((threadProgressBarWidth[threadIndex]/10)) + "\n");
							$("#sop" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
								animatingArrowAtLine($("#for" + threadIndex), $("#thread" + threadIndex + "Arrow"), function() {
									if (threadProgressBarWidth[threadIndex] == 100) {
										if (id == 1) {
											$('.tooltip').css('opacity', 0.3);
											$_bs("#for1").attr({'data-original-title': 'Exits from the <b>for</b> loop', 'data-placement': 'right',
																'data-trigger': 'manual', 'data-html': 'true'});
											$_bs("#for1").tooltip('show').next().css('opacity', 1);
										}
										$("#for" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
											animatingArrowAtLine($("#runMethodEndT" + threadIndex), $("#thread" + threadIndex + "Arrow"), function() {
												$("#runMethodEndT" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
													threadEnd(threadIndex);
													checkAllThreadsEnded();
												});
											});
										});
									}  else {
										threadInterval(threadIndex);
									}
								});
							});
						});
					} else {
						if (id == 1) {
							$_bs("#ifStopCalled1").attr({'data-original-title': '<b>stopCalled</b> is <span class=" code-b-green">true</span>',
								'data-placement': 'right', 'data-trigger': 'manual', 'data-html': 'true'});
							$_bs("#ifStopCalled1").tooltip('show').next().css('opacity', 1);
						}
						animatingArrowAtLine($("#return" + threadIndex), $("#thread" + threadIndex + "Arrow"), function() {
							if (id == 1) {
								$('.tooltip').css('opacity', 0.3);
								$_bs("#return1").tooltip('show').next().css('opacity', 1);
							}
							$("#return" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
								animatingArrowAtLine($("#runMethodEndT" + threadIndex), $("#thread" + threadIndex + "Arrow"), function() {
									$("#runMethodEndT" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
										TweenLite.to('#runMethodT' + threadIndex, 0.5, { opacity: 0.5, onComplete: function() {
											$("#progressBarThread" + threadIndex).removeClass("progress-bar-striped");
											$("#stopThread" + threadIndex + "Button").addClass('disabled opacity40');
											$("#thread" + threadIndex + "Arrow").addClass('hidden');
											threadProgressBarWidth[threadIndex] = 100;
											checkAllThreadsEnded();
										}});	
									});
								});
							});
						});
					}
				}});
			});
		});
	});
}

function threadEnd(threadIndex) {
	$("#progressBarThread" + threadIndex).removeClass("progress-bar-striped");
	$(".stopBtn").addClass('disabled opacity40');
	if (id == 1) {
		$("#thread" + threadIndex + "Message").text("Thread has ended").removeClass('loading');
	} else {
		$("#thread" + threadIndex + "Message").text("Thread " + threadIndex + " has ended").removeClass('loading');
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
		setTimeout(function() {
		$("#resetMainMethodButton, #closeBtn").removeClass('hidden').removeClass("opacity00");
		}, 300);
	}
}

function stopCalled(threadIndex) {
	$('#stopThread' + threadIndex + 'Button').effect( "transfer", { to: $("#stopMethodT" + threadIndex), className: "ui-effects-transfer" },
			1000, function() {
		$('#stopThread' + threadIndex + 'Arrow').removeClass('hidden');
		arrowAtLine($('#stopCalled' + threadIndex), $('#stopThread' + threadIndex + 'Arrow'));
		if (id == 1) {
			$('.tooltip').css('opacity', 0.3);
			$_bs("#stopCalled1").tooltip('show').next().css('opacity', 1);
		}
		$("#stopCalled" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
			$('#threadbox' + threadIndex).append('<span id="tempStatus' + threadIndex + '" class="temp-status-css code-b-red">' +
													$('#stopCalledStatus' + threadIndex).text() + '</span>');
			$('#tempStatus' + threadIndex).offset({top: $('#stopCalledStatus' + threadIndex).offset().top,
													left: $('#stopCalledStatus' + threadIndex).offset().left});
			var l1 = $("#stopCalledTrue" + threadIndex).offset();
			var l2 = $("#stopCalledStatus" + threadIndex).offset();
			var topLength = l1.top - l2.top;
			var leftLength = l1.left - l2.left;
			$('#stopCalledStatus' + threadIndex).removeClass('code-b-red').addClass('code-b-green').text($("#stopCalledTrue" + threadIndex).text());
			var tMax = new TimelineMax();
			tMax.from('#stopCalledStatus' + threadIndex, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
				animatingArrowAtLine($("#stopCalledSop" + threadIndex), $("#stopThread" + threadIndex + "Arrow"), function() {
					$('#outputPre').append("t["  + threadIndex + "] stop called...\n");
					$("#stopCalledSop" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
						$('#stopThread' + threadIndex + 'Arrow').addClass('hidden');
					});
				});
			}}).to('#tempStatus' + threadIndex, 1, {ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
				$('#tempStatus' + threadIndex).remove();
			}}, "-=2");
		});
	}); 
}