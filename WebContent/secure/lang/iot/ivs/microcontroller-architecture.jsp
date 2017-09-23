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
<script src='/secure/lang/iot/js-min/mate.min.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<link rel="stylesheet" href="/secure/lang/iot/css/magnify.css">
<script src="/secure/lang/iot/css/js/jquery.magnify.js"></script>

<title>Insert title here</title>

<style type="text/css">

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.micro-class {
	top: 274px;
	left: 31%;
}

.micro-processor {
	left: 40%;
	top: 90px;
}

.micro-processor-bottom {
	left: 32%;
	top: 402px;
	z-index:-1;
}

.ram-css {
	left: 67%;
	top: 39px;
}

.position {
	position: absolute;
}

.chip-converter-css {
	left: 8%;
	top: 66px;
}

.svg-css {
	/* position: absolute; */
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

.popover {
	z-index: 9999999;
	width: 130px;
	text-align: center;
}

.popover-content {
	background-color: teal;		/* #003399 */
	color: white;
	min-height: 30px;
	letter-spacing: 1px;
}

.popover-height {
	height: 20px;
}

.title-text-bottom {
	font-family: monospace;
	font-weight: bold;
	font-size: large;
	color: navy;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}
    
</style>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-2">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Microcontroller Architecture</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-2" id="mainDiv" style="height: 570px;">
		<div class="position" style="top: 262px; left: 6%">
			<img src="../images/circuito-integrado.jpg" width="20%" id="serialCommunicationImg" class="opacity00">
		</div>
		<div class="position" style="left: 0%; top: 178px;">
			<img src="../images/Isocom-TLP521-2.jpg" width="16%" id="oscillatorImage" class="opacity00">
		</div>
		<div class="position chip-converter-css">
			<img src="../images/chip-symbol.png" width="25%" id="ADConverterImg" class="opacity00">
		</div>
		<div class="micro-processor position">
			<img src="../images/micro-processor.jpg" width="30%" id="microProcessorImg" class="opacity00">
		</div>
		<div class="ram-css position">
			<img src="../images/memory-chip-icon.png" width="50%" id="RamImageId" class="opacity00">
		</div>
		<div class="position" style="left: 75%; top: 141px;">
			<img src="../images/285540.jpg" width="77%" id="programMemoryImg" class="opacity00">
		</div>
		<div class="position" style="top: 250px; left: 82%;">
			<img src="../images/circuito-integrado.jpg" width="56%" id="EEPromImage" class="opacity00">
		</div>
		<div class="micro-class position">
			<img src="../images/PIC-Microcontroller-Architecture.png" width="53%" id="microcontrollerImg"
				class="zoom opacity00" data-magnify-src="../images/PIC-Microcontroller-Architecture.png">
		</div>
		<div class="micro-processor-bottom position">
			<img src="../images/micro-processor.jpg" width="38%" id="microProcessorBottomImg" class="opacity00">
			<span class="col-xs-offset-1 opacity00 title-text-bottom">Microcontroller</span>
		</div>
		
		<svg class='svg-css'>
			<marker style="fill: gray;" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2.5" id="arrowEnd">
				<path d="M0,0 L5,2.5 L0,5 Z"/>
			</marker>
			<line class="svg-line-css svg-line1" x1="17%" y1="50.6%" x2="17%" y2="50.6%"/>
			<line class="svg-line-css svg-line2" x1="9%" y1="35.6%" x2="9%" y2="35.6%"/>
			<line class="svg-line-css svg-line3" x1="19.9%" y1="21.8%" x2="19.9%" y2="21.8%"/>
			<line class="svg-line-css svg-line4" x1="47%" y1="29.8%" x2="47%" y2="29.8%"/>
			<line class="svg-line-css svg-line5" x1="69.6%" y1="20.8%" x2="69.6%" y2="20.8%"/>
			<line class="svg-line-css svg-line6" x1="76.9%" y1="38.8%" x2="76.9%" y2="38.8%"/>
			<line class="svg-line-css svg-line7" x1="81.8%" y1="50.6%" x2="81.8%" y2="50.6%"/>
		</svg>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-5" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	MicrocontrollerArchitectureReady();
});


</script>
</html>