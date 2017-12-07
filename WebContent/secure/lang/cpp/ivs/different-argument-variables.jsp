<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/cpp/js-min/dav.min.js"></script>

<title>Function Argument-variables</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.box-border1 {
	border: 2px solid #b68db5;
	border-radius: 8px;
}
.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.center {
	margin-left: auto !important;
	margin-right: auto !important;
	display: block;
}

.address-div {
	height: 275px;
}

.output-console-body {
	height: 100px;
}

.output-console {
	margin: 0;
}

.creamPreTab4 {
	tab-size: 2;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

#outputDiv {
	margin-top: 45px;
}

.main-div {
	margin-top: 55px;
}

.introjs-tooltip {
	min-width: 300px;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: white;
		background: orange;
	}
}

.zIndex {
	z-index: 10000000;
	position: relative;
}

.span-box {
    height: 17px;
    width: 30%;
}

[contenteditable=true] {
	 outline: none;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.ui-effects-transfer {
    background-color: white;
    z-index: 99999999 !important;
}

.output-console-body {
	padding: 10px;
	
}

.introjs-tooltip-min-width {
	min-width: 110px;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : red;
}
.pink {
	color : deeppink;
}
.ct-blue-color {
	color :#737e16
}
</style>
</head>
<body>
	<div id='mainBox'>
	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Formal and Actual Arguments</h1>
	</div>
	<div class="main-div col-xs-12" id="mainDiv">
		<div class="col-xs-4" id="codeDiv">
			<pre id="codeAnimation" class='creamPreTab4 box-border code-div opacity00'>
<span id ="line1"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span>
<span class="red">using namespace</span> std;</span>
	<span id="funcDec">void <span class='ct-blue-color'>addition</span>(<span class="pink">int</span>, <span class="pink">int</span>);</span>
	<span id="globalVar">int <span id="globVarSum" class='green'>sum;</span></span>
	<span id="mainFunc">int <span class='green'>main()</span> {
		<span id="localVar">int a, b;</span>
		<span id="printf1">cout << "<span class="pink">Enter two numbers : "</span>;</span>
		<span id="scanf">cin >> <span id="addr1">a</span> >> <span id="addr2">b</span>;</span>
		<span id="functionCall"><span class='ct-blue-color'>addition</span>(<span id='actArg1'>a</span>,<span id='actArg2'>b</span>);</span>
		<span id="printf2">cout << <span class="pink">sum</span>;</span>
	<span id="endMain">}</span></span>
	<span id="funcDef"><span id="formalArgs">void <span class='ct-blue-color'>addition</span>(int <span id='formArg1' class="green">x</span>, int <span id='formArg2' class="green">y</span>)</span> {
		<span id="addVar"><span id="sumDec">sum</span> = <span id="sumRes" class="green">x + y</span>;</span>
	<span id="endFunction">}</span></span></pre>
		</div>
		<div id="addressDiv" class="col-xs-7 col-xs-offset-1 box-border address-div opacity00">
			<div class="col-xs-12">
				<div id="sumAddress" class="col-xs-2 col-xs-offset-5 margin-top-20 text-center opacity00 check">
					<div><b style="color: maroon;">sum</b></div>
					<div class="box-border1" style="line-height: 50px; height: 50px;"><span id="sumVal" class="opacity00"></span></div>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
					<div id="boxHeading1" class="col-xs-4 opacity00">In main()</div>
					<div id="boxHeading2" class="col-xs-4 col-xs-offset-4 opacity00">In addition()</div>
				</div>
				<div id="varBox1" class="box-border1 col-xs-4 opacity00" style="height: 110px; margin-top: 5px;">
					<div id="aAddress" class="col-xs-6  text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">a</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border1">
							<span id="aVal" class="opacity00"></span>
						</div>
					</div>
					<div id="bAddress" class="col-xs-6  text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">b</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border1">
							<span id="bVal" class="opacity00"></span>
						</div>
					</div>
				</div>
				<div id="varBox2" class="box-border1 col-xs-4 col-xs-offset-4 opacity00"	style="height: 110px; margin-top: 5px;">
					<div id="xAddress" class="col-xs-6   text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">x</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border1">
							<span id="xVal" class="opacity00"></span>
						</div>
					</div>
					<div id="yAddress" class="col-xs-6  text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">y</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border1">
							<span id="yVal" class="opacity00"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-5 col-xs-offset-2" style="margin-top: 35px;">
			<div style="" id="consoleId" class="output-console padding0 opacity00">
				<div class="output-console-title-bar"><span class="title">Output</span></div>
<div style="color: white;" class="output-console-body"><span id="runEditor1"></span>
<span id="runEditor2"></span></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-20 text-center"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			differentArgumentVariableReady();
		});
	</script>
</body>
</html>