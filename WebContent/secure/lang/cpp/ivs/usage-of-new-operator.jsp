<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src="/secure/lang/cpp/js-min/uono.min.js"></script>

<title>Usage of new operator</title>

<style>

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
	font-family: monospace;
	min-height: 86px;
}

.border {
	border: 1px solid;
	border-radius: 8px;
	padding: 8px;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.introjs-tooltip {
	min-width: 280px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	font-family: monospace;
	min-width : 360px;
}
#rBox{
	margin-top: 6px;
}

.memory-box {
	height: 22px;
	border: 1px solid;
	text-align: center;	
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right;
	padding: 0;
}

.Vertical-variable-text-center  {
	height: 62px;
	line-height: 74px;
	text-align: right; 
}

.small-box {
	border: 1px solid gray;
	padding: 1px;
	text-align: center;
	width: 55px;
	visibility: ;
}

.address-box, .element-box {
	padding: 4px;
	text-align: center;
	width: 55px;
	font-size: 13px;
}

.element-box {
	color: lightslategrey;
}

.ct-color-maroon {
	color: maroon;
}

.ct-color-springgreen {
	color: springgreen;
	font-family: monospace;
	font-weight: bold;
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 10px;
	margin-bottom: 14px;
	height: 50px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.svg-line-array {
	display: none;
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2;
}

.user-btn {
	background-color: green;
}

.ct-color-lime {
	color: lime;
	font-weight: bold;
}

.css-circle {
	border-radius: 9px;
	border : 1px solid;
	background-color: white;
	padding: 2px;
	z-index: 9999999;
	background-color: white;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {
		background:  orange;
	}
}

div, span {
	position: relative;
}

.display-inline {
	display: inline-block;
}

.value-css {
	color: blue;
	font-family: monospace;
	font-weight : bold;
}

.address-css {
	color: green;
	font-family: monospace;
	font-weight: bold;
}
.ct-Maroon-color {
	color: #800021;
	font-weight: bold;
}
.ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}
.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}
</style>

</head>
<body>

<div class="main-div col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Usage of new operator</span>
		</h3>
	</div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 info-div" id="infoDiv">
		<ul>
		<li class="opacity00" id="list1">The <span class='ct-code-b-green'>new </span> operator is used to allocate 
			a specified memory at runtime.
			<span id='nextButton1' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
		<li class="opacity00" id="list2">The Syntax is: <span class="value-css">data_type</span> 
			<span class="ct-Maroon-color">pointer_variable</span> = <span class="ct-code-b-green">new</span> 
			<span class="value-css">data_type;</span>
		<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
		</li>
		</ul>
	</div>
	<div class="col-xs-12 margin-top-5">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7"  id="firstDivExample">
				<div class="col-xs-5 border opacity00" id="exampleOne">
<pre class="creamPreTab4 opacity00" id="preCode">
<span id="line1"><span id="firstExLine1"><span class="value-css" id="dataTypeInt1">int</span> *p </span> = <span id="firstExLine2"><span class="ct-code-b-green" id="newSpan">new</span><span class="value-css" id="dataTypeInt2"> int</span></span>;</span>
<span id="firstExLine3">*p = <span class="" id="pValue">20</span>;</span>
<span id="firstExLine4">cout << <span id="printP">"The value of *p</span> = " << <span id="pointerP">*p</span> << endl;</span>
</pre>
				</div>
				<div class="col-xs-6 col-xs-offset-1 opacity00" id="totalfirstExDiv">
					<div class="col-xs-12 border" id="firstExDiv">
						<div class="col-xs-6 text-center">
							<div class="col-xs-12 opacity00" id="pBox">
								<div class="col-xs-4 Vertical-text-center">p</div>
								<div class="col-xs-6">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox1"><span class="opacity00 value-css" id="cValue">1054</span></div>
									<div><span id="cBoxAddress" class="address-css">2024</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="col-xs-12 opacity00" id="newBox">
								<div class="col-xs-4 Vertical-text-center"></div>
								<div class="col-xs-6 text-center">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class=" memory-box" id="memoryBox2"><span class="opacity00 value-css" id="Value">20</span></div>
									<div><span id="newAddress" class="address-css">1054</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-7 col-xs-offset-3">
							<div id="consoleId" class="center"  style="margin-top: 8%">
								<div class="output-console-title-bar"><span class="title"><b>Console</b></span></div>
								<div class="output-console-body" id="consoleBodyDiv">
									<span class='visibility-hidden' id="printText">The value of *p = <span class='ct-code-b-yellow' id="firstOutput">20</span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7">
				<div class="col-xs-5 border opacity00" id="exampleTwo">
