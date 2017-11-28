
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

	var threadProgressBarWidth;
	var threadProgressBarSetInterval = [];

	var pauseClickedArr = [];

	var sliderValueAtEnd;


var liveThreadsInActionReady = function() {

	$(function() {
		$("#slider-range-max").slider({
			range : "max",
			min : 1,
			max : 4,
			value : 2,
			slide : function(event, ui) {
				$("#numOfThreads").val(ui.value);
				sliderValue = $("#numOfThreads").val();
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

	$("#startAllThreadsButton").click(
			function() {
				if ($("#startAllThreadsButton").hasClass('disabled')) {
					return;
				}
				if ($("#startAllThreadsButton").hasClass('reset')) {
					for (var i = 1; i <= sliderValueAtEnd; i++) {
						threadProgressBarWidth[0] = -10;
						$('#slider-range-max').slider('enable');
						$("#startAllThreadsButton").removeClass("reset").removeClass("btn-warning").addClass("btn-primary");
						$("#startAllThreadsButton").text("Start Main Thread");
						$("#threadbox" + i).addClass("hidden");
						$("#divT" + i).addClass("hidden");
						$("#mainThreadLabel").removeClass("label-success").addClass("label-default");
						$("#progressBarMainThread").css("width", "0%");
						$("#mainThreadMessage").text("");
						$("#t" + i + "Label").removeClass("label-primary").addClass("label-default");
						$("#thread" + i + "Label").removeClass("label-primary").addClass("label-default");
						$("#progressBarThread" + i).css("width", "0%");
						$("#thread" + i + "Message").text("");
					}
					return;
				}
				threadProgressBarWidth = [ 0, 20, 20, 20, 20];
				$('#slider-range-max').slider('disable');
				createThreadBoxes();
				$(this).addClass('disabled').addClass('opacity40');
				$("#pauseMainThreadButton").removeClass('disabled')
						.removeClass('opacity40');
				mainThreadStart();
			});

	$(".pauseResumeBtn").click(
			function() {
				if ($(this).hasClass('disabled')) {
					return;
				}
				$(this).addClass('disabled').addClass('opacity40');
				var threadId = $(this).attr("threadId");
				if ($(this).hasClass('pause')) {
					$(".resume[threadId=" + threadId + "]")
							.removeClass('disabled').removeClass(
									'opacity40');
					pauseClickedArr[threadId] = true;
				} else {
					$(".pause[threadId=" + threadId + "]")
							.removeClass('disabled').removeClass(
									'opacity40');
					pauseClickedArr[threadId] = false;
				}
			});
}


function createThreadBoxes() {
	for (var numOfThreadBox = 1; numOfThreadBox <= sliderValue; numOfThreadBox++) {
		$("#divT" + numOfThreadBox).removeClass("hidden");
		$("#threadbox" + numOfThreadBox).removeClass("hidden");
		pauseClickedArr[numOfThreadBox] = false;
	}
}

function mainThreadStart() {
	$("#mainThreadLabel").removeClass("label-default").addClass(
			"label-success");
	$("#progressBarMainThread").addClass("progress-bar-striped");
	$("#mainThreadMessage").text("Main Thread has started");
	threadProgressBarSetInterval[0] = setInterval(function() {
		if (pauseClickedArr[0]) {
			//if the pause is clicked
			return;
		}
		$("#progressBarMainThread").css("width",
				threadProgressBarWidth[0] + "%");
		if (threadProgressBarWidth[0] == 20) {
			threadStart(1);
		}
		if (threadProgressBarWidth[0] == 40) {
			if(sliderValue >= 2){
				threadStart(2);
			}
		}
		if (threadProgressBarWidth[0] == 60) {
			if(sliderValue >= 3){
				threadStart(3);
			}
		}
		if (threadProgressBarWidth[0] == 80) {
			if(sliderValue == 4){
				threadStart(4);
			}
		}
		if (threadProgressBarWidth[0] == 100) {
			mainThreadEnd();
		}
		if (threadProgressBarWidth[0] < 100) {
			threadProgressBarWidth[0] += 1;
		}
		checkAllThreadsEnded();
	}, 100);
}

function threadStart(threadIndex) {
	$("#progressBarThread" + threadIndex).css("width", "10%");
	$("#thread" + threadIndex + "Label").removeClass("label-default")
			.addClass("label-primary");
	$("#t" + threadIndex + "Label").removeClass("label-default").addClass(
			"label-primary");
	$("#progressBarThread" + threadIndex).addClass("progress-bar-striped");
	$("#thread" + threadIndex + "Message").text(
			"Thread " + threadIndex + " has started");
	$("#pauseThread" + threadIndex + "Button").removeClass('disabled')
			.removeClass('opacity40');
	threadProgressBarSetInterval[threadIndex] = setInterval(function() {
		if (pauseClickedArr[threadIndex]) {
			//if the pause is clicked
			return;
		}
		$("#progressBarThread" + threadIndex).css("width",
				threadProgressBarWidth[threadIndex] + "%");
		if (threadProgressBarWidth[threadIndex] == 110) {
			threadEnd(threadIndex);
		}
			threadProgressBarWidth[threadIndex] += 10;
		checkAllThreadsEnded();
	}, 1000);
}



function mainThreadEnd() {
	$("#mainThreadMessage").text("Waiting for child threads to complete...");
	$("#mainThreadMessage").addClass("pulsate");
	clearInterval(threadProgressBarSetInterval[0]);
	$("#pauseMainThreadButton").addClass('disabled').addClass('opacity40');
	$("#resumeMainThreadButton").addClass('disabled').addClass('opacity40');
}

function threadEnd(threadIndex) {
	$("#progressBarThread" + threadIndex).removeClass("progress-bar-striped");
	clearInterval(threadProgressBarSetInterval[threadIndex]);
	$("#pauseThread" + threadIndex + "Button").addClass('disabled').addClass(
			'opacity40');
	$("#resumeThread" + threadIndex + "Button").addClass('disabled')
			.addClass('opacity40');
	$("#thread" + threadIndex + "Message").text(
			"Thread " + threadIndex + " has Ended");
}

function checkAllThreadsEnded() {
	var arr = [100, 20, 20, 20, 20]
	for (var end = 1; end <= sliderValue; end++) {
		arr[end] = 120;
		if (threadProgressBarWidth.equals(arr)) {
			$("#progressBarMainThread").removeClass("progress-bar-striped");
			$("#mainThreadMessage").removeClass("pulsate");
			$("#mainThreadMessage").text("Main thread and child threads completed execution");
			$("#startAllThreadsButton").removeClass('disabled').removeClass('opacity40').removeClass("btn-primary");
			$("#startAllThreadsButton").addClass("reset").addClass("btn-warning");
			$("#startAllThreadsButton").text("Reset Main Thread");
			sliderValueAtEnd = sliderValue;
		}
	}
}