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
<script src="/secure/lang/cpp/js-min/dimi.min.js"></script> 
<title>destructors in multiple inheritance  </title>
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
		destructorsInMultipleInheritanceReady();
	});

</script>
</head>
<body>
<div class = "main-div col-xs-12" id = "mainDiv">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Destructors in multiple inheritance</span>
		</h3>
	</div>
	<div class = "col-xs-12" id = "codeDiv">
		<div class="col-xs-6 padding00">
			<pre class="creamPreTab opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream" class="ct-code-b-blue">iostream</span>&gt;</span>
<span id="lib"><span id="using" class="ct-code-b-red">using</span> <span id="nameSpace" class="ct-code-b-green">namespace</span> std;</span>
<span id="classBase1" class="opacity00"><span class="ct-code-b-blue">class</span> Base1 {
	<span id = "publicBase1"><span class="ct-code-b-green">public</span>:
		<span id = "base1ClassConstructor" class="opacity00">Base1() {
			<span id = "base1ClassConstructorCout">cout << "<span id="base1Print">This is the base-1 constructor</span>" << endl;</span>
		}</span>
		<span id = "base1ClassDestructor" class="opacity00">~Base1() {
			<span id = "base1ClassDestructorCout">cout << "<span id="base1Print1">This is the base-1 destructor</span>" << endl;</span>
		}</span>
	</span>
};</span>
<span id="classBase2" class="opacity00"><span class="ct-code-b-blue">class</span> Base2 {
	<span id = "publicBase2"><span class="ct-code-b-green">public</span>:
		<span id = "base2ClassConstructor" class="opacity00">Base2() {
			<span id = "base2ClassConstructorCout">cout << "<span id="base2Print">This is the base-2 constructor</span>" << endl;</span>
		}</span>
		<span id = "base2ClassDestructor" class="opacity00">~Base2() {
			<span id = "base2ClassDestructorCout">cout << "<span id="base2Print1">This is the base-2 destructor</span>" << endl;</span>
		}</span>
	</span>
};</span>
<span id="classDerived" class="opacity00"><span id="spanDerived"><span id="derived"><span class="ct-code-b-blue">class</span> Derived</span> : <span id="base2"><span class="ct-code-b-green">public</span> Base2</span>, <span id="base1"><span class="ct-code-b-green">public</span> Base1</span> {</span>
	<span id = "publicDerived"><span class="ct-code-b-green">public</span>:
	   <span id = "derivedClassConstructor" class="opacity00">Derived() {			
			<span id = "derivedClassConstructorCout">cout << "<span id="derivedPrint">This is derived constructor</span>" << endl;</span>
	    }</span>
		<span id = "derivedClassDestructor" class="opacity00">~Derived() {
			<span id = "derivedClassDestructorCout">cout << "<span id="derivedPrint1">This is derived destructor</span>" << endl;</span>
		}</span>
	</span>
};</span>
<span id="main" class="opacity00"><span class="ct-code-b-blue">int</span> main() {
	<span id="derivedObj" class="opacity00">Derived <span id="obj">d</span>;</span>
<span id="end">}</span>
</span></pre>
		</div>
		<div class="col-xs-offset-1 col-xs-5">
			<div id="consoleId" class="center opacity00" style="margin-top: 25%; ">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div id="base2ConstrPrint" class="opacity00"></div>
					<div id="base1ConstrPrint" class="opacity00"></div>
					<div id="derivedConstrPrint" class="opacity00"></div>
					<div id="derivedDestrPrint" class="opacity00"></div>
					<div id="base1DestrPrint" class="opacity00"></div>
					<div id="base2DestrPrint" class="opacity00"></div>
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

</body>
</html>
