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

.ct-color-lime {
	color : lime;
}

.ct-text-color {
	color: #08f7fb;
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
<span id="includeSpanId1"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;SoftwareSerial.h&gt;</span></span>
<span id="includeSpanId2"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;ESP8266.h&gt;</span></span>
<span id="unsignedSpanId1"><span class="ct-color-green">long unsigned int</span> lowIn;</span>
<span id="unsignedSpanId2"><span class="ct-color-green">long unsigned int</span> pause = <span class="ct-color-darkmagenta">5000</span>;</span>
<span id="booleanSpanId1">boolean lockLow = <span class="ct-color-darkmagenta">true</span>;</span>
<span id="booleanSpanId2">boolean takeLowTime;</span>
<span id="declarationSpanId1"><span class="ct-color-green">int</span> pirPin = <span class="ct-color-darkmagenta">3</span>;</span>
<span id="declarationSpanId2"><span class="ct-color-green">int</span> ledPin = <span class="ct-color-darkmagenta">13</span>;</span>
<span id="declarationSpanId3"><span class="ct-color-green">static int</span> count = <span class="ct-color-darkmagenta">0</span>;</span>
<span id="serialSpanId1">SoftwareSerial mySerial(<span class="ct-color-darkmagenta">10</span>, <span class="ct-color-darkmagenta">11</span>);</span>
<span id="serialSpanId2">ESP8266 wifi(mySerial);</span>
<span id="setupSpanId"><span class="ct-color-green">void</span> setup() {
	<span id="setupLine1">Serial.begin(<span class="ct-color-darkmagenta">9600</span>);</span>
	<span id="setupLine2">mySerial.begin(<span class="ct-color-darkmagenta">115200</span>);</span>
	<span id="setupLine3">pinMode(pirPin, INPUT);</span>
	<span id="setupLine4">digitalWrite(pirPin, LOW);</span>
	<span id="setupWhileLoop"><span class="ct-color-maroon">while</span>(wifi.joinAP(<span class="ct-color-darkmagenta">"kkp"</span>, <span class="ct-color-darkmagenta">"Ana123Mar#@!"</span>)) {
		<span id="whileLoopPrint">Serial.println(<span class="ct-color-darkmagenta">"connected to your wifi"</span>);</span>
		<span id="whileLoopBreak"><span class="ct-color-maroon">break</span>;</span>
	<span id="whileLoopEnd">}</span></span>
<span id="setUpSpanEnd">}</span></span>
<span id="loopSpanId"><span class="ct-color-green">void</span> loop() {
	<span id="loopSpanIfId1"><span class="ct-color-maroon">if</span> (digitalRead(pirPin) == HIGH) {
		<span id="loopDigitalId1">digitalWrite(ledPin, HIGH);</span>
		<span id="loopSpanIfId2"><span class="ct-color-maroon">if</span> (lockLow) {
			<span id="loopCountId">count++;</span>
			<span id="loopLockLowId1">lockLow = <span class="ct-color-darkmagenta">false</span>;</span>
		}</span>
		<span id="loopSerialPrint1">Serial.print(<span class="ct-color-darkmagenta">"motion has been detected at : "</span>);</span>
		<span id="loopSerialPrint2">Serial.print(millis()/<span class="ct-color-darkmagenta">1000</span>);</span>
		<span id="loopSerialPrint3">Serial.println(<span class="ct-color-darkmagenta">" sec"</span>);</span>
		<span id="loopDelayId1">delay(<span class="ct-color-darkmagenta">50</span>);</span>
		<span id="loopTakeLowId1">takeLowTime = <span class="ct-color-darkmagenta">true</span>;</span>
	}</span>
	<span id="loopSpanIfId3"><span class="ct-color-maroon">if</span> (digitalRead(pirPin) == LOW) {
		<span id="loopDigitalId2">digitalWrite(ledPin, LOW);</span>
		<span id="loopSpanIfId4"><span class="ct-color-maroon">if</span> (takeLowTime) {
			<span id="loopLowInId">lowIn = millis();</span>
			<span id="loopTakeLowId2">takeLowTime = <span class="ct-color-darkmagenta">false</span>;</span>
		}</span>
	}</span>
	<span id="loopSpanIfId5"><span class="ct-color-maroon">if</span> (!lockLow && millis() - lowIn > pause) {
		<span id="loopLockLowId2">lockLow = <span class="ct-color-darkmagenta">true</span>;</span>
		<span id="loopSerialPrint4">Serial.print(<span class="ct-color-darkmagenta">"motion ended at : "</span>);</span>
		<span id="loopSerialPrint5">Serial.print(millis() - pause);</span>
		<span id="loopSerialPrint6">Serial.println(<span class="ct-color-darkmagenta">" sec"</span>);</span>
		<span id="loopDelayId2">delay(<span class="ct-color-darkmagenta">50</span>);</span>
	}</span>
	<span id="loopSerialPrint7">Serial.print(<span class="ct-color-darkmagenta">"Count of objects : "</span>);</span>
	<span id="loopSerialPrint8">Serial.println(count);</span>
	<span id="loopSpanIfId6"><span class="ct-color-maroon">if</span> (wifi.createTCP(<span class="ct-color-darkmagenta">"184.106.153.149"</span>, <span class="ct-color-darkmagenta">80</span>)) {
		<span id="loopSerialPrint9">Serial.println(<span class="ct-color-darkmagenta">"connected to cloud"</span>);</span>
	}</span> <span id="loopSpanElseId"><span class="ct-color-maroon">else</span> {
		<span id="loopSerialPrint10">Serial.println(<span class="ct-color-darkmagenta">"Unable to connect cloud"</span>);</span>
	}</span>
	<span id="loopSpanIfId7"><span class="ct-color-maroon">if</span> (wifi.send_one_parameter(<span class="ct-color-darkmagenta">"3DPBY5B4OXE0JEVH"</span>, count)) {
		<span id="loopSerialPrint11">Serial.println(<span class="ct-color-darkmagenta">"values moving on"</span>);</span>
	}</span>
	<span id="loopSpanDelay">delay(<span class="ct-color-darkmagenta">1000</span>);</span>
}</span>
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
			element : '#includeSpanId1',
			intro : "",
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
			var text = 'Let us learn steps involved in <span class="ct-code-b-yellow">smart industry program</span>.';
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			//	dynamicSteps("#includeSpanId1");
			});
			break;
		case 'includeSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">SoftwareSerial</span> library is used for serial communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#includeSpanId2");
			});
			break;
		case 'includeSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">ESP8266</span> library is used for wifi communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#unsignedSpanId1");
			});
			break;
		case 'serialSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Receiver(Rx)</span> and <span class="ct-code-b-yellow">Transmitter(Tx)</span> '+
				'pins setup a new SoftwareSerial port communication through <span class="ct-text-color">10</span> and '+
				'<span class="ct-text-color">11</span> pins of Arduino board.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#serialSpanId2");
			});
			break;
		case 'serialSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Creating <span class="ct-color-lime">wifi</span> object for <span class="ct-code-b-yellow">ESP8266</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupSpanId", "firstStepInSetupSpan");
			});
			break;
		case 'unsignedSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'long unsigned long int lowIn variable has declared size 32 bits(4 bytes) for storage of time in '+
				'milli seconds when the sensor outputs a low impulse';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#unsignedSpanId2");
			});
			break;
		case 'unsignedSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'long unsigned int pause variable declares and initialised to 5000 for  the sensor has to be low before '+
				'we assume all motion has stopped';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#booleanSpanId1");
			});
			break;
		case 'booleanSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'boolean lockLow variable initialises to true';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#booleanSpanId2");
			});
			break;
		case 'booleanSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'boolean takeLowTime variable is used to declare for either values of true or false.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#declarationSpanId1");
			});
			break;
		case 'declarationSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Pin 3 on Arduino board is assaigned to PIR Sensor as digitalPin(i.e. input pin)  to read digital values from PIR Sensor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#declarationSpanId2");
			});
			break;
		case 'declarationSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Pin 13 on Arduino board is assaigned as digitalPin(i.e. Output pin)  to write digital values to LED.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#declarationSpanId3");
			});
			break;
		case 'declarationSpanId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'count is an static variable declared for counting number of objects.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#serialSpanId1");
			});
			break;
		case 'setupSpanId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#setupSpanId").addClass("blinking").one("animationend", function() {
						var text = '<span class="ct-code-b-yellow">setup()</span> function is used to initialize the variables and this '+
						'function will only run once.'
						typing(".introjs-tooltiptext", text, typingInterval, function() {
							$(".introjs-nextbutton").show();
						});
					});
					dynamicSteps("#loopSpanId", "firstStepInLoopSpan");
				});
				break;
			case 'secondStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					setTimeOutFunction();
				});
				dynamicSteps("#setupLine1");
				break;
			}
			break;
			
		case 'loopSpanId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInLoopSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#loopSpanId").addClass("blinking").one("animationend", function() {
						var text = '<span class="ct-code-b-yellow">loop()</span> function executes infinitely.';
						typing(".introjs-tooltiptext", text, typingInterval, function() {
							$(".introjs-nextbutton").show();
						});
						dynamicSteps("#setupSpanId", "secondStepInSetupSpan", "hide");
					});
				});
				break;
			case 'secondStepInLoopSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					setTimeOutFunction();
					dynamicSteps("#loopSpanIfId1");
				});
				break;
			}
			break;
			
		case 'setupLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.begin(9600) sets data rate(baud rate) as 9600 bits per second for serial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupLine2");
			});
			break;
		case 'setupLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'mySerial.begin(115200) sets the data rate as 115200 bits per second for SoftwareSerial data transmission';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupLine3");
			});
			break;
		case 'setupLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'pinMode(pirPin, INPUT) configures the specified pin(i.e. pirPin number 3) to behave as input mode.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupLine4");
			});
			break;
		case 'setupLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'digitalWrite(pirPin, LOW) configures the specified pin(i.e. pirPin number 3) to LOW value.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupWhileLoop");
			});
			break;
		case 'setupWhileLoop':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of while loop. If wifi connection is successful, the control enters into the while-loop body.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#whileLoopPrint");
			});
			break;
		case 'whileLoopPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.println() prints "connected to your wifi" on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#whileLoopBreak");
			});
			break;
		case 'whileLoopBreak':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'break command is used for exiting from the while loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#whileLoopEnd");
			});
			break;
		case 'whileLoopEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Control exit the while loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setUpSpanEnd");
			});
			break;
		case 'setUpSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is end of the <span class="ct-code-b-yellow">setup()</span> method.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanId", "secondStepInLoopSpan", "hide");
			});
			break;
		case 'loopSpanIfId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of if-loop. If digitalRead(pirPin) evaluates to HIGH value then control enters into if loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopDigitalId1");
			});
			break;
		case 'loopDigitalId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'digitalWrite() writes HIGH value to specified output pin(i.e. ledPin) connected to LED.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanIfId2");
			});
			break;
		case 'loopSpanIfId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'if lockLow is true then it makes sure that we wait for a transition to LOW before any output is made.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopCountId");
			});
			break;
		case 'loopCountId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Then count will be incremented.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopLockLowId1");
			});
			break;
		case 'loopLockLowId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'lockLow variables to false.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint1");
			});
			break;
		case 'loopSerialPrint1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.print() prints the String "motion has been detected at : " on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint2");
			});
			break;
		case 'loopSerialPrint2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.print() prints amount of time the motion of an object been detected.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint3");
			});
			break;
		case 'loopSerialPrint3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.println() prints string " sec" on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopDelayId1");
			});
			break;
		case 'loopDelayId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'delay(50) pauses the execution for 50 millisec.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopTakeLowId1");
			});
			break;
		case 'loopTakeLowId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'assaigns true to takeLowTime';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanIfId3");
			});
			break;
		case 'loopSpanIfId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of if-loop. If digitalRead(pirPin) evaluates to LOW value then control enters into if loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopDigitalId2");
			});
			break;
		case 'loopDigitalId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'digitalWrite() writes LOW value to specified output pin(i.e. ledPin) connected to LED.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanIfId4");
			});
			break;
		case 'loopSpanIfId4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'if takeLowTime is true then it makes sure that we wait for a transition to HIGH before any output is made.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopLowInId");
			});
			break;
		case 'loopLowInId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'save the time of the transition from HIGH to LOW';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopTakeLowId2");
			});
			break;
		case 'loopTakeLowId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'assaigns false to takeLowTime variable.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanIfId5");
			});
			break;
		case 'loopSpanIfId5':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of if-loop';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopLockLowId2");
			});
			break;
		case 'loopLockLowId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'assaigns true to lockLow variable.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint4");
			});
			break;
		case 'loopSerialPrint4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.print() prints String "motion ended at : " on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint5");
			});
			break;
		case 'loopSerialPrint5':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.print() prints amount of time the motion of object has ended.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint6");
			});
			break;
		case 'loopSerialPrint6':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.print() prints String " sec" on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopDelayId2");
			});
			break;
		case 'loopDelayId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'delay(50) pauses the execution for 50 millisec.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint7");
			});
			break;
		case 'loopSerialPrint7':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.print() prints the String "Count of objects : " on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint8");
			});
			break;
		case 'loopSerialPrint8':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.println() prints value of count on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanIfId6");
			});
			break;
		case 'loopSpanIfId6':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of if loop. createTCP() checks if the ip address and port of cloud machine '+
				'matches the given ip and port.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint9");
			});
			break;
		case 'loopSerialPrint9':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.println() prints "connected to cloud" on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanElseId");
			});
			break;
		case 'loopSpanElseId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint10");
			});
			break;
		case 'loopSerialPrint10':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'If if condition evaluates to false, Serial.println() prints "Unable to connect cloud" on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanIfId7");
			});
			break;
		case 'loopSpanIfId7':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'wifi.send_one_parameter() is used for sending values from sensor to cloud. The values are successfully sent, '+
				'if condition returns true.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSerialPrint11");
			});
			break;
		case 'loopSerialPrint11':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.println() prints "values moving on" on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanDelay");
			});
			break;
		case 'loopSpanDelay':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">delay(1000)</span> pauses the execution for '+
				'<span class="ct-color-lime">1 sec</span> between updates.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
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