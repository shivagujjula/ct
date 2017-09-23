var typingInterval = 10;
function WifiModuleCircuitReady() {
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
			TweenMax.to($("#vccPinImage"), 1.5, {opacity: 1, onComplete: function() {
				$("#mainDiv").popover('show');
				$(".popover").css("top", "77px");
				TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $("#vccPinImage").offset().left, ease: Elastic.easeOut, onComplete: function() {
					var text = "Vcc pin.";
					typing("#popover1", text, typingInterval, function() {
						$("#popover1").append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="EsGndPinFunction()">Next &#8594;</span></div>');
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

function EsGndPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NEWESP8266/2_ESP8266_bb.jpg" width="70%" id="esGndPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#esGndPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#esGndPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "ESP8266 GND pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="EsTxPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function EsTxPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NEWESP8266/3_ESP8266_bb.jpg" width="70%" id="esTxPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#esTxPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#esTxPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "ESP8266 GND pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="EsRxPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function EsRxPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NEWESP8266/4_ESP8266_bb.jpg" width="70%" id="esRxPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#esRxPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#esRxPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "ESP8266 GND pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="EsCHPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function EsCHPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NEWESP8266/4_ESP8266_bb.jpg" width="70%" id="esCHPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#esCHPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#esCHPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "ESP8266 GND pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="setTimeOutFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}