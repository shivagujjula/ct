<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html">
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
<script src="/secure/lang/cpp/js-min/ctiiic.min.js"></script>
<title>constructors types in inheritance</title>

<style>
.creamPreTab {
	-moz-tab-size: 4;
	tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
	font-size : 11px;
}
#heading {
	margin-top: 20px;
}
.ct-code-b-blue {
	color: blue;
	font-weight: bold;
}

.ct-code-b-green {
	color: green;
	font-weight: bold;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}
.margin-top-2 {
	margin-top: 2%;
}
.margin-top-4 {
	margin-top: 4%;
}
.margin-4 {
	margin: 4%;
}

.panel-heading {
	padding: 4px 10px !important;
}

.panel-body {
	padding: 10px !important;
}
.panel-primary {
   margin: 4px;
}
.padding00 {
	padding: 0px;
}
.opacity00 {
	opacity: 0px;
}
.box-border {
	border: 2px solid #337ab7;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 12px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
    min-height: 140px;
}
.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}
.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000 !important;
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
	animation-duration: 3s ;
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
.ui-effects-transfer {
	border: 1px solid green;
	z-index: 10000010 !important;
	display: inline-block;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 10000010 !important;
}
.css-circle {
	border-radius: 9px;
	border : 1px solid;
	background-color: white;
	padding: 2px;
	z-index: 10000010 !important;
	position: relative;
}
/* .value-css {
	color: blue;
	font-family: monospace;
	font-weight : bold;
} */
.position {
	position: relative;
}
.display {
	display: inline-block;
</style>
<script>
	$(document).ready(function() {
		constructorsTypesInInheritanceReady();
	});

</script>
</head>
<body>
<div class = "main-div col-xs-12" id = "mainDiv">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Constructors types in inheritance</span>
		</h3>
	</div>
	<div class = "col-xs-12 margin-top-4" id = "codeDiv">
		<div class="col-xs-6 padding00">
			<pre class="creamPreTab opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream" class="ct-code-b-blue">iostream</span>&gt;</span>
<span id="lib"><span id="using" class="ct-code-b-red">using</span> <span id="nameSpace" class="ct-code-b-green">namespace</span> std;</span>
<span id="classCounter" class="opacity00"><span class="ct-code-b-blue">class</span> Counter {
	<span class="ct-code-b-green">protected</span>:
		<span id="init">int <span id = "count" >count</span>;</span>
	<span id = "publicCounter"><span class="ct-code-b-green">public</span>:
		<span id = "defConstrInCounter" class="opacity00">Counter() { 
			<span id = "defCountInCounter">count = <span id="countNum">4</span>;</span>
			<span id = "defCoutInCounter">cout << "<span id="defBase">This is the default constructor of the base class</span>" << endl;</span>
		}</span>
		<span id = "paraConstrInCounter" class="opacity00">Counter(int value) { 
			<span id = "paraConstrCountInCounter">count = <span id="value">value</span>;</span>
			<span id = "paraConstrCoutInCounter">cout << "<span id="parBase">This is the parameterized constructor of the base class</span>" << endl;</span>
		<span id="paraConstrEnd">}</span></span></span>
};</span>
<span id="classSample" class="opacity00"><span class="ct-code-b-blue">class</span> Sample : <span class="ct-code-b-green">public</span> Counter {
	<span id = "publicSample" ><span class="ct-code-b-green">public</span>:
		<span id = "defConstrInSample" class="opacity00">Sample() {
			<span id = "defCoutInSample">cout << "<span id="defDer">This is the default constructor of the derived class</span>" << endl;</span>
		}</span>
		<span id = "paraConstrInSample" class="opacity00"><span id="paraConstrInit">Sample(int value)</span> : <span id="counterCall">Counter(value)</span> {
			<span id = "paraConstrCoutInSample">cout << "<span id="parDer">This is the parameterized constructor of the derived class</span>" << endl;</span>
		}</span>
		<span id="displayFunction" class="opacity00"><span class="ct-code-b-blue">void</span> display() {
			<span id="decrementCount">count--;</span>
			<span id="displayCoutCount">cout << "<span id="countCout">Count value : </span>" << <span id = "displayCount">count</span> << endl;</span>
		}</span></span>
};</span>
		
<span id="main" class="opacity00"><span class="ct-code-b-blue">int</span> main() {
	<span id="s1Init" class="opacity00">Sample <span id="s1">s1</span>;</span>
	<span id="s1Display" class="opacity00">s1.display();</span>
	<span id="s2Init" class="opacity00">Sample <span id="s2">s2(<span id="s2Num">10</span>)</span>;</span>
	<span id="s2Display" class="opacity00">s2.display();</span> 
<span id="end">}</span></span>
			</pre>
		</div>
		<div class="col-xs-5 col-xs-offset-1 margin-top-4" id="totalDiv">
			<div class="col-xs-12 box-border opacity00 padding00" id="addressDiv">
				<div class="col-xs-5 col-xs-offset-1 margin-4" >
					<div id="s1Box" class="panel panel-primary opacity00">
						<div class="panel-heading text-center">
							<b>s1</b>
						</div>
						<div class="panel-body">
							<div id="aBox" class="panel panel-primary opacty00">
								<div class="panel-heading text-center">
									<b style="color: whitesmoke;">count</b>
								</div>
								<div id="s1AnimationDiv" class="text-center panel-body">
									<span id="s1Val" class="position opacity00 value-css ct-code-b-green">4</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-5 margin-4" >
					<div class="panel panel-primary opacity00" id="s2Box">
						<div class="panel-heading text-center">
							<b>s2</b>
						</div>
						<div class="panel-body">
							<div id="bBox" class="panel panel-primary opacity00">
								<div class="panel-heading text-center">
									<b style="color: whitesmoke;">count</b>
								</div>
								<div id="s2AnimationDiv" class="text-center panel-body">
									<span id="s2Val" class="position opacity00 ct-code-b-green">10</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12">
				<div id="consoleId" class="center opacity00" style="margin-top: 25%; ">
					<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
					</div>
					<div class="output-console-body" id="consoleBodyDiv">
						<div id="firstLine" class="opacity00"></div>
						<div id="secondLine" class="opacity00"></div>
						<div id="decCountValue" class="opacity00"><span id="decCountCout" class="opacity00"></span><span id="decCountVal" class="opacity00"></span></div>
						<div id="thirdLine" class="opacity00"></div>
						<div id="fourthLine" class="opacity00"></div>
						<div id="decCountValue1" class="opacity00"><span id="decCountCout1" class="opacity00"></span><span id="decCountVal1" class="opacity00"></span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4 col-xs-offset-6  margin-top-4" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart">
			<i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>
</html>    
