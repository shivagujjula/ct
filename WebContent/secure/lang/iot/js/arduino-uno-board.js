var typingInterval = 10;
function ArduinoUnoBoardReady() {
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
			TweenMax.to($("#powerUsbImage"), 1.5, {opacity: 1, onComplete: function() {
				$("#mainDiv").popover('show');
				$(".popover").css("top", "77px");
				TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $("#powerUsbImage").offset().left, ease: Elastic.easeOut, onComplete: function() {
					var text = "<span class='ct-code-b-yellow'>Arduino</span> board can be powered by using the "+
						"<span class='ct-code-b-yellow'>USB</span> cable from your computer. All you need to do is connect the "+
						"<span class='ct-code-b-yellow'>USB</span> cable to the <span class='ct-code-b-yellow'>USB</span> connection.";
					typing("#popover1", text, typingInterval, function() {
						$("#popover1").append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="powerJackFunction()">Next &#8594;</span></div>');
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

function powerJackFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/2_Arduino_bb.jpg" width="70%" id="powerJackImage">');
	$("#popover1").text("");
	TweenMax.to($("#powerJackImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#powerJackImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>Power Jack</span> is also known as <span class='ct-code-b-yellow'>Barrel Jack</span>. "+
			"Arduino boards can be powered directly from the AC mains power supply "+
				"by connecting it to the Barrel Jack.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="VoltageRegulatorFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VoltageRegulatorFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/3_Arduino_bb.jpg" width="70%" id="voltageRegulatorImage">');
	$("#popover1").text("");
	TweenMax.to($("#voltageRegulatorImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#voltageRegulatorImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "The function of the <span class='ct-code-b-yellow'>Voltage Regulator</span> is to control the voltage given to "+
			"the <span class='ct-code-b-yellow'>Arduino</span> board and "+
				"stabilize the DC voltages used by the processor and other elements.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="resetPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function resetPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/4_Arduino_bb.jpg" width="70%" id="resetPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#resetPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#resetPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "You can reset your <span class='ct-code-b-yellow'>Arduino</span> board, i.e., start your program from the beginning. "+
				"You can reset the <span class='ct-code-b-yellow'>UNO</span> board in two ways. "+
				"First, by using the reset button on the board. Second, you can connect an external reset button to the Arduino pin labelled "+
				"<span class='ct-code-b-yellow'>RESET</span>.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="VoltageThreePinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VoltageThreePinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/5_Arduino_bb.jpg" width="70%" id="VoltageThreePinImage">');
	$("#popover1").text("");
	TweenMax.to($("#VoltageThreePinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#VoltageThreePinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>3.3V</span> pin supply 3.3 volts output.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="VoltageFivePinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VoltageFivePinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/6_Arduino_bb.jpg" width="70%" id="VoltageFivePinImage">');
	$("#popover1").text("");
	TweenMax.to($("#VoltageFivePinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#VoltageFivePinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>5V</span> pin supply 5 volts output.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="VINpinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VINpinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/7_Arduino_bb.jpg" width="70%" id="VINpinImage">');
	$("#popover1").text("");
	TweenMax.to($("#VINpinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#VINpinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>VIN</span> Pin can be used to power the <span class='ct-code-b-yellow'>Arduino</span> "+
			"board from an external power source, like AC mains power supply.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="GNDpinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function GNDpinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/8_Arduino_bb.jpg" width="70%" id="GNDpinImage">');
	$("#popover1").text("");
	TweenMax.to($("#GNDpinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#GNDpinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "There are several <span class='ct-code-b-yellow'>GND</span> pins on the <span class='ct-code-b-yellow'>Arduino</span>, "+
			"any of which can be used to ground your circuit.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="analogPinsFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function analogPinsFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/9_Arduino_bb.jpg" width="70%" id="analogPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#analogPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#analogPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "The <span class='ct-code-b-yellow'>Arduino UNO</span> board has six analog input pins <span class='ct-code-b-yellow'>A0</span> "+
				"through <span class='ct-code-b-yellow'>A5</span>. These pins can read the signal from "+
				"an analog sensor like the humidity sensor or temperature sensor.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="microcontrollerFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function microcontrollerFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/10_Arduino_bb.jpg" width="70%" id="microcontrollerImage">');
	$("#popover1").text("");
	TweenMax.to($("#microcontrollerImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#microcontrollerImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Each <span class='ct-code-b-yellow'>Arduino</span> board has its own <span class='ct-code-b-yellow'>Microcontroller</span>. "+
			"It is the brain of <span class='ct-code-b-yellow'>Arduino</span> board. "+
			"The main IC (integrated circuit) on the Arduino differs from board to board. The microcontrollers "+
			"are usually of the ATMEL Company. You must know what IC your board has before loading up a new program from the IDE.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="ICSPpinsFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function ICSPpinsFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/11_Arduino_bb.jpg" width="70%" id="ICSPpinsImage">');
	$("#popover1").text("");
	TweenMax.to($("#ICSPpinsImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#ICSPpinsImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>ICSP</span> is an AVR, a tiny programming header for the Arduino consisting of "+
				"MOSI, MISO, SCK, RESET, VCC, and GND. It is often referred to as an SPI (Serial Peripheral Interface) "+
				"for expansion of the output device.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="powerLEDIndicator()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function powerLEDIndicator() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/12_Arduino_bb.jpg" width="70%" id="powerLedIndicatorImage">');
	$("#popover1").text("");
	TweenMax.to($("#powerLedIndicatorImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#powerLedIndicatorImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>Power LED</span> lights up whenever you plug your Arduino into a power source "+
				"through <span class='ct-code-b-yellow'>USB</span> or <span class='ct-code-b-yellow'>Power Jack</span>.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="LEDindicatorForPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function LEDindicatorForPinFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/13_Arduino_bb.jpg" width="70%" id="LedIndicatorForPinImage">');
	$("#popover1").text("");
	TweenMax.to($("#LedIndicatorForPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#LedIndicatorForPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>Arduino</span> board has a built-in <span class='ct-code-b-yellow'>LED</span> driven "+
			"by digital pin 13. When the pin is HIGH value, LED ONs. When the pin is LOW, LED OFFs.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="TxAndRxLedsFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function TxAndRxLedsFunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/14_Arduino_bb.jpg" width="70%" id="TxAndRxLedsImage">');
	$("#popover1").text("");
	TweenMax.to($("#TxAndRxLedsImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#TxAndRxLedsImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>TX</span> and <span class='ct-code-b-yellow'>RX</span> LEDs indicates for serial "+
				"communication done by pins <span class='ct-code-b-yellow'>1</span> and <span class='ct-code-b-yellow'>0</span> of "+
				"<span class='ct-code-b-yellow'>Arduino</span> board." +
				"These LEDs indicate whether data is transmitting or receiving from <span class='ct-code-b-yellow'>Arduino</span> board respectively.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="AREFfunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function AREFfunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/15_Arduino_bb.jpg" width="70%" id="AREFImage">');
	$("#popover1").text("");
	TweenMax.to($("#AREFImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#AREFImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>AREF</span> means Analog Reference Voltage. "+
				"It sets an external reference voltage (between 0 and 5V) for analog input pins.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="digitalPinsfunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function digitalPinsfunction() {
	$("#mainDiv").popover('hide');
	$("#imageIdSpan").html('<img src="../images/16_Arduino_bb.jpg" width="70%" id="digitalPinsImage">');
	$("#popover1").text("");
	TweenMax.to($("#digitalPinsImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#mainDiv").popover('show');
		$(".popover").css("top", "77px");
		TweenMax.from($('.popover'), 1, {left: 2 * ($('#mainDiv').offset().left) + $('#digitalPinsImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "<span class='ct-code-b-yellow'>Digital I/O</span> pins operate at 5V. <span class='ct-code-b-yellow'>Arduino UNO</span> "+
			"has 14 pins used for input and output using functions pinMode(), "+
			"digitalWrite(), digitalRead(). These pins operate at 5V.";
			typing("#popover1", text, typingInterval, function() {
				$("#popover1").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="setTimeOutFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
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