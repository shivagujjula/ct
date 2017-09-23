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

pre {
	font-size: 11.4px;
	tab-size: 4;
	-moz-tab-size: 4;
}

.margin-top-1 {
	margin-top: 1%;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.8s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {
		background: #9fbff2;
	}
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

.ct-color-green {
	color: green;
}

.ct-color-darkmagenta {
	color: darkmagenta;
}

.ct-color-darkblue {
	color: darkblue;
}

.ct-color-maroon {
	color: maroon;
}

</style>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Smart Industry Program</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-1">
<pre id="preCode">
<span id="includeSpanId"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;ESP8266.h&gt;</span>
<span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;SoftwareSerial.h&gt;</span>
<span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;NewPing.h&gt;</span></span>
<span id="defineSpanId"><span class="ct-color-darkblue">#define TRIGGER_PIN 6</span>
<span class="ct-color-darkblue">#define ECHO_PIN 7</span>
<span class="ct-color-darkblue">#define MAX_DISTANCE 200</span></span>
<span id="serialSpanId">SoftwareSerial mySerial(<span class="ct-color-darkmagenta">10</span>, <span class="ct-color-darkmagenta">11</span>);
ESP8266 wifi(mySerial);
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);</span>
<span id="setupSpanId"><span class="ct-color-green">void</span> setup() {
	<span id="setupLine1">Serial.begin(<span class="ct-color-darkmagenta">9600</span>);</span>
	<span id="setupLine2">mySerial.begin(<span class="ct-color-darkmagenta">115200</span>);</span>
	<span id="setupLine3">Serial.println(<span class="ct-color-darkmagenta">"setup begin"</span>);</span>
	<span id="setupWhileLoop"><span class="ct-color-maroon">while</span> (wifi.joinAP(<span class="ct-color-darkmagenta">"kkp"</span>, <span class="ct-color-darkmagenta">"Ana123Mar#@!"</span>)) {
		<span id="whileLoopPrint">Serial.println(<span class="ct-color-darkmagenta">"connected to your wifi"</span>);</span>
		<span id="whileLoopBreak"><span class="ct-color-maroon">break</span>;</span>
	}</span>
<span id="setUpSpanEnd">}</span></span>
<span id="loopSpanId"><span class="ct-color-green">void</span> loop() {
	<span id="loopSpanLine1">Serial.println(<span class="ct-color-darkmagenta">"loop runs with new values"</span>);</span>
	<span id="loopSpanLine2">delay(<span class="ct-color-darkmagenta">50</span>);</span>
	<span id="loopSpanLine3"><span class="ct-color-green">int</span> sensorValue = sonar.ping_cm();</span>
	<span id="loopSpanLine4">Serial.print(<span class="ct-color-darkmagenta">"ping value : "</span>);</span>
	<span id="loopSpanLine5">Serial.print(sensorValue);</span>
	<span id="loopSpanLine6">Serial.println(<span class="ct-color-darkmagenta">" cm"</span>);</span>
	<span id="loopSpanIfId1"><span class="ct-color-maroon">if</span> (wifi.createTCP(<span class="ct-color-darkmagenta">"184.106.153.149"</span>, <span class="ct-color-darkmagenta">80</span>)) {
		<span id="loopFunctionPrint1">Serial.println(<span class="ct-color-darkmagenta">"connected to server"</span>);</span>
	}</span> <span id="loopSpanElseId1"><span class="ct-color-maroon">else</span> {
		<span id="loopFunctionPrint2">Serial.println(<span class="ct-color-darkmagenta">"connection error and connecting  again"</span>);</span>
	}</span>
	<span id="loopSpanIfId2"><span class="ct-color-maroon">if</span> (wifi.send_one_parameter(<span class="ct-color-darkmagenta">"KN1IJJ6SSWNUOG6V"</span>, sensorValue)) {
		<span id="loopFunctionPrint3">Serial.println(<span class="ct-color-darkmagenta">"values are moving...."</span>);</span>
	}</span> <span id="loopSpanElseId2"><span class="ct-color-maroon">else</span> {
		<span id="loopFunctionPrint4">Serial.println(<span class="ct-color-darkmagenta">"values are not moving"</span>);</span>
	}</span>
	<span id="loopSpanDelay">delay(<span class="ct-color-darkmagenta">10000</span>);</span>
<span id="loopSpanEnd">}</span></span>
</pre>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
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
			element : "#heading",
			intro : "",
			position : 'right'
		}, {
			element : "#includeSpanId",
			intro : '',
			position : 'left'
		}, {
			element : '#defineSpanId',
			intro : '',
			position : 'left'
		}, {
			element : "#serialSpanId",
			intro : '',
			position : 'left'
		}, {
			element : '#setupSpanId',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine1',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine2',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine3',
			intro : '',
			position : 'left'
		}, {
			element : '#setupWhileLoop',
			intro : '',
			position : 'left'
		},{
			element : '#whileLoopPrint',
			intro : '',
			position : 'left'
		}, {
			element : '#whileLoopBreak',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanId',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine1',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine2',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine3',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine4',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine5',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine6',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanIfId1',
			intro : '',
			position : 'left'
		}, {
			element : '#loopFunctionPrint1',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanElseId1',
			intro : '',
			position : 'left'
		}, {
			element : '#loopFunctionPrint2',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanIfId2',
			intro : '',
			position : 'left'
		}, {
			element : '#loopFunctionPrint3',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanElseId2',
			intro : '',
			position : 'left'
		}, {
			element : '#loopFunctionPrint4',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanDelay',
			intro : '',
			position : 'left'
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'heading':
			$(".introjs-nextbutton").show();
			break;
		case 'includeSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'defineSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'serialSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'setupSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#setupSpanId").addClass("blinking");
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#loopSpanId").addClass("blinking");
				$(".introjs-nextbutton").show();
			});
			break;
		
		case 'setupLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'setupLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case 'setupLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'setupWhileLoop':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'whileLoopPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'whileLoopBreak':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
				dynamicSteps("#setUpSpanEnd");
			});
			break;
		case 'setUpSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanLine5':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanLine6':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanIfId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopFunctionPrint1':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanElseId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopFunctionPrint2':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanIfId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopFunctionPrint3':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanElseId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopFunctionPrint4':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'loopSpanDelay':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
				dynamicSteps("#loopSpanEnd");
			});
			break;
		case 'loopSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'restart':
			$("#preCode").addClass("z-index");
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function setTimeOutFunction() {
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

//****dynamic steps*************
function dynamicSteps(stepName, animatedStep, tooltipClass) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : tooltipClass,
			animateStep: animatedStep,
			position: 'left'
	}
	introjs.insertOption(introjs._currentStep + 1, options);
}
</script>
</html>