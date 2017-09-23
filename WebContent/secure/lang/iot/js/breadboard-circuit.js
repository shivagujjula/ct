var typingInterval = 10;
function BreadBoardCiruitReady() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
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
			element : "#mainDiv",
			intro : "",
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
		case 'mainDiv':
			$("#mainDiv").addClass("z-index");
			$("#mainDiv").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover1"></div>',
			}).popover('hide');
			TweenMax.to($("#breadBoardSeriesImage"), 1.5, {opacity: 1, onComplete: function() {
				$("#mainDiv").popover('show');
				$(".popover").css("top", "77px");
				TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $("#breadBoardSeriesImage").offset().left, ease: Elastic.easeOut, onComplete: function() {
					var text = "All holes are in this row are in series connection.";
					typing("#popover1", text, typingInterval, function() {
						$("#popover1").append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="breadBoardParallelFunction()">Next &#8594;</span></div>');
					});
				}});
			}});
			
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltiptext").text("Click to restart.");
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function setTimeOutFunction() {
	$(".popover").hide();
	setTimeout(function() {
		introjs.nextStep();
	}, 500);
}

function typing(typingId, text, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function breadBoardParallelFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/BreadboardCircuit/breadboard1_bb.jpg" width="70%" id="breadBoardParallelImage">');
	$("#popover1").text("");
	TweenMax.to($("#breadBoardParallelImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#breadBoardParallelImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "All holes are in this column are in series connection.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="setTimeOutFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}