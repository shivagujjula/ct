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
<script src='/secure/lang/iot/js-min/hart.min.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Hardware Architecture</title>
<style type="text/css">

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
	/* padding: 4px; */
}

.margin-top-50 {
	margin-top: 50px;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-1 {
	margin-top: 1%;
}

.circle {
	border-radius: 50%;
	border: 1px solid;
	background: yellowgreen;
	width: 110px;
	height: 110px;
	display: inline-block;
	position: absolute;
}

.circle-text {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	text-align: center;
}

.main-div {
	height: 550px;
	width: 550px;
}

.ram-circle {
	left: 50%;
	transform: translateX(-50%);
}

.output-circle {
	left: 75%;
	top: 25%;
	transform: translateY(-25%);
}

.ci-circle {
	left: 75%;
	top: 75%;
	transform: translateY(-75%);
}

.firmware-circle {
	top: 100%;
	left: 50%;
	transform: translateX(-50%) translateY(-100%);
}

.rom-circle {
	left: 5%;
	top: 75%;
	transform: translateY(-75%);
}

.input-circle {
	left: 5%;
	top: 25%;
	transform: translateY(-25%);
}

.cpu-circle {
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line-css {
	position: relative;
	stroke: gray;
	stroke-width: 2;
	marker-end: url("#arrowEnd");
	opacity: 0;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class="label ct-demo-heading" id="heading">
			<span>Hardware Architecture</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-4 margin-top-50 main-div" id="mainDiv">
		<div class="circle ram-circle opacity00" id="ramCircleDiv">
			<div class="circle-text">RAM</div>
		</div>
		<div class="circle output-circle opacity00" id="outputCircleDiv">
			<div class="circle-text">Output</div>
		</div>
		<div class="circle ci-circle opacity00" id="ciCircleDiv">
			<div class="circle-text">Communication interface</div>
		</div>
		<div class="circle firmware-circle opacity00" id="firmwareCircleDiv">
			<div class="circle-text">Firmware/RTOS</div>
		</div>
		<div class="circle rom-circle opacity00" id="romCircleDiv">
			<div class="circle-text">ROM</div>
		</div>
		<div class="circle input-circle opacity00" id="inputCircleDiv">
		 	<div class="circle-text">Input</div>
		</div>
		<div class="circle cpu-circle opacity00" id="cpuCircleDiv">
			<div class="circle-text">CPU</div>
		</div>
		<!-- <img src="../images/AVR-Microcontroller.jpg"> -->
		<svg class='svg-css'>
			<marker style="fill: gray;" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2.5" id="arrowEnd">
				<path d="M0,0 L5,2.5 L0,5 Z"/>
			</marker>
			<line class="svg-line-css svg-line1" x1="50%" y1="30.3%" x2="50%" y2="30.3%"/>
			<line class="svg-line-css svg-marker-bottom1" x1="50%" y1="30.2%" x2="50%" y2="30.2%"/>
			<line class="svg-line-css svg-line2" x1="58.5%" y1="45%" x2="58%" y2="45%"/>
			<line class="svg-line-css svg-line3" x1="66.8%" y1="59.7%" x2="66.8%" y2="59.7%"/>
			<line class="svg-line-css svg-marker-bottom2" x1="66.8%" y1="59.7%" x2="66.8%" y2="59.7%"/> 
			<line class="svg-line-css svg-line4" x1="50%" y1="69.8%" x2="50%" y2="69.8%"/>
			<line class="svg-line-css svg-marker-bottom3" x1="50%" y1="69.9%" x2="50%" y2="69.9%"/>
			<line class="svg-line-css svg-line5" x1="32.4%" y1="59.0%" x2="32.4%" y2="59.0%"/>
			<line class="svg-line-css svg-marker-bottom4" x1="32.4%" y1="59%" x2="32.4%" y2="59%"/>
			<line class="svg-line-css svg-line6" x1="23.7%" y1="35.2%" x2="23.7%" y2="35.2%"/>
		</svg>
	</div>
	<div class="col-xs-12 margin-top-20 text-center">
		<div class="col-xs-1 col-xs-offset-5">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">

$(document).ready(function() {
	HardwareArchitectureReady();
});


</script>
</html>