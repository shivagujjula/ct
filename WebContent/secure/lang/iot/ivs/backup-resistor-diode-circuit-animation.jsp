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
<title>DC Regulator</title>
<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

#mainDiv {
	padding: 34px;
	border: 1px solid;
}

.border {
	border: 1px solid gray;
	padding: 4px;
	opacity: 0;
}

/* .svg-css {
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
	opacity: 1;
} */

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2; 
	position: relative;
	z-index: 10000000 !important;
	marker-end: url("#arrowEnd"); 
}

.position {
	position: relative;
}

#outputId, #inputId {
	border: 1px solid gray;
	/* background-color: #FFC300; */
	border-radius: 5px;
	width: 30px;
	height: 30px;
	position: relative;
	display: inline-block;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
	border-radius: 2px;
	margin-left: 10px;
	line-height: 32px;
	text-align: center;
}

.popover {
	z-index: 9999999;
	width: 200px;
}

.popover-content {
	background-color: #003399;
	color: white;
	min-height: 30px;
	letter-spacing: 1px;
}

.custom-btn {
	background-color: green;
	float: right;
	margin: 0 !important;
}

.user-next-btn {
	background-color: green;
	/*float: right;
	 margin: 0 !important; */
}

.user-skip-btn {
	background-color: orange;
	margin-right: 15px;
}

.popover-height {
	height: 20px;
}

.regulator-text {
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
	background: white;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.5s;
	animation-iteration-count: 4;
}

@keyframes blink {
	50% {
		background: #9fbff2;
	}
}

/* .image-symbol {
	position: absolute;
	left: 43%;
	top: 65%;
	transform: translateX(-65%) translateY(-43%);
	text-align: center;
}

.image-ground-symbol {
	position: absolute;
	left: 16.02%;
	top: 74%;
	transform: translateX(-74%) translateY(-16.02%);
	text-align: center;
}

.image-load-symbol {
	left: 69.5%;
	position: absolute;
	text-align: center;
	top: 83%;
	transform: translateX(-84%) translateY(-69.5%);
} */

.line-css {
	position: relative;
	stroke: black;
	stroke-width: 2;
}


#infoDiv {
	/* min-height: 88px; */
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 20.5%;
	margin-top: 2%;
}

.font-size-14 {
	font-size: 14px;
}

