<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js-min/poda.min.js"></script>

<title>Pointers With One Dimensional Array</title>

<style>

.introjs-tooltip {
	min-width: 300px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.border-height-css, .td-value-css {
	border: 1px solid;
	height: 22px;
}

.color-gray {
	color: gray;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.width200 {
	width: 200px;
}

.padding10 {
	padding: 10px;
}

div, span {
	position: relative;
}

pre > span {
	position: static;
}

.vertical-align-center {
	align-items: center;
	display: flex;
	font-family: monospace;
}

.table-css {
	text-align: center;
	width: 100%;
}

.output-console {
	margin: auto;
	width: 400px;
}

.margin-top30 {
	margin-top: 30px;
}

.output-console-body {
	font-size: 11px;
	height: 75px;
	padding: 5px 20px;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 9999999;
}

.svg-line {
	display: none;
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.output-scanf-line {
	font-weight: normal;
	outline: medium none;
}

.output-scanf-line:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.circle-css {
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

.z-index9999999 {
	position: relative;
	z-index: 9999999;
}

.ct-lime-color, .ct-green-color {
	color: green;
	font-weight: bold;
}

in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
}


g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}

pi {
	color: fuchsia;
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Pointers with One Dimensional Array</h1></div>
	</div>
	
	<div class="col-xs-12">
		<div class='col-xs-5'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
<span><in>#include</in> <ink>&lt;iostream&gt;</ink></span>
<span><go><b>using namespace</b></go> std;</span>
<g>int</g> <b class="ct-blue-color">main()</b> {
	<span id='line1'><g>int</g> *p, i;</span>
	<span id='pLine'>p = <b><go>new</go> <g>int</g>[<ink>5</ink>]</b>;</span>
	<span id='printf1'>cout << <ink>"Enter 5 values : "</ink>;</span>
	<span id='forScanf'><span id='for1'><go><b>for</b></go> (i = <ink>0</ink>; i < <ink>5</ink>; i++) {</span>
		<span id='scanf'>cin >> *(p + i);</span>
	}</span>
	<span id='printf2'>cout << <ink>"The given array elements are : "</ink>;</span>
	<span id='forPrintf'><span id='for2'><go><b>for</b></go> (i = <ink>0</ink>; i < <ink>5</ink>; i++) {</span>
		<span id='printf3'>cout << *(p + i) << " ";</span>
	}</span>
	<span>cout << endl</span>
}
</pre>
			</div>
		</div>
		<div class='col-xs-7'>
			<div class='col-xs-12 box-border'>
				<div class='col-xs-12 vertical-align-center' id='animationBox'>
					<div class='col-xs-5' id='variablesBox'>
						<div class='center width200'>
							<div class='col-xs-12 opacity00' id='pBox'>
								<div class='col-xs-3 Vertical-text-center'>p</div>
								<div class="col-xs-7 text-center">
									<div><span class='color-gray'>2 bytes</span></div>
									<div class='border-height-css'><span id='pValue' class='ct-blue-color'></span></div>
									<div><span id='pAddress' class='ct-lime-color'>1111</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-xs-7 opacity00' id='arrayBox'>
						<table class='table-css'>
							<tbody>
								<tr>
									<%for (int i = 1; i <= 5; i++) {%>
										<td class='td-value-css'><span class='arrayValue'></span></td>
									<%}%>
								</tr>
								<tr>
									<td><span id='arrayAddress' class='ct-lime-color'>1220</span></td>
									<td><span class='ct-lime-color'>1222</span></td><td><span class='ct-lime-color'>1224</span></td>
									<td><span class='ct-lime-color'>1226</span></td><td><span class='ct-lime-color'>1228</span></td>
								</tr>
							</tbody>
						</table>
					</div>
					<svg class='svg-css' id='svg'>
						<marker id="arrowEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
							<path d="M0,0 L5,2.5 L0,5 Z"/>
						</marker>
						<line class="svg-line" x1="27.8%" y1="50%" x2="29%" y2="48%"/>
					</svg>
				</div>
			</div>
				<div class="col-xs-12 margin-top30">
				<div id="outputBox" class="output-console center">
					<div class="output-console-title-bar"><span>Output</span></div>
<div class="output-console-body"><span class="visibility-hidden">Enter 5 values : </span>
<span class='output-scanf-line' id='outputScanfLine'></span>
<span class="visibility-hidden">The given array elements are : </span>
<span id='outputPrintfLine' class='ct-code-b-yellow'></span>
</div>
				</div>
			</div>
		</div>
		<div class="margin-top-20 col-xs-12 text-center">
		<span class="col-xs-6 col-xs-offset-3">
	 		<span class="col-xs-12">
	 			<span class="col-xs-8 col-xs-offset-2">
	 				<span class="col-xs-12" id="button" style=''>
						<span class="btn btn-warning opacity00" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
						<span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
					</span>
				</span>
			</span>
		</span>
	</div>
	</div>

<script>
	$(document).ready(function() {
		pointersOneDimensionalArrayReady();
	});
</script>

</body>
</html>
