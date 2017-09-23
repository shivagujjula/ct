<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css"> 
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/animate.css" />

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src='/js/intro.js'></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/secure/lang/iot/js-min/dide.min.js"></script>

<title>Diode</title>

<style type="text/css">

#titleDiv {
	margin-top: 20px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px !important;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

#totalDiv {
	border: 1px solid grey;
	border-radius: 5px;
	margin-top: 20px;
	background: #b0e0e6 none repeat scroll 0 0;
	min-height: 500px;
}

.margin-top10 {
	margin-top: 10px;
}

.bg-color-snow {
	background: snow;
}

.padding0 {
	padding: 0;
}

hr {
	border-color: grey;
	margin-top: 0px;
	border-width: 2px 0 0;
	margin-bottom: 10px;
}

#voltageImage {
	margin-top: 76px;
}

#voltageImage1 {
	margin-top: 88px;
}

#circleSvg {
	margin-top: 40px;
}

#circleSvg1 {
	margin-top: 48px;
}

.margin-bottom10 {
	margin-bottom: 20px;
}

.svg-css	{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
}

.svg-line	{
	position: relative;
	stroke:	black;
	stroke-width: 2;
}

.z-index {
	position: relative;
	z-index: 9999999;
}

</style>
</head>
<body>
	<div id='titleDiv' class='totaldivclass col-xs-12 text-center'>
		<span id='title' class='label ct-demo-heading'>Diode</span>
	</div>
	<div class='col-xs-12'>
		<div class='col-xs-8 col-xs-offset-2' id='totalDiv'>
			<div class='col-xs-12 margin-top10 bg-color-snow opacity00'
				id='diodeDefination'>Diode is a two terminal electronic
				component. It allows the current to pass through it in one
				direction.</div>
			<div class='col-xs-12 margin-top10 text-center'>
				<img id='image' class='opacity00' alt="" src="../images/diode.png"
					width="25%">
			</div>

			<div class='col-xs-12 margin-top10 margin-bottom10 opacity00' style='min-height: 200px; background: #b0e0e6;' id='batteryConnection1'>
				<svg class="svg-css">
					<marker style="fill: #970f0f;" orient="auto" markerHeight="5" markerWidth="5" refY="2.5" refX="4" id="myMarker"> 
						<path class="arrow" d="M0,0 L5,2.5 L0,5 Z"/></marker>
						<line x1="31%" y1="16%" x2="47%" y2="16%" style="display: inline;" class="svg-line" id="arrow1"/>
						<line id="arrow2" class="svg-line" style="display: inline;" y2="16%" x2="31%" y1="42%" x1="31%"/>
						<line x1="53%" y1="16%" x2="68%" y2="16%" style="display: inline;" class="svg-line" id="arrow3"/>
						<line id="arrow4" class="svg-line" style="display: inline;" y2="40%" x2="68%" y1="16%" x1="68%"/>
						<line x1="68%" y1="66%" x2="68%" y2="89.755176%" style="display: inline;" class="svg-line" id="arrow5"/>
						<line id="arrow6" class="svg-line" style="display: inline;" y2="90%" x2="31%" y1="90%" x1="68%"/>
						<line id="arrow7" class="svg-line" style="display: inline;" y2="58%" x2="31%" y1="90%" x1="31%"/>
						<text style="display: inline; opacity: 1; font-weight: bold; font-size: 20px;" x="29%" y="39%" fill="brown" id="text1">+</text>
						<text style="display: inline; opacity: 1; font-weight: bold; font-size: 20px;" x="29%" y="65%" fill="brown" id="text2">-</text>
						<circle fill="green" stroke-width="2" stroke="green" r="4" cy="79" cx="266" id="circleB"/>
				</svg>
				
				<div class='col-xs-offset-3 col-xs-2'>
					<img id='voltageImage' class='' alt="" src="../images/voltage.png"
						width="50%">
					<!-- <div class='col-xs-12'>
					<div class='col-xs-offset-4 col-xs-4 padding0'><hr></div>
				</div>
				<div class='col-xs-12'>
					<div class='col-xs-offset-5 col-xs-2 padding0'><hr></div>
				</div>
				<div class='col-xs-12'>
					<div class='col-xs-offset-4 col-xs-4 padding0'><hr></div>
				</div>
				<div class='col-xs-12'>
					<div class='col-xs-offset-5 col-xs-2 padding0'><hr></div>
				</div> -->
				</div>
				<div class='col-xs-2 margin-top10 text-center'>
					<img id='diodeImage' class='opacity00' alt=""
						src="../images/diode-in-circuit.png" width="50%">
				</div>
				<div class='col-xs-2 margin-top10 text-center opacity00' id='circleSvg'>
					<svg height="100" width="100">
					  <circle fill="grey" stroke-width="2" stroke="black" r="25" cy="65" cx="67" id='circle1'/>
					   <path fill="transparent" stroke-width="2" stroke="black" d="M67 92 C 83 -5, 97 115, 65 38"/>
					</svg> 
				</div>
			</div>
			<div class='col-xs-12 margin-top10 margin-bottom10 opacity00' style='min-height: 200px; background: #b0e0e6;' id='batteryConnection2'>
				
				<svg class="svg-css">
					<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #970f0f;"> 
						<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
						<line id="arrow8" class="svg-line" style="display: inline;" y2="16%" x2="31%" y1="16%" x1="47%"/>
						<line x1="31%" y1="16%" x2="31%" y2="47%" style="display: inline;" class="svg-line" id="arrow9"/>
						<line id="arrow10" class="svg-line" style="display: inline;" y2="16%" x2="53%" y1="16%" x1="68%"/>
						<line x1="68%" y1="44%" x2="68%" y2="16%" style="display: inline;" class="svg-line" id="arrow11"/>
						<line id="arrow12" class="svg-line" style="display: inline;" y2="69%" x2="68%" y1="94%" x1="68%"/>
						<line x1="31%" y1="94%" x2="68%" y2="94%" style="display: inline;" class="svg-line" id="arrow13"/>
						<line x1="31%" y1="61%" x2="31%" y2="94%" style="display: inline;" class="svg-line" id="arrow14"/>
						<text id="text3" fill="brown" y="44%" x="29%" style="display: inline; opacity: 1; font-weight: bold; font-size: 20px;">-</text>
						<text id="text4" fill="brown" y="70%" x="29%" style="display: inline; opacity: 1; font-weight: bold; font-size: 20px;">+</text>
				</svg>
				
				<!-- <svg class="svg-css">
					<marker style="fill: #970f0f;" orient="auto" markerHeight="5" markerWidth="5" refY="2.5" refX="4" id="myMarker"> 
						<path class="arrow" d="M0,0 L5,2.5 L0,5 Z"/></marker>
						<line x1="31%" y1="16%" x2="47%" y2="16%" style="display: inline;" class="svg-line" id="arrow8"/>
						<line id="arrow9" class="svg-line" style="display: inline;" y2="16%" x2="31%" y1="47%" x1="31%"/>
						<line x1="53%" y1="16%" x2="68%" y2="16%" style="display: inline;" class="svg-line" id="arrow10"/>
						<line id="arrow11" class="svg-line" style="display: inline;" y2="44%" x2="68%" y1="16%" x1="68%"/>
						<line x1="68%" y1="69%" x2="68%" y2="94%" style="display: inline;" class="svg-line" id="arrow12"/>
						<line id="arrow13" class="svg-line" style="display: inline;" y2="94%" x2="31%" y1="94%" x1="68%"/>
						<line id="arrow14" class="svg-line" style="display: inline;" y2="61%" x2="31%" y1="94%" x1="31%"/>
						<text style="display: inline; opacity: 1; font-weight: bold; font-size: 20px;" x="29%" y="44%" fill="brown" id="text3">-</text>
						<text style="display: inline; opacity: 1; font-weight: bold; font-size: 20px;" x="29%" y="70%" fill="brown" id="text4">+</text>
				</svg> -->
				<div class='col-xs-offset-3 col-xs-2'>
					<img id='voltageImage1' class='' alt="" src="../images/voltage-reverse.png" width="50%">
					<!-- <div class='col-xs-12'>
					<div class='col-xs-offset-4 col-xs-4 padding0'><hr></div>
				</div>
				<div class='col-xs-12'>
					<div class='col-xs-offset-5 col-xs-2 padding0'><hr></div>
				</div>
				<div class='col-xs-12'>
					<div class='col-xs-offset-4 col-xs-4 padding0'><hr></div>
				</div>
				<div class='col-xs-12'>
					<div class='col-xs-offset-5 col-xs-2 padding0'><hr></div>
				</div> -->
				</div>
				<div class='col-xs-2 margin-top10 text-center'>
					<img id='diodeImage1' class='opacity00' alt=""
						src="../images/diode-in-circuit.png" width="50%">
				</div>
				<div class='col-xs-2 margin-top10 text-center opacity00' id='circleSvg1'>
					<svg height="100" width="100">
					  <circle fill="grey" stroke-width="2" stroke="black" r="25" cy="65" cx="67" id='circle2'/>
					  <path fill="transparent" stroke-width="2" stroke="black" d="M67 92 C 83 -5, 97 115, 65 38"/>
					</svg> 
				</div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	DiodeActionReady();
});

</script>
</html>