var typingInterval = 10;
function LevelConverterCircuitFunction() {
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
			TweenMax.to($("#LcHvPinImage"), 1.5, {opacity: 1, onComplete: function() {
				$("#mainDiv").popover('show');
				$(".popover").css("top", "77px");
				TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $("#LcHvPinImage").offset().left, ease: Elastic.easeOut, onComplete: function() {
					var text = "Level Converter HV pin.";
					typing("#popover1", text, typingInterval, function() {
						$("#popover1").append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="LcGndFunction()">Next &#8594;</span></div>');
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

function LcGndFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/1_LevelConverter_bb.jpg" width="70%" id="lcGndImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcGndImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcGndImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter GND pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcLVpinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function LcLVpinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/2_LevelConverter_bb.jpg" width="70%" id="lcPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter LV pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcLvGndPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcLvGndPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/3_LevelConverter_bb.jpg" width="70%" id="lcLvGndPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcLvGndPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcLvGndPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter GND pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcTxHv1PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcTxHv1PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/4_LevelConverter_bb.jpg" width="70%" id="lcTxHv1GndPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcTxHv1GndPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcTxHv1GndPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter TX HV1 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcRxHv2PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcRxHv2PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/5_LevelConverter_bb.jpg" width="70%" id="lcRxHv2PinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcRxHv2PinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcRxHv2PinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter RX HV2 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcRxHv3PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcRxHv3PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/6_LevelConverter_bb.jpg" width="70%" id="lcRxHv3PinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcRxHv3PinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcRxHv3PinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter RX HV3 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcTxHv4PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcTxHv4PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/7_LevelConverter_bb.jpg" width="70%" id="lcTxHv4PinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcTxHv4PinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcTxHv4PinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter TX HV4 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcTxlv1PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcTxlv1PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/8_LevelConverter_bb.jpg" width="70%" id="lcTxLv1PinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcTxLv1PinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcTxLv1PinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter TX LV1 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcRxlv2PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcRxlv2PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/9_LevelConverter_bb.jpg" width="70%" id="lcRxLv2PinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcRxLv2PinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcRxLv2PinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter RX LV2 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcRxlv3PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcRxlv3PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/10_LevelConverter_bb.jpg" width="70%" id="lcRxLv3PinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcRxLv3PinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcRxLv3PinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter RX LV3 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="LcTxlv4PinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}
function LcTxlv4PinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/NewLevelConverter/11_LevelConverter_bb.jpg" width="70%" id="lcTxLv4PinImage">');
	$("#popover1").text("");
	TweenMax.to($("#lcTxLv4PinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#lcTxLv4PinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Level Converter TX LV4 pin.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="setTimeOutFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}