<pre class="creamPreTab4 opacity00" id="preCodeTwo">
<span id="line2"><span id="secondExLine1"><span class="value-css" id="dataTypeInt3">int</span> *p </span> = <span id="secondExLine2"><span class="ct-code-b-green" id="newSpan1">new</span><span class="value-css" id="dataTypeInt4"> int(<span class="ct-code-b-green" id="kValue">20</span>)</span></span>;</span>
<span id="secondExLine4">cout << "The value of *p = " << *p << endl;</span>
</pre>
				</div>
				<div class="col-xs-6 col-xs-offset-1 opacity00" id="totalSecondExDiv" >
					<div class="col-xs-12 border" id="secondExDiv">
						<div class="col-xs-6 text-center">
							<div class="col-xs-12 opacity00" id="kBox">
								<div class="col-xs-4 Vertical-text-center">p</div>
								<div class="col-xs-6">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox3"><span class="opacity00 value-css" id="dValue">3456</span></div>
									<div><span id="dBoxAddress" class="address-css">1234</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="col-xs-12 opacity00" id="newBox1">
								<div class="col-xs-4 Vertical-text-center"></div>
								<div class="col-xs-6 text-center">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class=" memory-box" id="memoryBox4"><span class="opacity00 value-css" id="Value1">20</span></div>
									<div><span id="newAddress1" class="address-css">3456</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-7 col-xs-offset-3">
							<div id="consoleId1" class="center opacity00"  style="margin-top: 8%">
								<div class="output-console-title-bar"><span class="title"><b>Console</b></span></div>
								<div class="output-console-body" id="consoleBodyDiv">
									<span class='visibility-hidden' id="printText1">The value of *p = <span class='ct-code-b-yellow'>20</span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7">
				<div class="col-xs-5 border opacity00" id="exampleThree">
<pre class="creamPreTab4 opacity00" id="preCodeThree">
<span id="arr"><span id="thirdExLine1"><span class="value-css" id="dataTypeInt5">int</span> *p </span> = <span id="thirdExLine2"><span class="ct-code-b-green" id="newSpan2">new</span><span class="value-css" id="dataTypeInt6"> int[<span class="ct-code-b-green" id="rValue">5</span>]</span></span>;</span>
</pre>
				</div>
				<div class="col-xs-6 col-xs-offset-1 opacity00" id="totalThirdExDiv" >
					<div class="col-xs-12 border" id="thirdExDiv">
						<div class="col-xs-5 text-center" >
							<div class="col-xs-12 opacity00" id="rBox">
								<div class="col-xs-4 Vertical-text-center">p</div>
								<div class="col-xs-8">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox5"><span class="opacity00 value-css" id="eValue">1924</span></div>
									<div><span id="eBoxAddress" class="address-css">1357</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-7 opacity00" id="arrayDiv">
							<div class="col-xs-12">
								<table align="center" id="memoryBox4" style="margin-left: 0%;">
									<tbody>
										<tr id="elementId">
											<td class="element-box"><span id="element1">0</span></td>
											<td class="element-box"><span id="element2">1</span></td>
											<td class="element-box"><span id="element3">2</span></td>
											<td class="element-box"><span id="element4">3</span></td>
											<td class="element-box"><span id="element5">4</span></td>
										</tr>
										<tr id="smallBox">
											<td class="small-box"><span class="opacity00 value-css" id="valuesId1">0</span></td>
											<td class="small-box"><span class="opacity00 value-css" id="valuesId2">1</span></td>
											<td class="small-box"><span class="opacity00 value-css" id="valuesId3">2</span></td>
											<td class="small-box"><span class="opacity00 value-css" id="valuesId4">3</span></td>
											<td class="small-box"><span class="opacity00 value-css" id="valuesId5">4</span></td>
										</tr>
										<tr id="addressId">
											<td class="address-box address-css"><span id="firstAddressId" style="">1924</span></td>
											<td class="address-box address-css">1926</td><td class="address-box address-css">1928</td>
											<td class="address-box address-css">1930</td><td class="address-box address-css">1932</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-5" id="restartDiv"><a class="btn btn-warning opacity00" id="restart">Restart</a></div>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	usageOfNewOperatorReady();
});
</script>
</html>
