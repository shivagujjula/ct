<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Insert title here</title>

<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-50 {
	margin-top: 50px;
}

.margin-top-100 {
	margin-top: 100px;
}

.custom-btn {
	background-color: darkgreen;
	float: right;
	margin: 0 !important;
}

.popover {
	z-index: 9999999;
	width: 200px;
}

.popover-content {
    background-color: teal;  /* teal #003399 */
    color: white;
    min-height: 30px;
    letter-spacing: 1px;
}

.popover-height {
	height: 20px;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

img {
	opacity: 0;
}

</style>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Arduino UNO Board</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-50 main-div text-center" id="mainDiv">
		<span id="imageIdSpan">
			<img src="../images/1_Arduino_bb.jpg" width="70%" id="powerUsbImage">
		</span>
	</div>
	<div class="col-xs-12 margin-top-100 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
</div>

</body>
<script type="text/javascript">
var typingInterval = 10;
$(document).ready(function() {
	introGuide();
});

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
			$("#powerUsbImage").popover({
				placement: 'left',
				html: true,
				trigger: 'focus',
				content: '<div id="popover1"></div>',
			}).popover('hide');
			TweenMax.to($("#powerUsbImage"), 1.5, {opacity: 1, onComplete: function() {
				$("#powerUsbImage").popover('show');
				$(".popover").css("top", "0");
				TweenMax.from($('.popover'), 1, {left:  '-' + $('#powerUsbImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
					var text = "power USB";
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
	$("#imageIdSpan").text("").append('<img src="../images/2_Arduino_bb.jpg" width="70%" id="powerJackImage">');
	$("#powerJackImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover2"></div>',
	}).popover('hide');
	TweenMax.to($("#powerJackImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#powerJackImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#powerJackImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "power jack";
			typing("#popover2", text, typingInterval, function() {
				$("#popover2").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="VoltageRegulatorFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VoltageRegulatorFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/3_Arduino_bb.jpg" width="70%" id="voltageRegulatorImage">');
	$("#voltageRegulatorImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover3"></div>',
	}).popover('hide');
	TweenMax.to($("#voltageRegulatorImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#voltageRegulatorImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#voltageRegulatorImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "voltage regulator";
			typing("#popover3", text, typingInterval, function() {
				$("#popover3").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="resetPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function resetPinFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/4_Arduino_bb.jpg" width="70%" id="resetPinImage">');
	$("#resetPinImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover4"></div>',
	}).popover('hide');
	TweenMax.to($("#resetPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#resetPinImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#resetPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "reset pin";
			typing("#popover4", text, typingInterval, function() {
				$("#popover4").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="VoltageThreePinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VoltageThreePinFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/5_Arduino_bb.jpg" width="70%" id="VoltageThreePinImage">');
	$("#VoltageThreePinImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover5"></div>',
	}).popover('hide');
	TweenMax.to($("#VoltageThreePinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#VoltageThreePinImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#VoltageThreePinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "3.3V pin";
			typing("#popover5", text, typingInterval, function() {
				$("#popover5").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="VoltageFivePinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VoltageFivePinFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/6_Arduino_bb.jpg" width="70%" id="VoltageFivePinImage">');
	$("#VoltageFivePinImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover6"></div>',
	}).popover('hide');
	TweenMax.to($("#VoltageFivePinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#VoltageFivePinImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#VoltageFivePinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "5V pin";
			typing("#popover6", text, typingInterval, function() {
				$("#popover6").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="VINpinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function VINpinFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/7_Arduino_bb.jpg" width="70%" id="VINpinImage">');
	$("#VINpinImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover7"></div>',
	}).popover('hide');
	TweenMax.to($("#VINpinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#VINpinImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#VINpinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "VIN pin";
			typing("#popover7", text, typingInterval, function() {
				$("#popover7").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="GNDpinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function GNDpinFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/8_Arduino_bb.jpg" width="70%" id="GNDpinImage">');
	$("#GNDpinImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover8"></div>',
	}).popover('hide');
	TweenMax.to($("#GNDpinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#GNDpinImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#GNDpinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "GND pin";
			typing("#popover8", text, typingInterval, function() {
				$("#popover8").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="analogPinsFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function analogPinsFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/9_Arduino_bb.jpg" width="70%" id="analogPinImage">');
	$("#analogPinImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover9"></div>',
	}).popover('hide');
	TweenMax.to($("#analogPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#analogPinImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#analogPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Analog pins";
			typing("#popover9", text, typingInterval, function() {
				$("#popover9").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="microcontrollerFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function microcontrollerFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/10_Arduino_bb.jpg" width="70%" id="microcontrollerImage">');
	$("#microcontrollerImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover10"></div>',
	}).popover('hide');
	TweenMax.to($("#microcontrollerImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#microcontrollerImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#microcontrollerImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Microcontroller";
			typing("#popover10", text, typingInterval, function() {
				$("#popover10").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="ICSPpinsFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function ICSPpinsFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/11_Arduino_bb.jpg" width="70%" id="ICSPpinsImage">');
	$("#ICSPpinsImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover11"></div>',
	}).popover('hide');
	TweenMax.to($("#ICSPpinsImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#ICSPpinsImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#ICSPpinsImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "ICSP pins";
			typing("#popover11", text, typingInterval, function() {
				$("#popover11").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="powerLEDIndicator()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function powerLEDIndicator() {
	$("#imageIdSpan").text("").append('<img src="../images/12_Arduino_bb.jpg" width="70%" id="powerLedIndicatorImage">');
	$("#powerLedIndicatorImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover12"></div>',
	}).popover('hide');
	TweenMax.to($("#powerLedIndicatorImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#powerLedIndicatorImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#powerLedIndicatorImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "power LED indicator";
			typing("#popover12", text, typingInterval, function() {
				$("#popover12").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="LEDindicatorForPinFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function LEDindicatorForPinFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/13_Arduino_bb.jpg" width="70%" id="LedIndicatorForPinImage">');
	$("#LedIndicatorForPinImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover13"></div>',
	}).popover('hide');
	TweenMax.to($("#LedIndicatorForPinImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#LedIndicatorForPinImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#LedIndicatorForPinImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "LED indicator for pin 13";
			typing("#popover13", text, typingInterval, function() {
				$("#popover13").append('<div class="popover-height">'+
						'<span class="introjs-button custom-btn" onclick="TxAndRxLedsFunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function TxAndRxLedsFunction() {
	$("#imageIdSpan").text("").append('<img src="../images/14_Arduino_bb.jpg" width="70%" id="TxAndRxLedsImage">');
	$("#TxAndRxLedsImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover14"></div>',
	}).popover('hide');
	TweenMax.to($("#TxAndRxLedsImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#TxAndRxLedsImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#TxAndRxLedsImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "Tx and Rx leds";
			typing("#popover14", text, typingInterval, function() {
				$("#popover14").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="AREFfunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function AREFfunction() {
	$("#imageIdSpan").text("").append('<img src="../images/15_Arduino_bb.jpg" width="70%" id="AREFImage">');
	$("#AREFImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover15"></div>',
	}).popover('hide');
	TweenMax.to($("#AREFImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#AREFImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#AREFImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "AREF";
			typing("#popover15", text, typingInterval, function() {
				$("#popover15").append('<div class="popover-height">'+
					'<span class="introjs-button custom-btn" onclick="digitalPinsfunction()">Next &#8594;</span></div>');
			});
		}});
	}});
}

function digitalPinsfunction() {
	$("#imageIdSpan").text("").append('<img src="../images/16_Arduino_bb.jpg" width="70%" id="digitalPinsImage">');
	$("#digitalPinsImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover16"></div>',
	}).popover('hide');
	TweenMax.to($("#digitalPinsImage"), 1.5, {opacity: 1, onComplete: function() {
		$("#digitalPinsImage").popover('show');
		$(".popover").css("top", "0");
		TweenMax.from($('.popover'), 1, {left:  '-' + $('#digitalPinsImage').offset().left, ease: Elastic.easeOut, onComplete: function() {
			var text = "digital pins";
			typing("#popover16", text, typingInterval, function() {
				$("#popover16").append('<div class="popover-height">'+
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
</script>
</html>