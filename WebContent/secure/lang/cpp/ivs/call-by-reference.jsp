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
<script src="/secure/lang/cpp/js-min/cbr.min.js"></script>
<title>Call By Reference</title>

<style>

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 300px;
}

/* .introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
} */
.introjs-tooltip-min-width-custom {
	min-width: 150px;
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
	padding: 10px;
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
.visibility-hidden {
	visibility: hidden;
}

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 100000000 !important;
}

.svg-line {
	stroke: black;
	stroke-width: 2; 
	position: relative;
	background-color: white;
	marker-end: url("#arrowEnd"); 
	z-index: 100000000 !important;
}
.output-console-title-bar {
	background-color : #bcbbbc;
}

</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Call By Reference</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>

	<div class="col-xs-12">
		<div class='col-xs-12'>
			<div class='col-xs-12'>
				<div class='col-xs-7'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
<span id='swapDeclareLine'>int <span class="ct-green-color">swap(int &, int &)</span>;</span>
<span id='mainMethodBlock'><b class="ct-blue-color">main()</b> {
	<span id='aLine'>int a = <span id='valueOfA'>5</span>;</span>
	<span id='bLine'>int b = <span id='valueOfB'>10</span>;</span>
	<span id='printBeforeSwapInMain'>cout << "Before swapping in main : a = " << a << "\t" << "b = " << b << "\n";</span>
	<span id='swapLine' class="ct-green-color">swap(a, b);</span>
	<span id='printAfterSwapInMain'>cout << "After swapping in main : a = " << a << "\t" << "b = " << b << "\n";</span>
}</span>
<span id='swapMethodBlock'>int <span class="ct-green-color">swap(int &x, int &y)</span> {
	<span id='tDeclareLine'>int t;</span>
	<span id='tAssignLine'>t = x;</span>
	<span id='xLine'>x = y;</span>
	<span id='yLine'>y = t;</span>
	<span id='printAfterSwapInSwap'>cout << "After swapping in swap : x = " << x << "\t" << "y = " << y << "\n";</span>
<span id='swapMethodCloseBrace'>}</span></span>
</pre>
					</div>
				</div>
				<div class='col-xs-5'>
					<div class="col-xs-12" id='animationDiv'>
						<div class='col-xs-12 padding10'>
							<div class='col-xs-12' id='swapMethodBox'>
								<div class="col-xs-12 box-border opacity00 padding10" id='swapAnimationDiv'>
									<div id="swapTitle" class="col-xs-4 text-center">
										<div style="line-height: 160px; height: 50px;">
											<span class="opacity00" id="swapId"><b style="color: maroon;">swap()</b></span>
										</div>
									</div>
									<div class= "col-xs-8 box-border" id="xyBox">
										<div class="col-xs-4 col-xs-offset-4 box-border visibility-hidden text-center" id="tBox">
											<div><b style="color: maroon;" id="tVal">t</b></div>
												<div class='border-height-css'><span id='tValue' class='ct-blue-color'></span></div>
											<div><span id='tAddress' class="ct-lime-color"></span></div>
										</div>
										<div class='col-xs-12 padding10' id='xyAnimationDiv'>
												<div id="xBox" class="col-xs-4 visibility-hidden text-center" style="margin-right:50px">
													<div style="line-height: 50px; height: 50px;">
														<div><b style="color: maroon;" id="xVal">x</b></div>
													</div>
												</div>
												<div id="yBox" class="col-xs-4 visibility-hidden text-center">
													<div style="line-height: 50px; height: 50px;">
														<div><b style="color: maroon;" id="yVal">y</b></div>
													</div>
												</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-12" style="margin-top: 40px;" >
								<div id="mainMethodBox" class="col-xs-12 box-border opacity00" style="height: 140px; margin-top: 5px;">
									<div class="col-xs-12 padding10" id='mainAnimationDiv'>
										<div id="mainBox" class="col-xs-4 text-center">
											<div style="line-height: 105px; height: 50px;">
												<span class="opacity00" id="mainId"><b style="color: maroon;">main()</b></span>
											</div>
										</div>
										<div class= "col-xs-8 box-border" id="abBox">
											<div class="col-xs-6  text-center ">
												<div class='col-xs-12 box-border visibility-hidden' id="aBox">
													<div><b style="color: maroon;" id="aVal">a</b></div>
														<div class='border-height-css'><span id='aValue' class='ct-blue-color'></span></div>
													<div><span id='aAddress' class="ct-lime-color">1111</span></div>
												</div>
											</div>
											<div class="col-xs-6  text-center ">
												<div class='col-xs-12 box-border visibility-hidden' id="bBox">
													<div><b style="color: maroon;" id="bVal">b</b></div>
														<div class='border-height-css'><span id='bValue' class='ct-blue-color'></span></div>
													<div><span id='bAddress' class="ct-lime-color">1234</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-xs-12 margin-top30">
						<div id="outputBox" class="output-console center">
							<div class="output-console-title-bar"><span>Output</span></div>
<div class="output-console-body"><div class="visibility-hidden">Before swapping in main : a = <span class='ct-lime-color'>5</span>   
		b = <span class='ct-lime-color'>10</span></div>
<div class="visibility-hidden">After swapping in swap : x = <span class='ct-lime-color'>10</span>   y = <span class='ct-lime-color'>5</span></div>
<div class="visibility-hidden">After swapping in main : a = <span class='ct-lime-color'>10</span>   b = <span class='ct-lime-color'>5</span></div>
</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	$(document).ready(function() {
		callByValueReady();
	});
</script>

</body>
</html>