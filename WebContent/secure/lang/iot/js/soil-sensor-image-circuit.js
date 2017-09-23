var typingInterval = 10;
function SoilSensorImageCircuitReady() {
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
			TweenMax.to($("#soilSensorVccPinImage"), 1.5, {opacity: 1, onComplete: function() {
				$("#mainDiv").popover('show');
				$(".popover").css("top", "77px");
				TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $("#soilSensorVccPinImage").offset().left, ease: Elastic.easeOut, onComplete: function() {
					var text = "soil sensor VCC pin.";
					typing("#popover1", text, typingInterval, function() {
						$("#popover1").append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="soilSensorGNDPinFunction()">Next &#8594;</span></div>');
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

function soilSensorGNDPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/soilSensor-images/SoilSensor2_bb.jpg" width="70%" id="soilSensorGNDPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#soilSensorGNDPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#soilSensorGNDPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "soil sensor GND pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="soilSensorAnalogPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function soilSensorAnalogPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/soilSensor-images/SoilSensor3_bb.jpg" width="70%" id="soilSensorAnalogPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#soilSensorAnalogPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#soilSensorAnalogPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "soil sensor Analog pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="soilSensorDigitalPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function soilSensorDigitalPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/soilSensor-images/SoilSensor4_bb.jpg" width="70%" id="soilSensorDigitalPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#soilSensorDigitalPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#soilSensorDigitalPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "soil sensor Digital pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="setTimeOutFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}