.z-index9999999 {
	z-index: 9999999 !important;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>DC Regulator</span>
		</h3>
	</div>
	<!-- <div class="col-xs-6 col-xs-offset-3 margin-top-1 introjs-showElement" id="mainDiv">
		<div class="col-xs-12 text-center" id="firstDiv">
			<div class="col-xs-1 col-xs-offset-3" id="firstDivChild">
				<span class="border opacity00" id="firstDivChildSpan"></span>
			</div>
			<div class="col-xs-3 col-xs-offset-1" id="controllerDiv">
				<span class="border" id="controllerSpan" style="background: #91c7c6;">CONTROLLER</span>
			</div>
			<div class="col-xs-offset-2 col-xs-1">
				<span class="border opacity00" id="firstDivChildSpanSecond"></span>
			</div>
		</div>
		<div class="col-xs-12 text-center" style="margin-top: 6%;" id="secondDiv">
			<div class="col-xs-3 col-xs-offset-8">
				<span class="border" id="sampleCircuitSpan" style="background: bisque;">SAMPLING CIRCUIT</span>
			</div>
		</div>
		<div class="col-xs-12 text-center" style="margin-top: 6%;">
			<div class="col-xs-3">
				<span class="border" id="referenceSpan" style="background: #ccc26d;">REFERENCE VOLTAGE</span>
			</div>
			<div class="col-xs-3 col-xs-offset-2">
				<span class="border" id="comparatorSpan" style="background: #72a7e2;">COMPARATOR CIRCUIT</span>
			</div>
			<div class="col-xs-offset- col-xs-3">
				<span class="border opacity00" id="thirdDivChildSpan"></span>
			</div>
		</div>
		<svg class="svg-css">
  			<text x="255" y="31" fill="green" class="" id="text1">Input Voltage</text>
  			<text x="707" y="31" fill="green" class="opacity00" id="text2">Output Voltage</text>
  			<text x="410" y="120" fill="red" class="opacity00" id="text3">Error signal</text>
  			<text x="704" y="170" fill="blue" class="opacity00" id="text4">Feedback signal</text>
		</svg>
	</div> -->
	<div class="col-xs-7 col-xs-offset-2">
		<div id="infoDiv" class="font-size-14 margin-top-1">
			<ul>
				<li id="line1" class="opacity00">A voltage regulator is such a device that maintains constant output voltage, instead of any kind of fluctuations 
					in the input voltage being applied or any variations in current, drawn by the load.
				</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-6 col-xs-offset-3" style="margin-top: 3%;" id="dcRegulatorDiv">
			<div class="col-xs-12 text-center">
				<img alt="" src="../images/voltage-regulator.png" width="40%" id="imageId">
			</div>
			<div class="col-xs-12 opacity00" id="calculationDiv">
				<div  style="display: inline-block;margin-top: 3.5%;" class="col-xs-3 col-xs-offset-2">
					<span>Input Voltage</span>
					<input id="inputId" type="text" maxlength="3">
					<!-- <select id="drowdownId" class="position">
						<option value="nineV">9v</option>
						<option value="tenV">10v</option>
						<option value="elevenV">11v</option>
						<option value="twevelV">12v</option>
					</select> -->
				</div>
				<div style="display: inline-block;margin-top: 4%;" class="col-xs-3 col-xs-offset-">
					<span style="padding: 10px; border: 1px solid; padding: 6px;" id="regulatorId" class="position regulator-text">Regulator</span>
				</div>
				<div style="display: inline-block;margin-top: 3.5%;" class="col-xs-4">
					<span id="outputId" class="position"><span id="outputIdValue" class="opacity00">5v</span></span>
					<span>Output Voltage</span>
				</div>
			</div>
		</div>
	</div>
		<div class="col-xs-12">
			<div id="circuitDiv" style="height: 320px; margin-top: 3%;" class="col-xs-8 col-xs-offset-2">
				<div class="col-xs-12">
					<span id="mainLine" class="opacity00">Basically, there are two types of Voltage regulators:</span>
					<ul>
						<li id="linearLine" class="opacity00">Linear voltage regulator</li>
						<li id="switchingLine" class="opacity00">Switching voltage regulator</li>
					</ul>
				</div>
				<div class="col-xs-12 opacity00" style="height: 300px; padding: 0px;" id="linearCircuitDiv">
					<svg style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%;">
						<path id="path" class="path"
							d="M 116 158 v -58 0 M 116 101 l 204 0 M402 100 l184 1 M 586 100 v 80 0"
							stroke="black" stroke-width="2.5" fill="none" />
						<g>
							<line class="line-css" x1="240" y1="102" x2="240" y2="140"/>
							<line class="line-css" x1="254" y1="141" x2="224" y2="141"/>
							<line class="line-css" x1="254" y1="149" x2="224" y2="149"/> 
							<line class="line-css" x1="240" y1="183" x2="240" y2="150"/>
							<path d="M 227,171 241,190.5 253,171.7 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<line class="line-css" x1="454" y1="102" x2="454" y2="140"/>
							<line class="line-css" x1="468" y1="141" x2="438" y2="141"/>
							<line class="line-css" x1="468" y1="149" x2="438" y2="149"/> 
							<line class="line-css" x1="454" y1="183" x2="454" y2="150"/>
							<path d="M 441,169 455,188.5 468,169 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<rect width="80px" height="40px" x="321" y="79" fill="white" stroke="gray" stroke-width="3" />
							<text x="326" y="93" style="font-family: monospace; font-size: 13px;">IN</text>
							<text x="370" y="93" style="font-family: monospace; font-size: 13px;">OUT</text>
							<text x="345" y="110" style="font-family: monospace; font-size: 13px;">GND</text>
						</g>
						
						<g>
							<circle cx="116" cy="170" r="18" stroke="black" stroke-width="2" fill="white"/>
							<text style="font-family: monospace; font-size: 17px; fill: green; font-weight: bold;" y="176" x="107">DC</text>
						</g>
			
						<g>
							<rect stroke-width="3" stroke="gray" fill="white" y="150" x="568" height="61px" width="35px"/>
							<text style="font-family: monospace; font-size: 13px; writing-mode: vertical-rl;" y="164" x="584">LOAD</text>
		  					<line class="line-css" x1="585" y1="210" x2="585" y2="232"/>
							<line class="line-css" x1="554" y1="233" x2="617" y2="233"/>
							<line class="line-css" x1="564" y1="243" x2="607" y2="243"/>
							<line class="line-css" x1="570" y1="253" x2="599" y2="253"/>
						</g>
						
						<circle id="circle" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
			
						<circle id="circle1" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion1' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
				</svg>
				</div>
			</div>
		</div>
		<div class="col-xs-12">
				<!-- <button type="button" id="buttonId">Click Me!</button> -->
			<div class="col-xs-5" style="height: 300px; padding: 0px;" id="capacitorDiv">
				<svg style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%;">
						<path id="path" class="path"
							d="M 116 158 v -58 0 M 116 101 l 91 0 M271 100 l215 1 M 486 100 v 80 0"
							stroke="black" stroke-width="2.5" fill="none" />
						<g>
							<!-- <line class="line-css" x1="240" y1="102" x2="240" y2="140"/>
							<line class="line-css" x1="254" y1="141" x2="224" y2="141"/>
							<line class="line-css" x1="254" y1="149" x2="224" y2="149"/> 
							<line class="line-css" x1="240" y1="183" x2="240" y2="150"/>
							<path d="M 227,171 241,190.5 253,171.7 z" style="stroke: black; fill: gray;"/> -->
							<line class="line-css" x1="254" y1="149" x2="224" y2="149"/> 
							<line class="line-css" x1="240" y1="183" x2="240" y2="150"/>
							<circle cx="215" cy="100" r="9" stroke="black" stroke-width="2" fill="white"/>
							<circle cx="262" cy="100" r="9" stroke="black" stroke-width="2" fill="white"/>
						</g>
						
						<g>
							<line class="line-css" x1="400" y1="102" x2="400" y2="140"/>
							<line class="line-css" x1="386" y1="141" x2="414" y2="141"/>
							<line class="line-css" x1="386" y1="149" x2="414" y2="149"/> 
							<line class="line-css" x1="400" y1="173" x2="400" y2="150"/>
							<path d="M 386,169 400,186.5 413,169 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<!-- <g>
							<rect width="80px" height="40px" x="321" y="79" fill="white" stroke="gray" stroke-width="3" />
							<text x="326" y="93" style="font-family: monospace; font-size: 13px;">IN</text>
							<text x="370" y="93" style="font-family: monospace; font-size: 13px;">OUT</text>
							<text x="345" y="110" style="font-family: monospace; font-size: 13px;">GND</text>
						</g> -->
						
						<g>
							<circle cx="116" cy="170" r="18" stroke="black" stroke-width="2" fill="white"/>
							<text style="font-family: monospace; font-size: 17px; fill: green; font-weight: bold;" y="176" x="107">DC</text>
						</g>
			
						<g>
							<rect stroke-width="3" stroke="gray" fill="white" y="150" x="470" height="61px" width="35px"/>
							<text style="font-family: monospace; font-size: 13px; writing-mode: vertical-rl;" y="164" x="489">LOAD</text>
		  					<line class="line-css" x1="489" y1="210" x2="489" y2="232"/>
							<line class="line-css" x1="466" y1="233" x2="512" y2="233"/>
							<line class="line-css" x1="474" y1="243" x2="506" y2="243"/>
							<line class="line-css" x1="481" y1="253" x2="501" y2="253"/>
						</g>
						
						<circle id="circleCap1" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotionCap1' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
			
						<circle id="circleCap2" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotionCap2' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
				</svg>
			</div>
			<div class="col-xs-5" style="height: 300px; padding: 0px;" id="inductorDiv">
				<svg style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%;">
						<path id="path" class="path"
							d="M 116 158 v -58 0 M 116 101 l 204 0 M402 100 l184 1 M 586 100 v 80 0"
							stroke="black" stroke-width="2.5" fill="none" />
						<g>
							<line class="line-css" x1="240" y1="102" x2="240" y2="140"/>
							<line class="line-css" x1="254" y1="141" x2="224" y2="141"/>
							<line class="line-css" x1="254" y1="149" x2="224" y2="149"/> 
							<line class="line-css" x1="240" y1="183" x2="240" y2="150"/>
							<path d="M 227,171 241,190.5 253,171.7 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<line class="line-css" x1="454" y1="102" x2="454" y2="140"/>
							<line class="line-css" x1="468" y1="141" x2="438" y2="141"/>
							<line class="line-css" x1="468" y1="149" x2="438" y2="149"/> 
							<line class="line-css" x1="454" y1="183" x2="454" y2="150"/>
							<path d="M 441,169 455,188.5 468,169 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<rect width="80px" height="40px" x="321" y="79" fill="white" stroke="gray" stroke-width="3" />
							<text x="326" y="93" style="font-family: monospace; font-size: 13px;">IN</text>
							<text x="370" y="93" style="font-family: monospace; font-size: 13px;">OUT</text>
							<text x="345" y="110" style="font-family: monospace; font-size: 13px;">GND</text>
						</g>
						
						<g>
							<circle cx="116" cy="170" r="18" stroke="black" stroke-width="2" fill="white"/>
							<text style="font-family: monospace; font-size: 17px; fill: green; font-weight: bold;" y="176" x="107">DC</text>
						</g>
			
						<g>
							<rect stroke-width="3" stroke="gray" fill="white" y="150" x="568" height="61px" width="35px"/>
							<text style="font-family: monospace; font-size: 13px; writing-mode: vertical-rl;" y="164" x="584">LOAD</text>
		  					<line class="line-css" x1="585" y1="210" x2="585" y2="232"/>
							<line class="line-css" x1="554" y1="233" x2="617" y2="233"/>
							<line class="line-css" x1="564" y1="243" x2="607" y2="243"/>
							<line class="line-css" x1="570" y1="253" x2="599" y2="253"/>
						</g>
						
						<circle id="circle" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
			
						<circle id="circle1" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion1' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
				</svg>
			</div>
			<div class="col-xs-5" style="height: 300px; padding: 0px;" id="diodeDiv">
				<svg style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%;">
						<path id="path" class="path"
							d="M 116 158 v -58 0 M 116 101 l 204 0 M402 100 l184 1 M 586 100 v 80 0"
							stroke="black" stroke-width="2.5" fill="none" />
						<g>
							<line class="line-css" x1="240" y1="102" x2="240" y2="140"/>
							<line class="line-css" x1="254" y1="141" x2="224" y2="141"/>
							<line class="line-css" x1="254" y1="149" x2="224" y2="149"/> 
							<line class="line-css" x1="240" y1="183" x2="240" y2="150"/>
							<path d="M 227,171 241,190.5 253,171.7 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<line class="line-css" x1="454" y1="102" x2="454" y2="140"/>
							<line class="line-css" x1="468" y1="141" x2="438" y2="141"/>
							<line class="line-css" x1="468" y1="149" x2="438" y2="149"/> 
							<line class="line-css" x1="454" y1="183" x2="454" y2="150"/>
							<path d="M 441,169 455,188.5 468,169 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<rect width="80px" height="40px" x="321" y="79" fill="white" stroke="gray" stroke-width="3" />
							<text x="326" y="93" style="font-family: monospace; font-size: 13px;">IN</text>
							<text x="370" y="93" style="font-family: monospace; font-size: 13px;">OUT</text>
							<text x="345" y="110" style="font-family: monospace; font-size: 13px;">GND</text>
						</g>
						
						<g>
							<circle cx="116" cy="170" r="18" stroke="black" stroke-width="2" fill="white"/>
							<text style="font-family: monospace; font-size: 17px; fill: green; font-weight: bold;" y="176" x="107">DC</text>
						</g>
			
						<g>
							<rect stroke-width="3" stroke="gray" fill="white" y="150" x="568" height="61px" width="35px"/>
							<text style="font-family: monospace; font-size: 13px; writing-mode: vertical-rl;" y="164" x="584">LOAD</text>
		  					<line class="line-css" x1="585" y1="210" x2="585" y2="232"/>
							<line class="line-css" x1="554" y1="233" x2="617" y2="233"/>
							<line class="line-css" x1="564" y1="243" x2="607" y2="243"/>
							<line class="line-css" x1="570" y1="253" x2="599" y2="253"/>
						</g>
						
						<circle id="circle" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
			
						<circle id="circle1" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion1' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
				</svg>
			</div>
			<div class="col-xs-5" style="height: 300px; padding: 0px;" id="switchDiv">
				<svg style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%;">
						<path id="path" class="path"
							d="M 116 158 v -58 0 M 116 101 l 204 0 M402 100 l184 1 M 586 100 v 80 0"
							stroke="black" stroke-width="2.5" fill="none" />
						<g>
							<line class="line-css" x1="240" y1="102" x2="240" y2="140"/>
							<line class="line-css" x1="254" y1="141" x2="224" y2="141"/>
							<line class="line-css" x1="254" y1="149" x2="224" y2="149"/> 
							<line class="line-css" x1="240" y1="183" x2="240" y2="150"/>
							<path d="M 227,171 241,190.5 253,171.7 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<line class="line-css" x1="454" y1="102" x2="454" y2="140"/>
							<line class="line-css" x1="468" y1="141" x2="438" y2="141"/>
							<line class="line-css" x1="468" y1="149" x2="438" y2="149"/> 
							<line class="line-css" x1="454" y1="183" x2="454" y2="150"/>
							<path d="M 441,169 455,188.5 468,169 z" style="stroke: black; fill: gray;"/>
						</g>
						
						<g>
							<rect width="80px" height="40px" x="321" y="79" fill="white" stroke="gray" stroke-width="3" />
							<text x="326" y="93" style="font-family: monospace; font-size: 13px;">IN</text>
							<text x="370" y="93" style="font-family: monospace; font-size: 13px;">OUT</text>
							<text x="345" y="110" style="font-family: monospace; font-size: 13px;">GND</text>
						</g>
						
						<g>
							<circle cx="116" cy="170" r="18" stroke="black" stroke-width="2" fill="white"/>
							<text style="font-family: monospace; font-size: 17px; fill: green; font-weight: bold;" y="176" x="107">DC</text>
						</g>
			
						<g>
							<rect stroke-width="3" stroke="gray" fill="white" y="150" x="568" height="61px" width="35px"/>
							<text style="font-family: monospace; font-size: 13px; writing-mode: vertical-rl;" y="164" x="584">LOAD</text>
		  					<line class="line-css" x1="585" y1="210" x2="585" y2="232"/>
							<line class="line-css" x1="554" y1="233" x2="617" y2="233"/>
							<line class="line-css" x1="564" y1="243" x2="607" y2="243"/>
							<line class="line-css" x1="570" y1="253" x2="599" y2="253"/>
						</g>
						
						<circle id="circle" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion' xlink:href="" dur="3s" begin="0.2s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
			
						<circle id="circle1" r="10" cx="0" cy="0" fill="tomato" />
						<animateMotion id='animateMotion1' xlink:href="" dur="3s" begin="0s"
									fill="freeze" repeatCount="indefinite">
							<mpath xlink:href="#path" />
						</animateMotion>
				</svg>
			</div>
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
$(document).ready(function () {
	introGuide();
	$("#circle, #circle1").hide();
	/* $("#buttonId").click(function() {
		console.log("clicked");
	}); */
});


function passingVoltage() {
	setTimeout(function() {
	$("#circle, #circle1").show()
	$("#animateMotion").attr("xlink:href", "#circle");
	$("#animateMotion1").attr("xlink:href", "#circle1");
	}, 1500);
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("body").on('hide.bs.popover', function() {
		return false;
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
		steps :[/*  {
			element : "#mainDiv",
			intro : "",
			tooltipClass : 'hide'
		}, */ {
			element : '#infoDiv',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#imageId',
			intro : '',
			position : 'right'
		}, {
			element : "#dcRegulatorDiv",
			intro : '',
			position : 'right'
			/* tooltipClass : 'hide'  */
		}, {
			element : "#circuitDiv",
			intro : '',
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
		case 'infoDiv':
		//	$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			setTimeout(function () {
				$("#line1").fadeTo(1000, 1, function() {
					$("#infoDiv").addClass('z-index9999999');
					setTimeout(function () {
						introjs.nextStep();
					}, 100);
				});
			});
			break;
		case 'mainDiv':
			svgAppend("#mainDiv", "svg");
			svgMarkerAppend("#svg", "arrow");
			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#mainDiv", "#firstDivChildSpan", "#controllerSpan", "#svg", "line1", "arrow", function() {
				TweenMax.to($("#controllerSpan"), 1.5, {opacity: 1, onComplete: function() {
					svgAnimatingLineSelector1RightSideToSelector2LeftSide("#mainDiv", "#controllerSpan", "#firstDivChildSpanSecond", "#svg", "line2", "arrow", function() {
						TweenMax.to($("#text2"), 1.5, {opacity: 1, onComplete: function() {
							svgAnimatingLinetopToBottom("#mainDiv", "#firstDivChildSpanSecond", "#sampleCircuitSpan", "#svg", "line7", "arrow", function() {
								TweenMax.to($("#sampleCircuitSpan"), 1.5, {opacity: 1, onComplete: function() {
									svgAnimatingLineSelector1BottomSideToSelector2TopSide("#mainDiv", "#sampleCircuitSpan", "#thirdDivChildSpan", "#svg", "line3", "", function() {
										svgAnimatingLineSelector1LeftSideToSelector2RightSide("#mainDiv", "#thirdDivChildSpan", "#comparatorSpan", "#svg", "line4", "arrow", function() {
											TweenMax.to($("#text4"), 1.5, {opacity: 1, onComplete: function() {
												TweenMax.to($("#comparatorSpan"), 1.5, {opacity: 1, onComplete: function() {
													TweenMax.to($("#referenceSpan"), 1.5, {opacity: 1, onComplete: function() {
														svgAnimatingLineSelector1RightSideToSelector2LeftSide("#mainDiv", "#referenceSpan", "#comparatorSpan", "#svg", "line5", "arrow", function() {
															svgAnimatingLineSelector1TopSideToSelector2BottomSide("#mainDiv", "#comparatorSpan", "#controllerSpan", "#svg", "line6", "arrow", function() {
																TweenMax.to($("#text3"), 1.5, {opacity: 1, onComplete: function() {
																	setTimeout(function() {
																		introjs.nextStep();
																	}, 1000);
																}});
															});
														});
													}});
												}});
											}});
										});
									});
								}});
							});
						}});
					});
				}});
			});
											
			break;
		case 'imageId':
			var text = "Let us consider the voltage regulator circut."
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'dcRegulatorDiv':
			$(".introjs-helperLayer").one("transitionend", function() {
				regulatorOperation();
			});
			break;
		case 'circuitDiv':
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#mainLine").fadeTo(1000, 1, function() {
					$("#linearLine").fadeTo(1000, 1, function() {
						$("#switchingLine").fadeTo(1000, 1, function() {
							zoomingEffect("#linearCircuitDiv", function() {
								passingVoltage();
							});
						});
					});
				});
				
			});
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

