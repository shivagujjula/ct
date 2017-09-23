<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Swapping two numbers using temp</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/jquery-ui.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/secure/lang/c/js-min/swtv.min.js"></script>

<style type="text/css">
body {
	tab-size: 4;
	-moz-tab-size: 4;
	margin-top: 20px;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: #B8B8A0;
}

.opacity00 {
	opacity: 0;
	cursor: default;
	pointer-events: none;
}

.allowOnlyNumber {
	outline: none;
}

.position-relative {
	position: relative;
}

.position-absolute {
	position: absolute;
}

.bgcolor-cream {
	background-color: #ffffcc;
}

.focus {
	background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
	padding: 5px;
	z-index: 9999999 !important;
}

.errorMsg {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.margin-bottom20 {
	margin-bottom: 20px;
}

.margin-top20 {
	margin-top: 20px;
}

#variblesPanel {
	height: 205px;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 14px;
}

.output-console-body {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
	margin-bottom: 14px;
    padding: 10px;
    font-weight: bold;
}

.title {
	font-size: 12px;
}

.panel {
	margin-bottom: 5px;
}

#tValuePanel, #aValuePanel, #bValuePanel {
	width: 23%;
	padding: 0;
}

.user-btn {
	background-color: green;
}
</style>
</head>

<body>
		<div class="text-center margin-bottom20">
			<h4>
				<span class="label label-default ct-demo-heading" id='swapDemo'>Swapping of two numbers</span>
			</h4>
		</div>
		<div class="col-xs-6 box-border" id="swapDemoDiv">
<pre class="bgcolor-cream" id="className">#include&lt;stdio.h&gt;

void <span id='main'>main()</span> {  
	<span id='methodBody'>	<span id='line1' class='position-absolute opacity00'>int num1 = <div class="allowOnlyNumber" id="aValue" contenteditable="true" maxlength="2" style='display: inline-block;'>12</div>;</span>
		<span id='line2' class='position-absolute opacity00'>int num2 = <div class="allowOnlyNumber" id="bValue" contenteditable="true" maxlength="2" style='display: inline-block;'>45</div>;</span>		
		<span id='lineTemp' class='opacity00'>int temp = num1;</span>
		<span id='wrongSolution'><span id='line3' class='opacity00'>num1 = num2;</span>
		<span id='line4' class='opacity00'>num2 = num1;</span></span>
		<span id='line5' class='opacity00'>printf("After swaping : num1 = %d, num2 = %d", num1, num2);</span></span>
}
</pre>
		</div>
		<div class="col-xs-6 box-border outputDiv">
			<div>
				<div class="panel panel-default" id="variblesPanel">
					<div class="panel-heading">
						<h3 class="panel-title">Varibles</h3>
					</div>
					<div id="valuesSpan">
					<div class="panel-body valuesPanelClass" id="valuesPanel">
						<div class="col-xs-offset-1 col-xs-3 opacity00" id="tValuePanel">
							<div class="panel panel-info">
								<div class="panel-heading">
									<h4 class="panel-title text-center">temp</h4>
								</div>
								<div class="panel-body text-center">
									<span id="tValueInOutput" style="position: relative;">12</span>
								</div>
							</div>
						<div class='text-center' style="font-weight: bold;">addr : 2088</div>
						</div>
						<div class="col-xs-offset-1 col-xs-3 opacity00" id="aValuePanel">
							<div class="panel panel-info">
								<div class="panel-heading">
									<h4 class="panel-title text-center">num1</h4>
								</div>
								<div class="panel-body text-center">
									<span class="" id="aValueInOutput" style="position: relative;">12</span><span id="aValueInOutputWithBValue" style="position: relative;"></span>
								</div>
							</div>
							<div id='num1Address' class='text-center opacity00' style="font-weight: bold;">addr : 2485</div>
						</div>
						<div class="col-xs-offset-1 col-xs-3 opacity00" id="bValuePanel">
							<div class="panel panel-info">
								<div class="panel-heading">
									<h4 class="panel-title text-center">num2</h4>
								</div>
								<div class="panel-body text-center">
									<span id="bValueInOutputWithAValue" style="position: relative;"></span><span id="bValueInOutput" style="position: relative;">45</span>
								</div>
							</div>
							<div id='num2Address' class='text-center opacity00' style="font-weight: bold;">addr : 2086</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			</div>

	<div class="col-xs-offset-4 col-xs-4" id="outputDiv">
		<div class="output-console-title-bar">
			<span class="title">Output</span>
		</div>
		<div class="output-console-body"><span id="output"></span>
		</div>
	</div>

	<br>
	<div class="text-center col-xs-12 margin-top20">
		<a class="btn btn-warning opacity00" id='restart'>Restart</a>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			swapWithTempVariableReady();
		});
	</script>
</body>
</html>