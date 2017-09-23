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
<title>Temperature and humidity</title>

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
			<span>Temperature and humidity</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-1">
<pre id="preCode">
<span id="includeSpanId1"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;dht.h&gt;</span></span>
<span id="includeSpanId2"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;SoftwareSerial.h&gt;</span></span>
<span id="includeSpanId3"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;ESP8266.h&gt;</span></span>
<span id="declarationSpanId1"><span class="ct-color-green">int</span> temperature;</span>
<span id="declarationSpanId2"><span class="ct-color-green">int</span> humidity;</span>
<span id="unitSpanId1"><span class="ct-color-green">uint32_t</span> startTime;</span>
<span id="declarationSpanId3"><span class="ct-color-green">int</span> dhtRead;</span>
<span id="unitSpanId2"><span class="ct-color-green">uint32_t</span> stopTime;</span>
<span id="defineSpanId"><span class="ct-color-green">int</span> dht_pin = <span class="ct-color-darkmagenta">5</span>;</span>
<span id="serialSpanId1">SoftwareSerial mySerial(<span class="ct-color-darkmagenta">10</span>, <span class="ct-color-darkmagenta">11</span>);</span>
<span id="serialSpanId2">ESP8266 wifi(mySerial);</span>
<span id="serialSpanId3">dht DHT;</span>
<span id="functionDeclarationSpanId"><span class="ct-color-green">void</span> readAndDisplayData();</span>
<span id="setupSpanId"><span class="ct-color-green">void</span> setup() {
	<span id="setupLine1">Serial.begin(<span class="ct-color-darkmagenta">9600</span>);</span>
	<span id="setupLine2">mySerial.begin(<span class="ct-color-darkmagenta">115200</span>);</span>
	<span id="setupLine3">Serial.println(<span class="ct-color-darkmagenta">"Setup begin"</span>);</span>
	<span id="setupWhileLoop"><span class="ct-color-maroon">while</span> (wifi.joinAP(<span class="ct-color-darkmagenta">"kkp"</span>, <span class="ct-color-darkmagenta">"Ana123Mar#@!"</span>)) {
		<span id="whileLoopPrint">Serial.println(<span class="ct-color-darkmagenta">"connected to your wifi"</span>);</span>
		<span id="whileLoopBreak"><span class="ct-color-maroon">break</span>;</span>
	<span id="whileLoopEnd">}</span></span>
	<span id="setupFunctionPrint">Serial.println(<span class="ct-color-darkmagenta">"Setup end"</span>);</span>
<span id="setUpSpanEnd">}</span></span>
<span id="loopSpanId"><span class="ct-color-green">void</span> loop() {
	<span id="loopSpanLine1">Serial.println(<span class="ct-color-darkmagenta">"caluclating temperature and humidity values for every 1 second"</span>);</span>
	<span id="loopSpanLine2">readAndDisplayData();</span>
	<span id="loopSpanIfId1"><span class="ct-color-maroon">if</span> (wifi.createTCP(<span class="ct-color-darkmagenta">"184.106.153.149"</span>, <span class="ct-color-darkmagenta">80</span>)) {
		<span id="loopFunctionPrint1">Serial.println(<span class="ct-color-darkmagenta">"connected to cloud"</span>);</span>
	}</span> <span id="loopSpanElseId"><span class="ct-color-maroon">else</span> {
		<span id="loopFunctionPrint2">Serial.println(<span class="ct-color-darkmagenta">"Unable to connect cloud"</span>);</span>
	}</span>
	<span id="loopSpanIfId2"><span class="ct-color-maroon">if</span> (wifi.send_two_parameters(<span class="ct-color-darkmagenta">"6Z9HHNNF28T76C9P"</span>, temperature, humidity)) {
		<span id="loopFunctionPrint3">Serial.println(<span class="ct-color-darkmagenta">"values moving on"</span>);</span>
	}</span>
	<span id="loopSpanDelay">delay(<span class="ct-color-darkmagenta">1000</span>);</span>
<span id="loopSpanEnd">}</span></span>
<span id="dispalySpanId"><span class="ct-color-green">void</span> readAndDisplayData() {
	<span id="displayLine1">startTime = micros();</span>
	<span id="displayLine2">dhtRead = DHT.read(dht_pin);</span>
	<span id="displayLine3">stopTime = micros();</span>
	<span id="displayLine4">temperature = DHT.temperature;</span>
	<span id="displayLine5">humidity = DHT.humidity;</span>
	<span id="displayLine6">Serial.print(humidity, <span class="ct-color-darkmagenta">1</span>);</span>
	<span id="displayLine7">Serial.print(<span class="ct-color-darkmagenta">"gm/m3</span>,\t<span class="ct-color-darkmagenta">"</span>);</span>
	<span id="displayLine8">Serial.print(temperature, <span class="ct-color-darkmagenta">1</span>);</span>
	<span id="displayLine9">Serial.print(<span class="ct-color-darkmagenta">"deg</span>,\t<span class="ct-color-darkmagenta">"</span>);</span>
	<span id="displayLine10">Serial.println();</span>
<span id="dispalySpanEnd">}</span></span></pre>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
var typingInterval = 0;
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
			element : "#includeSpanId1",
			intro : '',
			position : 'left'
		}, {
			element : '#declarationSpanId1',
			intro : '',
			position : 'left'
		}, {
			element : '#unitSpanId1',
			intro : '',
			position : 'left'
		}, {
			element : '#defineSpanId',
			intro : '',
			position : 'left'
		}, {
			element : '#serialSpanId1',
			intro : '',
			position : 'left'
		}, {
			element : '#functionDeclarationSpanId',
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
			element : '#setupFunctionPrint',
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
			element : '#dispalySpanId',
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
			element : '#loopSpanElseId',
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
			var text = 'Let us learn steps involved in <span class="ct-code-b-yellow">temperature and humidity program</span>.';
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'includeSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">dht.h</span> library is temperature and humidity library used for '+
				'caluclating DHT humidity and temperature sensor values.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#includeSpanId2")
			});
			break;
		case 'includeSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">SoftwareSerial</span> library is used for serial communication.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#includeSpanId3")
			});
			break;
		case 'includeSpanId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">ESP8266</span> library is used for wifi communication.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'defineSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'In this statement we are declaring a symbolic constant <span class="ct-color-lime">DHT_PIN</span> with its value '+
				'<span class="ct-text-color">5</span> using <span class="ct-code-b-yellow">#define</span>. So, whenever the compilation starts all '+
				'the occurrences of <span class="ct-color-lime">DHT_PIN</span> is replaced by <span class="ct-text-color">5</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'serialSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Receiver(Rx)</span> and <span class="ct-code-b-yellow">Transmitter(Tx)</span> pins '+
				'setup a new SoftwareSerial port communication through <span class="ct-text-color">10</span> and '+
				'<span class="ct-text-color">11</span> pins of Arduino board.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#serialSpanId2");
			});
			break;
		case 'serialSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Creating <span class="ct-text-color">wifi</span> object for <span class="ct-code-b-yellow">ESP8266</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
					dynamicSteps("#serialSpanId3");
				});
			});
			break;
		case 'serialSpanId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">DHT</span> is an object of <span class="ct-code-b-yellow">dht</span> used for '+
				'reading temperature and humidity values.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'functionDeclarationSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">readAndDisplayData()</span> is function declaration with no arguements and '+
				'return type as void for reading and displaying data on serial monitor when function is called.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'declarationSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">int</span> temperature creates a variable name called '+
				'<span class="ct-color-lime">temperature</span> to store values of temperature from <span class="ct-text-color">DHT</span> '+
				'Sensor and whose type is <span class="ct-code-b-yellow">int</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#declarationSpanId2");
			});
			break;
		case 'declarationSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">int</span> humidity creates a variable name called '+
				'<span class="ct-color-lime">humidity</span> to store values of humidity from <span class="ct-text-color">DHT</span> Sensor and '+
				'whose type is <span class="ct-code-b-yellow">int</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			//	dynamicSteps("#unitSpanId1");
			});
			break;
		case 'declarationSpanId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">int</span> dhtRead creates a variable name called '+
				'<span class="ct-color-lime">dhtRead</span> to store values of dhtRead from <span class="ct-text-color">DHT</span> '+
				'Sensor and whose type is <span class="ct-code-b-yellow">int</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#unitSpanId2");
			});
			break;
		case 'unitSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">startTime</span> is variable used for storing microseconds.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#declarationSpanId3");
			});
			break;
		case 'unitSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">stopTime</span> is variable used for storing microseconds.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#setupSpanId").addClass("blinking").one("animationend", function() {
					var text = '<span class="ct-code-b-yellow">setup()</span> function is used to initialize variables & this function will '+
					'only run once.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'setupLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.begin(9600)</span> sets data rate(baud rate) as <span class="ct-text-color">9600'+
				'</span> bits per second for serial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">mySerial.begin(115200)</span> sets the data rate as <span class="ct-text-color">115200'+
				'</span> bits per second for SoftwareSerial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case 'setupLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup begin"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupWhileLoop':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of while loop. If wifi connection is successful, the control enters into the while-loop body.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'whileLoopPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to your wifi"</span>'+
				' on Serial Monitor. ';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'whileLoopBreak':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">break</span> command is used for exiting from the while loop.';
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
			});
			break;
		case 'setupFunctionPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup end"</span> '+
				'on Serial Monitor.';
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
			});
			break;
		case 'loopSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#loopSpanId").addClass("blinking").one("animationend", function() {
					var text = '<span class="ct-code-b-yellow">loop()</span> function executes infinitely.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'loopSpanLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints '+
				'<span class="ct-color-lime">"caluclating temperature and humidity values for every 1 second"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'A call to function <span class="ct-code-b-yellow">readAndDisplayData()</span> for reading and displaying data of DHT Sensor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'dispalySpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#dispalySpanId").addClass("blinking").one("animationend", function() {
					var text = 'This is Function Definition named <span class="ct-code-b-yellow">readAndDisplayData()</span> '+
					'contains self-contained block of statements that specifies one or more actions to be performed.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$(".introjs-nextbutton").show();
						dynamicSteps("#displayLine1");
					});
				});
			});
			break;
		case 'displayLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">micros()</span> is used to return the number of microseconds and store in '+
				'<span class="ct-code-b-yellow">startTime</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine2");
			});
			break;
		case 'displayLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">DHT.read(DHT_PIN)</span> is function of DHT library which reads from DHT sensor '+
				'through <span class="ct-text-color">DHT_PIN</span>(i.e. 5) and assaigns '+
				'values to <span class="ct-code-b-yellow">dhtRead</span> variable';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine3");
			});
			break;
		case 'displayLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">micros()</span> is used to return number of microseconds and store in '+
				'<span class="ct-code-b-yellow">stopTime</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine4");
			});
			break;
		case 'displayLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">DHT.temperature</span> caluclates temperature reading and assigns its value to '+
				'<span class="ct-code-b-yellow">temperature</span> variable.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine5");
			});
			break;
		case 'displayLine5':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">DHT.humidity</span> caluclates humidity reading and assigns its value to '+
				'<span class="ct-code-b-yellow">humidity</span> variable.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine6");
			});
			break;
		case 'displayLine6':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.print()</span> prints value of <span class="ct-color-lime">humidity</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine7");
			});
			break;
		case 'displayLine7':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.print()</span> prints units of humidity '+
				'<span class="ct-color-lime">"gm/m3"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine8");
			});
			break;
		case 'displayLine8':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.print()</span> prints value of <span class="ct-color-lime">temperature</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine9");
			});
			break;
		case 'displayLine9':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.print()</span> prints units of temperature <span class="ct-color-lime">"deg"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#displayLine10");
			});
			break;
		case 'displayLine10':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> is used to print values on next line.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#dispalySpanEnd");
			});
			break;
		case 'dispalySpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Control exit the <span class="ct-code-b-yellow">display()</span> method.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanIfId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of if loop. <span class="ct-code-b-yellow">createTCP()</span> checks if the ip '+
				'address and port of cloud machine matches the given ip and port.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to cloud"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanElseId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, the control enters into the '+
				'<span class="ct-code-b-yellow">else</span> block.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"Unable to connect cloud"</span>'+
				' on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanIfId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">wifi.send_two_parameters()</span> is used for sending values of sensor to cloud. '+
				'The values are successfully sent, if condition returns true.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"values moving on"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanDelay':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">delay(1000)</span> pauses the execution for <span class="ct-color-lime">1 sec</span> '+
				'between updates.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanEnd");
			});
			break;
		case 'loopSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Control exit the <span class="ct-code-b-yellow">loop()</span> method.';
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