function regulatorOperation(callBackFunction) {
	$('.introjs-tooltip').addClass("hide");
	$("#calculationDiv").removeClass("opacity00");
	$("#inputId").popover({
		placement: 'bottom',
		toggle: 'true',
		/* viewport: $("#firstId"), */
		html: true,
		trigger: 'focus',
		content: '<div id="popover1"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
	var text = "Enter an input voltage between 9v to 12v.";
	typing("#popover1", text, typingInterval, function() {
		$('#popover1').append('<div class="popover-height"><span class="introjs-button custom-btn">Next &#8594;</span></div>');
		$(".custom-btn").hide();
		$("#inputId").focus();
		$("#inputId").keyup(function() {
			var inputText = $("#inputId").val();
			var inputNumber = inputText.substring(0, inputText.length - 1);
			if (inputNumber >= 9 && inputNumber <= 12 && (inputText.endsWith("v") || inputText.endsWith("V"))) {
				$(".custom-btn").show();
				$(".custom-btn").on("click", function() {
					$('.popover').hide();
					$(".custom-btn").remove();
					svgAppend("#dcRegulatorDiv", "svg1");
					svgMarkerAppend("#svg1", "arrow1");
					svgAnimatingLineSelector1RightSideToSelector2LeftSide("#dcRegulatorDiv", "#inputId", "#regulatorId", "#svg1", "lineA", "arrow1", function() {
						$("#regulatorId").addClass("blinking").one('animationend', function() {
							svgAnimatingLineSelector1RightSideToSelector2LeftSide("#dcRegulatorDiv", "#regulatorId", "#outputId", "#svg1", "lineB", "arrow1", function() {
								$("#outputIdValue").html("5v");
								$("#regulatorId").removeClass("blinking");
								zoomingEffect("#outputIdValue", function() {
									$('.introjs-tooltip').removeClass("hide");
									var text = "The voltage regulator is to automatically maintain a constant voltage level."
									typing(".introjs-tooltiptext", text, typingInterval, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
			} else {
				$(".custom-btn").hide();
			}
		});
	});
}

function dynamicSteps(stepName, animatedStep, tooltipClass, position) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : tooltipClass,
			animateStep: animatedStep,
			position : position
	}
	introjs.insertOption(introjs._currentStep + 1, options);
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = ($(selector1).offset().left - parentOffset.left) + 6;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1BottomSideToSelector2TopSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = ($(selector2).offset().top - parentOffset.top) + 14.5;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLinetopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = '76%';
	var y1 = '20%';
	var x2 = '76%';
	var y2 = '43%';
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
</script>
</html>