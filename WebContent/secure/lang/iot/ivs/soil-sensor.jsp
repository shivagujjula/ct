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
<script src='/secure/lang/iot/js-min/ssp.min.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<title>Soil sensor</title>
<style type="text/css">

pre {
	font-size: 12px;
	tab-size: 4;
	-moz-tab-size: 4;
}

.margin-top-2 {
	margin-top: 2%;
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

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-2">
		<h3 class='label ct-demo-heading' id="heading">
			<span>soil sensor program</span>
		</h3>
	</div>
	<!-- <div class="col-xs-6 col-xs-offset-3 margin-top-2 info-div" id="infoDiv">
		The aim of the program.
	</div> -->
	<div class="col-xs-6 col-xs-offset-3 margin-top-2">
<pre id="preCode">
<span id="includeSpanId1"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;ESP8266.h&gt;</span></span>
<span id="includeSpanId2"><span class="ct-color-darkblue">#include</span> <span class="ct-color-darkmagenta">&lt;SoftwareSerial.h&gt;</span></span>
<span id="declarationSpanId1"><span class="ct-color-green">int</span> digitalPin = 9;</span>
<span id="declarationSpanId2"><span class="ct-color-green">int</span> analogPin = A0;</span>
<span id="serialSpanId1">SoftwareSerial mySerial(10, 11);</span>
<span id="serialSpanId2">ESP8266 wifi(mySerial);</span>
<span id="setupSpanId"><span class="ct-color-green">void</span> setup() {
	<span id="setupLine1">Serial.begin(<span class="ct-color-darkmagenta">9600</span>);</span>
	<span id="setupLine2">mySerial.begin(<span class="ct-color-darkmagenta">115200</span>);</span>
	<span id="setupLine3">Serial.println(<span class="ct-color-darkmagenta">"setup begin"</span>);</span>
	<span id="setupLine4">pinMode(digitalPin, INPUT);</span>
	<span id="setupLine5">pinMode(analogPin, INPUT);</span>
	<span id="setupWhileLoop"><span class="ct-color-maroon">while</span>(<span id="wifiJoinId1">wifi.joinAP(<span class="ct-color-darkmagenta">"kkp"</span>, <span class="ct-color-darkmagenta">"Ana123Mar#@!"</span>)</span>) {
		<span id="whileLoopPrint">Serial.println(<span class="ct-color-darkmagenta">"connected to your wifi"</span>);</span>
		<span id="whileLoopBreak"><span class="ct-color-maroon">break</span>;</span>
	<span id="whileLoopEnd">}</span></span>
<span id="setUpEnd">}</span></span>
<span id="loopSpanId"><span class="ct-color-green">void</span> loop() {
	<span id="loopSpanLine1">Serial.println(<span class="ct-color-darkmagenta">"Sensor takes new values and prints here.........."</span>);</span>
	<span id="loopSpanLine2"><span class="ct-color-green">int</span> soilStatus = digitalRead(digitalPin);</span>
	<span id="loopSpanLine3"><span class="ct-color-green">int</span> soilAnalogStatus = analogRead(analogPin);</span>
	<span id="loopSpanLine4">Serial.println( soilStatus);</span>
	<span id="loopSpanLine5">Serial.println(soilAnalogStatus);</span>
	<span id="loopSpanIfId1"><span class="ct-color-maroon">if</span> (<span id="wifiJoinId2">wifi.createTCP(<span class="ct-color-darkmagenta">"184.106.153.149"</span>, <span class="ct-color-darkmagenta">80</span>)</span>) {
		<span id="loopFunctionPrint1">Serial.println(<span class="ct-color-darkmagenta">"connected to cloud"</span>);</span>
	}</span> <span id="loopSpanElseId"><span class="ct-color-maroon">else</span> { 
		<span id="loopFunctionPrint2">Serial.println(<span class="ct-color-darkmagenta">"Unable to connect cloud"</span>);</span>
	<span id="elseEndBrace">}</span></span>
	<span id="loopSpanIfId2"><span class="ct-color-maroon">if</span>(<span id="wifiJoinId3">wifi.send_two_parameters(<span class="ct-color-darkmagenta">"G5TYKPNBJCG6POQJ"</span>, soilStatus, soilAnalogStatus)</span>) {
		<span id="loopFunctionPrint3">Serial.println(<span class="ct-color-darkmagenta">"values moving on"</span>);</span>
	}</span>
	<span id="loopSpanDelay">delay(<span class="ct-color-darkmagenta">1000</span>);</span>
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

$(document).ready(function() {
	soilSensorReady();
});


</script>
</html>