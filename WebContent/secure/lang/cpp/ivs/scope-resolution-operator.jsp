<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/cpp/js-min/sro.min.js'></script>

<title>Scope resolution Operator</title>
</head>

<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 9px 14px;
}

#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top:10px;
}

#restart {
    margin-top: 13%;
} 

.margin-top-2 {
	margin-top: 2%;
}

#line1 {
	color: maroon;
}
.ct-sgreen-color {
	color: springgreen;
}
.ct-green-color {
    color: green;
    font-weight: bold;
}
.ct-orange-color {
	color: orange;
	
}
.ct-red-color {
	color: red;
	font-weight: bold;
}
.ct-blue-color {
	color: blue;
	font-weight: bold;
}


.ct-code-b-gold {
	color: gold;
	font-weight: bold;
}
.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.ct-Maroon-color {
	color: Maroon;
	font-weight: bold;
}

.ct-greenyellow-color {
	color: greenyellow;
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	color: rgb(75, 131, 0);
    font-weight: bold;
}
ul.expl {
	list-style-type: square;
}

.input-char {
	width: 10px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
.input-char-2,.input-char-3 {
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
	background: white;
}

.creamPreTab1 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 6px;
	white-space: pre;
}

.creamPreTable2 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin: 5px;
	padding: 6px;
	white-space: pre;
}
.margin-top-20 {
	margin-top: 20px;
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
	min-height: 272px;
}

.output-console-body {
	min-height: 140px;
	white-space: initial;
	padding: 10px;
	font-size: 12px;
}

.output-console {
	margin: 0;
}

.creampretab4 {
	font-size: 13px;
	-moz-tab-size: 4;
	tab-size: 4;
	background-color: lavender !important;
	line-height: 1.75;
	font-family: monospace;
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

.ui-effects-transfer {
    border: 1px solid white;
    z-index: 99999999 !important;
    border-radius: 10px;
}

#gVal {
	position: relative;
}

.margin-top-4 {
	margin-top: 4%;
}

.panel-heading, .panel-body {
	padding: 5px;
}

.panel-group {
	margin-top: 40px;
	margin-bottom: 7px;
}

.introjs-tooltip {
	min-width: 220px;
}
.address-box {
	height: 169px;
	border: 1px solid lightgray;
	border-radius: 4px;
}
.padding0 {
	padding: 0px;
}

.panel-heading {
	padding: 2px 40px;
}

.panel-body {
	padding: 12px 44px;
	height: 40px;
}

.panel-group {
	margin-top: 45px;
}
.syntax {
 	background: black;
	border-radius: 4px;
	color: white;
	padding: 1px;
	font-family: monospace;
	font-size : 12px;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
	/* animation-direction:alternate; */
}

.user-btn {
	background: green;
}
.errorText {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}

</style>

<body>
<div class="col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Scope resolution Operator</span>
		</h3>
	</div>
	<div class="col-xs-8 col-sm-offset-2 margin-top-2 infoDiv" id="infoDiv">
		<ul>
			<li id="list" class="opacity00">The <span class="ct-code-b-teal">scope resolution operator(<span class="ct-green-color">::</span>)</span> is used to access a <span class="ct-green-color">global variable</span> when there is a <span class="ct-green-color">local variable</span> with <b>same name</b>.</li> 
		 	<li id="list1" class="opacity00"><span class="ct-green-color">Scope resolution operator</span> can also be used:</li> 
		 		<ul class="expl">
		 		<li id="list2" class="opacity00"><b>To define a function outside a class.</b></li>
		 		<li id="list3" class="opacity00"><b>To access a class’s static variables.</b></li>
		 		<li id="list4" class="opacity00"><b>In case of multiple Inheritance:</b></li>
		 		</ul>
		 	<li id="list5" class="opacity00">The syntax  is: <span class="syntax opacity00" id="syntax">:: Variable_name</span>
		 				<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
		</ul>
	</div>
	<div class='col-xs-12 margin-top-2'>
		<div class="col-xs-5">
	<pre id="preTableDiv" class="creamPreTab1 opacity00">
