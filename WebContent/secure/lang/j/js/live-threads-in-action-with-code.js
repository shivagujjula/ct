
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
        }           
        else if (this[i] != array[i]) { 
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

	var pauseClickedArr = [];

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

var liveThreadsInActionWithCodeReady = function() {
	
	function GetURLParameter(sParam) {
	    var sPageURL = window.location.search.substring(1);
	    var sURLVariables = sPageURL.split('&');
	    for (var i = 0; i < sURLVariables.length; i++) {
	        var sParameterName = sURLVariables[i].split('=');
	        if (sParameterName[0] == sParam) {
	            return sParameterName[1];
	        }
	    }
	}
	
	id = GetURLParameter('id');
	if (id == 1) {
		sliderValue = parseInt(id);
		$("#sliderDiv").hide();
		$("#thread1Label").text("Thread T");
	} else {
		$(".button-div-css").addClass('col-sm-2');
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
	
	$_bs("#startMainMethodButton").attr('data-content', 'Click to Start');
	$_bs("#startMainMethodButton").popover('show');
	$_bs("#resetMainMethodButton").attr('data-content', 'Click to Reset');
	
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
		heightOfMainMethodBox = (sliderValue == 4) ? 410 : (sliderValue == 3) ? 390 : (sliderValue == 2) ? 370 : 350;
		$("#mainMethodThreadbox").css('height', heightOfMainMethodBox);
		$("#mainMethodThreadbox").removeClass('hidden');
		$('#outputPre').empty();
		$("#mainMethodArrow").removeClass('hidden');
		$("#mainMethodArrow").show();
		$("#executeButton").removeClass('hidden');
		offsetArrowAndExecuteButton(executeLineIndex);
		$_bs("#executeButton").tooltip('show');
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
			$("#runMethodT" + executeLineIndex).css({"opacity": "0"});
			$("#threadbox" + executeLineIndex).fadeTo(2000, 1);
			$("#objectT" + executeLineIndex).effect( "transfer", { to: $("#threadbox" + executeLineIndex), className: "ui-effects-transfer" }, 2000, function() {
				$("#runMethodT" + executeLineIndex).fadeTo(2000, 1);
				$_bs("#runMethodT" + executeLineIndex).attr('data-content', 'Thread code');
				$_bs("#runMethodT" + executeLineIndex).popover('show');
				$("#runMainMethod").effect( "transfer", { to: $("#runMethodT" + executeLineIndex), className: "ui-effects-transfer" }, 2000, function() {
					$_bs("#runMethodT" + executeLineIndex).popover('hide');
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
	
	$(".pauseResumeBtn").click(function() {
				if ($(this).hasClass('disabled')) {
					return;
				}
				$(this).addClass('disabled').addClass('opacity40');
				var threadId = $(this).attr("threadId");
				if ($(this).hasClass('pause')) {
					$(".resume[threadId=" + threadId + "]").removeClass('disabled').removeClass('opacity40');
					if (id == 1) {
						$("#thread" + threadId + "Message").text("Thread is paused");
					} else {
						$("#thread" + threadId + "Message").text("Thread " + threadId + " is paused");
					}
					pauseClickedArr[threadId] = true;
				} else {
					$(".pause[threadId=" + threadId + "]").removeClass('disabled').removeClass('opacity40');
					if (id == 1) {
						$("#thread" + threadId + "Message").text("Thread is executing");
					} else {
						$("#thread" + threadId + "Message").text("Thread " + threadId + " is executing");
					}
					pauseClickedArr[threadId] = false;
				}
			});
	
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
		setTimeout(function() {
			$("#thread" + threadIndex + "Arrow").removeClass('hidden');
			offsetFor(threadIndex);
		}, 2000);
		threadProgressBarSetInterval[threadIndex] = setInterval(function() {
			if (pauseClickedArr[threadIndex]) {
				//if the pause is clicked
				return;
			} else {
				threadProgressBarWidth[threadIndex] += 10;
				$("#for" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
					l1[threadIndex] = $("#for" + threadIndex).offset();
					l2[threadIndex] = $("#sop" + threadIndex).offset();
					topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
					leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
					TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: offsetSop, onCompleteParams: [threadIndex]});
					$("#progressBarThread" + threadIndex).css("width", threadProgressBarWidth[threadIndex] + "%");
					$('#outputPre').append("t[" + threadIndex + "] : " + ((threadProgressBarWidth[threadIndex]/10)) + "\n");
					$( "#sop" + threadIndex).effect("highlight", {color: '#337ab7'}, 500, function() {
						l1[threadIndex] = $("#sop" + threadIndex).offset();
						l2[threadIndex] = $("#sleep" + threadIndex).offset();
						topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
						leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
						TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: offsetSleep, onCompleteParams: [threadIndex]});
						$( "#sleep" + threadIndex).effect("highlight", {color: '#337ab7'}, 800, function() {
							l1[threadIndex] = $("#sleep" + threadIndex).offset();
							l2[threadIndex] = $("#for" + threadIndex).offset();
							topLength[threadIndex] = l2[threadIndex].top - l1[threadIndex].top;
							leftLength[threadIndex] = l2[threadIndex].left - l1[threadIndex].left;
							TweenLite.to($("#thread" + threadIndex + "Arrow"), 0.5, {top: "+=" + topLength[threadIndex], left: "+=" + leftLength[threadIndex], onComplete: offsetFor, onCompleteParams: [threadIndex]});
							if (threadProgressBarWidth[threadIndex] == 100) {
								threadEnd(threadIndex);
								checkAllThreadsEnded();
							}
						});
					});
				});
			}
		}, 2000);
	}
	
	function threadEnd(threadIndex) {
		$("#progressBarThread" + threadIndex).removeClass("progress-bar-striped");
		clearInterval(threadProgressBarSetInterval[threadIndex]);
		$("#pauseThread" + threadIndex + "Button").addClass('disabled').addClass(
				'opacity40');
		$("#resumeThread" + threadIndex + "Button").addClass('disabled')
				.addClass('opacity40');
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
		}
	}
	
	function offsetArrowAndExecuteButton(executeLineIndex) {
		/*if (executeLineIndex == 1) {
			$_bs("#executeButton").attr('data-original-title', 'Click to Execute');
			arrow[0] = $("#line" + executeLineIndex).offset();
			mainMethodArrowWidth = $("#mainMethodArrow").width();
			$("#mainMethodArrow").offset({top: arrow[0].top, left: arrow[0].left - mainMethodArrowWidth - 9});
			executeButton = $("#line" + executeLineIndex).offset();
			executeLineWidth = $("#line" + executeLineIndex).width();
			$("#executeButton").offset({top: executeButton.top,left: executeButton.left + executeLineWidth - 9});
			$("#executeButton").removeClass('disabled').removeClass('opacity40');
			$_bs("#executeButton").tooltip('show');
		} else*/
		if (executeLineIndex <= sliderValue) {
			$_bs("#executeButton").attr('data-original-title', 'Click to Execute');
			arrow[0] = $("#line" + executeLineIndex).offset();
			mainMethodArrowWidth = $("#mainMethodArrow").width();
			$("#mainMethodArrow").offset({top: arrow[0].top - 3, left: arrow[0].left - mainMethodArrowWidth});
			executeButton = $("#line" + executeLineIndex).offset();
			executeLineWidth = $("#line" + executeLineIndex).width();
			$("#executeButton").offset({top: executeButton.top,left: executeButton.left + executeLineWidth});
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
				$("#executeButton").offset({top: executeButton.top,left: executeButton.left + executeLineWidth});
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
	
	function offsetSleep(threadIndex) {
		arrow[threadIndex] = $("#sleep" + threadIndex).offset();
		$("#thread" + threadIndex + "Arrow").offset({top: arrow[threadIndex].top-3, left: arrow[threadIndex].left-14});
	}
}