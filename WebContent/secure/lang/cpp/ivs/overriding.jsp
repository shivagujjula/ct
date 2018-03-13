<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>overriding</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>

<script src="../js-min/ovrr.min.js"></script>

<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}

#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
    height: 80px;
    background-color: white;
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

.creampretab {
	tab-size: 2;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	display: block;
	font-size: 11px;
}
    
.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.padding0 {
	padding: 0;
}

#outputDiv {
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	background-color: darkgray;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 130px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.input-val {
	background-color: #000;
	border: 1px solid black;
	border-radius: 4px;
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.relative {
	position: relative;
}

.user-btn {
	background-color: green;
	margin: 0!important;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.yellow {
	background-color: yellow;
}

.green {
	color: green;
}

.margin-bottom0 {
	margin-bottom: 0;
}

g {
	color: green;
}

y {
	color: yellow;
	font-weight: bold;
}

blue {
	color: #0000FF;
}

red {
	color: red;
}

orange {
	color: #BC7A00;
}

.lite-red {
	color: #ff3019;
}

.lite-blue {
	color: seagreen;
}

g {
	color: green;
}

y {
	color: yellow;
	font-weight: bold;
}

blue {
	color: #0000FF;
}

red {
	color: red;
}

orange {
	color: #BC7A00;
}

.lite-red {
	color: #880000;
}

.lite-blue {
	color: seagreen;
}

.color1 {
	background-color: antiquewhite;
}

.color2 {
	background-color: #efd7d7;
}

.color3 {
	background-color: #cff3f3;
}
</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	overridingReadyFun();
});

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Overriding</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-10">
		<div id="topDiv">
			<ul>
				<li id="li1" class="opacity00">
					When a function in a <b>derived class</b> has the same name, same parameters or signature and same return type as a function in its <b>base class</b>,
					 then the function in the derived class is said to override the function in the base class.  
				</li>
			</ul>
			<div class="col-xs-12">
				<span id="nextBtn" class='user-btn introjs-button opacity00' onclick='introjs.nextStep()'>Next &#8594;</span>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-2 col-xs-4">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<div id="class1"><g>class</g> <blue>Base1</blue> {
	<g>public</g>:
		<span id="display1" class=""> <red>void</red> display() {
			<span id="cout1" class="">cout << <red>"This is first base class.\n"</red>;</span>
		}</span>
};</div>
<div id="class2" class="hide"><g>class</g> <blue>Base2</blue> {
	<g>public</g>:
		<span id="display2" class=""><red>void</red> display() {
			<span id="cout2" class="">cout << <red>"This is second base class.\n"</red>;</span>
		}</span>
};</div>
<div id="class3" class="hide"><g>class</g> <blue>Derived</blue> : <g>public</g> <blue>Base1</blue>, <g>public</g> <blue>Base2</blue> {
	<g>public</g>:
		<span id="display3" class=""><red>void</red> display() {
			<span id="cout3" class="">cout << <red>"This is derived class.\n"</red>;</span>
		}</span>
};</div>
<span id="main"><red>int</red> main() {
	<span id="ob1" class="hide"><blue>Derived</blue> ob;</span>
	<span id="ob2" class="hide">ob.display();</span>
	<span id="ob3" class="hide">ob.<blue>Base1</blue> :: display();</span>
	<span id="ob4" class="hide">ob.<blue>Base2</blue> :: display();</span>
}</span></pre>	
		</div>
	</div>
	<div class="col-xs-4">
		<div id="outputDiv" class="hide">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
				<div id="op1" class="opacity00"><b>This is derived class.</b></div>
				<div id="op2" class="opacity00"><b>This is first base class.</b></div>
				<div id="op3" class="opacity00"><b>This is second base class.</b></div>
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
