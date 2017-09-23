<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/ptaa.min.js"></script>

<title>Pointer to An Array</title>

<style>

.introjs-tooltiptext br {
	margin: 15px;
}

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
	-moz-tab-size: 3;
	tab-size: 3;
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
	height: 150px;
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

td, th {
	width: 50px;
}

.padding-top-bottom {
	padding: 10px 0;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.animation-box {
	height: 190px;
}

.variable-color {
	color: brown;
}

.pTable-tr-css {
	opacity: 0;
}

.pTable-tr-css td {
	border: none;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

.ct-lime-color {
	color: lime;
	font-weight: bold;
}

.ct-blue-color {
	font-weight: bold;
}
</style>

</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Pointer To An Array</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
	<div class="col-xs-12">
		<div class='col-xs-5'>
			<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
void <b class='ct-blue-color'>main()</b> {
	<span id='line1'>int (*p)[3], m, i, j;</span>
	<span id='printf1'>printf("Enter number of rows : \n");</span>
	<span id='scanf1'>scanf("%d", &m);</span>
	<span id='pLine'>p = (int *)<b class="ct-green-color">malloc(m * 3 * sizeof(int))</b>;</span>
	<span id='printf2'>printf("Enter the matrix elements : \n");</span>
	<span id='forScanf'>for (i = 0; i < m; i++) {
		for (j = 0; j < 3; j++) {
			<span id='scanf2'>scanf("%d", (*(p + i) + j));</span>
		}
	}</span>
	<span id='printf3'>printf("The given matrix is : \n");</span>
	<span id='forPrintf'>for (i = 0; i < m; i++) {
		for (j = 0; j < 3; j++) {
			<span id='printf4'>printf(" %d", *(*(p + i) + j));</span>
		}
		<span id='printf5'>printf("\n");</span>
	}</span>
}
</pre>
			</div>
		</div>
		<div class='col-xs-7'>
			<div class='col-xs-12 box-border'>
				<div class='col-xs-12 vertical-align-center animation-box text-center' id='animationBox'>
					<div class='col-xs-4' id='pArrayBox'>
						<table align='center' class='visibility-hidden' id='pTable'>
							<tbody>
								<tr><td colspan='2'><span class='variable-color'>p</span></td></tr>
								<tr class='pTable-tr-css' id='pTableTr1'>
									<td><span class='ct-lime-color'>1000</span></td>
									<td class='td-value-css'><span id='pValue0' class='ct-blue-color'></span></td>
								</tr>
								<tr class='pTable-tr-css' id='pTableTr2'>
									<td><span class='ct-lime-color'>1002</span></td>
									<td class='td-value-css'><span id='pValue1' class='ct-blue-color'></span></td>
								</tr>
								<tr class='pTable-tr-css' id='pTableTr3'>
									<td><span class='ct-lime-color'>1004</span></td>
									<td class='td-value-css'><span id='pValue2' class='ct-blue-color'></span></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class='col-xs-offset-2 col-xs-6' id='mallocTablesDiv'>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top30">
				<div id="outputBox" class="output-console center">
					<div class="output-console-title-bar"><span>Output</span></div>
<div class="output-console-body"><span class="visibility-hidden">Enter number of rows : </span>
<span class='output-scanf-line' id='outputScanfLine1'></span>
<span class="visibility-hidden">Enter the matrix elements : </span>
<span class='output-scanf-line' id='outputScanfLine2'></span>
<span class="visibility-hidden">The given matrix is : </span>
<span id='outputPrintfLine' class='ct-blue-color'></span>
</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	$(document).ready(function() {
		pointerToAnArrayReady();
	});
</script>
</body>
</html>