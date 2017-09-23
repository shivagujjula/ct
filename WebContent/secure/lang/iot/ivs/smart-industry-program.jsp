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
<script src='/secure/lang/iot/js-min/sip.min.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Smart industry program</title>

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
$(document).ready(function() {
	SmartIndustryProgramReady();
});


</script>
</html>