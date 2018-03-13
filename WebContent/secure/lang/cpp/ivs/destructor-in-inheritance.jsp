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
<script src="/secure/lang/cpp/js-min/dii.min.js"></script>
<title>destructors in inheritance</title>
<style>
.creamPreTab {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
	font-size : 13px;
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
.margin-top-6 {
	margin-top: 6%;
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
.finalText,  .finalText1{
	border: 1px solid gray;
	border-radius: 8px;
	min-height: 45px;
	padding: 6px;
}
.back-button {
    background-color: #5bc0de !important;
	display: inline-block;
    border-radius: 3px !important;
}

.position {
	position: relative;
}
.display {
	display: inline-block;
</style>
<script>
	$(document).ready(function() {
		destructorsInInheritanceReady();
	});

</script>
</head>
<body>
<div class = "main-div col-xs-12" id = "mainDiv">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Destructors in inheritance</span>
		</h3>
	</div>
	<div class = "col-xs-12" id = "codeDiv">
		<div class="col-xs-6 padding00">
			<pre class="creamPreTab opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream" class="ct-code-b-blue">iostream</span>&gt;</span>
<span id="lib"><span id="using" class="ct-code-b-red">using</span> <span id="nameSpace" class="ct-code-b-green">namespace</span> std;</span>
<span id="classBase" class="opacity00"><span class="ct-code-b-blue">class</span> Base {
	<span id = "publicBase"><span class="ct-code-b-green">public</span>:
		<span id = "baseClassConstructor" class="opacity00">Base() {
			<span id = "baseClassConstructorCout">cout << "<span id="basePrint">This is the base constructor</span>" << endl;</span>
		}</span>
		<span id = "baseClassDestructor" class="opacity00">~Base() {
			<span id = "baseClassDestructorCout">cout << "<span id="basePrint1">This is the base destructor</span>" << endl;</span>
		<span id = "baseClassDestructorEnd">}</span></span>
	</span>
};</span>
<span id="classDerived" class="opacity00"><span id="spanDerived"><span id="derived"><span class="ct-code-b-blue">class</span> Derived</span> : <span id="base"><span class="ct-code-b-green">public</span> Base</span></span> {
	<span id = "publicDerived"><span class="ct-code-b-green">public</span>:
	   <span id = "derivedClassConstructor" class="opacity00">Derived() {			
			<span id = "derivedClassConstructorCout">cout << "<span id="derivedPrint">This is derived constructor</span>" << endl;</span>
	    }</span>
		<span id = "derivedClassDestructor" class="opacity00">~Derived() {
			<span id = "derivedClassDestructorCout">cout << "<span id="derivedPrint1">This is derived destructor</span>" << endl;</span>
		}</span>
	</span>
};</span>
<span id="classDerived1" class="opacity00"><span id="spanDerived1"><span class="ct-code-b-blue">class</span> Derived1 : <span id="derived1"><span class="ct-code-b-green">public</span> Derived</span></span> {
	<span id = "publicDerived1"><span class="ct-code-b-green">public</span>:
	   <span id = "derived1ClassConstructor" class="opacity00">Derived1() {			
			<span id = "derived1ClassConstructorCout">cout << "<span id="derived1Print">This is derived-1 constructor</span>" << endl;</span>
	    }</span>
		<span id = "derived1ClassDestructor" class="opacity00">~Derived1() {
			<span id = "derived1ClassDestructorCout">cout << "<span id="derived1Print1">This is derived-1 destructor</span>" << endl;</span>
		}</span>
	</span>
};</span>
<span id="main" class="opacity00"><span class="ct-code-b-blue">int</span> main() {
	<span id="derivedObj" class="opacity00">Derived <span id="obj">d</span>;</span><span id="derived1Obj" hide>Derived1 <span id="obj1">d</span>;</span>
<span id="end">}</span>
</span></pre>
		</div>
		<div class="col-xs-offset-1 col-xs-5">
			<div id="consoleId" class="center opacity00" style="margin-top: 25%; ">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div id="base1ConstrPrint" hide></div>
					<div id="baseConstrPrint" class="opacity00"></div>
					<div id="derivedConstrPrint" class="opacity00"></div>
					<div id="derivedConstrPrintMultiple" class="opacity00"></div>
					<div id="derived1ConstrPrint" hide></div>
					<div id="derived1DestrPrint" hide></div>
					<div id="derivedDestrPrintMultiple" class="opacity00"></div>
					<div id="derivedDestrPrint" class="opacity00"></div>
					<div id="baseDestrPrint" class="opacity00"></div>
					<div id="base1DestrPrint" hide></div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 opacity00 margin-top-2 finalText" id="finalText">
			<span>In <span class='ct-code-b-green'>single inheritance</span>, first the 
			<span class='ct-code-b-green'>derived class destructor</span> is called and next 
			the <span class='ct-code-b-green'>base class destructor</span> is invoked.</span>
		</div>
		<div class="col-xs-8 col-xs-offset-2 opacity00 margin-top-2 finalText1" id="finalText1">
			<span>In <span class='ct-code-b-green'>multilevel inheritance</span>, the 
			<span class='ct-code-b-green'>destructors</span> will be called from bottom 
			class to top class i.e., from the <span class='ct-code-b-green'>last derived 
			class</span> to the <span class='ct-code-b-green'>first base class</span>.</span>
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

</body>
</html>
