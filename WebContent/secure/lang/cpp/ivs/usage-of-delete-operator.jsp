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
<script src='/secure/lang/cpp/js-min/uodo.min.js'></script>
<title>Usage of delete operator</title>

<style type="text/css">

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
	font-family: monospace;
}
#rBox {
	margin-top: 8px;
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

.margin-top-4 {
	margin-top: 4%;
}

.introjs-tooltip {
	min-width: 280px;
}

.creamPreTab {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	font-family: monospace;
}

.memory-box {
	height: 22px;
	border: 1px solid;
	text-align: center;
	padding: 1px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
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
	font-weight: bold;
}

.ct-color-springgreen {
	color: springgreen;
}

.ct-color-teal {
	color: teal;
}

.ct-color-lime {
	color: lime;
	font-weight: bold;
}

.box {
	border: 1px solid;
	height: 20px;
	width: 20px;
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

div, span {
	position: relative;
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

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 11px;
	margin-bottom: 14px;
	height: 80px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.user-btn {
	background-color: green;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.console-input-line {
	font-weight: normal;
	outline: medium none;
}

.console-input-line:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.animated-border {
	border-color: rgba(255, 255, 255, 0);
    animation: 2s ease 0s normal none 1 running animated-border;
}

@keyframes animated-border {  
  100% { border-color: gray; }
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
}

@keyframes blink {
	50% {
		background:  red;
	}
}

.css-circle {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
}

.font-size {
	font-size: 13px;
}

.value-css {
	color: blue;
	font-family: monospace;
	font-weight: bold;
}

.address-css {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.ct-code-b-green {
	color: green;
	font-weight: bold;
}

</style>
</head>
<body>
<div class="main-div col-xs-12">
	<div class="text-center margin-top-1"><h3 class='label ct-demo-heading' id="heading"><span>Usage of delete</span></h3></div>
	<div class="col-xs-8 col-xs-offset-2 margin-top-2 info-div" id="infoDiv">
		<ul>
			<li id="list1" class="opacity00">The memory allocated by using <span class='ct-code-b-green'>new</span> operator can be free by calling 
				 the <span class='ct-code-b-green'>delete</span> operator.</li>
			<li id="list2" class="opacity00">The <span class='ct-code-b-green'>delete</span> operator releases the memory pointed by the 
				pointer variable.</li>
			<li id="list3" class="opacity00">After freeing the memory <b>NULL</b> value is stored in the pointer.</li></ul>
			<div id="list4" class="opacity00"> &emsp;  &emsp; Syntax : <span class="ct-code-b-green">delete</span> <span class="value-css">pointer-variable;</span>
				<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-10 col-xs-offset-1">
			<div class="col-xs-12 margin-top-7"  id="firstDivExample">
				<div class="col-xs-4 border opacity00" id="exampleOne">
<pre class="creamPreTab opacity00" id="preCode">
<span id="line1"><span id="firstExLine1"><span class="value-css" id="dataTypeInt1">int</span> *p </span> = <span id="firstExLine2"><span class="ct-code-b-green" id="newSpan1">new</span><span class="value-css" id="dataTypeInt2"> int</span></span>;</span>
<span id="firstExLine3">*p = <span class="" id="pValue">20</span>;</span>
<span id="firstExLine4"><span class="ct-code-b-green">delete</span> p;</span>
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
							<div class="col-xs-12 opacity00" id="firstMemoryAllocation">
								<div class="col-xs-4 Vertical-text-center"></div>
								<div class="col-xs-6 text-center">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class=" memory-box" id="memoryBox2"><span class="opacity00 value-css" id="Value">20</span></div>
									<div><span id="newAddress" class="address-css">1054</span></div>
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
				<div class="col-xs-4 border opacity00" id="secondDivExample">
<pre class="creamPreTab opacity00" id="preCodeTwo">
<span id="arr"><span id="secondExLine1"><span class="value-css" id="dataTypeInt5">int</span> *p </span> = <span id="secondExLine2"><span class="ct-code-b-green" id="newSpan2">new</span><span class="value-css" id="dataTypeInt6"> int[<span class="ct-code-b-green" id="rValue">5</span>]</span></span>;</span>

<span class="ct-color-maroon">//doing something </span>

<span id="secondExLine3"><span class="ct-code-b-green">delete</span> p;</span>
 </pre>
				</div>
				<div class="col-xs-6 col-xs-offset-1 opacity00" id="secondExMemory" >
					<div class="col-xs-12 border" id="secondEx1">
						<div class="col-xs-5 text-center" >
							<div class="col-xs-12 opacity00" id="rBox">
								<div class="col-xs-4 Vertical-text-center">p</div>
								<div class="col-xs-8">
									<div style="color: lightslategrey;">2 bytes</div>
									<div class="memory-box" id="memoryBox3"><span class="opacity00 font-size value-css" id="dValue">1924</span></div>
									<div><span id="rBoxAddress" class="address-css">1258</span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-7 opacity00" id="arrayDiv">
							<div class="col-xs-12" id="secondMemoryAllocation" >
								<table align="center" id="memoryBox4" style="margin-left: 0%;">
									<tbody><tr id="elementId">
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
								</tbody></table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv"><a class="btn btn-warning opacity00" id="restart">Restart</a></div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	usageOfDeleteOperatorReady();
});
</script>
</html>
