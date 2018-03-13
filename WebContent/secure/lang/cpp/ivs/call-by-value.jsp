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

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js-min/cbv.min.js"></script>
<title>Call By Value</title>

<style>

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
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
	font-size: 12px;
	margin: 5px;
	padding: 5px;
	white-space: pre;
	font-famlity: monospace;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.border-height-css {
	border: 1px solid;
	height: 22px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.width200 {
	width: 190px;
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

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.color-gray {
	color: gray;
}

.output-console {
	margin: auto;
	width: 350px;
}

.margin-top30 {
	margin-top: 30px;
}

.output-console-body {
	padding: 5px 20px;
	white-space: initial;
}

.method-box-css {
	border: 1px solid;
	border-radius: 8px;
	padding: 0px;
	opacity: 0;
}

.method-box-text-css {
	background: lightblue none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	padding: 5px;
	text-align: center;
}
.ui-effects-transfer {
	border: 1px solid white;
	border-radius: 10px;
	z-index: 9999999 !important;
}
.z-index9999999 {
	z-index: 9999999 !important;
	background-color: white;
}

.ct-lime-color {
	color: green;
	font-weight: bold;
}
.ct-blue-color {
	color : blue;
	font-weight: bold;
}
.visibility-hidden {
	visibility: hidden;
}
.output-console-title-bar {
	background-color : #bcbbbc;
}
</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Call By Value</h1></div>

	<div class="col-xs-12">
		<div class='col-xs-12'>
			<div class='col-xs-12'>
				<div class='col-xs-7'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id='swapDeclareLine'>int <span class="ct-green-color">swap(int, int)</span>;</span>
<span id='mainMethodBlock'>int <b class="ct-blue-color">main()</b> {
	<span id='aLine'>int a = <span id='valueOfA'>5</span>;</span>
	<span id='bLine'>int b = <span id='valueOfB'>10</span>;</span>
	<span id='printBeforeSwapInMain'>cout << <span id="printBfr">"Before swapping in main : "</span> << <span id="aSec">"a = " << <span id="aVal">a</span></span> << " " << <span id="bSec">"b = " << <span id="bVal">b</span></span><< "\n";</span>
	<span id='swapLine' class="ct-green-color">swap(a, b);</span>
	<span id='printAfterSwapInMain'>cout << <span id="printAftr">"After swapping in main : "</span> << <span id="aSec1">"a = " << <span id="aVal1">a</span></span> << " " << <span id="bSec1">"b = " << <span id="bVal1">b</span></span><< "\n";</span>
<span id="end">}</span></span>
<span id='swapMethodBlock'>int <span class="ct-green-color">swap(int x, int y)</span> {
	<span id='tDeclareLine'>int t;</span>
	<span id='tAssignLine'>t = x;</span>
	<span id='xLine'>x = y;</span>
	<span id='yLine'>y = t;</span>
	<span id='printAfterSwapInSwap'>cout << <span id="swapAftr">"After swapping in swap : "</span> << <span id="valX">"x = " << <span id="valXVal">x</span></span> << " " << <span id="valY">"y = " << <span id="valYVal">y</span></span> << "\n";</span>
<span id='swapMethodCloseBrace'>}</span></span>
</pre>
					</div>
				</div>
				<div class='col-xs-5'>
					<div class='col-xs-12 box-border'  id='animationDiv'>
						<div class='col-xs-12 padding10'>
							<div class='col-xs-12 method-box-css' id='mainMethodBox'>
								<div class='method-box-text-css'>main()</div>
								<div class="col-xs-12 padding10">
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='aBox'>
												<div class='col-xs-4 Vertical-text-center'>a</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='aValue' class='ct-blue-color'></span></div>
													<div><span id='aAddress' class="ct-lime-color">1111</span></div>
												</div>
											</div>
										</div>
									</div>
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='bBox'>
												<div class='col-xs-4 Vertical-text-center'>b</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='bValue' class='ct-blue-color'></span></div>
													<div><span id='bAddress' class="ct-lime-color">1234</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='col-xs-12 padding10'>
							<div class='col-xs-12 method-box-css' id='swapMethodBox'>
								<div class='method-box-text-css'>swap()</div>
								<div class="col-xs-12 padding10" id='swapAnimationDiv'>
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='xBox'>
												<div class='col-xs-4 Vertical-text-center'>x</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='xValue' class='ct-blue-color'></span></div>
													<div><span id='xAddress' class="ct-lime-color">2222</span></div>
												</div>
											</div>
										</div>
									</div>
									<div class='col-xs-6'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='yBox'>
												<div class='col-xs-4 Vertical-text-center'>y</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='yValue' class='ct-blue-color'></span></div>
													<div><span id='yAddress' class="ct-lime-color">2345</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-12 padding10">
									<div class='col-xs-12'>
										<div class='center width200'>
											<div class='col-xs-12 visibility-hidden' id='tBox'>
												<div class='col-xs-4 Vertical-text-center'>t</div>
												<div class="col-xs-6 text-center">
													<div><span class='color-gray'>2 bytes</span></div>
													<div class='border-height-css'><span id='tValue' class='ct-blue-color'></span></div>
													<div><span id='tAddress' class='ct-lime-color'>3333</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-xs-12 margin-top30">
						<div id="outputBox" class="output-console opacity00 center">
							<div class="output-console-title-bar"><span>Output</span></div>
								<div class="output-console-body">
									<div id = "bfrSwap" class="visibility-hidden">Before swapping in main : <span id="aBfr" class="opacity00">a = <span class='ct-code-b-yellow opacity00' id="aConsVal">5</span></span>
										<span id="bBfr" class="opacity00">b = <span id="bConsVal" class='ct-code-b-yellow opacity00 bConsVal'>10</span></span>
									</div>
									<div id = "aftrSwap" class="visibility-hidden">After swapping in swap : <span id="xAftr" class="opacity00">x = <span class='ct-code-b-yellow opacity00' id="xConsVal">10</span></span>  
										<span id="yAftr" class="opacity00">y = <span  class='ct-code-b-yellow opacity00' id="yConsVal">5</span></span>
									</div>
									<div id = "aftrMain" class="visibility-hidden">After swapping in main : <span id="aAftr" class="opacity00">a = <span class='ct-code-b-yellow opacity00' id="aConsVal1">5</span></span>   
										<span id="bAftr" class="opacity00">b = <span id="bConsVal1" class='ct-code-b-yellow opacity00'>10</span></span>
									</div>
								</div>
						</div>
					</div>
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
		callByValueReady();
	});
</script>

</body>
</html>