#include &lt;<span class="ct-green-color">iostream</span>&gt;
<span class="ct-red-color">using</span> <span class="ct-green-color">namespace</span> std;
<span id="globalVar"><span class="ct-blue-color">int</span> a = <span id="tweenVal1">10</span>;</span>
<span id="mainFunc"><span id="startMain"><span class="ct-blue-color">int</span> main() { </span>
	<span id="localVar"><span class="ct-blue-color">int</span> a = <span id="tweenVal2">20</span>;</span>
	<span id="mainPf1">cout << <span id="locaVarVal">"Local variable value = "</span> << <span id="locA">a</span> << endl;</span>
	<span id="mainPf2">cout << <span id="globVarVal">"Global variable value = "</span> << <span id="globA">::a</span> << endl;</span>
	<span id="funcDef"><span id="userFunc">{</span>
		<span id="localVar1"><span class="ct-blue-color">int</span> a = <span id="tweenVal3">30</span>;</span>
		<span id="mainPf3">cout << <span id="locaVarVal1">"Local variable value = "</span> << <span id="locA1">a</span> << endl;</span>
		<span id="mainPf4">cout << <span id="globVarVal1">"Global variable value = "</span> << <span id="globA1">::a</span> << endl;</span>
	<span id="endFunc">}</span></span>
<span id="endMain">}</span></span>
	</pre>
		</div>
		<div id="addressDiv" class="col-xs-6 col-xs-offset-1 box-border address-div opacity00">
			<div class="col-xs-12 margin-top-20">
				<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79);">
					<div id="boxHeading" class="col-xs-4 col-xs-offset-6 opacity00">In main()</div>
				</div>
				<div class="col-xs-12" style="margin-top: 10px;">
					<div id="globalVal" class="col-xs-2  text-center opacity00">
						<div><b style="color: maroon;">a</b></div>
						<div class="box-border" style="line-height: 50px; height: 50px;">
							<span id="gVal" class="ct-blue-color opacity00"></span>
						</div>
						<div class='opacity00'>2323</div>
					</div>
					<div class="col-xs-6 box-border col-xs-offset-3 opacity00" style="padding: 20px;" id="mainDiv">
						<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79);">
							<div id="boxHeading1" style="margin-left: 49%;" class="col-xs-8 opacity00">Inner block</div>
						</div>
						<div id="varBox" class="col-xs-5 col-xs-offset-1 text-center opacity00">
							<div id="localVal">
								<div><b style="color: maroon;">a</b></div>
								<div style="line-height: 50px; height: 50px;" class="box-border">
									<span id="lVal" class="ct-blue-color opacity00"></span>
								</div>
								<div class='opacity00'>2323</div>
							</div>
						</div>
						<div id="varBox1" class="box-border col-xs-5 col-xs-offset-1 text-center opacity00">
							<div id="localVal1" style="margin-left: 2%;">
								<div><b style="color: maroon;">a</b></div>
								<div style="line-height: 50px; height: 50px;" class="box-border">
									<span id="lVal1" class="opacity00 ct-blue-color"></span>
								</div>
								<div class='opacity00'>2323</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-4 col-xs-offset-2" style="margin-top: 30px;">
			<div id="consoleId" class="output-console padding0 opacity00">
				<div class="output-console-title-bar"><span class="title">Output</span></div>
				<div style="color: white;" class="output-console-body">
					<span id="runEditor1" class="opacity00">Local variable value = <span class="ct-code-b-yellow opacity00" id="locAVal">20</span></span><br>
					<span id="runEditor2" class="opacity00">Global variable value = <span class="ct-code-b-yellow opacity00" id="globAVal">10</span></span><br><br>
					<span id="runEditor3" class="opacity00">Local variable value = <span class="ct-code-b-yellow opacity00" id="locA1Val">30</span></span><br>
					<span id="runEditor4" class="opacity00">Global variable value = <span class="ct-code-b-yellow opacity00" id="globA1Val">10</span></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-3 col-sm-offset-4">
		<div class="col-sm-5 col-sm-offset-4 margin-top-4" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	usageOfScopeResolutionOperatorReady();
});
</script>
</html>
